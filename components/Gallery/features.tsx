import React from "react";
import Image from "next/image";
import Apple from "../../public/images/Apple.png"; // Assuming the path is correct
import DNA from "../../public/images/DNA stairs.png"; // Assuming the path is correct

const Features = () => {
  return (
    <div className="bg-[#1E1E1E] text-white p-8 w-full">
      <header className="text-center mb-12">
        <p className="text-sm uppercase tracking-wide text-gray-500">
          Photography
        </p>
        <h1 className="text-4xl font-bold mt-2 text-gray-100">
          Capturing the City&apos;s Beauty
        </h1>
        <p className="mt-2 text-xl text-gray-300">
          Explore the stunning cityscape through my lens
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Urban Exploration */}
        <div className="space-y-4">
          <div className="bg-gray-800 border border-gray-600 rounded-lg overflow-hidden">
            <Image
              src={Apple}
              alt="Urban Exploration"
              width={400}
              height={400}
              className="object-cover w-full h-[30vw]"
            />
            <div className="p-4 border-t border-gray-600">
              <h2 className="text-lg font-semibold">Urban Exploration</h2>
              <p className="text-gray-400">
                Discover the hidden gems and iconic landmarks of Marburg
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="bg-[#006FFF]  px-2 sm:px-4 py-1 sm:py-2 rounded-lg text-xs sm:text-lg t">
              Space
            </button>
            <button className="bg-[#006FFF]  px-2 sm:px-4 py-1 sm:py-2 rounded-lg text-xs sm:text-lg t">
              Marburg
            </button>
          </div>
        </div>
        {/* Nature's Beauty */}
        <div className="space-y-4">
          <div className="bg-gray-800 border border-gray-600 rounded-lg overflow-hidden ">
            <Image
              src={DNA}
              alt="Nature's Beauty"
              width={400}
              height={400}
              className="object-cover w-full h-[30vw]"
            />
            <div className="p-4 border-t border-gray-600">
              <h2 className="text-lg font-semibold">Nature&apos;s Beauty</h2>
              <p className="text-gray-400">
                Immerse yourself in the breathtaking landscapes of Marburg
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="bg-[#006FFF]  px-2 sm:px-4 py-1 sm:py-2 rounded-lg text-xs sm:text-lg t">
              Space
            </button>
            <button className="bg-[#006FFF]  px-2 sm:px-4 py-1 sm:py-2 rounded-lg text-xs sm:text-lg t">
              Marburg
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
