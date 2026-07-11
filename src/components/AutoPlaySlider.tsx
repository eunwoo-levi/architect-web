"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperInstance } from "swiper/types";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const slides = [
  {
    src: "/slide/school.webp",
    alt: "교육 시설",
    category: "EDUCATION",
    title: "교육 시설",
    description: "학교, 대학교, 도서관, 연구소",
  },
  {
    src: "/slide/apartment.webp",
    alt: "상업 건축",
    category: "COMMERCIAL",
    title: "상업 건축",
    description: "오피스 빌딩, 쇼핑몰, 호텔, 레스토랑",
  },
  {
    src: "/slide/house.webp",
    alt: "주거 건축",
    category: "RESIDENTIAL",
    title: "주거 건축",
    description: "단독주택, 공동주택, 아파트, 빌라",
  },
  {
    src: "/slide/workplace.webp",
    alt: "의료 및 복지 시설",
    category: "HEALTHCARE",
    title: "의료 및 복지 시설",
    description: "병원, 복지관, 연구 시설, 도서관",
  },
  {
    src: "/slide/baseballpark.webp",
    alt: "문화 및 레저 시설",
    category: "CULTURE & LEISURE",
    title: "문화 및 레저 시설",
    description: "공원, 야구장, 체육관, 미술관",
  },
  {
    src: "/slide/space.webp",
    alt: "공간혁신사업",
    category: "SPACE INNOVATION",
    title: "공간혁신사업",
    description: "학교 공간 혁신, 공유 오피스, 복합문화공간",
  },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export default function AutoPlaySlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = slides[activeIndex];

  return (
    <div className="relative w-full h-full">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        onSlideChange={(swiper: SwiperInstance) => setActiveIndex(swiper.realIndex)}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="w-full h-full">
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="kenburns-img object-cover"
                priority={index === 0}
              />
              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Text content - bottom left, crossfades independently of the image transition */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute bottom-16 left-8 md:left-16 lg:left-24 max-w-lg overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              <span className="inline-block text-[11px] tracking-[0.25em] text-white/60 font-medium mb-3 uppercase">
                {active.category}
              </span>
              <h2 className="font-serif text-white text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-3">
                {active.title}
              </h2>
              <div className="w-10 h-px bg-accent-light mb-3" />
              <p className="text-white/70 text-sm md:text-base tracking-wide">
                {active.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
