import AutoPlaySlider from "@/components/AutoPlaySlider";
import ProfessionalBanner from "./_components/ProfessionalBanner";
import Link from "next/link";
import Image from "next/image";

const stats = [
  { value: "20+", label: "년 경력" },
  { value: "100+", label: "완료 프로젝트" },
  { value: "9", label: "분야별 수상" },
  { value: "1", label: "건축사 자격" },
];

export default function Home() {
  return (
    <main className="w-full">
      {/* ── Hero Slider ── */}
      <section className="w-full h-[calc(100vh-4rem)]">
        <AutoPlaySlider />
      </section>

      {/* ── Philosophy / Mission ── */}
      <section className="w-full bg-stone-900 py-24 md:py-32">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <div>
              <span className="text-[11px] tracking-[0.28em] text-accent-light font-medium uppercase">
                Our Philosophy
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
                공간에 생명을<br />
                불어넣는<br />
                <span className="text-accent-light">건축 철학</span>
              </h2>
              <div className="mt-6 w-12 h-px bg-accent" />
              <p className="mt-6 text-stone-400 leading-relaxed text-sm md:text-base">
                저희는 단순한 건물이 아닌 사람들의 삶을 담는 공간을 설계합니다.
                고객의 비전과 요구를 깊이 이해하고, 20년의 경험을 바탕으로
                기능성과 아름다움이 조화된 최적의 건축 솔루션을 제공합니다.
              </p>
              <p className="mt-4 text-stone-400 leading-relaxed text-sm md:text-base">
                고객의 니즈를 심층 분석하여 독보적 가치를 창출하는
                맞춤형 설계로, 당신의 꿈을 현실로 만듭니다.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-3 mt-8 text-sm tracking-widest text-white border border-stone-600 px-8 py-3.5 hover:border-accent hover:text-accent-light transition-colors duration-300"
              >
                회사 소개 보기
                <span className="text-accent-light">→</span>
              </Link>
            </div>

            {/* Right: Stats */}
            <div className="grid grid-cols-2 gap-px bg-stone-700">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-stone-800 p-8 flex flex-col items-center justify-center text-center">
                  <span className="text-4xl md:text-5xl font-bold text-accent-light">
                    {stat.value}
                  </span>
                  <span className="mt-2 text-xs tracking-[0.2em] text-stone-400 uppercase">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section className="w-full bg-white py-24 md:py-32">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <span className="text-[11px] tracking-[0.25em] text-accent font-medium uppercase">
                Portfolio
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-stone-900 tracking-tight">
                주요 프로젝트
              </h2>
            </div>
            <Link
              href="/projects"
              className="mt-6 md:mt-0 text-sm tracking-widest text-stone-500 hover:text-accent transition-colors flex items-center gap-2"
            >
              전체 보기 <span>→</span>
            </Link>
          </div>

          {/* Project grid preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-200">
            {[
              { title: "대구 체육중학교", imageUrl: "/projects/school/cheyuk.webp", category: "교육 시설" },
              { title: "대구 라이온즈파크", imageUrl: "/projects/etc/lions-park.webp", category: "문화·레저" },
              { title: "대구 대명동 정형외과", imageUrl: "/projects/etc/daemyeong-hospital.webp", category: "의료 시설" },
            ].map((project) => (
              <Link
                key={project.title}
                href="/projects"
                className="group relative block overflow-hidden bg-stone-100"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-[10px] tracking-[0.2em] text-accent-light uppercase">
                      {project.category}
                    </span>
                    <h3 className="text-white font-semibold text-sm mt-1">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Banner ── */}
      <ProfessionalBanner />

      {/* ── CTA ── */}
      <section className="w-full relative py-28 md:py-36 overflow-hidden">
        <Image
          src="/homepage/architectdesign.webp"
          alt="건축 배경"
          fill
          className="object-cover brightness-[0.25]"
        />
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-10 text-center">
          <span className="text-[11px] tracking-[0.28em] text-accent-light font-medium uppercase">
            Contact Us
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            새로운 공간을 함께<br />만들어 나가겠습니다
          </h2>
          <p className="mt-5 text-stone-400 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
            프로젝트 상담부터 설계, 감리까지<br />
            진성 건축사 사무소가 함께합니다
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="text-sm tracking-widest bg-accent text-white px-10 py-4 hover:bg-accent-dark transition-colors duration-300 font-medium"
            >
              무료 상담 신청
            </Link>
            <Link
              href="/projects"
              className="text-sm tracking-widest text-white border border-stone-600 px-10 py-4 hover:border-stone-400 transition-colors duration-300"
            >
              포트폴리오 보기
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
