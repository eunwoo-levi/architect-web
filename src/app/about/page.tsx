import type { Metadata } from "next";
import Image from "next/image";
import { LuBuilding2, LuRepeat, LuSchool } from "react-icons/lu";
import { FaHelmetSafety } from "react-icons/fa6";
import { BsBuildingCheck } from "react-icons/bs";
import { MdFactCheck } from "react-icons/md";
import { IconType } from "react-icons";
import { siteConfig } from "@/config/site";
import JsonLd, { buildBreadcrumbList } from "@/components/JsonLd";
import SectionHeading from "@/components/ui/SectionHeading";
import StatGrid from "@/components/ui/StatGrid";
import ServiceGrid from "@/components/ui/ServiceGrid";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/motion/FadeIn";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

const description =
  "대구 수성구 진성 건축사 사무소 소개. 20년 경력의 전문 건축사가 운영하는 대구 건축사 사무소로, 대구 건축설계, 해체계획서 작성, 용도변경, 건축감리 서비스를 제공합니다.";

export const metadata: Metadata = {
  title: "회사소개",
  description,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "회사소개 | 대구 진성 건축사 사무소",
    description,
    url: `${siteConfig.url}/about`,
    images: [{ url: "/aboutpage/architectdesign2.webp", alt: "진성 건축사 사무소" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "회사소개 | 대구 진성 건축사 사무소",
    description,
    images: ["/aboutpage/architectdesign2.webp"],
  },
};

const breadcrumbJsonLd = buildBreadcrumbList([
  { name: "홈", url: siteConfig.url },
  { name: "회사소개", url: `${siteConfig.url}/about` },
]);

interface ServiceItem {
  icon: IconType;
  title: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    icon: LuBuilding2,
    title: "종합 건축설계",
    description: "주거시설, 교육·연구 및 복지시설, 근린생활시설 등 다양한 유형의 건축물 설계",
  },
  {
    icon: MdFactCheck,
    title: "건축물 해체계획서 작성",
    description: "안전을 최우선으로 하는 건축물 해체계획서 작성 및 석면해체공사 감리",
  },
  {
    icon: LuRepeat,
    title: "건축물 용도변경",
    description: "근린생활시설·주택 등 건축물 용도변경 인허가 및 설계 대행 서비스",
  },
  {
    icon: FaHelmetSafety,
    title: "건축 감리",
    description: "설계의 완벽한 구현을 위한 현장 감리 및 공사 감리 전문 서비스",
  },
  {
    icon: LuSchool,
    title: "공간 혁신 사업",
    description: "기존 공간의 가치를 재발견하고 극대화하는 혁신적 접근으로 학교공간혁신 전문",
  },
  {
    icon: BsBuildingCheck,
    title: "건축물 정기점검",
    description: "체계적인 정기점검으로 건축물의 안전성 및 기능성 유지 관리",
  },
];

const values = [
  {
    number: "01",
    title: "안전 최우선",
    description: "모든 설계 과정에서 안전성을 최우선으로 고려합니다. 다양한 환경에서의 리스크를 분석하고 예방하는 설계 솔루션을 제공합니다.",
  },
  {
    number: "02",
    title: "맞춤형 설계",
    description: "고객의 개별적인 필요와 선호에 맞춰 설계합니다. 생활 방식과 환경에 최적화된 공간을 창출하는 것이 저희의 목표입니다.",
  },
  {
    number: "03",
    title: "전문 감리",
    description: "시공 단계의 품질 관리는 물론, 현장 관리 및 안전 점검을 통해 고객의 기대에 부합하는 결과를 도출합니다.",
  },
  {
    number: "04",
    title: "통합 서비스",
    description: "설계부터 감리까지 원스톱 서비스로 프로젝트의 일관성과 효율성을 보장합니다.",
  },
];

