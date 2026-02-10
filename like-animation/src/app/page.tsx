"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import FunctionalDemos from "@/components/FunctionalDemos";
import { Cpu, Layout, Gauge, CheckCircle2 } from "lucide-react";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <main className="min-h-screen bg-mesh selection:bg-primary/30 selection:text-white">
      <Navbar />
      <Hero />
      <ProblemSection />

      {/* Features Section */}
      <section id="features" className="py-32 px-4 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20 space-y-4"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-glow">停滞を打破する「3つの鍵」</h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              複雑さを解き明かし、ユーザーをファンへと変えるインテリジェント・デザイン。
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="glass-panel p-10 space-y-6 relative group overflow-hidden border-white/5 hover:border-primary/40 transition-all duration-500"
              >
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-primary/25 transition-all duration-500" />

                {/* Icon Container */}
                <div className="w-14 h-14 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl flex items-center justify-center text-white border border-white/10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  {feature.icon}
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-display font-bold tracking-tight group-hover:text-glow transition-all duration-500">
                    {feature.title}
                  </h3>
                  <p className="text-muted leading-relaxed text-[15px]">
                    {feature.description}
                  </p>
                </div>

                {/* Animated Bottom Line */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-accent transition-all duration-500 w-0 group-hover:w-full" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <FunctionalDemos />

      {/* Narrative Section: "The Workflow" */}
      <section id="how-it-works" className="py-32 px-4 bg-white/2">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <span className="text-accent font-bold tracking-[0.2em] text-xs uppercase">Workflow Integration</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
              AE で作り、Rive で動かし、<br />
              <span className="text-glow text-primary">Web で体験する。</span>
            </h2>
            <p className="text-muted text-lg">
              After Effects で培ったアニメーション技術を、重い動画としてではなく、軽量でインタラクティブなベクターデータとして実装します。
            </p>
            <ul className="space-y-4">
              {[
                "Lottie による高精度な形状再現",
                "Rive State Machine による複雑なロジック制御",
                "低レイテンシ・超軽量なファイルサイズ",
                "マウスやスクロールに反応する動的な挙動"
              ].map((text, i) => (
                <li key={i} className="flex items-center space-x-3 text-foreground/80 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square glass-panel rounded-3xl flex items-center justify-center p-8 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10">
              <div className="grid grid-cols-2 gap-4 w-full h-full opacity-40">
                <div className="border border-white/10 rounded-2xl bg-white/5 animate-pulse" />
                <div className="border border-white/10 rounded-2xl bg-white/5" />
                <div className="border border-white/10 rounded-2xl bg-white/5" />
                <div className="border border-white/10 rounded-2xl bg-white/5 animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-primary/20 blur-3xl animate-pulse" />
                <Layout className="w-20 h-20 text-white/50" />
              </div>
            </div>
            {/* Ambient decorations */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-[80px] -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 text-center relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <p className="text-muted text-sm font-medium tracking-wide">
          &copy; 2026 <span className="text-white font-display border-b border-accent/30 pb-0.5">Motion-Creative-Biz</span>. Developed by Antigravity.
        </p>
        <div className="mt-8 flex justify-center space-x-6 text-muted/40">
          <div className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center hover:border-white/20 hover:text-white transition-all cursor-pointer">X</div>
          <div className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center hover:border-white/20 hover:text-white transition-all cursor-pointer">GH</div>
          <div className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center hover:border-white/20 hover:text-white transition-all cursor-pointer">LI</div>
        </div>
      </footer>
    </main>
  );
}

const features = [
  {
    title: "認知的負荷の低減",
    description: "複雑なデータの挙動をアニメーションで「見える化」。ユーザーの学習コストを劇的に下げ、初見での直感操作を可能にします。",
    icon: <Cpu className="w-7 h-7" />
  },
  {
    title: "LCP/パフォーマンス最適化",
    description: "動画の数十分の一のサイズで、ページ読み込み速度（Core Web Vitals）を損なうことなく、最高品質のモーションを実現します。",
    icon: <Gauge className="w-7 h-7" />
  },
  {
    title: "感情的ロイヤリティ",
    description: "触れるたびに心地よいインタラクションが、プロダクトへの愛着を醸成。オンボーディングの離脱を防ぎ、継続率（LTV）を向上させます。",
    icon: <Layout className="w-7 h-7" />
  }
];
