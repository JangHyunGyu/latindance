/**
 * Dance Analysis Logic
 * Handles file upload, API communication, and UI updates.
 * Depends on a global `ANALYSIS_CONFIG` object for localization.
 */

// Kakao SDK Init
try {
    Kakao.init('2a0f97309508f0405a563d70e1c01262'); 
} catch (e) {
    console.warn("Kakao SDK init failed (Key not set)");
}

const videoInput = document.getElementById('videoInput');
const analyzeBtn = document.getElementById('analyzeBtn');
const fileNameDiv = document.getElementById('fileName');
const dropZone = document.getElementById('dropZone');

// Modal Elements
const resultModal = document.getElementById('resultModal');
const modalBody = document.getElementById('modalBody');
const modalTitle = document.getElementById('modalTitle');
const modalFooter = document.getElementById('modalFooter');
const scrollTopBtn = document.getElementById('scrollTopBtn');
const modalCloseBtn = document.getElementById('modalCloseBtn');

let isAnalyzing = false;
let latestAnalysisResult = "";
let currentAnalysisId = null;

// Event Listeners
videoInput.addEventListener('change', handleFileSelect);

dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.style.borderColor = '#fff';
});

dropZone.addEventListener('dragleave', (e) => {
    e.preventDefault();
    dropZone.style.borderColor = '#ccc';
});

dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.style.borderColor = '#ccc';
    if (e.dataTransfer.files.length > 0) {
        videoInput.files = e.dataTransfer.files;
        handleFileSelect();
    }
});

analyzeBtn.addEventListener('click', runAnalysis);

resultModal.addEventListener('click', (e) => {
    if (isAnalyzing) return;
    if (e.target === resultModal) {
        closeModal();
    }
});

