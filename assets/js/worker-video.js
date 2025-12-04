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
    throw new Error(`Upload initiation failed: ${response.statusText}`);
  }

  return response.headers.get("x-goog-upload-url");
}

async function waitForFileActive(apiKey, fileUri) {
  const url = `https://generativelanguage.googleapis.com/v1beta/${fileUri}?key=${apiKey}`;

  let attempts = 0;
  while (attempts < 60) { // 최대 120초 대기
    const response = await fetch(url);
    const data = await response.json();

    if (data.state === "ACTIVE") {
      return; 
    }
    if (data.state === "FAILED") {
      throw new Error("File processing failed");
    }

    await new Promise(resolve => setTimeout(resolve, 2000));
    attempts++;
  }
  throw new Error("File processing timed out");
}

// ===== Main Worker Logic =====
export default {
  async fetch(req, env) {
    const origin = req.headers.get("Origin") ?? "null";
    const url = new URL(req.url);
    const action = url.searchParams.get("action"); // ?action=init | upload | analyze

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
      return new Response(JSON.stringify({ error: "Missing GEMINI_API_KEY" }), { status: 500, headers: corsHeaders(origin) });
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
      // 클라이언트가 Raw Body로 파일을 보내면, 그대로 Google로 파이핑합니다.
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
          body: req.body // Stream piping
        });

        if (!googleResponse.ok) {
          const errText = await googleResponse.text();
          throw new Error(`Google Upload Failed: ${googleResponse.status} ${errText}`);
        }

        const result = await googleResponse.json();
        return new Response(JSON.stringify({ fileUri: result.file.uri }), {
          headers: { ...corsHeaders(origin), "Content-Type": "application/json" }
        });
      }

      // 3. 분석 (Gemini 호출)
      if (action === "analyze") {
        const body = await req.json();
        const { fileUri, message } = body;

        // 파일 활성화 대기
        await waitForFileActive(env.GEMINI_API_KEY, fileUri);

        const contents = [
          {
            role: "user",
            parts: [
              { text: message || "이 춤 영상을 분석해줘." },
              { fileData: { fileUri: fileUri, mimeType: "video/mp4" } }
            ]
          }
        ];

        const geminiPayload = {
          contents,
          generationConfig: {
            temperature: 1.0,
            thinkingConfig: {
              thinkingLevel: "HIGH",
            },
          },
        };

        const model = "gemini-3-pro-preview";
        const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${env.GEMINI_API_KEY}`;

        const upstream = await fetch(geminiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(geminiPayload),
        });

        if (!upstream.ok) {
          const errText = await upstream.text();
          throw new Error(`Gemini API Error: ${upstream.status} ${errText}`);
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

      throw new Error("Invalid action");

    } catch (err) {
      return new Response(JSON.stringify({ error: err.message }), {
        status: 500,
        headers: { ...corsHeaders(origin), "Content-Type": "application/json" },
      });
    }
  },
};
