"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Top row features (first 8)
const topRowFeatures = [
  { name: "Invite & RSVP", icon: "/carousel/Invite & RSVP.svg" },
  { name: "Booking Scheduler", icon: "/carousel/Booking Scheduler.svg" },
  {
    name: "Guest Relations Management",
    icon: "/carousel/Guest Relations Management.svg",
  },
  { name: "Up-Sell Add-On", icon: "/carousel/Up-Sell Add-On .svg" },
  { name: "Data Security", icon: "/carousel/Data Security.svg" },
  { name: "Branded Microsite", icon: "/carousel/Branded Microsite.svg" },
  { name: "Dynamic Pricing", icon: "/carousel/Dynamic Pricing.svg" },
  { name: "Minimum Spent", icon: "/carousel/Minimum Spent .svg" },
];

// Bottom row features (last 7)
const bottomRowFeatures = [
  { name: "Group Packages", icon: "/carousel/package (14).svg" },
  { name: "Resource Allocation", icon: "/carousel/Resource Allocation.svg" },
  { name: "Automated Workflows", icon: "/carousel/Automated Workflows.svg" },
  {
    name: "Automated Confirmations",
    icon: "/carousel/Automated Confirmations.svg",
  },
  { name: "Client Portal", icon: "/carousel/Client Portal.svg" },
  { name: "Reservation Tracking", icon: "/carousel/Reservation Tracking.svg" },
  { name: "Smart Invoicing", icon: "/carousel/Smart Invoicing.svg" },
];

export const FeaturePills = () => {
  // Animation speed (higher = slower)
  const durationMultiplier = 6;

  // Estimate average pill width for animation calculation
  const averagePillWidth = 220; // pixels, includes margin

  // Use a smaller pill width on mobile
  // const mobilePillWidth = 180; // pixels, including margin

  // Function to render a single row of pills
  const renderRow = (features: typeof topRowFeatures, rowIndex: number) => {
    // Create multiple copies for continuous scrolling
    const repeatedItems = [...features, ...features, ...features, ...features];

    // For the second row (rowIndex 1), we'll set the initial position to the negative end position
    // This makes it appear like it's continuously scrolling from right to left
    const startPosition =
      rowIndex === 1 ? -(features.length * averagePillWidth) : 0;
    const endPosition =
      rowIndex === 1 ? 0 : -(features.length * averagePillWidth);

    return (
      <motion.div
        key={rowIndex}
        className="flex whitespace-nowrap py-2"
        animate={{
          x: [startPosition, endPosition],
        }}
        transition={{
          x: {
            duration: features.length * durationMultiplier,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          },
        }}
      >
        {repeatedItems.map((feature, index) => (
          <div
            key={`${rowIndex}-${index}`}
            className="mx-2 sm:mx-3 px-3 sm:px-5 py-2 sm:py-3 bg-gradient-to-r from-gray-800/60 to-gray-700/40 rounded-full border border-gray-700/30 flex items-center shadow-md shrink-0"
          >
            <div className="mr-2 sm:mr-3 p-1 rounded-full bg-white flex items-center justify-center shadow-inner">
              <Image
                src={feature.icon}
                alt={`${feature.name} icon`}
                width={20}
                height={20}
                className="h-4 w-4 sm:h-5 sm:w-5"
                unoptimized
              />
            </div>
            <span className="text-gray-300 font-medium text-xs sm:text-sm tracking-wide">
              {feature.name}
            </span>
          </div>
        ))}
      </motion.div>
    );
  };

  return (
    <section className="relative w-full max-w-7xl mx-auto py-40 sm:py-16 md:py-40 px-4 bg-gradient-to-br from-[#191624] to-[#0a090d] border border-gray-800 rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col justify-center items-center">
      <div className="mb-8 sm:mb-12 md:mb-16 text-center">
        <h2 className="heading-gradient text-lg sm:text-xl font-medium mb-4 sm:mb-6 px-2 pt-10">
          Enhance your Guest Experience with powerful features using Grouple.
        </h2>
      </div>
      {/* Top row features mask */}
      <div className="w-5xl flex flex-col items-center">
        <div className="relative mask-fade-horizontal mb-4 sm:mb-8 w-full overflow-hidden flex justify-center">
          {renderRow(topRowFeatures, 0)}
        </div>
        <div className="relative mask-fade-horizontal w-full overflow-hidden flex justify-center">
          {renderRow(bottomRowFeatures, 1)}
        </div>
      </div>
    </section>
  );
};
