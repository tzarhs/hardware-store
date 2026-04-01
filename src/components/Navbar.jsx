"use client";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (e, target) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.querySelector(target);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="bg-stone-900 w-full z-20 top-0 start-0 shadow-lg border-b-1 border-orange-600">
      <div className="flex items-center justify-between mx-auto p-6 px-18 md:px-30">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3">
          <span className="self-center text-3xl text-white text-heading font-bold whitespace-nowrap">
            tzaris.<span className="text-orange-500">paints</span>
          </span>
        </a>

        {/* Hamburger Button (mobile only) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center justify-center w-9 h-9 text-white hover:text-orange-500 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            // X icon
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
            // Hamburger icon
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

        {/* Desktop Menu */}
        <ul className="hidden md:flex md:items-center md:space-x-8 font-medium">
          <li>
            <a
              href="#services"
              onClick={(e) => handleScroll(e, "#services")}
              className="block py-2 px-3 text-heading text-white hover:text-orange-500 transition-colors md:p-0"
            >
              Υπηρεσίες
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => handleScroll(e, "#contact")}
              className="block py-2 px-3 text-heading text-white hover:text-orange-500 transition-colors md:p-0"
            >
              Επικοινωνία
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col font-medium px-6 pb-4 border-t border-stone-200">
          <li>
            <a
              href="#services"
              onClick={(e) => handleScroll(e, "#services")}
              className="block py-3 text-heading text-white hover:text-orange-500 transition-colors border-b border-stone-100"
            >
              Υπηρεσίες
            </a>
          </li>

          <li>
            <a
              href="#"
              onClick={(e) => handleScroll(e, "#contact")}
              className="block py-3 text-heading text-white hover:text-orange-500 transition-colors"
            >
              Επικοινωνία
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
