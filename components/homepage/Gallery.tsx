"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

import Apple from "../../public/images/Galleryimage (1).jpg";
import DNA from "../../public/images/Galleryimage (1).webp";
import im1 from "../../public/images/Galleryimage (10).webp";
import im2 from "../../public/images/Galleryimage (11).webp";
import im3 from "../../public/images/Galleryimage (12).webp";
import im4 from "../../public/images/Galleryimage (13).webp";
import im5 from "../../public/images/Galleryimage (14).webp";
import im6 from "../../public/images/Galleryimage (15).webp";
import im7 from "../../public/images/Galleryimage (16).webp";
import Space from "../../public/images/Galleryimage (17).webp";
import im8 from "../../public/images/Galleryimage (18).webp";
import im9 from "../../public/images/Galleryimage (19).webp";
import im10 from "../../public/images/Galleryimage (2).webp";
import im11 from "../../public/images/Galleryimage (20).webp";
import im12 from "../../public/images/Galleryimage (21).webp";
import im13 from "../../public/images/Galleryimage (22).webp";

// Define an interface for the image object
interface ImageObject {
  filter: string;
  title: string;
  image: StaticImageData;
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
  {
    filter: "architecture",
    title: "title 13",
    image: im8,
    alt: "h",
  },
  {
    filter: "landscape",
    title: "title 14",
    image: im9,
    alt: "h",
  },
  {
    filter: "Cityscape",
    title: "title 15",
    image: im10,
    alt: "h",
  },
  {
    filter: "architecture",
    title: "title 16",
    image: im11,
    alt: "h",
  },
  {
    filter: "landscape",
    title: "title 17",
    image: im12,
    alt: "h",
  },
  {
    filter: "Cityscape",
    title: "title 18",
    image: im13,
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
