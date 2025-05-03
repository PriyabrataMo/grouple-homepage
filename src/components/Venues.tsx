"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

interface VenueType {
  name: string;
  icon: string;
  image: string;
  description: string;
}

export default function Venues() {
  const venues: VenueType[] = [
    {
      name: "Restaurants",
      icon: "/industries/Restaurants.svg",
      image: "/industries/restaurant.png",
      description:
        "Easily manage group bookings, optimize table assignments, and offer tailored dining packages that elevate the guest experience and boost efficiency.",
    },
    {
      name: "Bars & Pubs",
      icon: "/industries/barandpub.svg",
      image: "/industries/bars.jpg",
      description:
        "Streamline reservations, manage events, and create special packages that keep your bars and pubs filled with happy patrons night after night.",
    },
    {
      name: "Nightclub",
      icon: "/industries/Nightclub.svg",
      image: "/industries/nightclub.png",
      description:
        "Take control of VIP bookings, table service, and event planning to maximize revenue and create unforgettable nightlife experiences.",
    },
    {
      name: "Sports Hospitality",
      icon: "/industries/hospita.svg",
      image: "/industries/hospitality.jpg",
      description:
        "Manage corporate boxes, special event packages, and hospitality suites with ease to deliver premium experiences for sports enthusiasts.",
    },
  ];

  const [activeVenue, setActiveVenue] = useState<VenueType>(venues[0]);
  const [isMobile, setIsMobile] = useState(false);

  // Check if screen is mobile on mount and when resized
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  return (
    <section className="w-full bg-black text-white py-8 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 md:mb-8">
          <div className="inline-block mb-4 md:mb-6 px-3 py-1.5 md:px-4 md:py-2 bg-gray-800 rounded-full border border-gray-700">
            <span className="bg-gradient-to-r from-[#4A6AFE] to-white bg-clip-text text-transparent font-medium text-sm md:text-base">
              Industries
            </span>
          </div>

          <div>
            <h2 className="heading-gradient text-xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 md:mb-6">
              Built For Venues Just Like You
            </h2>
          </div>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto">
            Boost your revenue, streamline operations,
            {isMobile ? " " : <br />}
            and gain a competitive edge with Grouple.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Mobile grid tabs for phones */}
          {isMobile ? (
            <div className="grid grid-cols-2 gap-3 mb-6">
              {venues.map((venue) => (
                <button
                  key={venue.name}
                  onClick={() => setActiveVenue(venue)}
                  className={cn(
                    "flex flex-col items-center justify-center p-4 rounded-xl border transition-all duration-200",
                    activeVenue.name === venue.name
                      ? "bg-[#292929] border-[#4A6AFE] shadow-lg"
                      : "bg-[#1a1a1a] border-gray-800"
                  )}
                  aria-label={`Show ${venue.name} information`}
                >
                  <div
                    className={cn(
                      "rounded-full p-2.5 mb-2 flex items-center justify-center",
                      activeVenue.name === venue.name
                        ? "bg-[#4A6AFE]/30"
                        : "bg-gray-800/30"
                    )}
                  >
                    <Image
                      src={venue.icon}
                      alt={`${venue.name} icon`}
                      width={22}
                      height={22}
                    />
                  </div>
                  <span
                    className={cn(
                      "font-medium text-sm text-center",
                      activeVenue.name === venue.name
                        ? "text-white"
                        : "text-gray-300"
                    )}
                  >
                    {venue.name}
                  </span>
                </button>
              ))}
            </div>
          ) : (
            /* Desktop tabs */
            <div className="flex justify-center mb-12 overflow-hidden pb-0">
              <div className="bg-[#161616] rounded-full p-2 inline-flex">
                {venues.map((venue) => (
                  <button
                    key={venue.name}
                    onClick={() => setActiveVenue(venue)}
                    className={cn(
                      "px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ease-in-out mx-1",
                      activeVenue.name === venue.name
                        ? "bg-[#292929] text-white"
                        : "text-white hover:bg-[#222222]"
                    )}
                    aria-label={`Show ${venue.name} information`}
                  >
                    {venue.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Responsive venue display */}
          <div className="bg-[#161616] rounded-3xl overflow-hidden">
            <div
              className="flex flex-col md:flex-row"
              style={{ height: isMobile ? "auto" : "500px" }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeVenue.name}
                  className="w-full md:w-1/3 bg-[#121212] p-6 md:p-8 flex flex-col justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <motion.div
                    className="bg-white bg-opacity-10 rounded-full p-3 md:p-4 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mb-4 md:mb-6 glow-effect"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{
                      duration: 0.25,
                      ease: "easeInOut",
                      delay: 0.05,
                    }}
                    style={{
                      boxShadow: "0 0 15px rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    <Image
                      src={activeVenue.icon}
                      alt={`${activeVenue.name} icon`}
                      width={isMobile ? 24 : 36}
                      height={isMobile ? 24 : 36}
                    />
                  </motion.div>
                  <motion.h3
                    className="heading-gradient text-xl md:text-2xl font-bold mb-3 md:mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.25,
                      ease: "easeInOut",
                      delay: 0.1,
                    }}
                  >
                    {activeVenue.name}
                  </motion.h3>
                  <motion.p
                    className="text-gray-400 text-sm md:text-base leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.25,
                      ease: "easeInOut",
                      delay: 0.15,
                    }}
                  >
                    {activeVenue.description}
                  </motion.p>
                </motion.div>
              </AnimatePresence>
              <div className="w-full md:w-2/3 h-[250px] md:h-full relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeVenue.name}
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="h-full rounded-b-3xl md:rounded-b-none md:rounded-r-3xl overflow-hidden">
                      <Image
                        src={activeVenue.image}
                        alt={`${activeVenue.name} venue`}
                        fill
                        sizes="(max-width: 768px) 100vw, 66vw"
                        style={{
                          objectFit: "cover",
                          objectPosition: "center",
                        }}
                        priority
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
