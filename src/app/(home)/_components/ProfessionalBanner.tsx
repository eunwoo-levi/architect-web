import React from "react";
import { LuBuilding2, LuClipboardCheck, LuSchool, LuBox, LuRepeat, LuTrophy } from "react-icons/lu";
import { FaHelmetSafety } from "react-icons/fa6";
import { SlBadge } from "react-icons/sl";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceGrid from "@/components/ui/ServiceGrid";
import { ServiceCardProps } from "@/components/ui/ServiceCard";
import FadeIn from "@/components/motion/FadeIn";

const services: ServiceCardProps[] = [
  {
    icon: LuBuilding2,
    title: "건축설계",
    description: "주거·상업·공공건물 등 다양한 유형의 종합 건축설계 서비스",
  },
  {
    icon: LuClipboardCheck,
    title: "해체계획서 작성",
    description: "안전을 최우선으로 하는 건축물 해체계획서 작성 및 석면해체 감리",
  },
  {
    icon: LuRepeat,
    title: "용도변경",
    description: "건축물 용도변경 인허가 및 설계 대행 전문 서비스",
  },
  {
    icon: FaHelmetSafety,
    title: "건축감리",
    description: "현장 감리 및 공사 감리, 건축물 정기점검 전문 서비스",
  },
  {
    icon: LuSchool,
    title: "학교공간혁신",
    description: "대구·경북 교육청 공간혁신 사업 전문, 학습 환경 혁신 설계",
  },
  {
    icon: LuBox,
    title: "BIM 설계",
    description: "3D 기반 건물 정보 모델링(BIM)을 활용한 정밀 설계 서비스",
  },
  {
    icon: LuTrophy,
    title: "삼성 라이온즈 파크 감리",
    description: "대구 삼성 라이온즈 파크 공사 현장 감리 수행",
  },
  {
    icon: SlBadge,
    title: "전문 자격",
    description: "20년 경력의 대한건축사협회 정회원, 검증된 전문 자격 보유",
  },
];

const ProfessionalBanner: React.FC = () => {
  return (
    <section className="w-full bg-stone-50 border-t border-stone-200">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-20">
        <FadeIn className="mb-14">
          <SectionHeading
            eyebrow="Our Services"
            title="전문 서비스 영역"
            align="center"
            divider="ornament"
            description={
              <>
                대구 건축설계부터 해체계획서 작성, 용도변경, 건축감리까지<br />
                20년 경력의 노하우로 종합 건축 서비스를 제공합니다
              </>
            }
          />
        </FadeIn>

        <ServiceGrid items={services} columns={4} />
      </div>
    </section>
  );
};

export default ProfessionalBanner;
