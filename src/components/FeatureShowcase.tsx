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
      } gap-8 items-center mb-32 mt-16
      ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } transition-all duration-1000 ease-out`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      {/* Image column with animated border */}
      <div className="flex-1 relative flex justify-center">
        <div className="relative w-[90%] max-w-[500px]">
          {/* Animated border using Framer Motion */}
          <motion.div
            className="absolute inset-0 rounded-3xl border-2 border-black z-10"
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(255,255,255,0.8)",
                "0 0 0 5px rgba(255,255,255,0.4)",
                "0 0 0 10px rgba(255,255,255,0)",
              ],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />

          {/* Feature Image */}
          <div className="relative z-0 rounded-3xl overflow-hidden shadow-xl border-2 border-black">
            <Image
              src={imageSrc}
              alt={title}
              width={480}
              height={320}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>

      {/* Content column */}
      <div className="flex-1 flex flex-col">
        <h3 className="text-3xl font-bold text-white mb-6">{title}</h3>
        <p className="text text-gray-300 mb-8">{description}</p>

        {/* Call to action button */}
        <motion.a
          href="#"
          className="text-blue-500 font-medium flex items-center gap-2 w-fit bg-blue-900/20 px-6 py-3 rounded-full border border-blue-500/20 hover:border-blue-500 transition-all"
          whileHover={{ x: 5 }}
        >
          Learn More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
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
  const renderFeatureWithIcon = (text: string, icon: string) => (
    <div className="flex items-start gap-3 mb-4">
      <div className="mt-1 bg-blue-500/20 p-2 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <span className="text-gray-300">{text}</span>
    </div>
  );

  return (
    <section
      className="w-6xl  flex flex-col items-center py-28 bg-black text-white overflow-hidden"
      ref={featuresRef}
    >
      <div className="container px-4 mx-auto">
        {/* Header with tag and title in two lines */}
        <div
          className={`text-center mb-16 ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
          style={{ animationDelay: "200ms" }}
        >
          {/* Tag label */}
          <div className="inline-block mb-6 px-4 py-2 bg-blue-500/20 rounded-full">
            <span className="text-blue-500 font-medium">
              Built-in Useful Features
            </span>
          </div>

          {/* Title in two lines */}
          <h2 className="text-2xl md:text-5xl lg:text-5xl font-bold mb-6 leading-tight">
            Simplify Your Workflow
            <br />
            With Our Powerful Tools
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the advanced tools designed to streamline your processes,
            <br className="hidden md:block" />
            enhance guest experiences, and drive business growth effectively
          </p>
        </div>

        {/* Feature items */}
        <div className="mt-20">
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
