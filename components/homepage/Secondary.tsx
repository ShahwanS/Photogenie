import React from "react";
import Image from "next/image";

import im4 from "../../public/images/im4.jpg";
import im5 from "../../public/images/im5.jpg";
import im6 from "../../public/images/im6.jpg";
import im7 from "../../public/images/im7.jpg";

const Secondary = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto bg-[#2D2D2D] -z-10 p-4 lg:p-16 h-auto lg:h-[52vw] w-full overflow-hidden">
      <div className="my-auto text-white space-y-6 sm:space-y-10 lg:space-y-20 px-4 md:px-8 lg:px-12">
        <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Capturing the Essence of Marburg Through Photography
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-500 mb-4 md:mb-6">
          Discover the unique style and approach of our photographer as he
          captures the beauty of Marburg in his artwork.
        </p>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
              Unique Approach
            </h2>
            <p className="text-gray-500">
              With an artistic eye, our photographer brings out the soul of
              Marburg in every shot.
            </p>
          </div>
          <div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
              Unforgettable Moments
            </h2>
            <p className="text-gray-500">
              Experience the magic of Marburg through our photographer&apos;s
              lens and relive the memories forever.
            </p>
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
