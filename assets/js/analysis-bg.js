document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.createElement('canvas');
    canvas.id = 'analysis-bg-canvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '0';
    canvas.style.pointerEvents = 'none';
    canvas.style.opacity = '0.3'; // Even more subtle
    document.body.prepend(canvas);

    const ctx = canvas.getContext('2d');
    let width, height;
    
    // Rain Configuration
    let columns;
    let drops = [];
    const fontSize = 14;
    const chars = "01";

    // Circuit Configuration
    const circuits = [];
    const circuitCount = 15; 

    class Circuit {
        constructor() {
            this.init();
        }

        init() {
            this.path = [];
            this.currentPos = { x: Math.random() * width, y: Math.random() * height };
            this.targetPos = { x: this.currentPos.x, y: this.currentPos.y };
            this.speed = Math.random() * 1 + 0.5; 
            this.color = Math.random() > 0.5 ? 'rgba(65, 209, 255, 0.3)' : 'rgba(189, 52, 254, 0.3)'; // Much more transparent
            this.maxLength = Math.random() * 150 + 50; 
            this.history = [];
            this.timer = 0;
            this.moveState = Math.random() > 0.5 ? 0 : 1; 
        }

        update() {
            this.timer++;
            
            // Change direction randomly
            if (this.timer > Math.random() * 60 + 30) { 
                this.moveState = this.moveState === 0 ? 1 : 0;
                this.timer = 0;
                
                // Snap to grid-like movement occasionally
                if (Math.random() > 0.7) {
                     this.currentPos.x = Math.round(this.currentPos.x / 10) * 10;
                     this.currentPos.y = Math.round(this.currentPos.y / 10) * 10;
                }
            }

            if (this.moveState === 0) {
                this.currentPos.x += this.speed * (Math.random() > 0.5 ? 1 : -1);
            } else {
                this.currentPos.y += this.speed * (Math.random() > 0.5 ? 1 : -1);
            }

            // Boundary check
            if (this.currentPos.x < 0) this.currentPos.x = width;
            if (this.currentPos.x > width) this.currentPos.x = 0;
            if (this.currentPos.y < 0) this.currentPos.y = height;
            if (this.currentPos.y > height) this.currentPos.y = 0;

            this.history.push({ ...this.currentPos });
            if (this.history.length > this.maxLength) {
                this.history.shift();
            }
        }

        draw() {
            if (this.history.length < 2) return;

            ctx.beginPath();
            ctx.strokeStyle = this.color;
            ctx.lineWidth = 1; // Thinner
            ctx.shadowBlur = 0; // No glow
            
            // Draw path
            ctx.moveTo(this.history[0].x, this.history[0].y);
            for (let i = 1; i < this.history.length; i++) {
                ctx.lineTo(this.history[i].x, this.history[i].y);
            }
            ctx.stroke();

            // Draw head
            ctx.fillStyle = 'rgba(255, 255, 255, 0.2)'; // Fainter head
            ctx.beginPath();
            ctx.arc(this.currentPos.x, this.currentPos.y, 1.5, 0, Math.PI * 2);
            ctx.fill();
            
            // Draw start point (node)
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.history[0].x, this.history[0].y, 1, 0, Math.PI * 2); // Smaller node
            ctx.fill();
        }
    }

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        initDrops();
        initCircuits();
    }

    function initDrops() {
        columns = Math.floor(width / fontSize);
        drops = [];
        const maxRows = Math.ceil(height / fontSize);
        for (let i = 0; i < columns; i++) {
            drops[i] = Math.random() * maxRows;
        }
    }

    function initCircuits() {
        circuits.length = 0;
        for (let i = 0; i < circuitCount; i++) {
            circuits.push(new Circuit());
        }
    }

    function draw() {
        // Trail effect
        ctx.fillStyle = 'rgba(15, 14, 20, 0.1)'; 
        ctx.fillRect(0, 0, width, height);

        // 1. Draw Circuits (Background Layer)
        circuits.forEach(c => {
            c.update();
            c.draw();
        });

        // 2. Draw Digital Rain (Foreground Layer)
        ctx.font = `bold ${fontSize}px "Pretendard", monospace`;
        for (let i = 0; i < drops.length; i++) {
            const text = chars.charAt(Math.floor(Math.random() * chars.length));
            
            const isBright = Math.random() > 0.998; // Extremely rare sparkle
            
            if (isBright) {
                ctx.fillStyle = 'rgba(255, 255, 255, 0.3)'; // Fainter sparkle
                ctx.shadowBlur = 2;
                ctx.shadowColor = 'rgba(255, 255, 255, 0.2)';
            } else {
                ctx.fillStyle = i % 2 === 0 ? 'rgba(65, 209, 255, 0.05)' : 'rgba(189, 52, 254, 0.05)'; // Extremely transparent
                ctx.shadowBlur = 0;
            }

            const x = i * fontSize;
            const y = drops[i] * fontSize;

            ctx.fillText(text, x, y);

            if (y > height && Math.random() > 0.975) {
                drops[i] = 0;
            }

            drops[i] += 0.05; // Very slow downward movement
        }

        requestAnimationFrame(draw);
    }

    window.addEventListener('resize', resize);
    
    resize();
    draw();
});
