"use client";

import React, { useState, useEffect } from "react";

const quotesData = [
  {
    quote:
      "The camera is an instrument that teaches people how to see without a camera.",
    author: "Dorothea Lange",
    // Add more photography-related quotes here
  },
  {
    quote:
      "Photography for me is not looking, it’s feeling. If you can’t feel what you’re looking at, then you’re never going to get others to feel anything when they look at your pictures.",
    author: "Don McCullin",
    // Add more photography-related quotes here
  },
  {
    quote: "When I have a camera in my hand, I know no fear.",
    author: "Alfred Eisenstaedt",
    // Add more photography-related quotes here
  },
  // ... Add more quote objects as needed
];

const QuoteCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    setFade(true);
    const timer = setTimeout(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((currentIndex + 1) % quotesData.length);
      }, 500);
    }, 4500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const quote = quotesData[currentIndex];

  return (
    <div className="flex flex-col items-center justify-center w-full h-[500px] bg-[#2D2D2D] text-white p-10">
      <div className="max-w-4xl w-full h-full flex flex-col items-center justify-center px-10 py-8 bg-gray-900 rounded-xl shadow-xl">
        <div
          className={`transition-opacity duration-500 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          <blockquote className="italic text-xl md:text-3xl text-center mb-6">
            {quote.quote}
          </blockquote>
          <figcaption className="text-lg md:text-xl font-semibold text-center">
            {quote.author}
          </figcaption>
        </div>
      </div>
    </div>
  );
};

export default QuoteCarousel;
