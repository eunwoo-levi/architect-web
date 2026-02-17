import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import NaverMapsWrapper from "@/components/map/NaverMapsWrapper";
import Link from "next/link";

const geistSans = localFont({
  src: "../../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "대구 진성 건축사 사무소 | 대구 건축설계 전문",
    template: "%s | 대구 진성 건축사 사무소",
  },
  description:
    "대구 수성구 진성 건축사 사무소. 20년 경력의 대구 건축사가 주거·상업·공공 건물 설계와 감리를 전문으로 합니다. 대구 건축사 사무소 상담 문의 053-716-7927.",
  keywords:
    "대구 건축사, 대구 건축사 사무소, 대구 진성, 진성 건축사, 대구 건축설계, 대구 건축, 대구 감리, 대구 수성구 건축사, 건축사 사무소, 주택 설계, 상업 건물 설계, 리모델링",
  metadataBase: new URL("https://www.daegu-jinsung.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "대구 진성 건축사 사무소 | 대구 건축설계 전문",
    description:
      "대구 수성구 20년 경력 진성 건축사 사무소. 주거·상업·공공 건물 설계 및 감리 전문. 053-716-7927",
    url: "https://www.daegu-jinsung.com",
    siteName: "대구 진성 건축사 사무소",
    images: [
      {
        url: "https://www.daegu-jinsung.com/brand.webp",
        width: 1200,
        height: 630,
        alt: "대구 진성 건축사 사무소 대표 이미지",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: "mc5GaM0i98UbohMwoGeC8umG2GGhNcR5tjO5VN9CmP8",
    other: {
      "naver-site-verification": "b8f74214ea0d19776b22e18ef5c5fa36262302ba",
    },
  },
};

function Footer() {
  return (
    <footer className="w-full bg-stone-950 border-t border-stone-800">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-[0.18em] text-white uppercase">
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
              <p>대구광역시 수성구 국채보상로186길 79</p>
              <a href="tel:053-716-7927" className="hover:text-accent-light transition-colors">
                T. 053-716-7927
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "ArchitectFirm"],
            name: "진성 건축사 사무소",
            alternateName: ["대구 진성 건축사 사무소", "대구 진성", "진성 건축사"],
            description:
              "대구 수성구 소재 진성 건축사 사무소. 20년 경력의 전문 건축사가 주거·상업·공공 건물 설계 및 감리 서비스를 제공합니다.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "국채보상로186길 79",
              addressLocality: "대구광역시 수성구",
              addressRegion: "대구",
              postalCode: "42192",
              addressCountry: "KR",
            },
            url: "https://www.daegu-jinsung.com",
            telephone: "+82-53-716-7927",
            faxNumber: "+82-53-326-6698",
            email: "nature0021@hanmail.net",
            geo: {
              "@type": "GeoCoordinates",
              latitude: 35.8662910116539,
              longitude: 128.63429893576,
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "09:00",
              closes: "18:00",
            },
            priceRange: "$$",
            areaServed: {
              "@type": "City",
              name: "대구광역시",
            },
            hasMap: "https://maps.google.com/?q=35.8662910116539,128.63429893576",
            sameAs: [
              "https://www.daegu-jinsung.com",
            ],
          })}
        </script>
        <NaverMapsWrapper>
          <Navbar />
          <div className="flex-1">
            {children}
          </div>
          <Footer />
        </NaverMapsWrapper>
      </body>
    </html>
  );
}
