import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Navbar from '@/components/common/Navbar';
import NaverMapsWrapper from '@/components/map/NaverMapsWrapper';

const geistSans = localFont({
  src: '../../public/fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: '../../public/fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: '대구 진성 건축사 사무소',
  description:
    '전문적이고 창의적인 건축 설계 서비스를 제공하는 대구 진성 건축사 사무소입니다. 주거, 상업, 공공 건물 등 다양한 프로젝트를 수행합니다.',
  keywords:
    '건축사 사무소, 건축 설계, 주택 설계, 상업 건물, 리모델링, 인테리어 디자인, 대구 건축사, 대구 감리, 대구 건축설계, 대구 건축, 대구 건축사 사무소, 대구 진성, 대구 진성 건축사 사무소',
  openGraph: {
    title: '진성 건축사 사무소 - 전문적인 건축 설계 서비스',
    description:
      '혁신적이고 기능적인 건축 설계로 고객의 비전을 실현합니다. 주거, 상업, 공공 건물 등 다양한 프로젝트 경험을 보유한 진성 건축사 사무소입니다.',
    images: [
      {
        url: 'https://www.daegu-jinsung.com/brand.webp',
        width: 1200,
        height: 630,
        alt: '대구 진성 건축사 사무소 대표 이미지',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
  other: {
    'naver-site-verification': 'b8f74214ea0d19776b22e18ef5c5fa36262302ba',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <script type='application/ld+json'>
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ArchitectureService',
            name: '대구 진성 건축사 사무소',
            description: '전문적이고 창의적인 건축 설계 서비스를 제공하는 대구 진성 건축사 사무소입니다.',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '대구 수성구 범어로 192 2층',
              addressLocality: '대구',
              addressRegion: '경상북도',
              postalCode: '42192',
              addressCountry: 'KR',
            },
            url: 'https://www.daegu-jinsung.com',
            telephone: '+82-053-716-7927',
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 35.8662910116539,
              longitude: 128.63429893576,
            },
            openingHoursSpecification: {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              opens: '09:00',
              closes: '18:00',
            },
          })}
        </script>
        <NaverMapsWrapper>
          <Navbar />
          {children}
        </NaverMapsWrapper>
      </body>
    </html>
  );
}
