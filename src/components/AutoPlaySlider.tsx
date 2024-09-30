"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

export default function AutoPlaySlider() {
  const slides = [
    {
      src: "/slide/school.webp",
      alt: "school",
      text: "교육 시설",
      text2: "학교, 대학교, 도서관, 연구소",
    },
    {
      src: "/slide/apartment.webp",
      alt: "apartment",
      text: "상업 건축",
      text2: "오피스 빌딩, 쇼핑몰, 호텔, 레스토랑",
    },
    {
      src: "/slide/house.webp",
      alt: "house",
      text: "주거 건축",
      text2: "단독주택, 공동주택, 아파트, 빌라",
    },
    {
      src: "/slide/workplace.webp",
      alt: "workplace",
      text: "교육 시설",
      text2: "병원, 학교, 연구 시설, 도서관",
    },
    {
      src: "/slide/baseballpark.webp",
      alt: "baseballpark",
      text: "문화 및 레저 시설",
      text2: "공원, 야구장, 체육관, 미술관",
    },
    {
      src: "/slide/space.webp",
      alt: "space",
      text: "공간혁신사업",
      text2: "학교 공간 혁신, 공유 오피스, 복합문화공간",
    },
  ];

  return (
    <div className="w-full h-full">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="w-full h-full">
            <div className="relative w-full h-full">
              <Image
                src={slide.src}
                alt={slide.alt}
                layout="fill"
                objectFit="cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center p-4">
                <h2 className="text-white text-4xl font-bold text-center mb-4">
                  {slide.text}
                </h2>
                <p className="text-white text-xl text-center max-w-2xl">
                  {slide.text2}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
