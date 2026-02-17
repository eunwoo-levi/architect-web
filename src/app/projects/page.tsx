import type { Metadata } from "next";
import ProjectLink from "./_components/ProjectLink";
import { data } from "./data";

export const metadata: Metadata = {
  title: "포트폴리오",
  description:
    "대구 진성 건축사 사무소의 프로젝트 포트폴리오. 교육 시설, 의료 시설, 상업 시설, 공공 시설 등 대구 지역 다수의 건축 설계 프로젝트를 확인하세요.",
  alternates: {
    canonical: "/projects",
  },
};

interface ProjectProps {
  title: string;
  imageUrl: string;
  category?: string;
}

export default function ProjectPage() {
  return (
    <main className="w-full bg-white">
      {/* ── Page Header ── */}
      <section className="w-full bg-stone-900 py-20 md:py-24">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <span className="text-[11px] tracking-[0.28em] text-accent-light font-medium uppercase">
            Portfolio
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            프로젝트
          </h1>
          <div className="mt-5 w-12 h-px bg-accent" />
          <p className="mt-5 text-stone-400 text-sm md:text-base max-w-lg leading-relaxed">
            20년간의 다양한 프로젝트 경험을 바탕으로 최적의 건축 설계를 제공합니다.
            교육, 복지, 상업, 공공 시설 등 다양한 유형의 건축물을 설계하였습니다.
          </p>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="w-full bg-stone-800 py-6">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="flex flex-wrap items-center gap-8 md:gap-16">
            {[
              { val: data.length.toString(), label: "완료 프로젝트" },
              { val: "20+", label: "년 경력" },
              { val: "5", label: "설계 분야" },
              { val: "대구·경북", label: "주요 지역" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-accent-light">{stat.val}</span>
                <span className="text-xs tracking-wider text-stone-400">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects Grid ── */}
      <section className="w-full py-16 md:py-20">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200">
            {data.map((project: ProjectProps) => (
              <ProjectLink
                key={project.title}
                title={project.title}
                imageUrl={project.imageUrl}
                category={project.category}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="w-full border-t border-stone-200 py-16">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-stone-900 tracking-tight">
              새 프로젝트를 준비 중이신가요?
            </h2>
            <p className="mt-2 text-stone-500 text-sm">
              진성 건축사 사무소와 함께 당신의 비전을 실현하세요.
            </p>
          </div>
          <a
            href="/contact"
            className="shrink-0 text-sm tracking-widest bg-stone-900 text-white px-10 py-4 hover:bg-accent transition-colors duration-300 font-medium text-center"
          >
            상담 문의하기
          </a>
        </div>
      </section>
    </main>
  );
}
