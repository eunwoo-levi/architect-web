export interface Project {
  title: string;
  slug: string;
  imageUrl: string;
  category: string;
  description: string;
  updatedAt: string;
  images?: string[];
  location?: string;
  area?: string;
  year?: string;
  structure?: string;
  scope?: string;
}

export interface Category {
  key: string;
  label: string;
  eyebrow: string;
  description: string;
}

/**
 * 포트폴리오 카테고리 정의 (표시 순서 = 배열 순서)
 * project.category 값은 반드시 아래 label 중 하나와 일치해야 합니다.
 */
export const categories: Category[] = [
  {
    key: "leisure",
    label: "문화·여가시설",
    eyebrow: "Culture & Leisure",
    description: "지역 사회의 문화·체육·여가 생활을 풍요롭게 하는 공간.",
  },
  {
    key: "education",
    label: "교육시설",
    eyebrow: "Education",
    description: "학생과 아이들의 성장을 고려한 안전하고 쾌적한 교육·보육 공간.",
  },
  {
    key: "residential",
    label: "주거시설",
    eyebrow: "Residential",
    description: "단독주택·전원주택·공동주택까지, 삶을 담는 주거 공간을 설계합니다.",
  },
  {
    key: "innovation",
    label: "학교공간혁신",
    eyebrow: "School Innovation",
    description: "기존 학교 공간의 가치를 재발견하고 극대화하는 공간혁신 사업.",
  },
  {
    key: "commercial",
    label: "근린생활·상업시설",
    eyebrow: "Commercial",
    description: "기능성과 접근성을 갖춘 근린생활시설·업무시설·상업 건축.",
  },
  {
    key: "public",
    label: "의료·복지·공공",
    eyebrow: "Public & Care",
    description: "이용자의 안전과 편의를 최우선으로 하는 의료·복지·공공 인프라.",
  },
];

const UPDATED = "2026-07-18";

