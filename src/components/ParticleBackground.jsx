import { useEffect, useRef } from "react";

const MAX_PARTICLES = 145;
const CONNECTION_DISTANCE = 185;

const ParticleBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext("2d", { alpha: true });

        if (!canvas || !context) return undefined;

        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
        let width = 0;
        let height = 0;
        let animationFrame = 0;
        let lastFrameTime = 0;
        let particles = [];

        const createParticle = () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.18,
            vy: (Math.random() - 0.5) * 0.12,
            radius: 1.4 + Math.random() * 1.2,
            phase: Math.random() * Math.PI * 2,
            life: Math.random(),
            lifeDirection: Math.random() > 0.5 ? -1 : 1,
        });

        const resize = () => {
            const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = Math.round(width * pixelRatio);
            canvas.height = Math.round(height * pixelRatio);
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

            const count = Math.min(
                MAX_PARTICLES,
                Math.max(16, Math.round((width * height) / 6000))
            );
            particles = Array.from({ length: count }, () => createParticle());
            draw(0, false);
        };

        const draw = (time, animate = true) => {
            context.clearRect(0, 0, width, height);

            if (animate) {
                const elapsed = lastFrameTime ? Math.min(time - lastFrameTime, 32) : 16;
                const step = elapsed / 16.67;
                lastFrameTime = time;

                for (const particle of particles) {
                    particle.x += particle.vx * step;
                    particle.y += particle.vy * step;
                    particle.phase += 0.012 * step;
                    particle.life += particle.lifeDirection * 0.003 * step;

                    if (particle.life >= 1) {
                        particle.life = 1;
                        particle.lifeDirection = -1;
                    } else if (particle.life <= 0) {
                        Object.assign(particle, createParticle());
                    }

                    if (particle.y < -10 || particle.x < -10 || particle.x > width + 10) {
                        Object.assign(particle, createParticle());
                    }
                }
            }

            for (let first = 0; first < particles.length; first += 1) {
                const a = particles[first];
                const pulseA = 0.45 + (Math.sin(a.phase) + 1) * 0.18;
                const alphaA = a.life * pulseA;

                for (let second = first + 1; second < particles.length; second += 1) {
                    const b = particles[second];
                    const dx = a.x - b.x;
                    const dy = a.y - b.y;
                    const distance = Math.hypot(dx, dy);

                    if (distance < CONNECTION_DISTANCE) {
                        const fade = 1 - distance / CONNECTION_DISTANCE;
                        const opacity = fade * fade * Math.min(alphaA, b.life * 0.65);
                        context.beginPath();
                        context.moveTo(a.x, a.y);
                        context.lineTo(b.x, b.y);
                        context.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.32})`;
                        context.lineWidth = 0.8;
                        context.stroke();
                    }
                }
            }

            for (const particle of particles) {
                const pulse = 0.45 + (Math.sin(particle.phase) + 1) * 0.18;
                const alpha = particle.life * pulse;
                if (alpha <= 0.01) continue;

                context.beginPath();
                context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                context.fillStyle = `rgba(255, 255, 255, ${alpha})`;
                context.shadowColor = `rgba(255, 255, 255, ${alpha * 0.45})`;
                context.shadowBlur = 8;
                context.fill();
            }

            context.shadowBlur = 0;
            if (animate) animationFrame = window.requestAnimationFrame(draw);
        };

        const start = () => {
            window.cancelAnimationFrame(animationFrame);
            lastFrameTime = 0;
            if (document.hidden || reducedMotion.matches) draw(0, false);
            else animationFrame = window.requestAnimationFrame(draw);
        };

        resize();
        start();
        window.addEventListener("resize", resize, { passive: true });
        document.addEventListener("visibilitychange", start);
        reducedMotion.addEventListener("change", start);

        return () => {
            window.cancelAnimationFrame(animationFrame);
            window.removeEventListener("resize", resize);
            document.removeEventListener("visibilitychange", start);
            reducedMotion.removeEventListener("change", start);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="particle-background"
            aria-hidden="true"
        />
    );
};

export default ParticleBackground;
