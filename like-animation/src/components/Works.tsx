"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { Play, ExternalLink } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const WORKS = [
    {
        title: "Skill Connect",
        category: "サービス紹介動画",
        description: "複雑なアプリ利用フローを60秒で「疑似体験」。UIアニメーションで手軽さを可視化し、CVR向上に貢献。",
    },
    {
        title: "ロジカルシンキング研修",
        category: "研修・eラーニング",
        description: "「やらされる研修」を「見たくなる」へ。抽象的な思考法をストーリーで図解し、理解度テスト平均20点アップ。",
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
            <div ref={cardRef} className="relative aspect-video w-full overflow-hidden rounded-lg mb-6 transition-colors border border-white/5 bg-white/5 group-hover:border-white/20">
                {/* Rainbow hover border highlight */}
                <div className="absolute inset-0 rainbow-glow opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" />

                <motion.div style={{ scale }} className="w-full h-full flex items-center justify-center bg-gradient-to-br from-white/10 to-transparent">
                    <Play className="w-12 h-12 transition-colors text-white/20 group-hover:text-amber-400" />
                </motion.div>

                {/* Overlay */}
                <div className="absolute inset-0 transition-colors duration-500 bg-black/20 group-hover:bg-black/0" />

                {/* Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 backdrop-blur-md rounded-sm text-[10px] font-bold uppercase tracking-widest bg-black/50 border border-white/10 text-white">
                    {work.category}
                </div>
            </div>

            {/* Content */}
            <div className="space-y-2">
                <h3 className="text-xl font-bold transition-colors text-white group-hover:rainbow-text">
                    {work.title}
                </h3>
                <p className="text-sm font-light leading-relaxed text-white/60">{work.description}</p>
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
                        Portfolio
                    </span>
                    {/* Fix 4: Rainbow Header */}
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight rainbow-text inline-block">
                        導入実績
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
                        className="minimal-button-outline inline-flex items-center gap-3 group text-white border-white/20 hover:bg-white hover:text-black"
                    >
                        すべての制作事例を見る
                        <ExternalLink className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </a>
                </ScrollReveal>
            </div>
        </section>
    );
}