export const data: Project[] = [
  // ─────────────────────────────────────── 문화·여가시설 ───────────────────────────────────────
  {
    title: "대구 삼성 라이온즈파크",
    slug: "daegu-lions-park",
    category: "문화·여가시설",
    imageUrl: "/projects/leisure/대구라이온즈파크.jpg",
    description:
      "대구 삼성 라이온즈파크는 진성 건축사 사무소가 참여한 대규모 문화·체육 시설 프로젝트입니다. 프로야구 삼성 라이온즈의 홈구장으로, 대규모 관람 인원의 동선과 안전, 쾌적한 관람 환경을 고려한 스포츠 인프라 건축 경험이 반영된 대구의 대표 여가 시설입니다.",
    location: "대구광역시 수성구",
    scope: "설계·감리 참여",
    updatedAt: UPDATED,
  },
  {
    title: "성주 솔가람 활력센터",
    slug: "seongju-solgaram-center",
    category: "문화·여가시설",
    imageUrl: "/projects/leisure/성주솔가람활력센터.jpeg",
    description:
      "성주 솔가람 활력센터는 진성 건축사 사무소가 설계한 문화·복지 시설 프로젝트입니다. 지역 주민의 건강과 여가 활동을 지원하는 다목적 공간으로, 지역 커뮤니티의 중심이 되는 경북 성주의 생활 문화 시설입니다.",
    location: "경상북도 성주군",
    scope: "설계",
    updatedAt: UPDATED,
  },
  {
    title: "봉두리 영모재 공중화장실",
    slug: "bongdu-yeongmojae-restroom",
    category: "문화·여가시설",
    imageUrl: "/projects/leisure/봉두리영모재공중화장실.jpeg",
    description:
      "봉두리 영모재 공중화장실은 진성 건축사 사무소가 설계한 공공 편의 시설 프로젝트입니다. 주변 경관과 조화를 이루는 단정한 디자인과 위생·관리 편의를 고려하여, 이용객에게 쾌적함을 제공하는 공공 시설입니다.",
    scope: "설계",
    updatedAt: UPDATED,
  },

  // ─────────────────────────────────────── 교육시설 ───────────────────────────────────────
  {
    title: "대구 두산초등학교",
    slug: "daegu-dusan-elementary",
    category: "교육시설",
    imageUrl: "/projects/education/대구두산초등학교.png",
    description:
      "대구 두산초등학교는 진성 건축사 사무소가 설계한 교육 시설 프로젝트입니다. 학생들의 안전한 동선과 밝은 학습 환경을 최우선으로 고려하여, 배움과 놀이가 공존하는 초등 교육 공간을 계획하였습니다.",
    location: "대구광역시",
    scope: "설계",
    updatedAt: UPDATED,
  },
  {
    title: "대구 시지중학교",
    slug: "daegu-siji-middle",
    category: "교육시설",
    imageUrl: "/projects/education/대구시지중학교.png",
    description:
      "대구 시지중학교는 진성 건축사 사무소가 설계한 교육 시설 프로젝트입니다. 학습 공간과 특별실, 커뮤니티 공간의 유기적 배치로 청소년기 학생들의 다양한 활동을 지원하는 중학교 건축 사례입니다.",
    location: "대구광역시 수성구",
    scope: "설계",
    updatedAt: UPDATED,
  },
  {
    title: "대구 체육중학교",
    slug: "daegu-physical-middle",
    category: "교육시설",
    imageUrl: "/projects/education/대구체육중학교.png",
    description:
      "대구 체육중학교는 진성 건축사 사무소가 설계한 교육 시설 프로젝트입니다. 학업과 전문 체육 활동을 병행하는 학생들을 위해 교육 공간과 운동 시설을 함께 고려한 특성화 중학교 설계 사례입니다.",
    location: "대구광역시",
    scope: "설계",
    updatedAt: UPDATED,
  },
  {
    title: "성주 들사랑 어린이집",
    slug: "seongju-deulsarang-daycare",
    category: "교육시설",
    imageUrl: "/projects/education/성주들사랑어린이집.jpg",
    description:
      "성주 들사랑 어린이집은 진성 건축사 사무소가 설계한 보육 시설 프로젝트입니다. 영유아의 안전과 정서 발달을 최우선으로, 따뜻한 색감과 자연 채광이 가득한 보육 공간을 완성한 경북 성주의 어린이집입니다.",
    location: "경상북도 성주군",
    scope: "설계",
    updatedAt: UPDATED,
  },

  // ─────────────────────────────────────── 주거시설 ───────────────────────────────────────
  {
    title: "대구 P씨 주택",
    slug: "daegu-p-house",
    category: "주거시설",
    imageUrl: "/projects/residential/대구P씨주택.png",
    description:
      "대구 P씨 주택은 진성 건축사 사무소가 설계한 단독주택 프로젝트입니다. 스타코와 목재, 징크를 조화롭게 사용한 입면과 발코니 구성으로 개방감과 프라이버시를 동시에 확보한 도심형 주택입니다.",
    location: "대구광역시",
    structure: "철근콘크리트조",
    scope: "설계",
    updatedAt: UPDATED,
  },
  {
    title: "진천동 영남 네오빌",
    slug: "jincheon-yeongnam-neobil",
    category: "주거시설",
    imageUrl: "/projects/residential/진천동영남네오빌_투시도.jpg",
    description:
      "진천동 영남 네오빌은 진성 건축사 사무소가 설계한 공동주택 프로젝트입니다. 세대별 채광과 조망, 단지 내 동선을 세심하게 계획하여 입주민의 주거 만족도를 높인 대구 달서구의 주거 건축 사례입니다.",
    location: "대구광역시 달서구 진천동",
    scope: "설계",
    updatedAt: UPDATED,
  },
  {
    title: "북내동 엘퍼스트 아파텔",
    slug: "buknae-lfirst-apartel",
    category: "주거시설",
    imageUrl: "/projects/residential/북내동엘퍼스트아파텔_투시도.jpg",
    images: ["/projects/residential/북내동엘퍼스트아파텔.jpg"],
    description:
      "북내동 엘퍼스트 아파텔은 진성 건축사 사무소가 설계한 주거형 오피스텔 프로젝트입니다. 주거와 업무 기능을 겸비한 복합 공간으로, 효율적인 평면 구성과 도심 생활에 최적화된 편의성을 갖추었습니다.",
    scope: "설계",
    updatedAt: UPDATED,
  },
  {
    title: "성주 전원주택 단지",
    slug: "seongju-country-house",
    category: "주거시설",
    imageUrl: "/projects/residential/성주전원주택_외관.jpg",
    images: ["/projects/residential/성주전원주택.jpg"],
    description:
      "성주 전원주택 단지는 진성 건축사 사무소가 설계한 전원주택 프로젝트입니다. 자연 지형과 조화를 이루는 배치 계획과 단지 내 커뮤니티 동선을 고려하여, 여유로운 전원 생활을 담아낸 경북 성주의 주거 단지입니다.",
    location: "경상북도 성주군",
    scope: "설계",
    updatedAt: UPDATED,
  },
  {
    title: "대구 K씨 주택",
    slug: "daegu-k-house",
    category: "주거시설",
    imageUrl: "/projects/residential/대구K씨주택_외관.jpg",
    images: ["/projects/residential/대구K씨주택.jpg"],
    description:
      "대구 K씨 주택은 진성 건축사 사무소가 설계한 단독주택 프로젝트입니다. 스타코플렉스와 노출콘크리트의 대비가 돋보이는 입면과 층별 테라스로 입체적인 주거 공간을 완성한 대구 지역의 3층 주택입니다.",
    location: "대구광역시",
    area: "연면적 217.36㎡ (65.75평)",
    structure: "철근콘크리트조",
    scope: "설계",
    updatedAt: UPDATED,
  },
  {
    title: "가창 O씨 주택",
    slug: "gachang-o-house",
    category: "주거시설",
    imageUrl: "/projects/residential/가창O씨주택_외관.jpg",
    images: ["/projects/residential/가창O씨주택.jpg"],
    description:
      "가창 O씨 주택은 진성 건축사 사무소가 설계한 단독주택 프로젝트입니다. 경사지를 활용한 스킵플로어 구성과 복합판넬·징크·화강석 마감으로 자연 속에서 개성을 드러내는 대구 달성군 가창면의 전원주택입니다.",
    location: "대구광역시 달성군 가창면",
    area: "연면적 133.17㎡ (40.28평)",
    structure: "철근콘크리트조",
    scope: "설계",
    updatedAt: UPDATED,
  },
  {
    title: "가창 J씨 주택",
    slug: "gachang-j-house",
    category: "주거시설",
    imageUrl: "/projects/residential/가창J씨주택_외관.jpg",
    images: ["/projects/residential/가창J씨주택.jpg"],
    description:
      "가창 J씨 주택은 진성 건축사 사무소가 설계한 단독주택 프로젝트입니다. 박공지붕과 목재 루버가 어우러진 따뜻한 입면, 넓은 발코니와 데크로 주변 자연을 적극적으로 끌어들인 가창면의 이층 주택입니다.",
    location: "대구광역시 달성군 가창면",
    structure: "철근콘크리트조",
    scope: "설계",
    updatedAt: UPDATED,
  },
  {
    title: "청도 K씨 주택",
    slug: "cheongdo-k-house",
    category: "주거시설",
    imageUrl: "/projects/residential/청도K씨주택_외관.jpg",
    images: ["/projects/residential/청도K씨주택.jpg"],
    description:
      "청도 K씨 주택은 진성 건축사 사무소가 설계한 단독주택 프로젝트입니다. 노출콘크리트와 징크의 견고한 물성, 다락층까지 활용한 입체적 공간 구성으로 개성 있는 주거를 완성한 경북 청도의 전원주택입니다.",
    location: "경상북도 청도군",
    area: "연면적 116.55㎡ (35.26평)",
    structure: "철근콘크리트조",
    scope: "설계",
    updatedAt: UPDATED,
  },
  {
    title: "안동 L씨 주택",
    slug: "andong-l-house",
    category: "주거시설",
    imageUrl: "/projects/residential/안동L씨주택_외관.jpg",
    images: ["/projects/residential/안동L씨주택.jpg"],
    description:
      "안동 L씨 주택은 진성 건축사 사무소가 설계한 단독주택 프로젝트입니다. 징크와 스타코플렉스의 모던한 매스에 넓은 옥상 데크와 세로 루버를 더해, 전망과 휴식을 함께 담아낸 경북 안동의 주택입니다.",
    location: "경상북도 안동시",
    area: "연면적 107.63㎡ (32.56평)",
    structure: "철근콘크리트조",
    scope: "설계",
    updatedAt: UPDATED,
  },
  {
    title: "칠곡 G씨 주택",
    slug: "chilgok-g-house",
    category: "주거시설",
    imageUrl: "/projects/residential/칠곡G씨주택.jpg",
    description:
      "칠곡 G씨 주택은 진성 건축사 사무소가 설계한 단독주택 프로젝트입니다. 벽돌 외장과 동판 처마의 단정한 박공주택으로, 실용적인 단층 평면과 아늑한 마당을 갖춘 경북 칠곡의 전원주택입니다.",
    location: "경상북도 칠곡군",
    scope: "설계",
    updatedAt: UPDATED,
  },

  // ────────────────────────────────────── 학교공간혁신 ──────────────────────────────────────
  {
    title: "경진초등학교 공간혁신",
    slug: "gyeongjin-elementary",
    category: "학교공간혁신",
    imageUrl: "/projects/Innovation/경진초등학교.jpg",
    description:
      "경진초등학교 공간혁신 사업은 진성 건축사 사무소가 참여한 학교공간혁신 프로젝트입니다. 기존 교실과 복도의 획일적 공간을 학생 중심의 다목적 학습·놀이 공간으로 재구성하였습니다.",
    scope: "학교공간혁신",
    updatedAt: UPDATED,
  },
  {
    title: "다사중학교 공간혁신",
    slug: "dasa-middle",
    category: "학교공간혁신",
    imageUrl: "/projects/Innovation/다사중학교.jpg",
    description:
      "다사중학교 공간혁신 사업은 진성 건축사 사무소가 참여한 학교공간혁신 프로젝트입니다. 유휴 공간을 발굴하고 재구성하여 학생들의 소통과 창의 활동을 촉진하는 열린 학습 공간을 조성하였습니다.",
    scope: "학교공간혁신",
    updatedAt: UPDATED,
  },
  {
    title: "상원중학교 공간혁신",
    slug: "sangwon-middle",
    category: "학교공간혁신",
    imageUrl: "/projects/Innovation/상원중학교.jpg",
    description:
      "상원중학교 공간혁신 사업은 진성 건축사 사무소가 참여한 학교공간혁신 프로젝트입니다. 사용자 참여 설계를 바탕으로 학생과 교사의 요구를 반영한 미래형 교육 공간으로 탈바꿈시켰습니다.",
    scope: "학교공간혁신",
    updatedAt: UPDATED,
  },
  {
    title: "시지초등학교 공간혁신",
    slug: "siji-elementary",
    category: "학교공간혁신",
    imageUrl: "/projects/Innovation/시지초등학교.jpg",
    description:
      "시지초등학교 공간혁신 사업은 진성 건축사 사무소가 참여한 학교공간혁신 프로젝트입니다. 안전성을 확보하면서도 아이들의 상상력을 자극하는 색채와 가구 계획으로 즐거운 배움터를 만들었습니다.",
    scope: "학교공간혁신",
    updatedAt: UPDATED,
  },
  {
    title: "영신고등학교 공간혁신",
    slug: "yeongsin-high",
    category: "학교공간혁신",
    imageUrl: "/projects/Innovation/영신고등학교.jpg",
    description:
      "영신고등학교 공간혁신 사업은 진성 건축사 사무소가 참여한 학교공간혁신 프로젝트입니다. 자기주도 학습과 휴식을 지원하는 다양한 공간 유형을 도입하여 고등학생의 학교 생활을 한층 풍요롭게 하였습니다.",
    scope: "학교공간혁신",
    updatedAt: UPDATED,
  },
  {
    title: "입석초등학교 공간혁신",
    slug: "ipseok-elementary",
    category: "학교공간혁신",
    imageUrl: "/projects/Innovation/입석초등학교.jpg",
    description:
      "입석초등학교 공간혁신 사업은 진성 건축사 사무소가 참여한 학교공간혁신 프로젝트입니다. 복도와 홈베이스를 연계한 공간 재편으로 학생들의 교류를 늘리고 학교에 대한 애착을 높였습니다.",
    scope: "학교공간혁신",
    updatedAt: UPDATED,
  },

  // ─────────────────────────────────── 근린생활·상업시설 ───────────────────────────────────
  {
    title: "대전 넥서스",
    slug: "daejeon-nexus",
    category: "근린생활·상업시설",
    imageUrl: "/projects/commercial/대전넥서스.jpg",
    description:
      "대전 넥서스는 진성 건축사 사무소가 설계한 상업 시설 프로젝트입니다. 도시 가로변의 존재감을 살린 입면 디자인과 효율적인 임대 평면 계획으로 상업적 가치를 극대화한 복합 상업 건축입니다.",
    location: "대전광역시",
    scope: "설계",
    updatedAt: UPDATED,
  },
  {
    title: "영남 지오영",
    slug: "yeongnam-geoyeong",
    category: "근린생활·상업시설",
    imageUrl: "/projects/commercial/영남지오영.jpg",
    images: ["/projects/commercial/불로동영남지오영대구지점.jpg"],
    description:
      "영남 지오영은 진성 건축사 사무소가 설계한 업무·상업 시설 프로젝트입니다. 대구 불로동 지점을 포함하여, 기업의 브랜드 정체성과 기능적 요구를 담아낸 업무 공간 건축 사례입니다.",
    location: "대구광역시",
    scope: "설계",
    updatedAt: UPDATED,
  },
  {
    title: "봉덕동 업무시설",
    slug: "bongdeok-office",
    category: "근린생활·상업시설",
    imageUrl: "/projects/commercial/봉덕동업무시설.jpeg",
    description:
      "봉덕동 업무시설은 진성 건축사 사무소가 설계한 업무 시설 프로젝트입니다. 곡면 매스와 목재 포인트가 어우러진 단정한 입면, 저층부 상가와 상층부 업무 공간이 조화를 이루는 대구 남구의 근린생활 건축입니다.",
    location: "대구광역시 남구 봉덕동",
    scope: "설계",
    updatedAt: UPDATED,
  },
  {
    title: "대봉동 근린생활시설",
    slug: "daebong-nsf",
    category: "근린생활·상업시설",
    imageUrl: "/projects/commercial/대봉동근린생활시설.jpeg",
    description:
      "대봉동 근린생활시설은 진성 건축사 사무소가 설계한 근린생활 시설 프로젝트입니다. 다채로운 마감재의 매스 조합과 개방적인 저층부 구성으로 도심 가로에 활력을 더한 대구 중구의 상업 건축입니다.",
    location: "대구광역시 중구 대봉동",
    scope: "설계",
    updatedAt: UPDATED,
  },
  {
    title: "상동 근린생활시설",
    slug: "sangdong-nsf",
    category: "근린생활·상업시설",
    imageUrl: "/projects/commercial/상동근린생활시설.jpg",
    description:
      "상동 근린생활시설은 진성 건축사 사무소가 설계한 근린생활 시설 프로젝트입니다. 넉넉한 주차와 진입 동선을 확보하고 실용적인 매스로 계획하여, 이용 편의성을 높인 대구 수성구의 상업 건축입니다.",
    location: "대구광역시 수성구 상동",
    scope: "설계",
    updatedAt: UPDATED,
  },
  {
    title: "침산동 근린생활시설",
    slug: "chimsan-nsf",
    category: "근린생활·상업시설",
    imageUrl: "/projects/commercial/침산동근린생활시설.jpg",
    description:
      "침산동 근린생활시설은 진성 건축사 사무소가 설계한 근린생활 시설 프로젝트입니다. 금속 패널 입면과 절제된 개구부 구성으로 도심 가로에 세련된 인상을 부여한 대구 북구의 상업 건축입니다.",
    location: "대구광역시 북구 침산동",
    scope: "설계",
    updatedAt: UPDATED,
  },
  {
    title: "동호동 자동차 관련시설",
    slug: "dongho-auto-facility",
    category: "근린생활·상업시설",
    imageUrl: "/projects/commercial/동호동자동차관련시설.jpg",
    description:
      "동호동 자동차 관련시설은 진성 건축사 사무소가 설계한 상업 시설 프로젝트입니다. 대형 차량 진출입과 정비 동선을 고려한 기능 중심의 평면과 견고한 금속 외장으로 계획한 대구 지역의 자동차 관련 건축입니다.",
    location: "대구광역시",
    scope: "설계",
    updatedAt: UPDATED,
  },
  {
    title: "중동 물류창고",
    slug: "jungdong-logistics",
    category: "근린생활·상업시설",
    imageUrl: "/projects/commercial/중동물류창고.jpg",
    description:
      "중동 물류창고는 진성 건축사 사무소가 설계한 물류 시설 프로젝트입니다. 적재·하역 효율과 차량 동선을 최적화한 대공간 구조와 관리 공간을 함께 계획하여, 물류 운영에 최적화된 창고 건축입니다.",
    scope: "설계",
    updatedAt: UPDATED,
  },
  {
    title: "고령 신협",
    slug: "goryeong-credit-union",
    category: "근린생활·상업시설",
    imageUrl: "/projects/commercial/고령신협.jpeg",
    description:
      "고령 신협은 진성 건축사 사무소가 설계한 금융 시설 프로젝트입니다. 금융기관의 신뢰감을 담은 입면과 이용객의 접근성·편의성을 고려한 평면 계획으로 완성한 경북 고령의 상업 건축 사례입니다.",
    location: "경상북도 고령군",
    scope: "설계",
    updatedAt: UPDATED,
  },

  // ─────────────────────────────────────── 의료·복지·공공 ───────────────────────────────────────
  {
    title: "고령 대창 양로원",
    slug: "goryeong-daechang-nursing-home",
    category: "의료·복지·공공",
    imageUrl: "/projects/healthcare/고령대창양로원.png",
    description:
      "고령 대창 양로원은 진성 건축사 사무소가 설계한 복지 시설 프로젝트입니다. 고령층 이용자의 안전과 편의를 최우선으로, 무장애 동선과 따뜻한 생활 공간을 계획한 경북 고령의 노인복지 건축입니다.",
    location: "경상북도 고령군",
    scope: "설계",
    updatedAt: UPDATED,
  },
  {
    title: "대명동 정형외과",
    slug: "daemyeong-orthopedic",
    category: "의료·복지·공공",
    imageUrl: "/projects/healthcare/대명동정형외과.jpg",
    description:
      "대명동 정형외과는 진성 건축사 사무소가 설계한 의료 시설 프로젝트입니다. 환자와 의료진의 동선을 분리하고 진료 효율을 높인 평면 계획으로, 쾌적한 진료 환경을 구현한 대구 남구의 의료 건축입니다.",
    location: "대구광역시 남구 대명동",
    scope: "설계",
    updatedAt: UPDATED,
  },
  {
    title: "부산 수녀회 영성센터",
    slug: "busan-nuns-retreat-center",
    category: "의료·복지·공공",
    imageUrl: "/projects/healthcare/부산수녀회영성센터.jpg",
    description:
      "부산 수녀회 영성센터는 진성 건축사 사무소가 설계한 종교·복지 시설 프로젝트입니다. 묵상과 휴식을 위한 정적인 공간감과 자연과의 연계를 중시하여, 영성 생활에 어울리는 차분한 공간을 완성하였습니다.",
    location: "부산광역시",
    scope: "설계",
    updatedAt: UPDATED,
  },
  {
    title: "수륜면 참별 복지관",
    slug: "suryun-chambyeol-welfare",
    category: "의료·복지·공공",
    imageUrl: "/projects/healthcare/수륜면참별복지관_1.jpg",
    images: ["/projects/healthcare/수륜면참별복지관_2.jpg"],
    description:
      "수륜면 참별 복지관은 진성 건축사 사무소가 설계·감리한 복지 시설 프로젝트입니다. 테라코타 타일과 징크의 대비가 돋보이는 입면, 지역 주민의 다양한 활동을 담는 커뮤니티 공간으로 계획한 경북 성주의 복지 건축입니다.",
    location: "경상북도 성주군 수륜면",
    scope: "설계·감리",
    updatedAt: UPDATED,
  },
  {
    title: "성주 댐 관리소",
    slug: "seongju-dam-office",
    category: "의료·복지·공공",
    imageUrl: "/projects/healthcare/성주댐관리소.jpg",
    description:
      "성주 댐 관리소는 진성 건축사 사무소가 설계·감리한 공공 시설 프로젝트입니다. 공공 인프라 시설에 요구되는 안전성과 내구성을 확보하고, 주변 환경과 조화를 이루도록 계획한 경북 성주의 공공 건축입니다.",
    location: "경상북도 성주군",
    scope: "설계·감리",
    updatedAt: UPDATED,
  },
  {
    title: "안포 배수장",
    slug: "anpo-drainage-station",
    category: "의료·복지·공공",
    imageUrl: "/projects/healthcare/안포배수장.jpeg",
    description:
      "안포 배수장은 진성 건축사 사무소가 설계한 공공 시설 프로젝트입니다. 방재 인프라로서의 기능성과 유지관리 효율을 우선으로, 견고한 구조와 설비를 갖추도록 계획한 공공 건축 사례입니다.",
    scope: "설계",
    updatedAt: UPDATED,
  },
];
