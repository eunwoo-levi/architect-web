const legacyProjectSlugs = [
  ["대구 라이온즈파크", "daegu-lions-park"],
  ["대구 체육중학교", "daegu-cheyuk-middle-school"],
  ["대구 두산 초등학교", "daegu-dusan-elementary-school"],
  ["대구 성주 어린이집", "daegu-seongju-kindergarten"],
  ["대구 시지 중학교", "daegu-siji-middle-school"],
  ["고령 대창 양로원", "goryeong-daechang-nursing-home"],
  ["고령 신협", "goryeong-credit-union"],
  ["대구 대명동 정형외과", "daegu-daemyeong-orthopedic-clinic"],
  ["성주 댐 관리소", "seongju-dam-management-office"],
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return legacyProjectSlugs.map(([title, slug]) => ({
      source: `/projects/${encodeURIComponent(title)}`,
      destination: `/projects/${slug}`,
      permanent: true,
    }));
  },
};

export default nextConfig;
