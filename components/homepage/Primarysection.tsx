import Link from "next/link";
import React from "react";

const Primarysection = () => {
  return (
    <div className="flex flex-col h-auto items-start  bg-[#1E1E1E] text-white p-4 sm:p-8 space-y-8 w-full">
      <div className="md:space-y-20 space-y-10 max-w-6xl ">
        <h1 className="text-3xl sm:text-6xl font-bold mb-2">
          Capturing the Essence of Marburg Through Photography
        </h1>
        <p className="text-lg sm:text-2xl">
          Experience the beauty and charm of Marburg city through the lens of
          our talented photographer.
        </p>
      </div>
      <div className="sm:flex sm:flex-row space-x-4 sm:space-y-0 sm:space-x-4">
        <Link
          href="/Contact"
          className="px-4 sm:px-6 py-2 sm:py-3 bg-[#2D2D2D] rounded-xl hover:bg-gray-700 transition duration-300 ease-in-out text-center"
        >
          Contact
        </Link>
        <Link
          href="/Gallery"
          className="px-4 sm:px-6 py-2 sm:py-3 bg-[#2D2D2D] rounded-xl hover:bg-gray-700 transition duration-300 ease-in-out text-center"
        >
          Gallery
        </Link>
      </div>
    </div>
  );
};

export default Primarysection;
