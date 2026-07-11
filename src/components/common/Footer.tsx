import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-stone-950 border-t border-stone-800">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-sm tracking-[0.18em] text-white uppercase">
                진 성
              </span>
              <span className="text-[11px] tracking-[0.12em] text-stone-500 font-medium mt-0.5">
                건축사 사무소
              </span>
            </div>
            <p className="mt-4 text-stone-500 text-xs leading-relaxed max-w-xs">
              20년의 경험으로 고객의 비전을 현실로 만드는<br />
              종합 건축 설계 전문 사무소입니다.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[11px] tracking-[0.2em] text-stone-400 uppercase mb-4 font-medium">
              Navigation
            </h4>
            <nav className="flex flex-col gap-2">
              {[
                { href: "/", label: "홈" },
                { href: "/about", label: "회사소개" },
                { href: "/projects", label: "프로젝트" },
                { href: "/contact", label: "연락처" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-stone-500 text-xs tracking-wide hover:text-accent-light transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] tracking-[0.2em] text-stone-400 uppercase mb-4 font-medium">
              Contact
            </h4>
            <div className="flex flex-col gap-2 text-stone-500 text-xs">
              <p>대구광역시 수성구 범어로 192, 2층(범어동)</p>
              <a href="tel:053-716-7927" className="hover:text-accent-light transition-colors">
                T. 053-716-7927
              </a>
              <a href="tel:010-6242-7927" className="hover:text-accent-light transition-colors">
                M. 010-6242-7927
              </a>
              <a href="fax:053-326-6698" className="hover:text-accent-light transition-colors">
                F. 053-326-6698
              </a>
              <a href="mailto:nature0021@hanmail.net" className="hover:text-accent-light transition-colors">
                nature0021@hanmail.net
              </a>
              <p className="mt-1 text-stone-600">월~금 09:00 – 18:00</p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-stone-800 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <p className="text-stone-600 text-xs">
            © {new Date().getFullYear()} 진성 건축사 사무소. All rights reserved.
          </p>
          <p className="text-stone-700 text-xs">
            대한건축사협회 정회원
          </p>
        </div>
      </div>
    </footer>
  );
}
