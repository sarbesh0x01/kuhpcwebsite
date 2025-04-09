"use client";

import Link from 'next/link';
import { FiChevronRight, FiCpu, FiServer, FiDatabase } from 'react-icons/fi';
import { useEffect, useState, useRef } from 'react';

// Define particle interface
interface ParticleType {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  life: number;
  opacity: number;
  update: () => void;
  draw: (ctx: CanvasRenderingContext2D) => void;
}

const Hero = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Data flow animation
  useEffect(() => {
    setIsAnimating(true);

    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      if (!ctx) return;

      // Set canvas dimensions
      const setCanvasDimensions = () => {
        if (canvas) {
          canvas.width = canvas.offsetWidth || canvas.clientWidth;
          canvas.height = canvas.offsetHeight || canvas.clientHeight;
        }
      };

      setCanvasDimensions();
      window.addEventListener('resize', setCanvasDimensions);

      // Particle class for data visualization
      class Particle implements ParticleType {
        x: number;
        y: number;
        size: number;
        speedX: number;
        speedY: number;
        color: string;
        life: number;
        opacity: number;

        constructor() {
          this.x = Math.random() * (canvas?.width || 300);
          this.y = Math.random() * (canvas?.height || 200);
          this.size = Math.random() * 2 + 1;
          this.speedX = (Math.random() - 0.5) * 2;
          this.speedY = (Math.random() - 0.5) * 2;
          this.color = Math.random() > 0.5 ? '#00eeff' : '#0779ff';
          this.life = 100 + Math.random() * 100;
          this.opacity = Math.random() * 0.5 + 0.5;
        }

        update() {
          this.x += this.speedX;
          this.y += this.speedY;
          this.life -= 0.5;
          this.opacity = this.life / 200;

          // Bounce off edges
          if (this.x < 0 || this.x > (canvas?.width || 300)) this.speedX *= -1;
          if (this.y < 0 || this.y > (canvas?.height || 200)) this.speedY *= -1;
        }

        draw(ctx: CanvasRenderingContext2D) {
          ctx.globalAlpha = this.opacity;
          ctx.fillStyle = this.color;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      const particles: ParticleType[] = [];
      const particleCount = 100;

      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }

      // Connection lines between particles
      function connect() {
        if (!ctx) return;

        const maxDistance = 100;
        for (let a = 0; a < particles.length; a++) {
          for (let b = a; b < particles.length; b++) {
            const dx = particles[a].x - particles[b].x;
            const dy = particles[a].y - particles[b].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < maxDistance) {
              ctx.globalAlpha = 1 - (distance / maxDistance);
              ctx.strokeStyle = particles[a].color;
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(particles[a].x, particles[a].y);
              ctx.lineTo(particles[b].x, particles[b].y);
              ctx.stroke();
            }
          }
        }
      }

      function animate() {
        if (!isAnimating || !canvas || !ctx) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw server rack grid pattern
        ctx.globalAlpha = 0.15;
        ctx.strokeStyle = '#0779ff';
        ctx.lineWidth = 0.5;

        const gridSize = 30;
        for (let x = 0; x < (canvas.width || 300); x += gridSize) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, canvas.height || 200);
          ctx.stroke();
        }

        for (let y = 0; y < (canvas.height || 200); y += gridSize) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(canvas.width || 300, y);
          ctx.stroke();
        }

        // Update and draw particles
        for (let i = 0; i < particles.length; i++) {
          particles[i].update();
          particles[i].draw(ctx);

          // Replace dead particles
          if (particles[i].life <= 0) {
            particles[i] = new Particle();
          }
        }

        connect();
        requestAnimationFrame(animate);
      }

      animate();

      return () => {
        setIsAnimating(false);
        window.removeEventListener('resize', setCanvasDimensions);
      };
    }
  }, []);

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Dark background with tech elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050816] via-[#081130] to-[#0a1740] z-0"></div>
      <div className="absolute inset-0 tech-grid z-0 opacity-20"></div>
      <div className="absolute inset-0 circuit-pattern z-0"></div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      {/* Main content */}
      <div className="container mx-auto px-4 z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Text content - 7 columns on large screens */}
          <div className="lg:col-span-7">
            <div className="bg-white/5 backdrop-blur-xl p-1 rounded-lg inline-block mb-4">
              <span className="px-3 py-1 text-sm font-medium text-accent flex items-center">
                <span className="inline-block h-2 w-2 bg-accent rounded-full animate-ping mr-2"></span>
                Powered by CERN Technology
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white">
              Supercomputing Power at <span className="gradient-text glow-text">Kathmandu University</span>
            </h1>

            <p className="text-xl mb-8 text-white/80 max-w-2xl">
              Nepal&apos;s premier high-performance computing facility with the processing
              power of 2,000+ computers and 700+ TB storage capacity.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                href="/about"
                className="btn btn-primary text-lg px-8 py-4 flex items-center group"
              >
                Explore Our Capabilities
                <FiChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link
                href="/achievements"
                className="btn btn-secondary text-lg px-8 py-4"
              >
                See Our Impact
              </Link>
            </div>

            {/* Key stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:-translate-y-1 transition-transform">
                <div className="flex items-center text-accent mb-2">
                  <FiCpu className="mr-2" />
                  <span className="font-semibold">CPU Power</span>
                </div>
                <p className="text-3xl font-bold text-white">2500+</p>
                <p className="text-white/60 text-sm">Processor Cores</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:-translate-y-1 transition-transform">
                <div className="flex items-center text-accent mb-2">
                  <FiServer className="mr-2" />
                  <span className="font-semibold">Servers</span>
                </div>
                <p className="text-3xl font-bold text-white">200</p>
                <p className="text-white/60 text-sm">High-performance</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:-translate-y-1 transition-transform">
                <div className="flex items-center text-accent mb-2">
                  <FiDatabase className="mr-2" />
                  <span className="font-semibold">Storage</span>
                </div>
                <p className="text-3xl font-bold text-white">700+ TB</p>
                <p className="text-white/60 text-sm">Data Capacity</p>
              </div>
            </div>
          </div>

          {/* Visual representation instead of image - 5 columns on large screens */}
          <div className="lg:col-span-5 relative">
            {/* Supercomputer Canvas Animation */}
            <div className="relative">
              {/* Glowing border with animated gradient */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-secondary opacity-70 blur-sm rounded-xl animated-gradient"></div>

              {/* Server visualization container */}
              <div className="relative h-[500px] w-full overflow-hidden rounded-xl border border-white/20 bg-black/40 backdrop-blur-sm">
                {/* Canvas for particle animation */}
                <canvas
                  ref={canvasRef}
                  className="absolute inset-0 w-full h-full"
                  style={{ width: '100%', height: '100%' }}
                ></canvas>

                {/* Status indicators */}
                <div className="absolute top-4 left-4 bg-black/40 rounded px-2 py-1 text-xs flex items-center space-x-2">
                  <span className="inline-block h-2 w-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-white/80">SYSTEM ONLINE</span>
                </div>

                {/* Data processing visualization */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
                  {[...Array(10)].map((_, i) => (
                    <div
                      key={i}
                      className="data-packet"
                      style={{
                        ['--start-pos' as string]: `${20 + Math.random() * 60}%`,
                        ['--end-pos' as string]: `${20 + Math.random() * 60}%`,
                        ['--delay' as string]: `${Math.random() * 5}s`,
                        ['--duration' as string]: `${1 + Math.random() * 2}s`,
                        ['--size' as string]: `${3 + Math.random() * 5}px`
                      } as React.CSSProperties}
                    ></div>
                  ))}
                </div>

                {/* Bottom caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <span className="text-white font-semibold block">High-Performance Computing Cluster</span>
                  <span className="text-white/60 text-sm">Kathmandu University, Nepal</span>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-10 -right-10 bg-black/50 backdrop-blur-xl p-4 rounded-xl border border-white/10 shadow-lg hover:-translate-y-1 transition-transform cursor-pointer">
              <div className="text-accent text-xs font-medium mb-1">PROCESSING POWER</div>
              <div className="text-2xl font-bold text-white">2000+</div>
              <div className="text-white/60 text-xs">Desktop Equivalents</div>
            </div>

            {/* CERN partnership - moved to right side */}
            <div className="absolute -bottom-6 -right-6 bg-black/50 backdrop-blur-xl py-2 px-4 rounded-xl border border-white/10 shadow-lg rotate-3 hover:rotate-0 transition-transform cursor-pointer">
              <span className="text-xs text-white/80">In partnership with</span>
              <div className="flex items-center mt-1">
                <div className="bg-white rounded-full h-6 w-6 flex items-center justify-center mr-2">
                  <span className="text-xs font-bold text-black">C</span>
                </div>
                <span className="text-white font-bold">CERN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
