import React from "react";
import Image from "next/image";
import Apple from "../../public/images/Galleryimage (22).webp";
import DNA from "../../public/images/Galleryimage (12).webp";

const Features = () => {
  return (
    <div className="bg-[#1E1E1E] text-white p-8 w-full">
      <header className="text-center mb-12">
        <p className="text-sm uppercase tracking-wide text-gray-500">
          Fotografie
        </p>
        <h1 className="text-4xl font-bold mt-2 text-gray-100">
          Die Schönheit der Stadt einfangen
        </h1>
        <p className="mt-2 text-xl text-gray-300">
          Erkunden Sie die atemberaubende Stadtkulisse durch meine Linse
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Urban Exploration */}
        <div className="space-y-4">
          <div className="bg-gray-800 border border-gray-600 rounded-lg overflow-hidden">
            <Image
              src={Apple}
              alt="Städtische Erkundung"
              width={400}
              height={400}
              className="object-cover w-full h-[30vw]"
            />
            <div className="p-4 border-t border-gray-600">
              <h2 className="text-lg font-semibold">Städtische Erkundung</h2>
              <p className="text-gray-400">
                Entdecken Sie die versteckten Schätze und Wahrzeichen von
                Marburg
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="bg-[#006FFF] px-2 sm:px-4 py-1 sm:py-2 rounded-lg text-xs sm:text-lg t">
              Raum
            </button>
            <button className="bg-[#006FFF] px-2 sm:px-4 py-1 sm:py-2 rounded-lg text-xs sm:text-lg t">
              Marburg
            </button>
          </div>
        </div>
        {/* Naturschönheiten */}
        <div className="space-y-4">
          <div className="bg-gray-800 border border-gray-600 rounded-lg overflow-hidden ">
            <Image
              src={DNA}
              alt="Naturschönheiten"
              width={400}
              height={400}
              className="object-cover w-full h-[30vw]"
            />
            <div className="p-4 border-t border-gray-600">
              <h2 className="text-lg font-semibold">Naturschönheiten</h2>
              <p className="text-gray-400">
                Tauchen Sie ein in die atemberaubenden Landschaften von Marburg
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="bg-[#006FFF] px-2 sm:px-4 py-1 sm:py-2 rounded-lg text-xs sm:text-lg t">
              Raum
            </button>
            <button className="bg-[#006FFF] px-2 sm:px-4 py-1 sm:py-2 rounded-lg text-xs sm:text-lg t">
              Marburg
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
