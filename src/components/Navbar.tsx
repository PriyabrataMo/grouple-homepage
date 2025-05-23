"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

type NavItem = {
  label: string;
  href: string;
  hasDropdown?: boolean;
};

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu when screen size becomes larger than mobile breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navItems: NavItem[] = [
    { label: "Features", href: "/features" },
    { label: "Industries", href: "/#industries" },
    { label: "Blogs", href: "https://info.grouple.in/blog" },
    { label: "Contact", href: "/contact" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="w-full max-w-[1440px] mx-auto flex items-center justify-between px-10 py-5 max-md:px-5 max-md:py-[15px] relative z-50">
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.png"
          alt="Grouple Logo"
          width={140}
          height={32}
          priority
        />
      </Link>

      <nav
        className="flex items-center gap-8 max-md:hidden"
        aria-label="Main navigation"
      >
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="text-white text-base cursor-pointer hover:text-[#4A6AFE] transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Login Button - Desktop */}
      <a
        href="https://merchant.grouple.tech/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Log in"
        className="max-md:hidden"
      >
        <button className="bg-[#F2F9FE] text-black px-5 py-2 rounded-lg border-solid flex items-center justify-center gap-1 font-[16px] hover:bg-white transition-colors">
          Log in
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
        </button>
      </a>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="hidden max-md:flex items-center justify-center p-2 text-white"
        aria-label="Toggle mobile menu"
      >
        {mobileMenuOpen ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 6L18 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 12H21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 6H21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 18H21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-40"
          onClick={toggleMobileMenu}
        >
          <div
            className="absolute top-[70px] left-0 right-0 bg-[#111] p-5 border-t border-gray-800"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end mb-6">
              <button
                onClick={toggleMobileMenu}
                className="text-white p-2"
                aria-label="Close mobile menu"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <nav className="flex flex-col gap-6 mb-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-white text-lg font-medium hover:text-[#4A6AFE] transition-colors"
                  onClick={toggleMobileMenu}
                  target={item.label === "Blogs" ? "_blank" : "_self"}
                  rel={
                    item.label === "Blogs" ? "noopener noreferrer" : undefined
                  }
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <a
              href="https://merchant.grouple.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <button className="w-full bg-white text-black px-5 py-3 rounded-full border-solid flex items-center justify-center gap-2 font-medium">
                Log in
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 8H13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M9 4L13 8L9 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
