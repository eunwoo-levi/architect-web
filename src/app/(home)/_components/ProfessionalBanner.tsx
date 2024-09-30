import React from "react";
import { LuBuilding2, LuClipboardCheck, LuSchool } from "react-icons/lu";
import { FaHelmetSafety } from "react-icons/fa6";
import { SlBadge } from "react-icons/sl";
import { IoMdTime } from "react-icons/io";
import { IconType } from "react-icons";

interface BannerItemProps {
  icon: IconType;
  title: string;
  description: string;
}

const BannerItem: React.FC<BannerItemProps> = ({
  icon: Icon,
  title,
  description,
}) => (
  <div className="flex flex-col items-center p-4 text-center">
    <Icon className="w-12 h-12 mb-2 text-blue-600" />
    <h3 className="text-lg font-semibold mb-1">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

interface Service {
  icon: IconType;
  title: string;
  description: string;
}

const ProfessionalBanner: React.FC = () => {
  const services: Service[] = [
    {
      icon: LuBuilding2,
      title: "건축설계",
      description: "전문적인 설계 서비스",
    },
    {
      icon: FaHelmetSafety,
      title: "공사 감리",
      description: "철저한 현장 관리",
    },
    {
      icon: LuClipboardCheck,
      title: "건축물 점검",
      description: "안전을 최우선으로",
    },
    { icon: LuSchool, title: "학교공간혁신", description: "대구교육청 전문가" },
    { icon: SlBadge, title: "전문 자격", description: "대한건축사협회 정회원" },
    { icon: IoMdTime, title: "풍부한 경험", description: "경력 20년 이상" },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          진성 건축사 사무소
        </h2>
        <p className="text-xl text-center text-gray-600 pb-6">
          "20년간 쌓아온 건축 노하우, 깊이 있는 경험과 창의적 전문성의 조화"
        </p>
        <p className="text-xl text-center text-gray-600 pb-10">
          "귀하의 비전에 맞춘 최적의 종합 건축 서비스"
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {services.map((service, index) => (
            <BannerItem key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfessionalBanner;
