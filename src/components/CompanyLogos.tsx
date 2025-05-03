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
    const scrollSpeed = 0.5; // Adjust for faster/slower scrolling

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

    return () => cancelAnimationFrame(animation);
  }, []);

  return (
    <div className="w-4xl overflow-hidden py-6 mt-2 mb-8 pt-10">
      <p className="text-center text-sm text-gray-400 mb-6">
        Trusted by top companies
      </p>
      <div
        ref={containerRef}
        className="flex items-center space-x-10 overflow-hidden whitespace-nowrap pt-6"
      >
        {allLogos.map((logo, index) => (
          <div key={index} className="flex-shrink-0 h-[40px] relative">
            <Image
              src={logo}
              alt="Partner logo"
              width={100}
              height={30}
              className="h-full w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
