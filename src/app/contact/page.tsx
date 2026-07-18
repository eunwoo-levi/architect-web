"use client";

import dynamic from "next/dynamic";
import { NavermapsProvider } from "react-naver-maps";
import { siteConfig } from "@/config/site";
import JsonLd, { buildBreadcrumbList } from "@/components/JsonLd";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/motion/FadeIn";

const Navermap = dynamic(() => import("@/components/map/Navermap"), {
  ssr: false,
});

const contactInfo = [
  {
    label: "주소",
    value: "대구광역시 수성구 범어로 192, 2층",
    sub: "범어동",
    href: null,
  },
  {
    label: "전화",
    value: "053-716-7927",
    href: "tel:053-716-7927",
  },
  {
    label: "휴대폰",
    value: "010-6242-7927",
    href: "tel:010-6242-7927",
  },
  {
    label: "팩스",
    value: "053-326-6698",
    href: "fax:053-326-6698",
  },
  {
    label: "이메일",
    value: "nature0021@hanmail.net",
    href: "mailto:nature0021@hanmail.net",
  },
  {
    label: "운영시간",
    value: "월~금 09:00 – 18:00",
    sub: "토·일·공휴일 휴무",
    href: null,
  },
];

const breadcrumbJsonLd = buildBreadcrumbList([
  { name: "홈", url: siteConfig.url },
  { name: "연락처", url: `${siteConfig.url}/contact` },
]);

export default function ContactPage() {
  return (
    <NavermapsProvider
      ncpClientId={process.env.NEXT_PUBLIC_NAVERMAPS_CLIENT_ID || ""}
    >
      <main className="w-full bg-white">
        <JsonLd id="ld-json-breadcrumb-contact" data={breadcrumbJsonLd} />
        {/* ── Page Header ── */}
        <section className="w-full bg-stone-900 py-20 md:py-24">
          <div className="max-w-screen-xl mx-auto px-6 md:px-10">
            <FadeIn>
              <SectionHeading
                eyebrow="Contact"
                title="연락처"
                as="h1"
                tone="dark"
                description="궁금하신 사항이나 프로젝트 문의가 있으시면 언제든지 연락 주세요. 성실하게 답변드리겠습니다."
              />
            </FadeIn>
          </div>
        </section>

        {/* ── Main Content ── */}
        <section className="w-full py-16 md:py-20">
          <div className="max-w-screen-xl mx-auto px-6 md:px-10">
            <div className="grid lg:grid-cols-[380px_1fr] gap-12 lg:gap-16">

              {/* Left: Contact Info */}
              <FadeIn>
                <SectionHeading eyebrow="Get in Touch" title="찾아오시는 길" size="md" />

                <div className="mt-8 flex flex-col gap-6">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex gap-5 pb-6 border-b border-stone-100">
                      <div className="shrink-0 w-16 text-xs tracking-[0.15em] text-stone-400 uppercase pt-0.5">
                        {info.label}
                      </div>
                      <div>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-stone-800 font-medium text-sm hover:text-accent transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-stone-800 font-medium text-sm">
                            {info.value}
                          </p>
                        )}
                        {info.sub && (
                          <p className="mt-0.5 text-stone-400 text-xs">{info.sub}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-8 bg-stone-50 border border-stone-200 p-6">
                  <h3 className="text-sm font-semibold text-stone-900 tracking-wide">
                    프로젝트 상담 문의
                  </h3>
                  <p className="mt-2 text-stone-500 text-xs leading-relaxed">
                    설계부터 감리까지 모든 건축 관련 문의를<br />
                    이메일이나 전화로 연락 주시면 빠르게 답변드리겠습니다.
                  </p>
                  <Button href="mailto:nature0021@hanmail.net" variant="solid-dark" size="md" className="mt-4">
                    이메일 보내기
                  </Button>
                </div>
              </FadeIn>

              {/* Right: Map */}
              <FadeIn delay={0.1} className="flex flex-col">
                <div className="rounded-none overflow-hidden border border-stone-200 flex-1 min-h-[400px] md:min-h-[500px]">
                  <Navermap />
                </div>
                <p className="mt-3 text-stone-400 text-xs tracking-wide">
                  대구광역시 수성구 범어로 192, 2층(범어동)
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── Bottom Info Bar ── */}
        <section className="w-full bg-stone-900 py-8">
          <div className="max-w-screen-xl mx-auto px-6 md:px-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="text-stone-500 text-xs tracking-wide">
                <span className="text-stone-300 font-medium">진성 건축사 사무소</span>
                {" · "}
                대구광역시 수성구 범어로 192, 2층(범어동)
              </div>
              <div className="flex items-center gap-6 text-stone-500 text-xs">
                <a href="tel:053-716-7927" className="hover:text-accent-light transition-colors">
                  T. 053-716-7927
                </a>
                <a href="tel:010-6242-7927" className="hover:text-accent-light transition-colors">
                  M. 010-6242-7927
                </a>
                <a href="mailto:nature0021@hanmail.net" className="hover:text-accent-light transition-colors">
                  nature0021@hanmail.net
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </NavermapsProvider>
  );
}
