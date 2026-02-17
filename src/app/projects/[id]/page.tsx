import { data } from "../data";
import Image from "next/image";
import Link from "next/link";

interface Params {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetailPage({ params }: Params) {
  const { id } = await params;
  const title = decodeURIComponent(id);
  const project = data.find((p) => p.title === title);

  if (!project) {
    return (
      <main className="w-full min-h-[60vh] flex flex-col items-center justify-center bg-white">
        <p className="text-stone-400 text-sm tracking-widest">프로젝트를 찾을 수 없습니다</p>
        <Link
          href="/projects"
          className="mt-6 text-xs tracking-widest text-stone-900 border border-stone-300 px-8 py-3 hover:border-accent hover:text-accent transition-colors"
        >
          목록으로 돌아가기
        </Link>
      </main>
    );
  }

  return (
    <main className="w-full bg-white">
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
          {project.category && (
            <span className="text-[10px] tracking-[0.28em] text-accent-light uppercase font-medium">
              {project.category}
            </span>
          )}
          <h1 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            {project.title}
          </h1>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="w-full py-16 md:py-20">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-[1fr_300px] gap-16">
            {/* Main content */}
            <div>
              <div className="flex items-center gap-4 pb-6 border-b border-stone-200">
                <div className="w-10 h-px bg-accent" />
                <span className="text-xs tracking-[0.2em] text-stone-400 uppercase">Project Details</span>
              </div>
              <p className="mt-8 text-stone-500 text-sm leading-relaxed">
                이 프로젝트에 대한 상세 정보는 준비 중입니다.<br />
                자세한 내용은 사무소로 문의해 주세요.
              </p>
            </div>

            {/* Sidebar */}
            <div className="bg-stone-50 border border-stone-200 p-6 h-fit">
              <h3 className="text-xs tracking-[0.2em] text-stone-400 uppercase font-medium mb-5">
                Project Info
              </h3>
              <div className="flex flex-col gap-4">
                <div className="pb-4 border-b border-stone-200">
                  <div className="text-[11px] tracking-wider text-stone-400 mb-1">프로젝트명</div>
                  <div className="text-sm font-medium text-stone-900">{project.title}</div>
                </div>
                {project.category && (
                  <div className="pb-4 border-b border-stone-200">
                    <div className="text-[11px] tracking-wider text-stone-400 mb-1">분야</div>
                    <div className="text-sm font-medium text-stone-900">{project.category}</div>
                  </div>
                )}
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
            </div>
          </div>
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
