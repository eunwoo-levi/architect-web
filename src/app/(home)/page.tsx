import type { Metadata } from "next";
import AutoPlaySlider from "@/components/AutoPlaySlider";
import ProfessionalBanner from "./_components/ProfessionalBanner";
import ProjectCard from "@/components/common/ProjectCard";
import { data as projectData } from "@/app/projects/data";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import SectionHeading from "@/components/ui/SectionHeading";
import StatGrid from "@/components/ui/StatGrid";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/motion/FadeIn";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

export const metadata: Metadata = {
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "대구 진성 건축사 사무소 | 대구 건축설계 전문",
    description: siteConfig.description,
    url: siteConfig.url,
  },
  twitter: {
    card: "summary_large_image",
    title: "대구 진성 건축사 사무소 | 대구 건축설계 전문",
    description: siteConfig.description,
  },
};

const stats = [
  { value: "20+", label: "년 경력" },
  { value: "50+", label: "완료 프로젝트" },
  { value: "100+", label: "감리 현장" },
  {
    icon: (
      <svg
        className="w-10 h-10"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    label: "건축사 자격",
    sublabel: "국가 공인",
  },
];

const featuredProjects = projectData.slice(0, 3);

export default function Home() {
  return (
    <main className="w-full">
      {/* ── Hero Slider ── */}
      <section className="w-full h-[calc(100vh-4rem)]">
        <h1 className="sr-only">
          대구 건축사 사무소 | 진성 건축사 사무소 – 주거·상업·공공 건축 설계 및 감리
        </h1>
        <AutoPlaySlider />
      </section>

      {/* ── Philosophy / Mission ── */}
      <section className="w-full bg-stone-900 py-24 md:py-32">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <FadeIn>
              <SectionHeading
                eyebrow="Our Philosophy"
                title={
                  <>
                    공간에 생명을<br />
                    불어넣는<br />
                    <span className="text-accent-light">건축 철학</span>
                  </>
                }
                tone="dark"
              />
              <p className="mt-6 text-stone-400 leading-relaxed text-sm md:text-base">
                저희는 단순한 건물이 아닌 사람들의 삶을 담는 공간을 설계합니다.
                고객의 비전과 요구를 깊이 이해하고, 20년의 경험을 바탕으로
                기능성과 아름다움이 조화된 최적의 건축 솔루션을 제공합니다.
              </p>
              <p className="mt-4 text-stone-400 leading-relaxed text-sm md:text-base">
                고객의 니즈를 심층 분석하여 독보적 가치를 창출하는
                맞춤형 설계로, 당신의 꿈을 현실로 만듭니다.
              </p>
              <Button href="/about" variant="outline-dark" size="md" className="mt-8">
                회사 소개 보기
                <span className="text-accent-light">→</span>
              </Button>
            </FadeIn>

            {/* Right: Stats */}
            <FadeIn delay={0.1}>
              <StatGrid items={stats} columns={2} variant="card" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section className="w-full bg-white py-24 md:py-32">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <FadeIn className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <SectionHeading eyebrow="Portfolio" title="주요 프로젝트" size="md" />
            <Link
              href="/projects"
              className="mt-6 md:mt-0 text-sm tracking-widest text-stone-500 hover:text-accent transition-colors flex items-center gap-2"
            >
              전체 보기 <span>→</span>
            </Link>
          </FadeIn>

          {/* Project grid preview */}
          <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-200">
            {featuredProjects.map((project) => (
              <StaggerItem key={project.slug}>
                <ProjectCard
                  title={project.title}
                  slug={project.slug}
                  imageUrl={project.imageUrl}
                  category={project.category}
                />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ── Services Banner ── */}
      <ProfessionalBanner />

      {/* ── CTA ── */}
      <section className="w-full relative py-28 md:py-36 overflow-hidden">
        <Image
          src="/homepage/architectdesign.webp"
          alt=""
          fill
          className="object-cover brightness-[0.25]"
        />
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-10 text-center">
          <FadeIn>
            <SectionHeading
              eyebrow="Contact Us"
              title={
                <>
                  새로운 공간을 함께<br />만들어 나가겠습니다
                </>
              }
              tone="dark"
              align="center"
            />
            <p className="mt-5 text-stone-400 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
              프로젝트 상담부터 설계, 감리까지<br />
              진성 건축사 사무소가 함께합니다
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" variant="solid-accent">
                무료 상담 신청
              </Button>
              <Button href="/projects" variant="outline-dark">
                포트폴리오 보기
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
