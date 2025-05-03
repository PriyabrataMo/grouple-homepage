"use client";

import React from "react";
import Link from "next/link";
import { Router } from "next/router";

type NavItem = {
  label: string;
  href: string;
  hasDropdown?: boolean;
};

export const Navbar = () => {
  const navItems: NavItem[] = [
    { label: "Features", href: "#" },
    { label: "Industries", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <header className="w-full max-w-[1440px] mx-auto flex items-center justify-between px-10 py-5 max-md:px-5 max-md:py-[15px]">
      <Link href="/" className="flex items-center">
        <span className="text-[#536bff] font-bold text-2xl">grouple</span>
      </Link>

      <nav
        className="flex items-center gap-8 max-md:hidden"
        aria-label="Main navigation"
      >
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="text-white text-base cursor-pointer hover:text-[#536bff] transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <a
        href="https://merchant.grouple.tech/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Log in"
      >
        <button className="bg-white text-black px-5 py-2 rounded-full border-solid flex items-center gap-1 font-medium">
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
    </header>
  );
};
