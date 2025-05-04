"use client";

import React from "react";

export const Testimonials = () => {
  return (
    <section className="py-10 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-6 md:mb-0 md:max-w-2xl">
            <h2 className="heading-gradient text-3xl md:text-[54px] font-bold leading-tight mb-4 md:mb-6 px-0 md:px-2">
              What Our Satisfied
              {/* Use visible space for mobile, line break for desktop */}
              <span className="inline md:hidden"> </span>
              <br className="md:block hidden" /> 
              Customers Say
            </h2>
          </div>
          <div className="md:max-w-md">
            <p className="text-sm md:text-xl text-gray-300 max-w-3xl mx-auto px-0 md:px-4 font-['Manrope']">
              Hear from satisfied customers who&apos;ve transformed their
              businesses. Real experiences, real results - see what&apos;s
              possible with us.
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-8 md:mt-16">
          {/* Testimonial Card */}
          <div
            className="p-6 md:p-12 rounded-xl md:rounded-2xl relative w-full max-w-3xl"
            style={{
              background: "linear-gradient(to bottom right, #191624, #0a090d)",
            }}
          >
            <div className="flex flex-col items-center">
              {/* Quote Mark */}
              <div className="text-[#4B68FE] text-4xl md:text-6xl font-serif mb-4 md:mb-6">
                &ldquo;
              </div>

              {/* Testimonial Content */}
              <div className="mb-8 md:mb-12">
                <p className="text-base md:text-2xl text-white leading-relaxed text-center text-normal">
                  &quot;Grouple has transformed our restaurant operations with
                  seamless booking and payment processing. Our guests love the
                  personalized concierge service, and we&apos;ve seen more
                  repeat customers. The data insights help us tailor events,
                  boosting revenue and customer satisfaction.&quot;
                </p>
              </div>

              {/* Customer Info */}
              <div className="text-center">
                <h4 className="text-lg md:text-xl font-bold text-white">Prasad</h4>
                <p className="text-sm md:text-base text-gray-400">Manager, Bar Baar, Dubai, UAE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
