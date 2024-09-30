"use client";

import React from "react";
import dynamic from "next/dynamic"; // 동적 import 추가
import { NavermapsProvider } from "react-naver-maps";

// Navermap 컴포넌트를 동적으로 불러오기
const Navermap = dynamic(() => import("@/components/map/Navermap"), {
  ssr: false, // 서버 사이드 렌더링 비활성화
});

export default function ContactPage() {
  return (
    <NavermapsProvider
      ncpClientId={process.env.NEXT_PUBLIC_NAVERMAPS_CLIENT_ID || ""}
    >
      <main className="w-full min-h-screen p-4 bg-gradient-to-b from-white to-gray-100">
        <section className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
          <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
            Contact Us
          </h1>
          <p className="text-center text-lg font-semibold text-gray-600 mb-8">
            궁금한 점이 있으시면 언제든지 연락 주세요. 저희가 도와드리겠습니다!
          </p>

          <div className="text-center mb-6">
            <h1 className="text-2xl font-semibold text-blue-700 mb-2">
              찾아오시는 길
            </h1>
            <h2>
              대구광역시 수성구 국채보상로186길 79 대구 수성구 범어동 136-8
            </h2>
          </div>
          <div className="w-full h-96 rounded-lg overflow-hidden shadow-md mb-8">
            <Navermap />
          </div>

          <section className="flex flex-col items-center space-y-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-600">
                이메일로 문의하기:
              </h3>
              <a
                href="mailto:nature0021@hanmail.net"
                className="text-lg text-blue-600 underline hover:text-blue-800 transition-colors"
              >
                nature0021@hanmail.net
              </a>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-600">전화번호:</h3>
              <a
                href="tel:053-716-7927"
                className="text-lg text-blue-600 underline hover:text-blue-800 transition-colors"
              >
                053-716-7927
              </a>
            </div>
          </section>
        </section>
      </main>
    </NavermapsProvider>
  );
}
