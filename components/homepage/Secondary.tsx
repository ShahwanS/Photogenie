import React from "react";
import Image from "next/image";

import im4 from "../../public/images/Galleryimage (18).webp";
import im5 from "../../public/images/Galleryimage (15).webp";
import im6 from "../../public/images/Galleryimage (9).webp";
import im7 from "../../public/images/Galleryimage (7).jpg";

const Secondary = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto bg-[#2D2D2D] -z-10 p-4 xl:p-16 h-auto lg:h-[75vw] xl:h-[52vw] w-full overflow-hidden">
      <div className="my-auto text-white space-y-6 sm:space-y-10 lg:space-y-20 px-4 md:px-8 lg:px-12">
        <h1 className="text-xl sm:text-3xl md:text-4xl xl:text-5xl font-bold mb-4">
          Sehen Sie Marburg mit den Augen unseres Fotografen
        </h1>
        <p className="text-sm sm:text-base lg:text-md xl:text-lg text-gray-500 mb-4 md:mb-6">
          Entdecken Sie den einzigartigen Stil und Ansatz unseres Fotografen,
          der der die Schönheit Marburgs in seinen Bildern festhält.
        </p>
        <div className="w-[667px] max-w-full mt-10 self-start">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
              <div className="items-stretch flex flex-col max-md:mt-6">
                <div className="text-neutral-400 text-xl font-bold leading-7">
                  Einzigartiges Konzept{" "}
                </div>
                <div className="text-white text-base leading-6 mt-4">
                  Mit einem künstlerischen Auge bringt unser Fotograf die Seele
                  von Marburg in jeder Aufnahme.
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="items-stretch flex grow flex-col max-md:mt-6">
                <div className="text-neutral-400 text-xl font-bold leading-7">
                  Unvergessliche Momente{" "}
                </div>
                <div className="text-white text-base leading-6 mt-4">
                  Erleben Sie den Zauber von Marburg durch die Linse unseres
                  Fotografen&apos; Linse und lassen Sie die Erinnerungen für
                  immer aufleben.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-end gap-3">
        <div className="flex flex-col md:-space-y-5 -space-x-5">
          <div className="  sm:ml-20 ml-32 mt-10 relative sm:-mt-20 -z-10 w-[250px] h-[450px] overflow-hidden ">
            <Image
              src={im4}
              alt="Item 1"
              width={500}
              height={500}
              className="shadow-lg rounded-xl object-cover w-full  h-[400px]"
            />
          </div>
          <div className=" sm:mr-20  w-[250px] h-[450px] overflow-hidden rounded-xl relative">
            <Image
              src={im5}
              alt="Item 3"
              width={500}
              height={500}
              className="shadow-lg object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="flex flex-col sm:space-y-10 -space-x-10 mt-20">
          <div className=" sm:ml-7 -mt-16 -z-10 w-[250px] h-[450px] overflow-hidden rounded-lg ml-32">
            <Image
              src={im6}
              alt="Item 2"
              width={500}
              height={500}
              className="shadow-lg object-cover w-full h-[450px] rounded-xl "
            />
          </div>
          <div className=" w-[250px] h-[450px] overflow-hidden md:-mt-20 sm:-z-10 mt-5 rounded-xl">
            <Image
              src={im7}
              alt="Item 4"
              width={500}
              height={500}
              className="shadow-lg rounded-xl object-cover w-full h-[450px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Secondary;
