/**
 * AURORA HERO PARTICLES ENGINE (Refined Elegant Stardust)
 * =======================================================
 * Subtle, elegant, crisp glowing golden particles reacting to mouse movement.
 */

function initHeroParticles(canvasId) {
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (isReducedMotion) return;

  const particleContainer = document.getElementById(canvasId);
  if (!particleContainer) return;

  new HeroParticleLayer(canvasId);
}

class HeroParticleLayer {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.mouse = { x: null, y: null, radius: 140 };
    this.animId = null;

    this.init();
  }

  init() {
    this.resize();
    this.create();
    this.events();
    this.animate();
  }

  resize() {
    this.width = this.canvas.width = this.canvas.parentElement.clientWidth;
    this.height = this.canvas.height = this.canvas.parentElement.clientHeight;
  }

  create() {
    this.particles = [];
    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 30 : 70;

    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 1.2 + 0.9,
        alpha: Math.random() * 0.5 + 0.3
      });
    }
  }

  events() {
    window.addEventListener('resize', () => {
      this.resize();
      this.create();
    });

    window.addEventListener('mousemove', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      if (e.clientY >= rect.top && e.clientY <= rect.bottom && e.clientX >= rect.left && e.clientX <= rect.right) {
        this.mouse.x = e.clientX - rect.left;
        this.mouse.y = e.clientY - rect.top;
      } else {
        this.mouse.x = null;
        this.mouse.y = null;
      }
    });

    window.addEventListener('mouseleave', () => {
      this.mouse.x = null;
      this.mouse.y = null;
    });
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > this.width) p.vx *= -1;
      if (p.y < 0 || p.y > this.height) p.vy *= -1;

      // Mouse Repulse & Proximity Web
      if (this.mouse.x !== null && this.mouse.y !== null) {
        const dx = this.mouse.x - p.x;
        const dy = this.mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < this.mouse.radius) {
          const force = (this.mouse.radius - dist) / this.mouse.radius;
          const angle = Math.atan2(dy, dx);
          p.x -= Math.cos(angle) * force * 2.5;
          p.y -= Math.sin(angle) * force * 2.5;

          // Draw Subtle Gold Connection Line
          this.ctx.beginPath();
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(this.mouse.x, this.mouse.y);
          this.ctx.strokeStyle = `rgba(229, 200, 143, ${force * 0.35})`;
          this.ctx.lineWidth = 0.8;
          this.ctx.stroke();
        }
      }

      // Draw Refined Golden Stardust Node
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(229, 200, 143, ${p.alpha})`;
      this.ctx.shadowBlur = 4;
      this.ctx.shadowColor = "rgba(201, 169, 110, 0.6)";
      this.ctx.fill();
      this.ctx.shadowBlur = 0;
    }

    this.animId = requestAnimationFrame(() => this.animate());
  }
}
