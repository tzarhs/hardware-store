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

  return (
    <div className="bg-stone-200">
      <section className="relative w-full h-[50vw] min-h-[260px] sm:h-[55vw] md:h-[calc(100vh-72px)] overflow-hidden">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Text Overlay */}
            {/* <div className="absolute inset-0 flex items-center justify-center text-center px-4 sm:px-8 md:px-12">
              <div className="max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-5xl w-full">
                <h2 className="text-lg sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-3 md:mb-5 leading-tight">
                  {slide.title}
                </h2>
                <p className="text-xs sm:text-base md:text-lg lg:text-xl text-white/90">
                  {slide.description}
                </p>
              </div>
            </div> */}
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-5 md:left-8 top-1/2 -translate-y-1/2 z-10 w-7 h-7 sm:w-10 sm:h-10 md:w-13 md:h-13 flex items-center justify-center bg-white/20 hover:bg-white/40 text-white transition-all rounded-full"
          aria-label="Previous slide"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
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
          className="absolute right-2 sm:right-5 md:right-8 top-1/2 -translate-y-1/2 z-10 w-7 h-7 sm:w-10 sm:h-10 md:w-13 md:h-13 flex items-center justify-center bg-white/20 hover:bg-white/40 text-white transition-all rounded-full"
          aria-label="Next slide"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
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
        <div className="absolute bottom-2 sm:bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-1.5 sm:gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 sm:h-2 transition-all rounded-full ${
                index === currentSlide
                  ? "w-4 sm:w-6 md:w-8 bg-white"
                  : "w-1.5 sm:w-2 bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
