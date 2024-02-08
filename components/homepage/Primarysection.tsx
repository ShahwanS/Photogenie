import React from "react";
import Image from "next/image";
const Primarysection = () => {
  return (
    <div className="relative w-full h-screen">
      <Image
        className="shadow-md w-full  opacity-80 h-full object-cover object-center"
        src={"/images/Porsche.jpg"}
        width={1000}
        height={1000}
        priority
        alt="Marburg Schloss"
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
        <div className="text-center container mt-28">
          <div className="text-white text-lg lg:text-4xl xl:text-6xl font-bold leading-[67px] mt-20 md:max-w-full md:leading-[54px] md:mt-10 border-3 border-black">
            Die Essenz von Marburg durch Fotografie einfangen
          </div>
          <div className="text-white text-lg md:text-3xl leading-7 mt-10 md:max-w-full">
            Erleben Sie die Schönheit und den Charme der Stadt Marburg durch die
            Linse unseres talentierten Fotografen.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Primarysection;
