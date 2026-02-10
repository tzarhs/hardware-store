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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="bg-stone-200">
      <section className="relative w-full max-w-screen-2xl mx-auto h-[calc(100vh-72px)] min-h-[400px] overflow-hidden px-4 sm:px-6 lg:px-8">
        {/* Slides */}
        <div className="relative w-full h-full overflow-hidden">
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
                className="w-full h-full object-cover"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Text Overlay */}
              {/* <div className="absolute inset-0 flex items-center justify-center text-center px-4 sm:px-6 md:px-8">
                <div className="max-w-4xl w-full">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight px-2">
                    {slide.title}
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 px-4 sm:px-8">
                    {slide.description}
                  </p>
                </div>
              </div> */}
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 sm:left-8 md:left-10 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center bg-white/20 hover:bg-white/30 text-white transition-all rounded-full sm:rounded-none"
          aria-label="Previous slide"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
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
          className="absolute right-6 sm:right-8 md:right-10 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center bg-white/20 hover:bg-white/30 text-white transition-all rounded-full sm:rounded-none"
          aria-label="Next slide"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
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
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 transition-all ${
                index === currentSlide
                  ? "w-6 sm:w-8 bg-white"
                  : "w-2 bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
