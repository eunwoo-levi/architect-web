import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { data } from "../data";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import JsonLd, { buildBreadcrumbList } from "@/components/JsonLd";
import FadeIn from "@/components/motion/FadeIn";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

interface Params {
  params: Promise<{ id: string }>;
}

function getProject(id: string) {
  return data.find((p) => p.slug === id);
}

export function generateStaticParams() {
  return data.map((project) => ({ id: project.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { id } = await params;
  const project = getProject(id);

  if (!project) {
    return { title: "프로젝트를 찾을 수 없습니다" };
  }

  const title = `${project.title} | 프로젝트`;

  return {
    title,
    description: project.description,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title,
      description: project.description,
      url: `${siteConfig.url}/projects/${project.slug}`,
      images: [
        {
          url: project.imageUrl,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: project.description,
      images: [project.imageUrl],
    },
  };
}

const metaFields = (project: NonNullable<ReturnType<typeof getProject>>) =>
  [
    { label: "위치", value: project.location },
    { label: "면적", value: project.area },
    { label: "준공", value: project.year },
    { label: "분야", value: project.category },
  ].filter((field): field is { label: string; value: string } => Boolean(field.value));

export default async function ProjectDetailPage({ params }: Params) {
  const { id } = await params;
  const project = getProject(id);

  if (!project) {
    notFound();
  }

  const currentIndex = data.findIndex((p) => p.slug === project.slug);
  const prevProject = data[(currentIndex - 1 + data.length) % data.length];
  const nextProject = data[(currentIndex + 1) % data.length];
  const gallery = project.images ?? [];
  const meta = metaFields(project);

  const breadcrumbJsonLd = buildBreadcrumbList([
    { name: "홈", url: siteConfig.url },
    { name: "프로젝트", url: `${siteConfig.url}/projects` },
    { name: project.title, url: `${siteConfig.url}/projects/${project.slug}` },
  ]);

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    image: `${siteConfig.url}${project.imageUrl}`,
    about: project.category,
    description: project.description,
    creator: {
      "@type": "ArchitectFirm",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  return (
    <main className="w-full bg-white">
      <JsonLd id="ld-json-breadcrumb" data={breadcrumbJsonLd} />
      <JsonLd id="ld-json-project" data={projectJsonLd} />

      {/* ── Hero Image ── */}
      <section className="relative h-[50vh] md:h-[65vh] min-h-[300px] overflow-hidden">
        <Image
          fill
          src={project.imageUrl}
          alt={project.title}
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-8 md:px-16 lg:px-24 pb-10 md:pb-14">
          <FadeIn>
            {project.category && (
              <span className="text-[10px] tracking-[0.28em] text-accent-light uppercase font-medium">
                {project.category}
              </span>
            )}
            <h1 className="font-serif mt-2 text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              {project.title}
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* ── Meta Strip ── */}
      {meta.length > 0 && (
        <section className="w-full bg-stone-900 border-b border-stone-800">
          <div className="max-w-screen-xl mx-auto px-6 md:px-10">
            <div className="flex flex-wrap gap-x-10 gap-y-3 py-5">
              {meta.map((field) => (
                <div key={field.label} className="flex items-baseline gap-2">
                  <span className="text-[10px] tracking-[0.2em] text-stone-500 uppercase">
                    {field.label}
                  </span>
                  <span className="text-sm text-stone-200 font-medium">{field.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Content ── */}
      <section className="w-full py-16 md:py-20">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-[1fr_300px] gap-16">
            {/* Main content */}
            <FadeIn>
              <div className="flex items-center gap-4 pb-6 border-b border-stone-200">
                <div className="w-10 h-px bg-accent" />
                <span className="text-xs tracking-[0.2em] text-stone-400 uppercase">Project Details</span>
              </div>
              <p className="mt-8 text-stone-500 text-sm leading-relaxed">
                {project.description}
              </p>

              {gallery.length > 0 && (
                <StaggerGroup className="mt-10 grid grid-cols-2 gap-px bg-stone-200">
                  {gallery.map((src, index) => (
                    <StaggerItem key={src + index}>
                      <div className="relative aspect-[4/3] bg-stone-100">
                        <Image
                          src={src}
                          alt={`${project.title} 이미지 ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              )}
            </FadeIn>

            {/* Sidebar */}
            <FadeIn delay={0.1} className="bg-stone-50 border border-stone-200 p-6 h-fit">
              <h3 className="text-xs tracking-[0.2em] text-stone-400 uppercase font-medium mb-5">
                Project Info
              </h3>
              <div className="flex flex-col gap-4">
                <div className="pb-4 border-b border-stone-200">
                  <div className="text-[11px] tracking-wider text-stone-400 mb-1">프로젝트명</div>
                  <div className="text-sm font-medium text-stone-900">{project.title}</div>
                </div>
                {meta.map((field) => (
                  <div key={field.label} className="pb-4 border-b border-stone-200">
                    <div className="text-[11px] tracking-wider text-stone-400 mb-1">{field.label}</div>
                    <div className="text-sm font-medium text-stone-900">{field.value}</div>
                  </div>
                ))}
                <div>
                  <div className="text-[11px] tracking-wider text-stone-400 mb-1">설계사무소</div>
                  <div className="text-sm font-medium text-stone-900">진성 건축사 사무소</div>
                </div>
              </div>
              <Link
                href="/contact"
                className="mt-6 block text-center text-xs tracking-widest bg-stone-900 text-white px-6 py-3 hover:bg-accent transition-colors duration-300"
              >
                문의하기
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Prev / Next Project Navigation ── */}
      <section className="w-full border-t border-stone-200">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2">
          <Link
            href={`/projects/${prevProject.slug}`}
            className="group relative flex items-center gap-5 px-6 md:px-10 py-8 border-b sm:border-b-0 sm:border-r border-stone-200 hover:bg-stone-50 transition-colors"
          >
            <div className="relative w-16 h-16 shrink-0 overflow-hidden bg-stone-100">
              <Image
                src={prevProject.imageUrl}
                alt={prevProject.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div>
              <span className="text-[10px] tracking-[0.2em] text-stone-400 uppercase">이전 프로젝트</span>
              <h3 className="mt-1 text-sm font-semibold text-stone-900 group-hover:text-accent transition-colors">
                {prevProject.title}
              </h3>
            </div>
          </Link>
          <Link
            href={`/projects/${nextProject.slug}`}
            className="group relative flex items-center justify-end gap-5 px-6 md:px-10 py-8 hover:bg-stone-50 transition-colors text-right"
          >
            <div>
              <span className="text-[10px] tracking-[0.2em] text-stone-400 uppercase">다음 프로젝트</span>
              <h3 className="mt-1 text-sm font-semibold text-stone-900 group-hover:text-accent transition-colors">
                {nextProject.title}
              </h3>
            </div>
            <div className="relative w-16 h-16 shrink-0 overflow-hidden bg-stone-100">
              <Image
                src={nextProject.imageUrl}
                alt={nextProject.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </Link>
        </div>
      </section>

      {/* ── Navigation ── */}
      <section className="w-full border-t border-stone-200 py-8">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 flex items-center justify-between">
          <Link
            href="/projects"
            className="text-xs tracking-widest text-stone-500 hover:text-accent transition-colors flex items-center gap-2"
          >
            <span>←</span> 목록으로
          </Link>
          <Link
            href="/contact"
            className="text-xs tracking-widest text-stone-500 hover:text-accent transition-colors"
          >
            이 프로젝트 문의하기
          </Link>
        </div>
      </section>
    </main>
  );
}
