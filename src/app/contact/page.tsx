"use client";

import React from "react";
import dynamic from "next/dynamic";
import { NavermapsProvider } from "react-naver-maps";
import Navermap from "@/components/map/Navermap";

export default function ContactPage() {
  return (
    <NavermapsProvider
      ncpClientId={process.env.NEXT_PUBLIC_NAVERMAPS_CLIENT_ID || ""}
    >
      <main className="w-full min-h-screen p-4 bg-gradient-to-b from-white to-gray-100">
        <section className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
          <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
            Contact Us
          </h1>
          <p className="text-center text-lg font-semibold text-gray-600 mb-6">
            궁금한 점이 있으시면 언제든지 연락 주세요. 저희가 도와드리겠습니다!
          </p>

          <p className="text-center text-lg font-semibold text-blue-700 mb-6">
            찾아오시는 길
          </p>
          <div className="w-full h-96 rounded-lg overflow-hidden shadow-md mb-6">
            <Navermap />
          </div>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>
        </section>
      </main>
    </NavermapsProvider>
  );
}
