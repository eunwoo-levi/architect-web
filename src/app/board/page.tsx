import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "게시판",
  description: "진성 건축사 사무소 게시판. 준비 중입니다.",
  alternates: {
    canonical: "/board",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function BoardPage() {
  return (
    <main className="w-full bg-white">
      {/* ── Page Header ── */}
      <section className="w-full bg-stone-900 py-20 md:py-24">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <span className="text-[11px] tracking-[0.28em] text-accent-light font-medium uppercase">
            Board
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            게시판
          </h1>
          <div className="mt-5 w-12 h-px bg-accent" />
        </div>
      </section>

      {/* ── Coming Soon ── */}
      <section className="w-full min-h-[50vh] flex flex-col items-center justify-center py-24 px-6">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 mx-auto mb-8 flex items-center justify-center border border-stone-200">
            <span className="text-2xl">📋</span>
          </div>
          <h2 className="text-xl font-bold text-stone-900 tracking-tight">
            준비 중입니다
          </h2>
          <div className="mt-3 flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-stone-300" />
            <div className="h-0.5 w-4 bg-accent" />
            <div className="h-px w-8 bg-stone-300" />
          </div>
          <p className="mt-4 text-stone-500 text-sm leading-relaxed">
            게시판 기능은 현재 준비 중입니다.<br />
            빠른 시일 내에 오픈할 예정입니다.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="text-xs tracking-widest bg-stone-900 text-white px-8 py-3.5 hover:bg-accent transition-colors duration-300"
            >
              홈으로 이동
            </Link>
            <Link
              href="/contact"
              className="text-xs tracking-widest text-stone-600 border border-stone-300 px-8 py-3.5 hover:border-accent hover:text-accent transition-colors duration-300"
            >
              문의하기
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