const stats = [
  { value: "20+", label: "년 경력" },
  { value: "100+", label: "프로젝트" },
  { value: "1", label: "건축사 자격" },
];

export default function AboutPage() {
  return (
    <main className="w-full bg-white">
      <JsonLd id="ld-json-breadcrumb-about" data={breadcrumbJsonLd} />
      {/* ── Hero ── */}
      <section className="relative h-[50vh] md:h-[60vh] min-h-[300px] overflow-hidden">
        <Image
          fill
          src="/aboutpage/architectdesign2.webp"
          alt="진성 건축사 사무소"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end px-8 md:px-16 lg:px-24 pb-12 md:pb-16">
          <FadeIn>
            <span className="text-[11px] tracking-[0.28em] text-accent-light font-medium uppercase mb-3 block">
              About Us
            </span>
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              진성 건축사 사무소
            </h1>
            <div className="mt-4 w-12 h-px bg-accent" />
            <p className="mt-4 text-stone-300 text-sm md:text-base tracking-wide">
              20년의 지속적인 열정, 무한한 가능성의 실현
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Mission Statement ── */}
      <section className="w-full py-20 md:py-28 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <FadeIn>
              <SectionHeading
                eyebrow="Our Story"
                title={
                  <>
                    20년의 경험으로<br />만드는 공간
                  </>
                }
                size="md"
              />
            </FadeIn>
            <FadeIn delay={0.1} className="md:pt-12">
              <p className="text-stone-600 leading-relaxed text-sm md:text-base">
                저희는 20년 이상의 풍부한 경험을 바탕으로 고객의 꿈을 현실로 만드는
                혁신적인 건축 솔루션을 제공합니다. <strong className="text-stone-900 font-semibold">&ldquo;공간에 생명을 불어넣는&rdquo;</strong> 우리의
                철학은 단순한 건물이 아닌, 삶의 질을 향상시키는 공간을 창조합니다.
              </p>
              <p className="mt-4 text-stone-600 leading-relaxed text-sm md:text-base">
                고객과의 철저한 소통을 통해 시작되는 설계 과정에서 우리는 각 건축물이
                단순한 구조물 이상의 의미를 지니며, 그 안에 고객의 이야기가 담겨 있어야
                한다고 믿습니다.
              </p>
              <StatGrid items={stats} columns={3} variant="plain" className="mt-8" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="w-full py-20 md:py-28 bg-stone-50 border-t border-stone-200">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <FadeIn className="mb-14">
            <SectionHeading
              eyebrow="Capabilities"
              title="전문 역량"
              align="center"
              divider="ornament"
            />
          </FadeIn>

          <ServiceGrid items={services} columns={3} />
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="w-full py-20 md:py-28 bg-stone-900">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <FadeIn className="mb-14">
            <SectionHeading eyebrow="Core Values" title="핵심 가치" tone="dark" size="md" />
          </FadeIn>

          <StaggerGroup className="grid md:grid-cols-2 gap-px bg-stone-700">
            {values.map((value) => (
              <StaggerItem key={value.number} className="h-full">
                <div className="h-full bg-stone-800 p-8 md:p-10 hover:bg-stone-700 transition-colors duration-300">
                  <span className="font-serif text-5xl font-bold text-stone-600 leading-none">
                    {value.number}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {value.title}
                  </h3>
                  <div className="mt-3 w-8 h-px bg-accent" />
                  <p className="mt-4 text-stone-400 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="w-full py-20 bg-white border-t border-stone-200">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 text-center">
          <FadeIn>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-stone-900 tracking-tight">
              함께 새로운 가능성을 만들어 나가겠습니다
            </h2>
            <p className="mt-4 text-stone-500 text-sm md:text-base">
              귀하의 꿈과 비전을 현실로 만들기 위해, 저희와 함께 하십시오.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" variant="solid-dark">
                상담 문의하기
              </Button>
              <Button href="/projects" variant="outline-light">
                포트폴리오 보기
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
