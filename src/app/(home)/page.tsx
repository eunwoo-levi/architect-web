import AutoPlaySlider from "@/components/AutoPlaySlider";
import ProfessionalBanner from "./_components/ProfessionalBanner";

export default function Home() {
  return (
    <main className="w-full h-screen overflow-y-scroll snap-y snap-mandatory">
      <section className="w-full h-screen snap-start">
        <AutoPlaySlider />
      </section>
      <section className="w-full h-screen snap-start relative bg-cover bg-center bg-[url('/homepage/architectdesign.webp')] bg-blend-darken bg-black/80">
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-10">
          <h2 className="text-white text-opacity-80 text-2xl font-bold text-center px-4">
            "공간에 생명을 불어넣는 20년의 건축 철학 당신의 꿈을 현실로 만드는
            혁신적 건축 솔루션"
          </h2>
          <h2 className="text-white text-opacity-80 text-2xl font-bold text-center px-4">
            "고객의 니즈를 심층 분석하여 독보적 가치를 창출하는 맞춤형 설계"
          </h2>
        </div>
      </section>
      <section className="bg-gray-100 w-full h-screen snap-start overflow-y-auto flex items-center justify-center">
        <div className="w-full lg:w-auto lg:max-w-4xl">
          <ProfessionalBanner />
        </div>
      </section>
    </main>
  );
}
