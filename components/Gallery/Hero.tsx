"use client";

import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";
import Image from "next/image";
import Apple from "../../public/images/Apple.png";

const useMediaQuery = (query: any) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const media = window.matchMedia(query);
      if (media.matches !== matches) {
        setMatches(media.matches);
      }
      const listener = () => setMatches(media.matches);
      media.addEventListener("change", listener);
      return () => media.removeEventListener("change", listener);
    }
  }, [matches, query]);

  return matches;
};

const MyComponent = () => {
  const linkTextRef = useRef<HTMLSpanElement>(null);
  const linkImageRef = useRef<HTMLImageElement>(null);
  const isMobile = useMediaQuery("(max-width: 768px)"); // Adjust the max-width as needed for your design

  useEffect(() => {
    const showImgContent = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY - 20;
      if (linkImageRef.current) {
        linkImageRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
      if (linkTextRef.current) {
        linkTextRef.current.style.setProperty("--x", `${x}px`);
        linkTextRef.current.style.setProperty("--y", `${y}px`);
      }
    };

    document.addEventListener("mousemove", showImgContent);

    return () => {
      document.removeEventListener("mousemove", showImgContent);
    };
  }, []);

  // Render different component for mobile
  if (isMobile) {
    return (
      <div className="relative flex flex-col items-center justify-center  w-full h-full">
        <Image
          className=" shadow-md w-full h-full"
          src={Apple}
          layout="responsive"
          width={400}
          height={300}
          alt="Marburg an der Lahn"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-2xl font-semibold text-white shadow-md">
            🏰 Marburg an der lahn ᴅᴇ
          </h2>
        </div>
      </div>
    );
  }

  // Default render for non-mobile devices
  return (
    <div className="hidden  relative sm:flex justify-center items-center sm:h-[15vw]  w-full mt-14 ">
      <a className="link" href="#">
        Marburg Gallery
      </a>
      <span className="hover-container hidden sm:block">
        <span className="link-text " aria-hidden="true" ref={linkTextRef}>
          🏰 Marburg Gallery ᴅᴇ
        </span>

        <span className="image-container">
          <span className="image-inner">
            <Image
              className="link-image"
              src={Apple}
              width={500}
              height={500}
              alt="Tokyo Tower"
              ref={linkImageRef}
            />
          </span>
        </span>
      </span>
    </div>
  );
};

export default MyComponent;
