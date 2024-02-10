"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

import Image1 from "../../public/images/Gallery (1).webp";
import Image2 from "../../public/images/Gallery (2).webp";
import Image3 from "../../public/images/Gallery (3).webp";
import Image4 from "../../public/images/Gallery (4).webp";
import Image5 from "../../public/images/Gallery (5).webp";
import Image6 from "../../public/images/Gallery (6).webp";
import Image7 from "../../public/images/Gallery (7).webp";
import Image8 from "../../public/images/Gallery (8).webp";
import Image9 from "../../public/images/Gallery (9).webp";
import Image10 from "../../public/images/Gallery (10).webp";
import Image11 from "../../public/images/Gallery (11).webp";
import Image12 from "../../public/images/Gallery (12).webp";
import Image13 from "../../public/images/Gallery (13).webp";
import Image14 from "../../public/images/Gallery (14).webp";
import Image15 from "../../public/images/Gallery (15).webp";

// Define an interface for the image object
interface ImageObject {
  filter: string;
  title: string;
  image: StaticImageData;
  alt: string;
}

const images: ImageObject[] = [
  {
    filter: "architecture",
    title: "Serenity Passing",
    image: Image1,
    alt: "An image showcasing a curved hallway",
  },
  {
    filter: "architecture",
    title: "Repeated Habits",
    image: Image2,
    alt: "A mesmerizing view of a university library",
  },
  {
    filter: "architecture",
    title: "Urban Oasis",
    image: Image3,
    alt: "A stunning architectural structure submurged in rain",
  },
  {
    filter: "city",
    title: "Reflection Roles",
    image: Image4,
    alt: "A tranquil scene of a sunset over a building",
  },
  {
    filter: "architecture",
    title: "The Flame In Us",
    image: Image5,
    alt: "A dark tower with neon lighting",
  },
  {
    filter: "city",
    title: "Skyview",
    image: Image6,
    alt: "A majestic view of the city lights from a mountain",
  },
  {
    filter: "architecture",
    title: "A Way Out",
    image: Image7,
    alt: "A charming historical building with intricate details",
  },
  {
    filter: "landscape",
    title: "Grey Fields",
    image: Image8,
    alt: "Vast fields bathed in golden sunlight",
  },
  {
    filter: "city",
    title: "White Sky",
    image: Image9,
    alt: "A city skyline reflecting on a calm body of water",
  },
  {
    filter: "landscape",
    title: "Snow In Oblivion",
    image: Image10,
    alt: "A breathtaking view of a lighted building in the snow ",
  },
  {
    filter: "architecture",
    title: "Timeless Elegance",
    image: Image11,
    alt: "An architectural masterpiece standing the test of time",
  },
  {
    filter: "architecture",
    title: "An Uphill Walk",
    image: Image12,
    alt: "a hill showing part of a building structure",
  },
  {
    filter: "landscape",
    title: "Spring Stairs",
    image: Image13,
    alt: "spring weather in the city streats",
  },
  {
    filter: "architecture",
    title: "A Lifes State",
    image: Image14,
    alt: "A Cat ssleeping on the bed in a comfortable position",
  },
  {
    filter: "landscape",
    title: "Green Road",
    image: Image15,
    alt: "A greenpathway filled with plants",
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
    <div className="min-h-screen bg-[#454545] p-2 sm:p-8 w-full relative">
      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 "
          onClick={closeModal} // Close modal when clicking on the overlay
        >
          <div
            className=" p-2 rounded-xl shadow-lg max-w-xs sm:max-w-xl mx-auto transition duration-300 ease-in-out transform scale-95 hover:scale-100 lg:h-[85vh] xl:h-auto lg:mt-20 xl:mt-24"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.image}
              alt={selectedImage.alt}
              width="600"
              height="400"
              className="rounded-xl object-contain h-full w-full "
            />
          </div>
        </div>
      )}
      <div className="mx-auto max-w-xs sm:max-w-7xl">
        <h1 className="text-2xl sm:text-5xl font-bold text-center mb-2 sm:mb-4 text-[#9E9E9E]">
          Momente festhalten
        </h1>
        <p className="text-lg sm:text-xl text-center mb-4 sm:mb-8 text-white mt-5">
          Die Schönheit von Marburg durch Fotografie erkunden
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
              {filter === "all" ? "show all" : filter}
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
              <div className="overflow-hidden rounded-sm  aspect-square shadow-xl">
                <div className="relative w-full h-full ">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    className="transform group-hover:scale-110 transition duration-500 ease-in-out object-cover inset-0 w-full h-full opacity-90 hover:opacity-100"
                    fill
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
              className={`border border-gray-700   p-4 rounded-xl  text-xs sm:text-lg transition duration-300 ease-in-out ${
                currentPage === index + 1 ? "bg-blue-300" : "hover:bg-gray-700"
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