modalBody.addEventListener('scroll', () => {
    if (modalBody.scrollTop > 300) {
        scrollTopBtn.style.display = 'flex';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

scrollTopBtn.addEventListener('click', () => {
    modalBody.scrollTo({ top: 0, behavior: 'smooth' });
});

// Functions

function handleFileSelect() {
    const file = videoInput.files[0];
    if (file) {
        const sizeInMB = (file.size / (1024 * 1024)).toFixed(2);
        
        if (file.size > 100 * 1024 * 1024) { // 100MB limit
            alert(ANALYSIS_CONFIG.messages.fileTooLarge.replace('{size}', sizeInMB));
            videoInput.value = "";
            fileNameDiv.textContent = "";
            analyzeBtn.disabled = true;
            return;
        }

        fileNameDiv.textContent = `${ANALYSIS_CONFIG.messages.fileSelected}: ${file.name} (${sizeInMB} MB)`;
        analyzeBtn.disabled = false;
    } else {
        fileNameDiv.textContent = '';
        analyzeBtn.disabled = true;
    }
}

async function runAnalysis() {
    const file = videoInput.files[0];
    if (!file) return;

    isAnalyzing = true;
    latestAnalysisResult = "";

    // UI State Change
    analyzeBtn.disabled = true;
    document.getElementById('danceGenre').disabled = true;
    document.getElementById('danceType').disabled = true;
    document.querySelector('label[for="videoInput"]').style.pointerEvents = "none";
    document.querySelector('label[for="videoInput"]').style.opacity = "0.5";
    
    // Show Modal
    resultModal.style.display = 'flex';
    modalTitle.textContent = ANALYSIS_CONFIG.messages.processTitle;
    modalFooter.style.display = 'none';
    modalCloseBtn.style.display = 'none';
    document.body.style.overflow = 'hidden';

    try {
        const API_URL = "https://latindance-api.yama5993.workers.dev"; 

        // 1. Init
        console.log("Step 1: Init");
        modalBody.innerHTML = `<p>${ANALYSIS_CONFIG.messages.stepInit}</p>`;
        const initRes = await fetch(`${API_URL}?action=init`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                mimeType: file.type,
                numBytes: file.size,
                displayName: file.name
            })
        });
        
        if (!initRes.ok) {
            const text = await initRes.text();
            throw new Error(`Init failed (${initRes.status}): ${text}`);
        }
        const { uploadUrl } = await initRes.json();

        // 2. Upload
        console.log("Step 2: Upload");
        modalBody.innerHTML = `
            <div class="progress-status">${ANALYSIS_CONFIG.messages.stepUpload}</div>
            <div class="progress-text" id="progressPercent">0%</div>
            <div class="progress-container">
                <div class="progress-bar" id="progressBar"></div>
            </div>
            <p style="font-size: 0.85rem; color: rgba(255,255,255,0.5); text-align:center; margin-top: 20px;">
                ${ANALYSIS_CONFIG.messages.uploadWarning}
            </p>
        `;

        const progressBar = modalBody.querySelector('#progressBar');
        const progressPercent = modalBody.querySelector('#progressPercent');

        const uploadRes = await new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open("POST", `${API_URL}?action=upload`);
            xhr.setRequestHeader("X-Upload-Url", uploadUrl);
            xhr.setRequestHeader("Content-Type", file.type);

            xhr.upload.onprogress = (e) => {
                if (e.lengthComputable) {
                    const percent = Math.round((e.loaded / e.total) * 100);
                    if (progressBar && progressPercent) {
                        progressBar.style.width = `${percent}%`;
                        progressPercent.textContent = `${percent}%`;
                    }
                }
            };

            xhr.onload = () => {
                if (xhr.status >= 200 && xhr.status < 300) {
                    try {
                        resolve(JSON.parse(xhr.responseText));
                    } catch (e) {
                        reject(new Error("Invalid JSON response from upload"));
                    }
                } else {
                    reject(new Error(`Upload failed (${xhr.status}): ${xhr.responseText}`));
                }
            };

            xhr.onerror = () => reject(new Error("Network error during upload"));
            xhr.send(file);
        });

        const { fileUri, fileName } = uploadRes;

        // 3. Polling
        console.log("Step 3: Polling Status");
        modalBody.innerHTML = `
            <div class="loader-orbit"></div>
            <p style="text-align:center; font-weight:bold; color:#41d1ff;">${ANALYSIS_CONFIG.messages.stepProcessing}</p>
            <p style="font-size: 0.9rem; color: #888; text-align:center">${ANALYSIS_CONFIG.messages.waitMessage}</p>
        `;
        
        let isReady = false;
        for (let i = 0; i < 60; i++) { // Max 2 mins
            const checkRes = await fetch(`${API_URL}?action=check_status`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fileName })
            });
            
            if (!checkRes.ok) throw new Error("Status check failed");
            const statusData = await checkRes.json();
            
            if (statusData.state === "ACTIVE") {
                isReady = true;
                break;
            }
            if (statusData.state === "FAILED") {
                throw new Error("Video processing failed at server side");
            }
            
            // Wait 2s
            await new Promise(r => setTimeout(r, 2000));
        }
        
        if (!isReady) throw new Error("Video processing timed out");

        // 4. Analyze
        console.log("Step 4: Analyze");
        modalBody.innerHTML = `
            <div class="loader-wave">
                <div></div><div></div><div></div><div></div><div></div>
            </div>
            <p style="text-align:center; font-weight:bold; color:#bd34fe;">${ANALYSIS_CONFIG.messages.stepAnalyzing}</p>
            <p style="font-size: 0.9rem; color: #888; text-align:center">${ANALYSIS_CONFIG.messages.analyzeTimeWarning}</p>
        `;

        const genre = document.getElementById('danceGenre').value;
        const type = document.getElementById('danceType').value;

        // Generate Prompt using the function injected from HTML
        const prompt = ANALYSIS_CONFIG.generatePrompt(genre, type);

        const analyzeRes = await fetch(`${API_URL}?action=analyze`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                fileUri: fileUri,
                mimeType: file.type,
                genre: genre,
                type: type,
                userPrompt: prompt
            })
        });

        if (!analyzeRes.ok) {
            const text = await analyzeRes.text();
            throw new Error(`Analysis failed (${analyzeRes.status}): ${text}`);
        }
        
        const text = await analyzeRes.text();
        if (!text) throw new Error("Empty response from server");
        
        let data;
        try {
            data = JSON.parse(text);
        } catch (e) {
            throw new Error(`Invalid JSON response: ${text.substring(0, 100)}...`);
        }
        
        const content = data.choices?.[0]?.message?.content || ANALYSIS_CONFIG.messages.resultError;
        latestAnalysisResult = content;

        // Save Result
        try {
            const saveRes = await fetch(`${API_URL}?action=save_result`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    result: content,
                    genre: genre,
                    type: type
                })
            });
            if (saveRes.ok) {
                const saveData = await saveRes.json();
                currentAnalysisId = saveData.id;
                console.log("Result saved with ID:", currentAnalysisId);
            }
        } catch (saveErr) {
            console.warn("Failed to save result for sharing:", saveErr);
        }

        // Markdown Formatting
        let formattedContent = marked.parse(content);

        // Add line breaks after periods for better readability
        formattedContent = formattedContent.replace(/\. /g, '.<br> ').replace(/\.(?=<)/g, '.<br>');

        modalTitle.textContent = ANALYSIS_CONFIG.messages.resultTitle;
        modalBody.innerHTML = formattedContent;
        modalFooter.style.display = 'flex';

    } catch (error) {
        console.error(error);
        alert(`${ANALYSIS_CONFIG.messages.errorTitle}: ${error.message}`);
        modalTitle.textContent = ANALYSIS_CONFIG.messages.errorTitle;
        modalBody.innerHTML = `<p style="color:red">${error.message}</p>`;
        modalFooter.style.display = 'none';
    } finally {
        isAnalyzing = false;
        modalCloseBtn.style.display = 'block';

        // UI Restore
        analyzeBtn.disabled = false;
        document.getElementById('danceGenre').disabled = false;
        document.getElementById('danceType').disabled = false;
        document.querySelector('label[for="videoInput"]').style.pointerEvents = "auto";
        document.querySelector('label[for="videoInput"]').style.opacity = "1";
    }
}

