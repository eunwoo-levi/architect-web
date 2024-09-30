"use client";

import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const linkClassName =
  "text-md font-semibold hover:scale-105 transition-transform duration-200";

export default function NavToggle() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const toggleMenu = () => setIsToggleOpen(!isToggleOpen);

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="md:hidden focus:outline-none"
        aria-expanded={isToggleOpen}
        aria-label="Toggle navigation menu"
      >
        <RxHamburgerMenu size={25} />
      </button>
      <div
        className={`${
          isToggleOpen ? "flex" : "hidden"
        } min-w-[200px] md:min-w-0 p-4 md:p-0 gap-4 md:gap-6 md:flex flex-col md:flex-row items-start md:items-center absolute md:relative right-0 top-10 md:top-0 bg-white md:bg-transparent shadow-md md:shadow-none z-50`}
      >
        <Link href="/about" className={linkClassName} onClick={toggleMenu}>
          회사소개
        </Link>
        <Link href="/projects" className={linkClassName} onClick={toggleMenu}>
          프로젝트
        </Link>
        <Link href="/contact" className={linkClassName} onClick={toggleMenu}>
          연락처
        </Link>
        <Link href="/board" className={linkClassName} onClick={toggleMenu}>
          자유게시판
        </Link>
      </div>
    </div>
  );
}
