export interface Project {
  title: string;
  slug: string;
  imageUrl: string;
  category?: string;
  description: string;
  updatedAt: string;
  images?: string[];
  location?: string;
  area?: string;
  year?: string;
}

export const data: Project[] = [
  {
    title: "대구 라이온즈파크",
    slug: "daegu-lions-park",
    imageUrl: "/projects/etc/lions-park.webp",
    category: "문화·레저",
    description:
      "대구 라이온즈파크는 진성 건축사 사무소가 설계·감리에 참여한 문화·레저 시설 프로젝트입니다. 대구 지역의 스포츠·문화 인프라 건축 경험을 바탕으로 완성되었습니다.",
    updatedAt: "2026-07-08",
  },
  {
    title: "대구 체육중학교",
    slug: "daegu-cheyuk-middle-school",
    imageUrl: "/projects/school/cheyuk.webp",
    category: "교육 시설",
    description:
      "대구 체육중학교는 진성 건축사 사무소가 설계한 교육 시설 프로젝트입니다. 학생들의 학습과 체육 활동을 함께 고려한 대구 지역 교육시설 설계 전문성이 반영되었습니다.",
    updatedAt: "2026-07-08",
  },
  {
    title: "대구 두산 초등학교",
    slug: "daegu-dusan-elementary-school",
    imageUrl: "/projects/school/dusan.webp",
    category: "교육 시설",
    description:
      "대구 두산 초등학교는 진성 건축사 사무소가 설계한 교육 시설 프로젝트입니다. 안전하고 쾌적한 학습 환경을 목표로 한 대구 지역 초등학교 건축 설계 사례입니다.",
    updatedAt: "2026-07-08",
  },
  {
    title: "대구 성주 어린이집",
    slug: "daegu-seongju-kindergarten",
    imageUrl: "/projects/school/seongju.webp",
    category: "교육 시설",
    description:
      "대구 성주 어린이집은 진성 건축사 사무소가 설계한 교육·보육 시설 프로젝트입니다. 영유아의 안전과 정서 발달을 고려한 공간 설계가 특징입니다.",
    updatedAt: "2026-07-08",
  },
  {
    title: "대구 시지 중학교",
    slug: "daegu-siji-middle-school",
    imageUrl: "/projects/school/siji.webp",
    category: "교육 시설",
    description:
      "대구 시지 중학교는 진성 건축사 사무소가 설계한 교육 시설 프로젝트입니다. 학교공간혁신사업 전문성을 바탕으로 한 대구 지역 중학교 건축 설계 사례입니다.",
    updatedAt: "2026-07-08",
  },
  {
    title: "고령 대창 양로원",
    slug: "goryeong-daechang-nursing-home",
    imageUrl: "/projects/etc/goryeong.webp",
    category: "복지 시설",
    description:
      "고령 대창 양로원은 진성 건축사 사무소가 설계한 복지 시설 프로젝트입니다. 고령층 이용자의 안전과 편의를 최우선으로 고려한 경북 지역 복지시설 설계 사례입니다.",
    updatedAt: "2026-07-08",
  },
  {
    title: "고령 신협",
    slug: "goryeong-credit-union",
    imageUrl: "/projects/etc/goryeong-bank.webp",
    category: "상업 시설",
    description:
      "고령 신협은 진성 건축사 사무소가 설계한 상업 시설 프로젝트입니다. 금융기관 특성에 맞는 기능성과 접근성을 갖춘 경북 지역 상업 건축 설계 사례입니다.",
    updatedAt: "2026-07-08",
  },
  {
    title: "대구 대명동 정형외과",
    slug: "daegu-daemyeong-orthopedic-clinic",
    imageUrl: "/projects/etc/daemyeong-hospital.webp",
    category: "의료 시설",
    description:
      "대구 대명동 정형외과는 진성 건축사 사무소가 설계한 의료 시설 프로젝트입니다. 환자 동선과 진료 효율성을 고려한 대구 지역 의료시설 건축 설계 사례입니다.",
    updatedAt: "2026-07-08",
  },
  {
    title: "성주 댐 관리소",
    slug: "seongju-dam-management-office",
    imageUrl: "/projects/etc/seongju-dam.webp",
    category: "공공 시설",
    description:
      "성주 댐 관리소는 진성 건축사 사무소가 설계·감리한 공공 시설 프로젝트입니다. 공공 인프라 시설에 요구되는 안전성과 내구성을 갖춘 경북 지역 공공건축 설계 사례입니다.",
    updatedAt: "2026-07-08",
  },
];
