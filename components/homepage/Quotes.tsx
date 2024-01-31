"use client";

import React, { useState, useEffect } from "react";

const quotesData = [
  {
    quote:
      "Fotografie ist die Sprache, die ich verstehe. Durch meine Bilder erzähle ich Geschichten, die ohne Worte auskommen.",
    author: "Anonym",
  },
  {
    quote:
      "In jedem Augenblick des Lebens gibt es eine Schönheit, die darin entdeckt werden kann. Die Fotografie hilft uns, diese Schönheit festzuhalten und zu teilen.",
    author: "Ansel Adams",
  },
  {
    quote:
      "Die Kamera erlaubt es uns, die Welt mit anderen Augen zu sehen und die Details im Alltäglichen zu entdecken.",
    author: "Anonym",
  },
  {
    quote:
      "Die Fotografie ist das Gedächtnis der Welt. Sie bewahrt die Momente und Geschichten für die Ewigkeit.",
    author: "Sabrina Mueller",
  },
  {
    quote:
      "Ein gutes Foto ist ein Foto, das man fühlen kann. Es berührt die Seele und lässt den Betrachter in die Szene eintauchen.",
    author: "Peter Schneider",
  },
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
    }, 2000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const quote = quotesData[currentIndex];

  return (
    <div className="flex flex-col items-center justify-center w-full h-[500px] bg-[#2D2D2D] text-white p-10">
      <div className="max-w-4xl w-full h-full flex flex-col items-center justify-center px-10 py-8 bg-black rounded-xl shadow-xl">
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
