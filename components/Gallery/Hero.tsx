"use client";

import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";
import Image from "next/image";
import Schloss from "../../public/images/Schloss.jpg";

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
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const showImgContent = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
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
          className=" shadow-md w-full h-full opacity-60"
          src={Schloss}
          layout="responsive"
          width={400}
          height={300}
          priority
          alt="Marburg Schloss"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-2xl font-semibold text-white shadow-md mt-20">
            🏰 Marburg an der lahn ᴅᴇ
          </h2>
        </div>
      </div>
    );
  }

  // Default render for non-mobile devices
  return (
    <div className="hidden  relative sm:flex justify-center items-center lg:h-[22vw] xl:h-[15vw]  w-full pt-20 ">
      <a className="link" href="#">
        Marburg Galerie
      </a>
      <span className="hover-container hidden sm:block">
        <span className="link-text pt-20" aria-hidden="true" ref={linkTextRef}>
          🏰 Marburg Galerie ᴅᴇ
        </span>

        <span className="image-container">
          <span className="image-inner">
            <Image
              className="link-image"
              src={Schloss}
              width={500}
              height={500}
              alt="Marburg Schloss"
              ref={linkImageRef}
            />
          </span>
        </span>
      </span>
    </div>
  );
};

export default MyComponent;
