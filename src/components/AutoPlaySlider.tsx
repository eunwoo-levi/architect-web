"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Swiper 스타일
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function AutoPlaySlider() {
  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Tailwind 컨테이너 클래스 */}
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="rounded-lg shadow-lg" // Tailwind 클래스 적용
      >
        <SwiperSlide className="bg-blue-500 h-64 flex items-center justify-center text-white text-2xl font-bold">
          Slide 1
        </SwiperSlide>
        <SwiperSlide className="bg-green-500 h-64 flex items-center justify-center text-white text-2xl font-bold">
          Slide 2
        </SwiperSlide>
        <SwiperSlide className="bg-red-500 h-64 flex items-center justify-center text-white text-2xl font-bold">
          Slide 3
        </SwiperSlide>
        <SwiperSlide className="bg-yellow-500 h-64 flex items-center justify-center text-white text-2xl font-bold">
          Slide 4
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
