import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import NaverMapsWrapper from "@/components/map/NaverMapsWrapper";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "진성 건축사 사무소",
  description: "진성 건축사 사무소 (jinseong architect office)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NaverMapsWrapper>
          <Navbar />
          {children}
        </NaverMapsWrapper>
      </body>
    </html>
  );
}
