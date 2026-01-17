import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Like Animation | アニメーション動画制作",
  description: "Motion & Creativity Unframed - スクリーンの枠を飛び出し、見る人の心に直接届くアニメーション動画制作。確かな技術と遊び心で、想像を超える映像を。",
  keywords: ["アニメーション動画", "モーショングラフィックス", "動画制作", "映像制作", "プロモーション動画", "企業VP"],
  openGraph: {
    title: "Like Animation | アニメーション動画制作",
    description: "アイデアを動かす。心を動かす。スクリーンの枠を飛び出すアニメーション動画制作。",
    type: "website",
  },
};

import SmoothScroll from "@/components/ui/SmoothScroll";
import IntroLoader from "@/components/ui/IntroLoader";
import FloatingDecor from "@/components/ui/FloatingDecor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${outfit.className} antialiased`}
      >
        <div className="bg-texture" />
        <div className="vignette-overlay" />
        <FloatingDecor />
        <IntroLoader />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
