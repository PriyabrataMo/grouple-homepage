"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

const Demo = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set initial canvas size
    const handleResize = () => {
      const container = canvas.parentElement;
      if (container) {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
      }
    };

    handleResize();

    // Particle class for animation
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor(
        x: number,
        y: number,
        size: number,
        speedX: number,
        speedY: number,
        color: string
      ) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speedX = speedX;
        this.speedY = speedY;
        this.color = color;
      }

      update() {
        if (!canvas) return;

        this.x += this.speedX;
        this.y += this.speedY;

        // Improve boundary handling to avoid particles getting stuck at edges
        if (this.x <= 0 || this.x >= canvas.width) {
          this.speedX *= -1;
          this.x = Math.max(0, Math.min(this.x, canvas.width));
        }
        if (this.y <= 0 || this.y >= canvas.height) {
          this.speedY *= -1;
          this.y = Math.max(0, Math.min(this.y, canvas.height));
        }
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create particles with performance optimization
    const particlesArray: Particle[] = [];
    // Adjust number of particles based on screen size for better performance
    const numberOfParticles = Math.min(
      30,
      Math.floor((canvas.width * canvas.height) / 25000)
    );

    for (let i = 0; i < numberOfParticles; i++) {
      const size = Math.random() * 3;
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const speedX = (Math.random() - 0.5) * 0.5;
      const speedY = (Math.random() - 0.5) * 0.5;
      const color = "rgba(66, 133, 244, 0.5)";

      particlesArray.push(new Particle(x, y, size, speedX, speedY, color));
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesArray.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      // Draw lines between particles that are close to each other
      connectParticles();

      requestAnimationFrame(animate);
    };

    // Connect particles with lines if they are close enough
    const connectParticles = () => {
      if (!ctx) return;

      // Add performance optimization - only check particles within a certain distance
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;

          // Quick distance check before expensive sqrt calculation
          if (Math.abs(dx) < 100 && Math.abs(dy) < 100) {
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
              ctx.strokeStyle = `rgba(66, 133, 244, ${0.2 - distance / 500})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
              ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
              ctx.stroke();
            }
          }
        }
      }
    };

    animate();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="w-full py-24 flex justify-center">
      {/* Container with spacing */}
      <div className="w-full max-w-6xl px-4 mx-auto">
        {/* Background container with fixed height */}
        <div className="relative rounded-xl overflow-hidden" style={{ height: "600px" }}>
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/background/nextbg.jpeg"
              alt="Background"
              fill
              style={{ objectFit: "cover" }}
              className="brightness-[0.3]"
            />
          </div>

          {/* Particle canvas */}
          <div className="absolute inset-0 z-10">
            <canvas ref={canvasRef} className="w-full h-full" />
          </div>

          {/* Content */}
          <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
            <div className="mb-8">
              <span className="bg-blue-600 bg-opacity-30 text-blue-400 px-6 py-2 rounded-full text-sm">
                We've Released a New Feature
              </span>
            </div>

            <h1 className="text-white text-4xl md:text-6xl font-bold mb-6 leading-tight">
              The Next-Generation Group
              <br />
              Booking Management Software
            </h1>

            <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-3xl mx-auto">
              Unveil our latest innovation on Grouple,
              <br />
              delivering unmatched capabilities
              <br />
              to elevate your guest experience.
            </p>

            <div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all">
                Book A Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
