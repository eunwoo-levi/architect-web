"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import NavToggle from "./NavToggle";

const navLinks = [
  { href: "/", label: "홈" },
  { href: "/about", label: "회사소개" },
  { href: "/projects", label: "프로젝트" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 8);
  });

  return (
    <nav
      className={`sticky top-0 z-50 h-16 border-b transition-colors duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-stone-200 shadow-sm"
          : "bg-white border-stone-200"
      }`}
    >
      <div className="max-w-screen-xl mx-auto h-full px-6 md:px-10 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group"
        >
          <div className="relative w-14 h-14 shrink-0">
            <Image
              fill
              src="/brand.webp"
              alt="진성 건축사 사무소 로고"
              className="object-contain"
            />
          </div>
          <span className="flex flex-col leading-tight">
            <span className="font-serif font-bold text-lg tracking-[0.18em] text-stone-900 group-hover:text-accent transition-colors">
              진 성
            </span>
            <span className="text-sm tracking-[0.12em] text-stone-900 font-medium">
              건축사 사무소
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm tracking-widest text-stone-600 hover:text-stone-900 transition-colors font-medium relative group"
            >
              {label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-sm tracking-widest bg-stone-900 text-white px-6 py-2.5 hover:bg-accent transition-colors duration-300 font-medium"
          >
            문의하기
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <NavToggle />
        </div>
      </div>
    </nav>
  );
}
