document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.createElement('canvas');
    canvas.id = 'analysis-bg-canvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '0'; // Visible above background
    canvas.style.pointerEvents = 'none';
    canvas.style.opacity = '0.4'; // Subtle effect
    document.body.prepend(canvas);

    const ctx = canvas.getContext('2d');
    let width, height;
    let columns;
    let drops = [];

    // Configuration
    const fontSize = 14;
    const chars = "01"; // Binary for cybernetic feel
    // const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"; // Alternative

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        initDrops();
    }

    function initDrops() {
        columns = Math.floor(width / fontSize);
        drops = [];
        for (let i = 0; i < columns; i++) {
            drops[i] = Math.random() * -100; // Start randomly above screen
        }
    }

    function draw() {
        // Trail effect: Translucent background paint
        ctx.fillStyle = 'rgba(15, 14, 20, 0.05)'; 
        ctx.fillRect(0, 0, width, height);

        ctx.font = `bold ${fontSize}px "Pretendard", monospace`;

        for (let i = 0; i < drops.length; i++) {
            // Random character
            const text = chars.charAt(Math.floor(Math.random() * chars.length));
            
            // Cybernetic Colors: Cyan (#41d1ff) and Purple (#bd34fe)
            // Randomly highlight some characters to be brighter
            const isBright = Math.random() > 0.95;
            
            if (isBright) {
                ctx.fillStyle = '#fff'; // Sparkle
                ctx.shadowBlur = 10;
                ctx.shadowColor = '#fff';
            } else {
                // Gradient effect across columns or random
                ctx.fillStyle = i % 2 === 0 ? '#41d1ff' : '#bd34fe';
                ctx.shadowBlur = 0;
            }

            const x = i * fontSize;
            const y = drops[i] * fontSize;

            ctx.fillText(text, x, y);

            // Reset drop to top randomly
            if (y > height && Math.random() > 0.975) {
                drops[i] = 0;
            }

            // Move drop down
            drops[i] += 0.35;
        }
        requestAnimationFrame(draw);
    }

    window.addEventListener('resize', resize);
    
    // Initialize
    resize();
    draw();
});
