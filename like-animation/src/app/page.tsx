import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Works from "@/components/Works";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

// 潜在層がアニメーション制作を依頼したいときに知りたい情報順:
// 1. Hero: 何ができる会社？どんな価値を提供？
// 2. Works: どんな制作事例がある？
// 3. Features: なぜこの会社を選ぶべき？
// 4. Pricing: いくらかかる？
// 5. Process: どんな流れで進む？
// 6. CTA: 問い合わせ・相談

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Works />
      <Features />
      <Process />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
