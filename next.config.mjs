// 예전 한글 제목 URL → 현재 슬러그 (검색엔진/외부 링크 SEO 보존)
const legacyTitleRedirects = [
  ["대구 라이온즈파크", "daegu-lions-park"],
  ["대구 체육중학교", "daegu-physical-middle"],
  ["대구 두산 초등학교", "daegu-dusan-elementary"],
  ["대구 성주 어린이집", "seongju-deulsarang-daycare"],
  ["대구 시지 중학교", "daegu-siji-middle"],
  ["고령 대창 양로원", "goryeong-daechang-nursing-home"],
  ["고령 신협", "goryeong-credit-union"],
  ["대구 대명동 정형외과", "daemyeong-orthopedic"],
  ["성주 댐 관리소", "seongju-dam-office"],
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return legacyTitleRedirects.map(([title, slug]) => ({
      source: `/projects/${encodeURIComponent(title)}`,
      destination: `/projects/${slug}`,
      permanent: true,
    }));
  },
};

export default nextConfig;
