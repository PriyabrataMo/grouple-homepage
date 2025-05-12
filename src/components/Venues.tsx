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
    <section
      id="industries"
      className="w-full bg-black text-white py-8 md:py-16"
    >
      <div className="container mx-auto  pt-20">
        <div className="text-center mb-6 md:mb-8">
          <div className="inline-block mb-4 md:mb-6 px-3 md:px-4 py-1.5 md:py-2 bg-[#191624] rounded-full border border-gray-700">
            <span className="bg-gradient-to-r from-[#4B68FE] to-white bg-clip-text text-transparent font-medium text-sm md:text-base">
              Industries
            </span>
          </div>

          <div>
            <h2 className="heading-gradient text-[30px] md:text-[54px]  lg:text-5xl font-bold leading-tight tracking-[-2px] mb-4 md:mb-6 px-2">
              Built For Venues Just Like You
            </h2>
          </div>
          <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto px-4 pt-8 font-['Manrope']">
            Boost your revenue, streamline operations,
            {isMobile ? " " : <br />}
            and gain a competitive edge with Grouple.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Mobile scrollable tabs */}
          {isMobile ? (
            <div
              className="overflow-x-auto scrollbar-hide pb-4 mb-6"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              <div className="flex space-x-3 px-4 min-w-max">
                <div className="bg-[#191624] rounded-full p-1.5 inline-flex">
                  {venues.map((venue) => (
                    <button
                      key={venue.name}
                      onClick={() => setActiveVenue(venue)}
                      className={cn(
                        "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ease-in-out mx-1 whitespace-nowrap",
                        activeVenue.name === venue.name
                          ? "bg-[#2c2938] text-white"
                          : "text-white hover:bg-[#2c2938]"
                      )}
                      aria-label={`Show ${venue.name} information`}
                    >
                      {venue.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* Desktop tabs */
            <div className="flex justify-center mb-12 overflow-hidden pb-0">
              <div className="bg-[#191624] rounded-full p-2 inline-flex">
                {venues.map((venue) => (
                  <button
                    key={venue.name}
                    onClick={() => setActiveVenue(venue)}
                    className={cn(
                      "px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ease-in-out mx-1",
                      activeVenue.name === venue.name
                        ? "bg-[#2c2938] text-white"
                        : "text-white hover:bg-[#2c2938]"
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
          <div
            className="bg-[#161616] rounded-[48] overflow-hidden"
            style={{
              background: "linear-gradient(to bottom right, #191624, #0a090d)",
            }}
          >
            <div
              className="flex flex-col md:flex-row md:pl-10"
              style={{ height: "auto" }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeVenue.name}
                  className="w-full md:w-2/5 p-6 md:p-4 md:pl-8 flex flex-col justify-center"
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
                    className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 md:mb-0"
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

              <div className="w-full md:w-3/5 h-[300px] md:h-[400px] relative flex items-center justify-center p-4 md:p-4 md:pr-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeVenue.name}
                    className="w-full h-full relative flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    {isMobile ? (
                      <div className="h-[258px] w-[332px] max-w-[500px] rounded-[32] p-5 bg-[#242426]">
                        <div className="w-full h-full">
                          <Image
                            src={activeVenue.image}
                            alt={`${activeVenue.name} venue`}
                            width={441}
                            height={334}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              objectPosition: "center",
                            }}
                            className="rounded-[24]"
                            priority
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="h-[374px] w-[481px] max-w-[500px] rounded-2xl p-5 bg-[#242426]">
                        <div className="w-full h-full overflow-hidden rounded-xl">
                          <Image
                            src={activeVenue.image}
                            alt={`${activeVenue.name} venue`}
                            width={441}
                            height={334}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              objectPosition: "center",
                            }}
                            className="rounded-xl"
                            priority
                          />
                        </div>
                      </div>
                    )}
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
