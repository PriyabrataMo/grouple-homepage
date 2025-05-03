"use client";

import React from "react";

export const Hero = () => {
  return (
    <section className="flex flex-col items-center text-center mb-12">
      <div className="bg-[#1C1C1C] rounded-full py-1 px-3 flex items-center gap-2 mb-6">
        <span className="bg-[#536BFF] text-white text-xs font-medium px-2 py-[2px] rounded-full">
          NEW
        </span>
        <span className="text-sm text-white">
          We&apos;ve just released new features
        </span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 4L10 8L6 12"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <h1 className="text-5xl font-bold mb-6 leading-tight max-md:text-4xl max-sm:text-3xl">
        Your Concierge Style
        <br />
        Group Booking Platform!
      </h1>

      <p className="text-lg mb-10 text-[#c5c5c5] max-w-xl">
        Drive revenue and streamline group and private bookings
      </p>

      <div className="flex gap-4 max-md:flex-col max-md:gap-4">
        <button
          className="cursor-pointer bg-[#536BFF] text-white px-6 py-3 rounded-full font-medium hover:bg-[#4258db] transition-colors flex items-center justify-center"
          aria-label="Book A Free Demo"
        >
          Book A Free Demo
        </button>

        <button
          className="cursor-pointer bg-transparent text-white px-6 py-3 rounded-full font-medium border border-transparent hover:border-white transition-colors flex items-center justify-center gap-2"
          aria-label="Product Video"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="8" cy="8" r="7" stroke="white" strokeWidth="1.5" />
            <path d="M10 8L7 10V6L10 8Z" fill="white" />
          </svg>
          Product Video
        </button>
      </div>
      <div className="relative pt-10">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/30598103c057f77e1782adc8ded47aff0365c9c6?placeholderIfAbsent=true"
          alt="Platform Interface on Tablet"
          className="w-full max-w-[900px] h-auto rounded-lg"
        />
      </div>
    </section>
  );
};
