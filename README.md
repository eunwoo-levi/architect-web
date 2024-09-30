# 건축사 포트폴리오 웹사이트

[웹사이트 링크](https://www.daegu-jinsung.com/)

## 기술 스택

- **프레임워크**: Next.js
- **CSS**: Tailwind CSS
- **상태 관리**: Zustand
- **API 연동**: Naver Maps API, Nodemailer

## 기술 선택 이유

### Next.js
- **서버 사이드 렌더링(SSR)**: SEO 최적화로 검색 엔진에서 더 나은 가시성 제공
- **정적 사이트 생성(SSG)**: 빠른 페이지 로딩으로 사용자 경험 향상
- **이미지 최적화**: 고해상도 건축 이미지의 효율적 관리
- **파일 기반 라우팅 시스템**: 직관적이며 간편한 페이지 및 API 라우팅
- **API 라우트 지원**: 백엔드 기능을 쉽게 구현할 수 있는 환경 제공

### Tailwind CSS
- **빠른 UI 개발**: 모듈화된 CSS 클래스로 효율적인 레이아웃 구축
- **반응형 디자인**: 모바일부터 데스크탑까지 다양한 디바이스에 유연한 스타일링
- **성능 최적화**: 사용하지 않는 CSS를 제거해 작은 파일 크기 유지

### Zustand
- **간단한 상태 관리**: React hooks와의 seamless 통합으로 간결한 상태 관리
- **경량화**: 복잡한 상태 관리 도구보다 더 직관적이고 가벼운 솔루션

## 주요 기능

- **반응형 포트폴리오 갤러리**: 다양한 화면 크기에 대응하는 갤러리 제공
- **프로젝트 상세 페이지**: 각 건축 프로젝트에 대한 세부 정보 제공
- **문의 양식**: Naver Maps API로 네이버 지도 구현 및 a 태그를 통한 간편한 이메일 및 연락처 전송
- **블로그 섹션**: 건축과 관련된 포스팅 가능
- **이미지 Lazy 로딩**: 사용자가 페이지를 빠르게 탐색할 수 있도록 이미지 지연 로딩 구현
- **자동 슬라이더 및 애니메이션**: 사진 갤러리에 자동 슬라이더를 적용해 부드러운 이미지 전환과 애니메이션으로 역동적인 사용자 경험 제공
- **Responsive & Animation UI**: 사용자가 페이지 내에서 인터랙션할 때 부드럽게 반응하는 UI를 구현해 웹사이트의 UX를 향상
- **UX 최적화**: 전체 사이트 디자인에서 사용자 경험(UX)에 중점을 두고 직관적인 탐색과 쉬운 접근성을 제공

## 프로젝트 목표

이 웹사이트는 건축사의 작품과 서비스를 온라인에서 효과적으로 홍보하는 것을 목표로 합니다. 고품질의 이미지와 빠른 로딩 속도를 통해 잠재 고객에게 매력적인 첫인상을 남기고, 검색 엔진 최적화를 통해 더 많은 트래픽을 유도합니다. 애니메이션과 슬라이더를 통해 역동적인 프레젠테이션을 제공하여 사용자들이 웹사이트에서 더 오래 머물도록 유도하며, UX에도 큰 신경을 썼습니다.



***
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
