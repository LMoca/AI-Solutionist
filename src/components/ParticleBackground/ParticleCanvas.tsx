import { useEffect, useRef } from 'react';
import { Particle } from './Particle';
import { initParticles, updateParticles, drawParticles } from './ParticleAnimation';

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particlesRef.current = initParticles(canvas, 200);
    };

    const animate = () => {
      if (!canvas || !ctx) return;
      updateParticles(particlesRef.current, canvas);
      drawParticles(ctx, particlesRef.current, canvas);
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"
    />
  );
}