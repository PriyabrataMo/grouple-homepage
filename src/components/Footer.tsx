"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 sm:py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {/* Brand Section */}
            <div className="space-y-4">
              <Link href="/" className="flex items-center">
                <h1 className="text-[#4070ff] text-2xl sm:text-3xl font-bold">
                  grouple
                </h1>
              </Link>
              <p className="text-gray-400 mt-3 sm:mt-4 text-sm sm:text-base">
                Designed with love, for groups to
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                create memories together.
              </p>
              <p className="text-gray-400 mt-2 text-sm sm:text-base">
                Ghosh Technology Pvt. Ltd
              </p>

              {/* Security & Cloud Partners */}
              <div className="flex items-center space-x-4 sm:space-x-6 pt-4 sm:pt-6">
                <Image
                  src="https://framerusercontent.com/images/p2qiCvbNoCK6ZMOgkUTt12YWPjU.png"
                  alt="Framer Image 1"
                  width={70}
                  height={35}
                  className="object-contain w-[60px] sm:w-[80px]"
                />
                <Image
                  src="https://framerusercontent.com/images/Y1A6CWZo7xXVEypMQTUw2HVbtk.png"
                  alt="Framer Image 2"
                  width={70}
                  height={35}
                  className="object-contain w-[60px] sm:w-[80px]"
                />
                <Image
                  src="https://framerusercontent.com/images/qrtuYQXMiNQdShz1FpnvxPUxg18.png?scale-down-to=512"
                  alt="Framer Image 3"
                  width={70}
                  height={35}
                  className="object-contain w-[60px] sm:w-[80px]"
                />
              </div>
            </div>

            {/* Company & Features Links */}
            <div className="grid grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-0">
              <div>
                <h3 className="text-gray-400 font-medium mb-3 sm:mb-4 text-sm sm:text-base">
                  Company
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  <li>
                    <Link
                      href="/features"
                      className="text-gray-400 hover:text-white transition text-sm sm:text-base"
                    >
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/pricing"
                      className="text-gray-400 hover:text-white transition text-sm sm:text-base"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries"
                      className="text-gray-400 hover:text-white transition text-sm sm:text-base"
                    >
                      Industries
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-gray-400 hover:text-white transition text-sm sm:text-base"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Resources Links */}
              <div>
                <h3 className="text-gray-400 font-medium mb-3 sm:mb-4 text-sm sm:text-base">
                  Resources
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  <li>
                    <Link
                      href="/demo"
                      className="text-gray-400 hover:text-white transition text-sm sm:text-base"
                    >
                      Demo Video
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/why-grouple"
                      className="text-gray-400 hover:text-white transition text-sm sm:text-base"
                    >
                      Why Grouple
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Copyright and Social Links */}
          <div className="border-t border-gray-800 mt-10 sm:mt-16 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center">
            <div className="text-gray-500 text-xs sm:text-sm">
              2025 Grouple. All rights reserved
            </div>
            <div className="flex space-x-5 sm:space-x-6 mt-5 sm:mt-0">
              <Link href="https://linkedin.com" aria-label="LinkedIn">
                <svg
                  className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 hover:text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>
              <Link href="https://instagram.com" aria-label="Instagram">
                <svg
                  className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 hover:text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
              <Link href="https://twitter.com" aria-label="Twitter">
                <svg
                  className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 hover:text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
