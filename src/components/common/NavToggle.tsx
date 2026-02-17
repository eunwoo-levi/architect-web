"use client";

import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

const links = [
  { href: "/about", label: "회사소개" },
  { href: "/projects", label: "프로젝트" },
  { href: "/contact", label: "연락처" },
];

export default function NavToggle() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-stone-700 hover:text-accent transition-colors"
        aria-label="메뉴 열기/닫기"
        aria-expanded={isOpen}
      >
        {isOpen ? <RxCross2 size={22} /> : <RxHamburgerMenu size={22} />}
      </button>

      {/* Mobile fullscreen overlay */}
      <div
        className={`fixed inset-x-0 top-16 bottom-0 bg-white z-40 flex flex-col transition-all duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col px-8 pt-10 gap-1">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-medium tracking-widest text-stone-900 hover:text-accent transition-colors py-4 border-b border-stone-100"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-8 text-center text-sm tracking-widest bg-stone-900 text-white px-8 py-4 hover:bg-accent transition-colors font-medium"
          >
            문의하기
          </Link>
        </nav>

        <div className="px-8 mt-auto pb-12 text-stone-400 text-xs tracking-wider">
          <p>대구광역시 수성구 국채보상로186길 79</p>
          <p className="mt-1">053-716-7927</p>
        </div>
      </div>
    </>
  );
}
