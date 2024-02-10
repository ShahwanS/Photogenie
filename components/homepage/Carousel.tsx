"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

import im1 from "../../public/images/Carousel (1).webp";
import im2 from "../../public/images/Carousel (2).webp";
import im3 from "../../public/images/Carousel (3).webp";
import im4 from "../../public/images/Carousel (4).webp";
import im5 from "../../public/images/Carousel (5).webp";
import im6 from "../../public/images/Carousel (6).webp";
type data = {
  alt: string;
  image: string;
};

const data = [
  { alt: "3", image: im1 },
  { alt: "4", image: im2 },
  { alt: "5", image: im3 },
  { alt: "6", image: im4 },
  { alt: "6", image: im5 },
  { alt: "6", image: im6 },
];

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  arrows: true, // Enable navigation arrows
};

interface CarouselProps {
  images: data[];
}

export default function Carousel() {
  return (
    <div className="w-[98vw] mx-auto p-8 ">
      {" "}
      {/* Added padding on sides */}
      <Slider {...settings}>
        {data.map((item, index) => (
          <div
            className="h-remaining overflow-hidden relative rounded-md"
            key={index}
          >
            <Image
              src={item.image}
              alt={item.alt}
              width={1500}
              height={1500}
              className="object-cover   w-full h-full max-w-full max-h-full "
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
