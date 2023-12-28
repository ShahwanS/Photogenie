import Link from "next/link";
import React from "react";

const Primarysection = () => {
  return (
    <div className="justify-between self-stretch bg-stone-900 flex flex-col px-16 max-md:px-5">
      <div className="self-stretch text-white text-lg lg:text-4xl xl:text-6xl font-bold leading-[67px] mt-20 max-md:max-w-full  max-md:leading-[54px] max-md:mt-10">
        Die Essenz von Marburg durch Fotografie einfangen
      </div>
      <div className="self-stretch text-white text-lg leading-7 mt-10 max-md:max-w-full">
        Erleben Sie die Schönheit und den Charme der Stadt Marburg durch die
        Linse unseres talentierten Fotografen.
      </div>
      <div className="items-stretch flex w-[227px] max-w-full gap-4 mt-10 mb-20 max-md:mb-10">
        <Link
          href="/Contact"
          className="px-4 sm:px-6 py-2 sm:py-3 bg-[#2D2D2D] rounded-xl hover:bg-gray-700 transition duration-300 ease-in-out text-center"
        >
          Kontakt
        </Link>
        <Link
          href="/galerie"
          className="px-4 sm:px-6 py-2 sm:py-3 bg-[#2D2D2D] rounded-xl hover:bg-gray-700 transition duration-300 ease-in-out text-center"
        >
          Galerie
        </Link>
      </div>
    </div>
  );
};

export default Primarysection;
