// ===== CORS =====
const ALLOWED_ORIGINS = [
  "https://latindance.kr",
  "http://localhost:3000",
  "http://localhost:8000",
  "http://127.0.0.1:5500",
  "null",
];

const corsHeaders = (origin) => ({
  "Access-Control-Allow-Origin": ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0],
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Upload-Url, X-File-Name",
  "Vary": "Origin",
});

// ===== Google File API Helpers =====

async function initiateUpload(apiKey, mimeType, numBytes, displayName) {
  const url = `https://generativelanguage.googleapis.com/upload/v1beta/files?key=${apiKey}`;
  
  const headers = {
    "X-Goog-Upload-Protocol": "resumable",
    "X-Goog-Upload-Command": "start",
    "X-Goog-Upload-Header-Content-Length": numBytes.toString(),
    "X-Goog-Upload-Header-Content-Type": mimeType,
    "Content-Type": "application/json",
  };

  const metadata = {
    file: { display_name: displayName || "uploaded_video" }
  };

  const response = await fetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(metadata),
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Google Upload Init Failed (${response.status}): ${errText}`);
  }

  return response.headers.get("x-goog-upload-url");
}

// ===== Main Worker Logic =====
export default {
  async fetch(req, env) {
    const origin = req.headers.get("Origin") ?? "null";
    const url = new URL(req.url);
    const action = url.searchParams.get("action");

    // Preflight
    if (req.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: corsHeaders(origin)
      });
    }

    if (!ALLOWED_ORIGINS.includes(origin)) {
      return new Response(JSON.stringify({ error: "Forbidden origin" }), { status: 403, headers: corsHeaders(origin) });
    }

    if (!env?.GEMINI_API_KEY) {
      return new Response(JSON.stringify({ error: "Server Config Error: Missing GEMINI_API_KEY" }), { status: 500, headers: corsHeaders(origin) });
    }

    try {
      // 1. 초기화 (Upload URL 발급)
      if (action === "init") {
        const body = await req.json();
        const { mimeType, numBytes, displayName } = body;
        
        const uploadUrl = await initiateUpload(env.GEMINI_API_KEY, mimeType, numBytes, displayName);
        
        return new Response(JSON.stringify({ uploadUrl }), {
          headers: { ...corsHeaders(origin), "Content-Type": "application/json" }
        });
      }

      // 2. 업로드 (스트리밍 프록시)
      if (action === "upload") {
        const uploadUrl = req.headers.get("X-Upload-Url");
        if (!uploadUrl) throw new Error("Missing X-Upload-Url header");

        const contentLength = req.headers.get("Content-Length");

        const googleResponse = await fetch(uploadUrl, {
          method: "POST",
          headers: {
            "Content-Length": contentLength,
            "X-Goog-Upload-Offset": "0",
            "X-Goog-Upload-Command": "upload, finalize",
          },
          body: req.body
        });

        if (!googleResponse.ok) {
          const errText = await googleResponse.text();
          throw new Error(`Google Upload Failed (${googleResponse.status}): ${errText}`);
        }

        const result = await googleResponse.json();
        // fileUri와 fileName(resource name)을 모두 반환
        return new Response(JSON.stringify({ 
          fileUri: result.file.uri,
          fileName: result.file.name 
        }), {
          headers: { ...corsHeaders(origin), "Content-Type": "application/json" }
        });
      }

      // 3. 상태 확인 (Polling용)
      if (action === "check_status") {
        const body = await req.json();
        const { fileName } = body; // e.g. "files/abc..."

        const checkUrl = `https://generativelanguage.googleapis.com/v1beta/${fileName}?key=${env.GEMINI_API_KEY}`;
        const checkRes = await fetch(checkUrl);
        
        if (!checkRes.ok) {
           throw new Error(`Status Check Failed: ${checkRes.status}`);
        }
        
        const data = await checkRes.json();
        return new Response(JSON.stringify({ state: data.state }), {
          headers: { ...corsHeaders(origin), "Content-Type": "application/json" }
        });
      }

      // 4. 분석 (Gemini 호출)
      if (action === "analyze") {
        const body = await req.json();
        const { fileUri, mimeType, genre, type } = body;

        const prompt = `
        당신은 라틴댄스(살사, 바차타, 키좀바, 주크 등) 전문 분석가입니다.

        [중요] 먼저, 이 영상이 춤(댄스)과 관련된 영상인지 확인해주세요.
        만약 춤과 전혀 관련이 없는 영상(예: 풍경, 음식, 문서, 정적인 화면, 뉴스 등)이라면, 
        다른 분석을 하지 말고 오직 다음 문장만 출력하고 종료하세요:
        "죄송합니다. 이 영상은 춤 영상으로 보이지 않습니다. 댄스 영상을 업로드해주시면 정밀하게 분석해드리겠습니다."

        춤 영상이 맞다면, 이 영상은 ${genre || "라틴 댄스"} 장르의 ${type || "영상"}입니다.
        전문가의 시각으로 이 영상을 정밀하게 일관된 기준으로 분석해주세요.
        
        다음 형식에 맞춰서 답변을 작성해주세요:
        
        1. **총평**: 전체적인 춤의 느낌, 음악 해석, 분위기
        2. **남자 (Leader) 분석**:
           - **장점**: (구체적인 동작이나 기술 언급)
           - **단점 및 개선점**: (자세, 리듬, 리딩 등 교정할 부분)
           - **평점**: (10점 만점 기준. *기준: 9-10점(프로/마스터), 7-8점(상급/준프로), 5-6점(중급), 3-4점(초급)*. 냉정하고 객관적으로 평가해주세요.)
        3. **여자 (Follower) 분석**:
           - **장점**: (구체적인 동작이나 기술 언급)
           - **단점 및 개선점**: (자세, 리듬, 팔로잉 등 교정할 부분)
           - **평점**: (10점 만점 기준. *기준: 9-10점(프로/마스터), 7-8점(상급/준프로), 5-6점(중급), 3-4점(초급)*. 냉정하고 객관적으로 평가해주세요.)
        
        동작의 정확성, 리듬감, 파트너와의 커넥션, 자세(Posture) 등을 중점적으로 봐주세요.
        `.trim();

          

        // 여기서는 대기하지 않고 바로 요청 (클라이언트가 이미 ACTIVE 확인했음)
        const contents = [
          {
            role: "user",
            parts: [
              { text: prompt },
              { fileData: { fileUri: fileUri, mimeType: mimeType || "video/mp4" } },
            ]
          }
        ];

        const model = "gemini-2.5-flash";
        //const model = "gemini-3.0-pro-preview";
        const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${env.GEMINI_API_KEY}`;
    

        const upstream = await fetch(geminiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents,
            generationConfig: {
              temperature: 0.2,
            },
          }),
        });

        if (!upstream.ok) {
          const errText = await upstream.text();
          throw new Error(`Gemini API Error (${upstream.status}): ${errText}`);
        }

        const data = await upstream.json();
        const parts = data.candidates?.[0]?.content?.parts || [];
        const responseText = parts.map(p => p.text).join("\n");

        return new Response(JSON.stringify({
          choices: [{ message: { role: "assistant", content: responseText } }]
        }), {
          headers: { ...corsHeaders(origin), "Content-Type": "application/json" }
        });
      }

      throw new Error(`Invalid action: ${action}`);

    } catch (err) {
      return new Response(JSON.stringify({ error: err.message }), {
        status: 500,
        headers: { ...corsHeaders(origin), "Content-Type": "application/json" },
      });
    }
  },
};
