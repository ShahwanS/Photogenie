"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

import Apple from "../../public/images/Apple.png";
import DNA from "../../public/images/DNA stairs.png";
import im1 from "../../public/images/im1.jpg";
import im2 from "../../public/images/im2.jpg";
import im3 from "../../public/images/im3.jpg";
import im4 from "../../public/images/im4.jpg";
import im5 from "../../public/images/im5.jpg";
import im6 from "../../public/images/im6.jpg";
import im7 from "../../public/images/im7.jpg";
import Space from "../../public/images/Space web.png";

// Define an interface for the image object
interface ImageObject {
  filter: string;
  title: string;
  image: StaticImageData; // Assuming the type is StaticImageData from 'next/image'
  alt: string;
}

const images = [
  {
    filter: "architecture",
    title: "title 1",
    image: Apple,
    alt: "h",
  },
  {
    filter: "landscape",
    title: "title 2",
    image: DNA,
    alt: "h",
  },
  {
    filter: "landscape",
    title: "title 3",
    image: im1,
    alt: "h",
  },
  {
    filter: "landscape",
    title: "title 4",
    image: im2,
    alt: "h",
  },
  {
    filter: "architecture",
    title: "title 5",
    image: im3,
    alt: "h",
  },
  {
    filter: "Cityscape",
    title: "title 6",
    image: im4,
    alt: "h",
  },
  {
    filter: "architecture",
    title: "title 7",
    image: im5,
    alt: "h",
  },
  {
    filter: "Cityscape",
    title: "title 8",
    image: im6,
    alt: "h",
  },
  {
    filter: "landscape",
    title: "title 9",
    image: im7,
    alt: "h",
  },
  {
    filter: "architecture",
    title: "title 10",
    image: Space,
    alt: "h",
  },
  {
    filter: "landscape",
    title: "title 11",
    image: Apple,
    alt: "h",
  },
  {
    filter: "Cityscape",
    title: "title 12",
    image: DNA,
    alt: "h",
  },
];

const GalleryComponent = () => {
  const [activeFilter, setActiveFilter] = React.useState("all");
  const [currentPage, setCurrentPage] = React.useState(1);
  const [selectedImage, setSelectedImage] = React.useState<ImageObject | null>(
    null
  );

  const imagesPerPage = 6;

  // Function to open the modal with the selected image
  const openModal = (image: any) => {
    setSelectedImage(image);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleFilter = (filter: string) => {
    setActiveFilter(filter);
    setCurrentPage(1); // Reset to page 1 when filter changes
  };

  // Function to get the current images based on pagination and active filter
  const currentImages = () => {
    // First, filter the images based on the active filter
    const filteredImages = images.filter(
      (item) => activeFilter === "all" || item.filter === activeFilter
    );

    // Then calculate the pagination on the filtered images
    const startIndex = (currentPage - 1) * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;
    return filteredImages.slice(startIndex, endIndex);
  };

  // Calculate the total number of pages based on the filtered images
  const totalPages = Math.ceil(
    images.filter(
      (item) => activeFilter === "all" || item.filter === activeFilter
    ).length / imagesPerPage
  );

  return (
    <div className="min-h-screen bg-[#2D2D2D] p-2 sm:p-8 w-full relative">
      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal} // Close modal when clicking on the overlay
        >
          <div
            className="bg-black p-2 sm:p-4 rounded-xl shadow-lg max-w-xs sm:max-w-xl mx-auto transition duration-300 ease-in-out transform scale-95 hover:scale-100"
            onClick={(e) => e.stopPropagation()} // Prevent click inside the modal from closing it
          >
            <Image
              src={selectedImage.image}
              alt={selectedImage.alt}
              layout="responsive"
              width="600"
              height="400"
              objectFit="contain"
            />
            <button
              onClick={closeModal}
              className="absolute top-0 right-0 m-2 bg-gray-500 text-white p-2 rounded"
            >
              X
            </button>
          </div>
        </div>
      )}

      <div className="mx-auto max-w-xs sm:max-w-7xl">
        <h1 className="text-2xl sm:text-5xl font-bold text-center mb-2 sm:mb-4 text-[#9E9E9E]">
          Capturing Moments
        </h1>
        <p className="text-lg sm:text-xl text-center mb-4 sm:mb-8 text-white mt-5">
          Exploring the Beauty of Marburg Through Photography
        </p>

        <div className="flex flex-wrap justify-center gap-1 sm:gap-4 mb-4 sm:mb-8">
          {["all", "Cityscape", "landscape", "architecture"].map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilter(filter)}
              className={`${
                activeFilter === filter
                  ? "bg-gray-800 hover:bg-gray-600 p-4 rounded-lg text-xs sm:text-lg transition duration-300 ease-in-out"
                  : "p-4 text-xs sm:text-lg hover:bg-gray-700 transition duration-300 ease-in-out rounded"
              }`}
            >
              {filter === "all" ? "Show all" : filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-12">
          {currentImages().map((item, index) => (
            <div
              key={index}
              className={`group relative ${
                activeFilter === "all" || activeFilter === item.filter
                  ? ""
                  : "hidden"
              } `}
              onClick={() => openModal(item)}
            >
              <div className="overflow-hidden rounded-lg aspect-square shadow-xl">
                <div className="relative w-full h-full">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    className="transform group-hover:scale-110 transition duration-500 ease-in-out object-cover"
                    fill
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
              </div>
              <div className="mt-1 sm:mt-2 text-center text-xs sm:text-base">
                {item.title}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-1 sm:gap-2">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => setCurrentPage(index + 1)}
              className={`border border-gray-700   p-4 rounded-xl rounded text-xs sm:text-lg transition duration-300 ease-in-out ${
                currentPage === index + 1 ? "bg-blue-500" : "hover:bg-gray-700"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryComponent;
