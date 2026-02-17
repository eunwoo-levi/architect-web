import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "연락처",
  description:
    "대구 진성 건축사 사무소 연락처 및 오시는 길. 대구광역시 수성구 국채보상로186길 79. 전화 053-716-7927. 건축 설계 상담 문의 환영합니다.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
