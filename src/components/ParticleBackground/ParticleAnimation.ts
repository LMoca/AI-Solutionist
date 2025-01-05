import { Particle, createParticle } from './Particle';

export function initParticles(canvas: HTMLCanvasElement, count: number): Particle[] {
  return Array.from({ length: count }, () => createParticle(canvas));
}

export function updateParticles(particles: Particle[], canvas: HTMLCanvasElement): void {
  particles.forEach(particle => {
    particle.x += particle.speedX;
    particle.y += particle.speedY;

    if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
    if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
  });
}

export function drawParticles(
  ctx: CanvasRenderingContext2D,
  particles: Particle[],
  canvas: HTMLCanvasElement
): void {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  particles.forEach(particle => {
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(96, 165, 250, ${particle.opacity})`;
    ctx.fill();

    // Draw connections
    particles.forEach(otherParticle => {
      const distance = Math.hypot(particle.x - otherParticle.x, particle.y - otherParticle.y);
      if (distance < 100) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(96, 165, 250, ${0.15 * (1 - distance / 100)})`;
        ctx.lineWidth = 0.5;
        ctx.moveTo(particle.x, particle.y);
        ctx.lineTo(otherParticle.x, otherParticle.y);
        ctx.stroke();
      }
    });
  });
}