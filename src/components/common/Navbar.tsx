import Image from "next/image";
import Link from "next/link";
import NavToggle from "./NavToggle";

const linkClassName =
  "text-md font-semibold hover:scale-105 transition-transform";

export default function Navbar() {
  return (
    <nav className="border w-full min-h-[60px] flex justify-between items-center px-4 md:px-6 py-2 shadow-sm">
      <Link href="/" className="flex items-center gap-3">
        <Image
          width={75}
          height={75}
          src="/brand.webp"
          alt="진성 건축사 사무소 로고"
        />
        <span className="flex flex-col">
          <div className="font-bold text-lg">진 성</div>
          <div className="text-sm font-semibold text-gray-600">
            건축사 사무소
          </div>
        </span>
      </Link>
      <NavToggle />
    </nav>
  );
}
