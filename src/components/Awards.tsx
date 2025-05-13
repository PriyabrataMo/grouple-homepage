"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Awards = () => {
  const awards = [
    {
      id: 1,
      image: "/awards/1.png",
    },
    {
      id: 2,
      image: "/awards/2.png",
    },
    {
      id: 3,
      image: "/awards/3.png",
    },
    {
      id: 4,
      image: "/awards/4.png",
    },
  ];

  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  // Check if viewport is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkMobile);

    // Clean up
    return () => {
      window.removeEventListener("resize", checkMobile);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // Auto-scroll carousel on mobile
  useEffect(() => {
    if (isMobile) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % awards.length);
      }, 3000); // Change slide every 3 seconds
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isMobile, awards.length]);

  // Navigate to a specific slide
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % awards.length);
    }, 3000);
  };

  // Touch handlers for manual swiping
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!isMobile || !carouselRef.current) return;

    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    // setScrollLeft(carouselRef.current.scrollLeft);

    // Clear auto-scrolling when user interacts
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isMobile || !carouselRef.current) return;

    setIsDragging(true);
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    // setScrollLeft(carouselRef.current.scrollLeft);

    // Clear auto-scrolling when user interacts
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handleMouseUp = () => {
    if (!isMobile) return;

    setIsDragging(false);

    // Restart auto-scrolling after user interaction
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % awards.length);
    }, 3000);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current || !isMobile) return;

    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll faster with multiplier

    // Detect direction and calculate next index
    if (Math.abs(walk) > 50) {
      const nextIndex =
        walk > 0
          ? (currentIndex - 1 + awards.length) % awards.length
          : (currentIndex + 1) % awards.length;
      setCurrentIndex(nextIndex);
      setIsDragging(false);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !carouselRef.current || !isMobile) return;

    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll faster with multiplier

    // Detect direction and calculate next index
    if (Math.abs(walk) > 50) {
      const nextIndex =
        walk > 0
          ? (currentIndex - 1 + awards.length) % awards.length
          : (currentIndex + 1) % awards.length;
      setCurrentIndex(nextIndex);
      setIsDragging(false);
    }
  };

  // Function to handle next/prev navigation
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % awards.length);
    restartInterval();
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + awards.length) % awards.length
    );
    restartInterval();
  };

  const restartInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % awards.length);
    }, 3000);
  };

  return (
    <section className="py-12 md:py-24 w-full overflow-hidden">
      <div className="container mx-auto px-4 content-center">
        <div className="max-w-7xl mx-auto rounded-[45] bg-gradient-to-br from-[#191624] to-[#0a090d] p-4 md:p-10 content-center justify-center">
          <div className="flex justify-center items-center">
            <h2 className="heading-gradient text-lg sm:text-xl font-medium mb-2 sm:mb-6 px-2 pt-6 md:pt-10 text-center">
              Awards and recognition
            </h2>
          </div>

          {/* Desktop View (Grid) */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {awards.map((award) => (
              <div key={award.id} className="flex items-center justify-center">
                <div className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 relative">
                  <Image
                    src={award.image}
                    alt="Award"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Mobile View (Carousel) - Smaller size */}
          <div className="md:hidden">
            <div
              className="relative h-36 sm:h-44 overflow-hidden"
              ref={carouselRef}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onMouseMove={handleMouseMove}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleMouseUp}
              onTouchMove={handleTouchMove}
            >
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex justify-center items-center"
                >
                  <div className="w-36 h-36 sm:w-44 sm:h-44 relative">
                    <Image
                      src={awards[currentIndex].image}
                      alt={`Award ${currentIndex + 1}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation arrows - Smaller and better positioned for mobile */}
              <button
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 rounded-r-full p-1.5 z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrev();
                }}
                aria-label="Previous award"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-white"
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
              </button>
              <button
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 rounded-l-full p-1.5 z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                aria-label="Next award"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-white"
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
              </button>
            </div>

            {/* Carousel Indicators - Moved up closer to content */}
            <div className="flex justify-center mt-2 space-x-2 pb-2">
              {awards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                    currentIndex === index
                      ? "bg-white scale-125"
                      : "bg-gray-500"
                  }`}
                  aria-label={`Go to award ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
