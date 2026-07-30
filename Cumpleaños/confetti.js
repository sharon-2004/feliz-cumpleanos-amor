// ==========================================
// CONFETTI.JS
// Efecto de confeti para la sorpresa
// ==========================================

const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

let particles = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

// Colores del confeti
const colors = [
    "#ff006e",
    "#ff4d88",
    "#ffbe0b",
    "#ffffff",
    "#8338ec",
    "#3a86ff",
    "#06d6a0"
];

// Crear partículas
function createParticles() {

    particles = [];

    for (let i = 0; i < 250; i++) {

        particles.push({

            x: Math.random() * canvas.width,

            y: Math.random() * canvas.height - canvas.height,

            size: Math.random() * 10 + 5,

            speedY: Math.random() * 4 + 2,

            speedX: Math.random() * 6 - 3,

            rotation: Math.random() * 360,

            rotationSpeed: Math.random() * 8 - 4,

            color: colors[Math.floor(Math.random() * colors.length)],

            alpha: 1

        });

    }

}

// Dibujar
function drawParticles() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {

        ctx.save();

        ctx.globalAlpha = p.alpha;

        ctx.translate(p.x, p.y);

        ctx.rotate(p.rotation * Math.PI / 180);

        ctx.fillStyle = p.color;

        ctx.fillRect(
            -p.size / 2,
            -p.size / 2,
            p.size,
            p.size
        );

        ctx.restore();

    });

}

// Actualizar
function updateParticles() {

    particles.forEach(p => {

        p.y += p.speedY;

        p.x += p.speedX;

        p.rotation += p.rotationSpeed;

        if (p.y > canvas.height + 30) {

            p.y = -20;

        }

    });

}

// Animación
let animationId;

function animate() {

    drawParticles();

    updateParticles();

    animationId = requestAnimationFrame(animate);

}

// ==========================================
// FUNCIÓN GLOBAL
// ==========================================

function launchConfetti() {

    createParticles();

    cancelAnimationFrame(animationId);

    animate();

    // Detener después de 8 segundos

    setTimeout(() => {

        cancelAnimationFrame(animationId);

        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );

    }, 8000);

}