import React from "react";
import { LuBuilding2, LuClipboardCheck, LuSchool } from "react-icons/lu";
import { FaHelmetSafety } from "react-icons/fa6";
import { SlBadge } from "react-icons/sl";
import { IoMdTime } from "react-icons/io";
import { IconType } from "react-icons";

interface Service {
  icon: IconType;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: LuBuilding2,
    title: "건축설계",
    description: "주거·상업·공공건물 등 다양한 유형의 종합 건축 설계 서비스",
  },
  {
    icon: FaHelmetSafety,
    title: "건축 감리",
    description: "현장 감리 및 공사 감리, 석면해체공사 감리 전문 서비스",
  },
  {
    icon: LuClipboardCheck,
    title: "해체계획서 작성",
    description: "안전을 최우선으로 하는 건축물 해체계획서 작성 및 관리",
  },
  {
    icon: LuSchool,
    title: "학교공간혁신",
    description: "대구·경북 교육청 공간혁신 사업 전문, 학습 환경 혁신 설계",
  },
  {
    icon: SlBadge,
    title: "전문 자격",
    description: "대한건축사협회 정회원, 검증된 전문 자격 보유",
  },
  {
    icon: IoMdTime,
    title: "20년 이상 경력",
    description: "다양한 프로젝트 수행으로 축적된 풍부한 경험과 노하우",
  },
];

const ProfessionalBanner: React.FC = () => {
  return (
    <section className="w-full bg-stone-50 border-t border-stone-200">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-20">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="text-[11px] tracking-[0.25em] text-accent font-medium uppercase">
            Our Services
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-stone-900 tracking-tight">
            전문 서비스 영역
          </h2>
          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-stone-300" />
            <div className="h-1 w-6 bg-accent" />
            <div className="h-px w-12 bg-stone-300" />
          </div>
          <p className="mt-5 text-stone-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            20년간 쌓아온 건축 노하우를 바탕으로<br />
            고객의 비전에 최적화된 종합 건축 서비스를 제공합니다
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-stone-200">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 flex flex-col items-center text-center group hover:bg-stone-900 transition-colors duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center mb-4">
                <service.icon className="text-3xl text-accent group-hover:text-accent-light transition-colors" />
              </div>
              <h3 className="text-sm font-semibold text-stone-900 group-hover:text-white transition-colors mb-2 leading-snug">
                {service.title}
              </h3>
              <p className="text-xs text-stone-500 group-hover:text-stone-300 transition-colors leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalBanner;
