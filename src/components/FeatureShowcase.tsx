"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Feature item component for each feature section
const FeatureItem = ({
  title,
  description,
  index,
  isVisible,
  imageSrc,
}: {
  title: string;
  description: string;
  index: number;
  isVisible: boolean;
  imageSrc: string;
}) => {
  // Alternate layout for even/odd indexes
  const isEven = index % 2 === 0;

  return (
    <div
      className={`flex flex-col ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } gap-8 items-center mb-20 md:mb-32 mt-8 md:mt-16
      ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } transition-all duration-1000 ease-out`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="flex-1 relative flex justify-center mb-6 md:mb-0">
        <div
          className="relative w-full md:w-[85%] max-w-[500px] rounded-3xl p-5"
          style={{
            background: "linear-gradient(to bottom right, #111111, #333333)",
            position: "relative",
            overflow: "hidden",
            border: "2px solid #000000",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.5)",
          }}
        >
          <motion.div
            className="absolute inset-0 z-0 rounded-3xl"
            style={{ padding: "1px" }}
          >
            <motion.div
              className="light-border w-full h-full absolute rounded-3xl"
              animate={{
                backgroundPosition: ["0% 0%", "200% 0%"],
              }}
              style={{
                backgroundSize: "200% 100%",
                backgroundImage:
                  "linear-gradient(90deg, transparent 0%, transparent 45%, rgba(255,255,255,0.15) 50%, transparent 55%, transparent 100%)",
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </motion.div>
          <div className="w-full h-full overflow-hidden rounded-2xl relative z-10 flex items-center justify-center">
            <div className="w-full aspect-[526/498] relative flex items-center justify-center">
              <Image
                src={imageSrc}
                alt={title}
                fill
                className="rounded-2xl p-2"
                style={{
                  objectFit: "fill",
                  objectPosition: "center",
                  maxHeight: "100%",
                  maxWidth: "100%",
                }}
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col px-4 md:px-4 max-w-lg">
        <h3 className="text-2xl md:text-[40px] heading-gradient font-bold text-white mb-4 md:mb-6">
          {title}
        </h3>
        <p className="text-sm md:text-[18px] text-normal mb-6 md:mb-8 font-['Manrope']">
          {description}
        </p>

        <motion.a
          href="#"
          className="text-white font-medium flex items-center justify-between gap-2 bg-black px md:px-6 py-2.5 md:py-3 rounded-lg border-2 border-[#4B68FE] hover:border-[#4B68FE]/80 transition-all shadow-[0_0_15px_rgba(74,106,254,0.5)] hover:shadow-[0_0_20px_rgba(74,106,254,0.7)] w-[160px] md:w-[180px]"
          whileHover={{ scale: 1.03 }}
        >
          Learn More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 md:h-5 md:w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 17l8-8M7 9h8v8"
            />
          </svg>
        </motion.a>
      </div>
    </div>
  );
};

export const FeatureShowcase = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => {
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current);
      }
    };
  }, []);

  const features = [
    {
      title: "Increase Group Sales",
      description:
        "Easily combine multiple offerings into tailored packages for your guests. Our intuitive dashboard helps you manage bundled products and services from a single place, enabling smarter and faster business decisions that drive more revenue.",
      icon: "chart-bar",
      imageSrc: "/features/1.svg",
    },
    {
      title: "Add Upsells Opportunities",
      description:
        "Offer optional extras like premium alcohol, hookah, special seating, or birthday cakes, right from the booking interface. Let guests personalize their experience while you increase your per-booking value effortlessly.",
      icon: "trending-up",
      imageSrc: "/features/2.svg",
    },
    {
      title: "Offer Dynamic Pricing",
      description:
        "Adapt your pricing in real-time based on demand, special occasions, or guest preferences. Collaborate effortlessly with your team to optimize rates, maximize profits, and deliver personalized experiences no matter where you are.",
      icon: "dollar-sign",
      imageSrc: "/features/3.svg",
    },
    {
      title: "Seamless Lead Generation",
      description:
        "Grouple captures rich, actionable lead data including guest count, preferences, package selection, and upsell choices, all structured and ready for your team to convert faster. No missed inquiries. No manual follow-ups.",
      icon: "users",
      imageSrc: "/features/4.svg",
    },
    {
      title: "Instant Scheduling Manager",
      description:
        "Manage bookings, prioritize tasks, and track progress all in real-time. Our intelligent scheduling dashboard helps you organize operations more efficiently, boost team productivity, and create seamless guest experiences every day.",
      icon: "calendar",
      imageSrc: "/features/5.svg",
    },
  ];

  // Render feature icons next to text
  //   const renderFeatureWithIcon = (text: string, icon: string) => (
  //     <div className="flex items-start gap-3 mb-4">
  //       <div className="mt-1 bg-blue-500/20 p-2 rounded-full">
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           className="h-5 w-5 text-blue-500"
  //           fill="none"
  //           viewBox="0 0 24 24"
  //           stroke="currentColor"
  //         >
  //           <path
  //             strokeLinecap="round"
  //             strokeLinejoin="round"
  //             strokeWidth={2}
  //             d="M5 13l4 4L19 7"
  //           />
  //         </svg>
  //       </div>
  //       <span className="text-gray-300">{text}</span>
  //     </div>
  //   );

  return (
    <section
      className="w-full flex flex-col items-center py-16 md:py-28 bg-black text-white overflow-hidden"
      ref={featuresRef}
    >
      <div className="container px-4 mx-auto">
        {/* Header with tag and title in two lines */}
        <div
          className={`text-center mb-8 md:mb-16 ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
          style={{ animationDelay: "200ms" }}
        >
          {/* Tag label */}
          <div className="inline-block mb-4 md:mb-6 px-3 md:px-4 py-1.5 md:py-2 bg-[#191624] rounded-full border border-gray-700">
            <span className="bg-gradient-to-r from-[#4B68FE] to-white bg-clip-text text-transparent font-medium text-sm md:text-base">
              Built-in Useful Features
            </span>
          </div>

          {/* Title in two lines */}
          <div>
            <h2 className="heading-gradient text-xl md:text-[54px]  lg:text-5xl font-bold leading-tight mb-4 md:mb-6 px-2">
              Simplify Your Workflow <br className="hidden md:block" />
              <span className="md:hidden">With Our Powerful Tools</span>
              <span className="hidden md:inline">With Our Powerful Tools</span>
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto px-4 pt-8 font-['Manrope']">
            Explore the advanced tools designed to streamline your processes,
            <br className="hidden md:block" />
            enhance guest experiences, and drive business growth effectively
          </p>
        </div>

        {/* Feature items */}
        <div className="mt-12 md:mt-20">
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              title={feature.title}
              description={feature.description}
              index={index}
              isVisible={isVisible}
              imageSrc={feature.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
