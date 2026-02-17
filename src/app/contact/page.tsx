"use client";

import dynamic from "next/dynamic";
import { NavermapsProvider } from "react-naver-maps";

const Navermap = dynamic(() => import("@/components/map/Navermap"), {
  ssr: false,
});

const contactInfo = [
  {
    label: "주소",
    value: "대구광역시 수성구 국채보상로186길 79",
    sub: "대구 수성구 범어동 136-8",
    href: null,
  },
  {
    label: "전화",
    value: "053-716-7927",
    href: "tel:053-716-7927",
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

export default function ContactPage() {
  return (
    <NavermapsProvider
      ncpClientId={process.env.NEXT_PUBLIC_NAVERMAPS_CLIENT_ID || ""}
    >
      <main className="w-full bg-white">
        {/* ── Page Header ── */}
        <section className="w-full bg-stone-900 py-20 md:py-24">
          <div className="max-w-screen-xl mx-auto px-6 md:px-10">
            <span className="text-[11px] tracking-[0.28em] text-accent-light font-medium uppercase">
              Contact
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              연락처
            </h1>
            <div className="mt-5 w-12 h-px bg-accent" />
            <p className="mt-5 text-stone-400 text-sm md:text-base max-w-lg leading-relaxed">
              궁금하신 사항이나 프로젝트 문의가 있으시면 언제든지 연락 주세요.
              성실하게 답변드리겠습니다.
            </p>
          </div>
        </section>

        {/* ── Main Content ── */}
        <section className="w-full py-16 md:py-20">
          <div className="max-w-screen-xl mx-auto px-6 md:px-10">
            <div className="grid lg:grid-cols-[380px_1fr] gap-12 lg:gap-16">

              {/* Left: Contact Info */}
              <div>
                <span className="text-[11px] tracking-[0.25em] text-accent font-medium uppercase">
                  Get in Touch
                </span>
                <h2 className="mt-3 text-2xl md:text-3xl font-bold text-stone-900 tracking-tight">
                  찾아오시는 길
                </h2>
                <div className="mt-4 w-10 h-px bg-accent" />

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
                  <a
                    href="mailto:nature0021@hanmail.net"
                    className="inline-block mt-4 text-xs tracking-widest bg-stone-900 text-white px-6 py-3 hover:bg-accent transition-colors duration-300"
                  >
                    이메일 보내기
                  </a>
                </div>
              </div>

              {/* Right: Map */}
              <div className="flex flex-col">
                <div className="rounded-none overflow-hidden border border-stone-200 flex-1 min-h-[400px] md:min-h-[500px]">
                  <Navermap />
                </div>
                <p className="mt-3 text-stone-400 text-xs tracking-wide">
                  대구광역시 수성구 국채보상로186길 79 (범어동 136-8)
                </p>
              </div>
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
                대구광역시 수성구 국채보상로186길 79
              </div>
              <div className="flex items-center gap-6 text-stone-500 text-xs">
                <a href="tel:053-716-7927" className="hover:text-accent-light transition-colors">
                  T. 053-716-7927
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
