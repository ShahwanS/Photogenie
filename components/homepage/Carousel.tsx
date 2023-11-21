"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
// import Apple from "../../public/images/Apple.png";
// import DNA from "../../public/images/DNA stairs.png";
import im1 from "../../public/images/im1.jpg";
import im2 from "../../public/images/im2.jpg";
import im3 from "../../public/images/im3.jpg";
import im4 from "../../public/images/im4.jpg";
import im5 from "../../public/images/im5.jpg";
import im6 from "../../public/images/im6.jpg";
import im7 from "../../public/images/im7.jpg";
import Space from "../../public/images/Space web.png";

const data = [
  // { alt: "1", image: Apple },
  // { alt: "2", image: DNA },
  { alt: "3", image: im1 },
  { alt: "4", image: im2 },
  { alt: "5", image: im3 },
  { alt: "6", image: im4 },
  { alt: "7", image: im5 },
  { alt: "8", image: im6 },
  { alt: "9", image: im7 },
  { alt: "10", image: Space },
];

export default function Carousel() {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      effect={"fade"}
      centeredSlides={true}
      grabCursor={true}
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      pagination={{ dynamicBullets: true }}
      modules={[Autoplay, Pagination, EffectFade]}
      className="w-full mx-auto"
    >
      {data.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="h-remaining overflow-hidden relative rounded-lg">
            <Image
              src={item.image}
              alt={item.alt}
              width={1500}
              height={1500}
              className="object-cover  w-full h-full max-w-full max-h-full "
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
