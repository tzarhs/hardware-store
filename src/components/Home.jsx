"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "../src/assets/outside.png",
      title: "Power Tools That Work as Hard as You Do",
      description: "Professional-grade equipment for every job site",
    },
    {
      image: "../src/assets/inside.jpg",
      title: "Build Something Extraordinary",
      description: "Premium lumber, fasteners, and building materials",
    },
    {
      image: "../src/assets/inside2.jpg",
      title: "Your Project Starts Here",
      description: "Everything you need from start to finish",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const handleScroll = (e, target) => {
    e.preventDefault();
    const element = document.querySelector(target);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-stone-100 min-h-[calc(100vh-72px)] flex items-center">
      <div className="w-full px-16 sm:px-32 lg:px-48 py-24 flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* LEFT — About Us */}
        <div className="flex flex-col   ">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-800 leading-tight mb-5">
            Το μαγαζί που χτίζει{" "}
            <span className="text-orange-500">μαζί σας</span>
          </h1>
          <p className="text-stone-500 text-base leading-relaxed mb-6">
            Από το 1985, το κατάστημα μας προσφέρει επαγγελματικά εργαλεία,
            χρώματα και οικοδομικά υλικά στην Ιεράπετρα. Εξυπηρετούμε ιδιώτες
            και επαγγελματίες με γνώση και αξιοπιστία.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              { value: "50+", label: "Χρόνια εμπειρίας" },
              { value: "1000+", label: "Προϊόντα" },
              { value: "100%", label: "Εγγύηση ποιότητας" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white border border-stone-200 rounded-xl p-4 text-center"
              >
                <p className="text-2xl font-bold text-orange-500">
                  {stat.value}
                </p>
                <p className="text-xs text-stone-500 mt-1 leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <a
            href="#services"
            onClick={(e) => handleScroll(e, "#services")}
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-xl transition-colors w-fit text-sm"
          >
            Δείτε τις υπηρεσίες μας
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>

        {/* RIGHT — Slider */}
        <div className="relative w-full h-[460px] sm:h-[520px] md:h-[560px] overflow-hidden rounded-2xl shadow-lg">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/25 rounded-2xl" />
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-white/20 hover:bg-white/40 text-white transition-all rounded-full"
            aria-label="Previous slide"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-white/20 hover:bg-white/40 text-white transition-all rounded-full"
            aria-label="Next slide"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Dot Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1.5 transition-all rounded-full ${
                  index === currentSlide
                    ? "w-6 bg-white"
                    : "w-1.5 bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
