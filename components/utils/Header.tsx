"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import Link from "next/link";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineFacebook,
} from "react-icons/ai";
import { useState } from "react";

const Header = () => {
  const [isSticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (header) {
        const headerTop = header.getBoundingClientRect().top;
        setSticky(window.scrollY > headerTop);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`header ${isSticky ? "is-sticky" : ""}`}>
      <div className="flex items-center justify-between lg:h-[50px] h-full xl:h-full w-full px-4 2xl:px-16">
        <div className="hidden sm:flex">
          <ul className="flex space-x-6">
            <Link href="/" className="transition transform hover:scale-110">
              <div>Startseite</div>
            </Link>
            <Link
              href="/galerie"
              className="transition transform hover:scale-110"
            >
              <div>Galerie</div>
            </Link>
          </ul>
        </div>
        <Link href="/">
          <Image
            src={logo}
            alt="Photogenie"
            width={205}
            height={75}
            className="cursor-pointer"
          />
        </Link>
        <div className="hidden sm:flex">
          <Link
            className="px-4 py-2 bg-[#2d2d2d] rounded-xl text-white  hover:bg-gray-600  transition duration-300 ease-in-out"
            href="/Contact"
          >
            Kontakt
          </Link>
        </div>
        {/* Mobile Menu Icon */}
        <div onClick={handleNav} className="sm:hidden cursor-pointer">
          {menuOpen ? (
            <AiOutlineClose size={25} />
          ) : (
            <AiOutlineMenu size={25} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#1E1E1E] p-10 ease-in duration-500"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }
      >
        <Link href="/" className="">
          <Image
            src={logo}
            alt="Photogenie"
            width={205}
            height={75}
            className="cursor-pointer border-b border-gray-700"
          />
        </Link>
        <div className="flex-col cursor-pointer">
          <ul>
            <Link href="/">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 border-b border-gray-700"
              >
                Home
              </li>
            </Link>
            <Link href="/galerie">
              <div
                onClick={() => setMenuOpen(false)}
                className="py-4 border-b border-gray-700"
              >
                galerie
              </div>
            </Link>
            <Link href="/Contact">
              <div
                onClick={() => setMenuOpen(false)}
                className="py-4 border-b border-gray-700"
              >
                Kontakt
              </div>
            </Link>
          </ul>
        </div>
        <div className="flex flex-row justify-around pt-10 items-center">
          <AiOutlineInstagram size={25} className="cursor-pointer" />
          <AiOutlineFacebook size={25} className="cursor-pointer" />
          <AiOutlineLinkedin size={25} className="cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Header;
function useRef() {
  throw new Error("Function not implemented.");
}
