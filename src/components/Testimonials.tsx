"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Updated testimonial data to match screenshot
const testimonials = [
  {
    quote:
      "Grouple has transformed our group booking process. The seamless management system has boosted our efficiency and significantly improved our guest experience.",
    name: "Jospher Nadar",
    title: "Operations Specialist, Bar Baar",
    avatar: "/testimonial/jospher.png",
  },
  {
    quote:
      "Grouple has made organising and managing events so much easier. The software's comprehensive features allow us to handle multiple bookings efficiently, ensuring a smooth experience for both our clients and our team.",
    name: "Prasad",
    title: "Manager, Bar Baar, Dubai, UAE",
    avatar: "/testimonial/prasad.png",
  },
];

// Duplicate testimonials to ensure seamless looping
const duplicatedTestimonials = [
  ...testimonials,
  ...testimonials,
  ...testimonials,
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [showArrows, setShowArrows] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const arrowsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Mobile swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isMobile) return;
    setStartX(e.touches[0].clientX);
    setIsDragging(true);

    // Show arrows on touch and set timeout to hide them
    showNavigationArrows();
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !isMobile) return;
    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;

    if (Math.abs(diff) > 50) {
      setIsDragging(false);
      if (diff > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    showNavigationArrows();
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    showNavigationArrows();
  };

  // Show arrows and hide after a delay
  const showNavigationArrows = () => {
    setShowArrows(true);

    // Clear any existing timeout
    if (arrowsTimeoutRef.current) {
      clearTimeout(arrowsTimeoutRef.current);
    }

    // Set timeout to hide arrows after 2.5 seconds
    arrowsTimeoutRef.current = setTimeout(() => {
      setShowArrows(false);
    }, 2500);
  };

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (arrowsTimeoutRef.current) {
        clearTimeout(arrowsTimeoutRef.current);
      }
    };
  }, []);

  // Show arrows initially, then hide them after 2.5 seconds
  useEffect(() => {
    showNavigationArrows();
  }, []);

  // Animation for desktop infinite scroll
  useEffect(() => {
    if (isMobile) return; // Don't run auto-scroll on mobile

    const animateScroll = () => {
      if (containerRef.current) {
        if (
          containerRef.current.scrollLeft >=
          containerRef.current.scrollWidth / 2
        ) {
          containerRef.current.scrollLeft = 0;
        } else {
          // Scrolling speed
          containerRef.current.scrollLeft += 5;
        }
      }
    };

    // Using a 15ms interval for smoother performance across browsers
    const animationId = setInterval(animateScroll, 15);
    return () => clearInterval(animationId);
  }, [isMobile]);

  return (
    <section className="py-10 md:py-24 overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-4 mb-6 md:mb-10">
        <div className="flex flex-col text-center md:flex-row md:items-start md:justify-between">
          {/* Heading Section */}
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h2 className="heading-gradient text-[26px] md:text-[54px]  lg:text-5xl font-bold leading-tight mb-4 md:mb-6 px-2">
              What Our Satisfied
              <br />
              Customers Say
            </h2>
          </div>

          {/* Description Section */}
          <div className="md:max-w-md">
            <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto px-4 pt-8 font-['Manrope']">
              Hear from satisfied customers who&apos;ve transformed their
              businesses. Real experiences, real results - see what&apos;s
              possible with us.
            </p>
          </div>
        </div>
      </div>

      {/* Desktop Carousel */}
      <div className="hidden md:block relative">
        {/* Carousel Container */}
        <div
          ref={containerRef}
          className="flex overflow-x-scroll no-scrollbar scrollbar-hide"
          style={{
            scrollBehavior: "smooth",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
            width: "100%",
          }}
        >
          <div className="pl-4 sm:pl-8 md:pl-12 flex gap-4 sm:gap-6 md:gap-8 py-4">
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-4 sm:p-6 md:p-8 rounded-[20px] md:rounded-[40px] relative max-w-[300px] sm:max-w-[400px] md:max-w-[525px] flex-shrink-0 border border-[#27242c] md:min-h-[358px]"
                style={{
                  height: "auto",
                  minHeight: "280px",
                  background:
                    "linear-gradient(to bottom right, #191624, #0a090d)",
                }}
              >
                {/* Quote Mark at top */}
                <div className="pt-1 md:pt-2 mb-3 md:mb-6">
                  <Image
                    src="/testimonial/quote.svg"
                    alt="Quote"
                    width={16}
                    height={16}
                    className="text-[#4B68FE]"
                  />
                </div>

                {/* Testimonial Content */}
                <div className="mb-4 md:mb-8">
                  <p className="text-[14px] sm:text-[16px] md:text-[18px] font-['Manrope'] text-gray-300 leading-relaxed">
                    {testimonial.quote}
                  </p>
                </div>

                {/* Customer Info with Avatar */}
                <div className="flex items-center mt-auto">
                  <div>
                    <h4 className="text-[18px] sm:text-[20px] md:text-[24px] font-['Manrope'] font-semibold text-gray-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-[14px] sm:text-[16px] md:text-[18px] font-['Manrope'] text-gray-300">
                      {testimonial.title}
                    </p>
                  </div>
                  {testimonial.avatar && (
                    <div className="mr-4 pl-30">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div className="min-w-[16px] md:min-w-[32px]"></div>
          </div>
        </div>
      </div>

      {/* Mobile Carousel */}
      <div className="md:hidden relative px-2">
        <div
          className="relative overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={() => setIsDragging(false)}
          onClick={showNavigationArrows}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="p-6 sm:p-8 rounded-[32px] border border-[#27242c]"
              style={{
                background:
                  "linear-gradient(to bottom right, #191624, #0a090d)",
                minHeight: "400px", // Increased height for mobile cards
              }}
            >
              <div className="pt-2 mb-6">
                <Image
                  src="/testimonial/quote.svg"
                  alt="Quote"
                  width={24}
                  height={24}
                  className="text-[#4B68FE]"
                />
              </div>
              <p className="text-[18px] font-['Manrope'] text-gray-300 mb-8 leading-relaxed">
                {testimonials[currentIndex].quote}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <div>
                  <h4 className="text-[20px] font-['Manrope'] font-semibold text-gray-300">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-[16px] font-['Manrope'] text-gray-300">
                    {testimonials[currentIndex].title}
                  </p>
                </div>
                <Image
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  width={56}
                  height={56}
                  className="w-14 h-14 rounded-full"
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows - with fade animation */}
          <AnimatePresence>
            {showArrows && (
              <>
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.8 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2.5 rounded-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrev();
                  }}
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </motion.button>
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.8 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2.5 rounded-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNext();
                  }}
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.button>
              </>
            )}
          </AnimatePresence>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-6 space-x-2.5">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                showNavigationArrows();
              }}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                currentIndex === index ? "bg-white scale-110" : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
