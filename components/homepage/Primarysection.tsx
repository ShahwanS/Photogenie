import Link from "next/link";
import React from "react";

const Primarysection = () => {
  return (
    <div className="justify-between self-stretch bg-stone-900 flex flex-col px-16 max-md:px-5">
      <div className="self-stretch text-white text-6xl font-bold leading-[67px] mt-20 max-md:max-w-full max-md:text-4xl max-md:leading-[54px] max-md:mt-10">
        Capturing the Essence of Marburg Through Photography
      </div>
      <div className="self-stretch text-white text-lg leading-7 mt-10 max-md:max-w-full">
        Experience the beauty and charm of Marburg city through the lens of our
        talented photographer.
      </div>
      <div className="items-stretch flex w-[227px] max-w-full gap-4 mt-10 mb-20 max-md:mb-10">
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
