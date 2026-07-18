import type { Metadata } from "next";
import localFont from "next/font/local";
import { Noto_Serif_KR } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Script from "next/script";
import { MotionConfig } from "framer-motion";
import { siteConfig } from "@/config/site";

const pretendard = localFont({
  src: "../../node_modules/pretendard/dist/web/variable/woff2/PretendardVariable.woff2",
  variable: "--font-pretendard",
  weight: "45 920",
  display: "swap",
});

const notoSerifKR = Noto_Serif_KR({
  weight: ["500", "700"],
  variable: "--font-noto-serif-kr",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: {
    default: "대구 진성 건축사 사무소 | 대구 건축설계 전문",
    template: "%s | 대구 진성 건축사 사무소",
  },
  description: siteConfig.description,
  keywords:
    "대구 건축사, 대구 건축사 사무소, 대구 진성, 진성 건축사, 대구 건축설계, 대구 건축, 대구 감리, 대구 수성구 건축사, 건축사 사무소, 주택 설계, 상업 건물 설계, 리모델링",
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "대구 진성 건축사 사무소 | 대구 건축설계 전문",
    description:
      "대구 수성구 20년 경력 진성 건축사 사무소. 주거·상업·공공 건물 설계 및 감리 전문. 053-716-7927",
    url: siteConfig.url,
    siteName: siteConfig.nameWithLocale,
    images: [
      {
        url: siteConfig.defaultOgImage,
        width: 1024,
        height: 585,
        alt: "대구 진성 건축사 사무소 대표 이미지",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "대구 진성 건축사 사무소 | 대구 건축설계 전문",
    description:
      "대구 수성구 20년 경력 진성 건축사 사무소. 주거·상업·공공 건물 설계 및 감리 전문. 053-716-7927",
    images: [siteConfig.defaultOgImage],
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

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ArchitectFirm"],
  name: siteConfig.name,
  alternateName: ["대구 진성 건축사 사무소", "대구 진성", "진성 건축사"],
  description:
    "대구 수성구 소재 진성 건축사 사무소. 20년 경력의 전문 건축사가 주거·상업·공공 건물 설계 및 감리 서비스를 제공합니다.",
  image: [
    `${siteConfig.url}${siteConfig.defaultOgImage}`,
    `${siteConfig.url}/brand.webp`,
  ],
  logo: `${siteConfig.url}/brand.webp`,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.locality,
    addressRegion: siteConfig.address.region,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.country,
  },
  url: siteConfig.url,
  telephone: siteConfig.phoneIntl,
  faxNumber: `+82-53-326-6698`,
  email: siteConfig.email,
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.geo.lat,
    longitude: siteConfig.geo.lng,
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
  hasMap: `https://maps.google.com/?q=${siteConfig.geo.lat},${siteConfig.geo.lng}`,
  sameAs: [siteConfig.url],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.nameWithLocale,
  url: siteConfig.url,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9VP641HQHK"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9VP641HQHK');
          `}
        </Script>
        <script
          id="ld-json-localbusiness"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
          id="ld-json-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body
        className={`${pretendard.variable} ${notoSerifKR.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <MotionConfig reducedMotion="user">
          <Navbar />
          <div className="flex-1">
            {children}
          </div>
          <Footer />
        </MotionConfig>
      </body>
    </html>
  );
}
