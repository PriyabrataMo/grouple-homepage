"use client";

import React from "react";

export const Hero = () => {
  return (
    <section className="flex flex-col items-center text-center mb-8 sm:mb-12 px-4">
      {/* <div className="bg-[#1C1C1C] rounded-full py-1 px-2.5 sm:px-3 flex items-center gap-1.5 sm:gap-2 mb-4 sm:mb-6 text-xs sm:text-sm">
        <span className="bg-[#4B68FE] text-white text-[10px] sm:text-xs font-medium px-1.5 sm:px-2 py-[2px] rounded-full">
          NEW
        </span>
        <span className="text-white whitespace-nowrap">
          We&apos;ve just released new features
        </span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="hidden sm:block"
        >
          <path
            d="M6 4L10 8L6 12"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div> */}
      <div className="text-base sm:text-lg mb-6 sm:mb-10 text-[#bobobo] max-w-xl px-2 tracking-widest pt-10">
        FOR HOSPITALITY VENUES
      </div>
      <h1 className="heading-gradient text-3xl sm:text-4xl md:text-[64px] font-[650] mb-4 sm:mb-6 leading-tight px-2 tracking-[-2px]">
        Your Concierge Style
        <br className="hidden sm:block" />
        <span className="sm:hidden"> </span>
        Group Booking Platform!
      </h1>
      <p className="text-[18px] mb-6 sm:mb-10 text-[#bobobo] max-w-xl px-2 font-['Manrope']">
        Drive revenue and streamline group and private bookings
      </p>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-md">
        <button
          className="cursor-pointer bg-[#4B68FE] rounded-lg text-white font-medium hover:bg-[#4B68FE]/90 transition-colors flex items-center justify-center w-full"
          aria-label="Book A Free Demo"
          onClick={() =>
            window.open("https://calendly.com/rohit-grouple", "_blank")
          }
        >
          Book A Free Demo
        </button>

        <button
          className="cursor-pointer bg-transparent text-white px-5 rounded-full font-medium transition-all flex items-center justify-center gap-1.5 sm:gap-2 w-full group"
          aria-label="Product Video"
          onClick={() => {
            const modal = document.createElement("div");
            modal.className =
              "fixed inset-0 bg-black/80 flex items-center justify-center z-50";
            modal.innerHTML = `
              <div class="relative w-full max-w-3xl mx-4">
          <button class="absolute -top-10 right-0 text-white hover:text-gray-300">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 6L6 18M6 6l12 12" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </button>
          <div class="relative pb-[56.25%] h-0">
            <iframe 
              class="absolute top-0 left-0 w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/603RFvU3Uz0?autoplay=1" 
              title="Product Video"
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </iframe>
          </div>
              </div>
            `;
            document.body.appendChild(modal);
            const closeButton = modal.querySelector("button");
            if (closeButton) {
              closeButton.addEventListener("click", () => {
                document.body.removeChild(modal);
              });
            }
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="sm:w-4 sm:h-4"
          >
            <path d="M3 2L13 8L3 14V2Z" fill="white" />
          </svg>
          <span className="transition-transform group-hover:scale-105">
            Product Video
          </span>
        </button>
      </div>
      <div className="relative pt-14 sm:pt-20 w-7xl overflow-hidden px-4 sm:px-0">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/30598103c057f77e1782adc8ded47aff0365c9c6?placeholderIfAbsent=true"
          alt="Platform Interface on Tablet"
          className="w-full max-w-6xl h-auto rounded-md sm:rounded-lg mx-auto"
        />
      </div>
    </section>
  );
};
