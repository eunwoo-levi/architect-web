import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

const description =
  "대구 진성 건축사 사무소 연락처 및 오시는 길. 대구광역시 수성구 범어로 192, 2층(범어동). 전화 053-716-7927. 건축 설계 상담 문의 환영합니다.";

export const metadata: Metadata = {
  title: "연락처",
  description,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "연락처 | 대구 진성 건축사 사무소",
    description,
    url: `${siteConfig.url}/contact`,
  },
  twitter: {
    card: "summary_large_image",
    title: "연락처 | 대구 진성 건축사 사무소",
    description,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
