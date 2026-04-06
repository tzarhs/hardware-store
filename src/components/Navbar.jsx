"use client";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e, target) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(target);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="bg-stone-900 w-full z-20 top-0 start-0 shadow-lg border-b border-orange-600">
      <div className="relative flex items-center justify-between mx-auto px-6 sm:px-12 md:px-18 lg:px-30 py-6 sm:py-6  ">
        {/* Logo */}
        <a
          href="/"
          className="md:static md:translate-x-0 absolute left-1/2 -translate-x-1/2 flex items-center"
        >
          <span className="text-xl sm:text-2xl md:text-3xl text-white font-bold whitespace-nowrap">
            tzaris.<span className="text-orange-500">paints</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex md:items-center md:space-x-6 lg:space-x-8 font-medium ml-auto">
          <li>
            <a
              href="#services"
              onClick={(e) => handleScroll(e, "#services")}
              className="text-sm lg:text-base text-white hover:text-orange-500 transition-colors"
            >
              Υπηρεσίες
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, "#contact")}
              className="text-sm lg:text-base text-white hover:text-orange-500 transition-colors"
            >
              Επικοινωνία
            </a>
          </li>
        </ul>

        {/* Hamburger Button (mobile only) — pushed all the way right via justify-between */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center justify-center w-9 h-9 text-white hover:text-orange-500 transition-colors ml-auto"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col font-medium px-4 sm:px-8 pb-4 border-t border-stone-700">
          <li>
            <a
              href="#services"
              onClick={(e) => handleScroll(e, "#services")}
              className="block py-3 text-white hover:text-orange-500 transition-colors border-b border-stone-700 text-sm"
            >
              Υπηρεσίες
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, "#contact")}
              className="block py-3 text-white hover:text-orange-500 transition-colors text-sm"
            >
              Επικοινωνία
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