function closeModal() {
    if (isAnalyzing) return;
    resultModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function shareKakao() {
    if (typeof Kakao === 'undefined') {
        const script = document.createElement('script');
        script.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.7.1/kakao.min.js';
        script.onload = () => {
            try {
                if (!Kakao.isInitialized()) {
                    Kakao.init('2a0f97309508f0405a563d70e1c01262');
                }
                shareKakao();
            } catch (e) {
                alert('Kakao SDK Init Failed: ' + e.message);
            }
        };
        script.onerror = () => {
            alert('Failed to load Kakao SDK.');
        };
        document.head.appendChild(script);
        return;
    }

    try {
        if (!Kakao.isInitialized()) {
            Kakao.init('2a0f97309508f0405a563d70e1c01262');
        }

        const shareUrl = currentAnalysisId 
            ? `https://latindance.kr/analysis.html?id=${currentAnalysisId}` // Note: This URL might need to be dynamic based on current page
            : window.location.href;

        Kakao.Share.sendDefault({
            objectType: 'feed',
            content: {
                title: ANALYSIS_CONFIG.messages.shareTitle,
                description: ANALYSIS_CONFIG.messages.shareDesc,
                imageUrl: 'https://latindance.kr/assets/images/analysis_kakao_profile.png?v=2',
                link: {
                    mobileWebUrl: shareUrl,
                    webUrl: shareUrl,
                },
            },
            buttons: [
                {
                    title: ANALYSIS_CONFIG.messages.shareBtn,
                    link: {
                        mobileWebUrl: shareUrl,
                        webUrl: shareUrl,
                    },
                },
            ],
        });
    } catch (err) {
        console.error('Kakao Share Error:', err);
        alert('Error sharing: ' + err.message);
    }
}

function copyResult() {
    if (!latestAnalysisResult) {
        alert(ANALYSIS_CONFIG.messages.copyNoResult);
        return;
    }
    
    navigator.clipboard.writeText(latestAnalysisResult).then(() => {
        alert(ANALYSIS_CONFIG.messages.copySuccess);
    }).catch(err => {
        console.error('Copy failed:', err);
        alert(ANALYSIS_CONFIG.messages.copyFail);
    });
}

// Load Shared Result
window.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const sharedId = urlParams.get('id');

    if (sharedId) {
        const API_URL = "https://latindance-api.yama5993.workers.dev";
        
        resultModal.style.display = 'flex';
        modalTitle.textContent = ANALYSIS_CONFIG.messages.loadingShared;
        modalBody.innerHTML = '<div class="spinner"></div><p style="text-align:center">...</p>';
        modalFooter.style.display = 'none';
        modalCloseBtn.style.display = 'block';

        try {
            const res = await fetch(`${API_URL}?action=get_result&id=${sharedId}`);
            if (!res.ok) throw new Error("Result not found");
            
            const data = await res.json();
            const content = data.result;
            latestAnalysisResult = content;

            const formattedContent = marked.parse(content);

            modalTitle.textContent = ANALYSIS_CONFIG.messages.resultTitleShared;
            modalBody.innerHTML = formattedContent;
            modalFooter.style.display = 'flex';
            
        } catch (err) {
            console.error(err);
            modalTitle.textContent = ANALYSIS_CONFIG.messages.errorTitle;
            modalBody.innerHTML = `<p>${ANALYSIS_CONFIG.messages.loadSharedFail}<br>(${err.message})</p>`;
        }
    }
});
