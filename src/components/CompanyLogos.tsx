"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

export const CompanyLogos = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // List of company logos with simplified sequential names
  const logos = [
    "/company/icons/1.png",
    "/company/icons/2.png",
    "/company/icons/3.png",
    "/company/icons/4.png",
    "/company/icons/5.png",
    "/company/icons/6.png",
    "/company/icons/7.png",
    "/company/icons/8.png",
    "/company/icons/9.png",
    "/company/icons/10.png",
    "/company/icons/11.png",
    "/company/icons/12.png",
  ];

  // Clone the logos array to create a seamless infinite scroll
  const allLogos = [...logos, ...logos];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scrollPosition = 0;
    // Adjust scroll speed based on screen width for better mobile experience
    const isMobile = window.innerWidth < 768;
    const scrollSpeed = isMobile ? 0.5 : 0.5; // Slower on mobile

    const scroll = () => {
      if (!container) return;

      scrollPosition += scrollSpeed;

      // Reset position when we've scrolled through the first set of logos
      if (scrollPosition >= container.scrollWidth / 2) {
        scrollPosition = 0;
      }

      container.scrollLeft = scrollPosition;
      requestAnimationFrame(scroll);
    };

    const animation = requestAnimationFrame(scroll);

    // Update scroll speed on resize
    const handleResize = () => {
      scrollPosition = container.scrollLeft;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animation);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full max-w-5xl overflow-hidden py-3 sm:py-6 mt-2 mb-4 sm:mb-8">
      <div
        ref={containerRef}
        className="flex items-center space-x-5 sm:space-x-10 overflow-hidden whitespace-nowrap pt-3 sm:pt-6"
      >
        {allLogos.map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 h-[40px] w-[70px] sm:w-[100px] relative flex items-center justify-center"
          >
            <Image
              src={logo}
              alt="Partner logo"
              width={90}
              height={40}
              className="max-h-[40px] max-w-[70px] sm:max-w-[100px] w-auto object-contain "
            />
          </div>
        ))}
      </div>
    </div>
  );
};
