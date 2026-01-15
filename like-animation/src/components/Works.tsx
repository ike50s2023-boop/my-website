"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { Play, ExternalLink } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const WORKS = [
    {
        title: "商品プロモーション動画",
        category: "モーショングラフィックス",
        description: "テクノロジー企業の新製品ローンチ用アニメーション",
    },
    {
        title: "企業ブランドムービー",
        category: "2Dアニメーション",
        description: "スタートアップのビジョンを伝えるストーリー映像",
    },
    {
        title: "サービス解説動画",
        category: "インフォグラフィック",
        description: "複雑なSaaSサービスをわかりやすく可視化",
    },
    {
        title: "SNSキャンペーン動画",
        category: "ショートアニメ",
        description: "TikTok・Reels向けバイラルコンテンツ",
    },
];

export function WorkCard({ work, index }: { work: (typeof WORKS)[0]; index: number }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
    const x = useTransform(scrollYProgress, [0, 0.4], [index % 2 === 0 ? -30 : 30, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

    return (
        <motion.div
            className="group relative"
            style={{ x, opacity, y }}
        >
            <div ref={cardRef} className="relative aspect-video w-full overflow-hidden rounded-lg border border-white/5 bg-white/5 mb-6 group-hover:border-white/20 transition-colors">
                {/* Rainbow hover border highlight */}
                <div className="absolute inset-0 rainbow-glow opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" />

                <motion.div style={{ scale }} className="w-full h-full bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center">
                    <Play className="w-12 h-12 text-white/20 group-hover:text-amber-400 transition-colors" />
                </motion.div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />

                {/* Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded-sm text-[10px] font-bold text-white uppercase tracking-widest">
                    {work.category}
                </div>
            </div>

            {/* Content */}
            <div className="space-y-2">
                <h3 className="text-lg font-bold text-white group-hover:rainbow-text transition-colors">
                    {work.title}
                </h3>
                <p className="text-white/40 text-sm font-light leading-relaxed">{work.description}</p>
            </div>
        </motion.div>
    );
}

export default function Works() {
    return (
        <section id="works" className="py-40 bg-black relative">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section header */}
                <ScrollReveal className="mb-24">
                    <span className="text-white/30 text-xs font-medium tracking-[0.3em] uppercase block mb-4">
                        Featured Works
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                        制作事例
                    </h2>
                </ScrollReveal>

                {/* Works grid */}
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 mb-20">
                    {WORKS.map((work, index) => (
                        <WorkCard key={work.title} work={work} index={index} />
                    ))}
                </div>

                {/* View more CTA */}
                <ScrollReveal className="text-center">
                    <a
                        href="/works"
                        className="minimal-button-outline inline-flex items-center gap-3 group"
                    >
                        すべての制作事例を見る
                        <ExternalLink className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </a>
                </ScrollReveal>
            </div>
        </section>
    );
}

