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
    const isMobile = window.innerWidth < 768;
    const numberOfParticles = Math.min(
      isMobile ? 30 : 60, // Fewer particles on mobile
      Math.floor((canvas.width * canvas.height) / (isMobile ? 25000 : 15000)) // Adjust density based on device
    );

    for (let i = 0; i < numberOfParticles; i++) {
      const size = Math.random() * 2 + 0.5; // Smaller, more dot-like size
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const speedX = (Math.random() - 0.5) * 1.5; // 3x faster horizontal speed
      const speedY = (Math.random() - 0.5) * 1.5; // 3x faster vertical speed
      const color = "rgba(74, 106, 254, 0.6)"; // #4A6AFE with opacity

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
          if (Math.abs(dx) < 80 && Math.abs(dy) < 80) {
            // Reduced connection distance
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 80) {
              // Reduced connection distance
              ctx.strokeStyle = `rgba(74, 106, 254, ${0.15 - distance / 800})`; // Changed to match particle color
              ctx.lineWidth = 0.8; // Thinner lines
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
    <section className="w-full py-12 sm:py-16 md:py-24 flex justify-center">
      {/* Container with spacing */}
      <div className="w-full max-w-6xl px-4 mx-auto">
        {/* Background container with 3D effect and border */}
        <div
          className="relative rounded-xl overflow-hidden shadow-[0_0_50px_rgba(74,106,254,0.3)] border border-[#4A6AFE]/30"
          style={{
            height: "500px",
            transform: "perspective(1000px) rotateX(2deg)",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Enhanced background with stronger blue flow effect */}
          <div className="absolute inset-0 z-0">
            {/* Primary glow elements with higher opacity */}
            <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[40%] bg-[#4A6AFE] opacity-25 blur-[80px] transform rotate-[-15deg] animate-pulse" />
            <div
              className="absolute top-[60%] right-[-5%] w-[50%] h-[40%] bg-[#4A6AFE] opacity-25 blur-[80px] transform rotate-[30deg] animate-pulse"
              style={{ animationDelay: "1.5s" }}
            />
            <div
              className="absolute top-[40%] left-[-10%] w-[40%] h-[30%] bg-[#4A6AFE] opacity-30 blur-[70px] transform rotate-[10deg] animate-pulse"
              style={{ animationDelay: "0.7s" }}
            />

            {/* Additional glow elements for more visible effect */}
            <div
              className="absolute top-[10%] right-[5%] w-[30%] h-[25%] bg-[#4A6AFE] opacity-20 blur-[60px] transform rotate-[45deg] animate-pulse"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="absolute bottom-[-10%] left-[30%] w-[40%] h-[30%] bg-[#4A6AFE] opacity-25 blur-[70px] transform rotate-[-5deg] animate-pulse"
              style={{ animationDelay: "0.3s" }}
            />

            {/* Background image */}
            <Image
              src="/background/nextbg.jpeg"
              alt="Background"
              fill
              style={{ objectFit: "cover" }}
              className="brightness-[0.25]"
            />
          </div>

          {/* Border highlight effect */}
          <div
            className="absolute inset-0 z-5 rounded-xl border border-[#4A6AFE]/30 border-opacity-50"
            style={{
              boxShadow: "inset 0 0 30px rgba(74,106,254,0.3)",
            }}
          />

          {/* Particle canvas - increased z-index from 10 to 15 */}
          <div className="absolute inset-0 z-15" style={{ zIndex: 15 }}>
            <canvas ref={canvasRef} className="w-full h-full" />
          </div>

          {/* Content - with subtle 3D transform - increased z-index from 20 to 25 */}
          <div
            className="relative z-25 h-full flex flex-col items-center justify-center text-center px-4"
            style={{
              transform: "translateZ(20px)",
              textShadow: "0 2px 10px rgba(0,0,0,0.5)",
              zIndex: 25,
            }}
          >
            <div className="inline-block mb-4 sm:mb-6 px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-800 rounded-full border border-gray-700">
              <span className="bg-gradient-to-r from-blue-800 to-white bg-clip-text text-transparent font-medium text-xs sm:text-sm">
                We&apos;ve Released a New Feature
              </span>
            </div>

            <h1 className="heading-gradient text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight px-2">
              The Next-Generation Group
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              Booking Management Software
            </h1>

            <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 md:mb-12 max-w-3xl mx-auto px-2">
              Unveil our latest innovation on Grouple,
              <br className="hidden sm:block" />
              delivering unmatched capabilities
              <br className="hidden sm:block" />
              to elevate your guest experience.
            </p>

            <div>
              <button
                className="bg-[#4A6AFE] hover:bg-[#3a59e0] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-medium transition-all cursor-pointer shadow-lg transform hover:scale-105 duration-200"
                onClick={() =>
                  window.open("https://calendly.com/rohit-grouple", "_blank")
                }
              >
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
