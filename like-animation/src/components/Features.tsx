"use client";

import { Sparkles, Target, Zap, Heart, BarChart3, Palette } from "lucide-react";

const FEATURES = [
    {
        icon: Sparkles,
        title: "想像を超える提案",
        description: "クライアントの要望を少し\"はみ出す\"プラスアルファの価値。確かな技術と遊び心で期待を超えます。",
    },
    {
        icon: Target,
        title: "目的に最適化",
        description: "「なんとなくカッコいい」ではなく、ビジネスゴールから逆算した戦略的な映像設計。",
    },
    {
        icon: Zap,
        title: "スピード対応",
        description: "短納期でも品質は妥協しません。効率的なワークフローで迅速にお届け。",
    },
    {
        icon: Heart,
        title: "感情を動かす表現",
        description: "見る人の心に直接届く映像体験。記憶に残り、行動を促すアニメーション。",
    },
    {
        icon: BarChart3,
        title: "成果にコミット",
        description: "制作して終わりではなく、視聴データ分析や改善提案まで伴走します。",
    },
    {
        icon: Palette,
        title: "柔軟なスタイル",
        description: "POPからクール、シンプルからリッチまで。ブランドに合わせた最適な表現。",
    },
];

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function FeatureCard({ feature, index }: { feature: (typeof FEATURES)[0]; index: number }) {
    const Icon = feature.icon;
    const cardRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "center center"],
    });

    const x = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? -100 : 100, 0]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

    return (
        <motion.div
            ref={cardRef}
            style={{ x, opacity, scale }}
            className="glass-card p-10 border border-white/5 bg-white/[0.02] relative group overflow-hidden"
        >
            {/* Rainbow hover glow */}
            <div className="absolute inset-0 rainbow-glow opacity-0 group-hover:opacity-10 transition-opacity" />

            <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-8 border border-white/10 bg-white/5 relative group-hover:scale-110 transition-transform">
                <div className="absolute inset-0 rainbow-glow opacity-20 blur-md group-hover:opacity-40" />
                <Icon className="w-6 h-6 text-white/80 relative z-10" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 tracking-tight group-hover:rainbow-text transition-colors">{feature.title}</h3>
            <p className="text-white/40 text-sm leading-relaxed font-light">{feature.description}</p>
        </motion.div>
    );
}

export default function Features() {
    return (
        <section id="features" className="py-40 relative overflow-hidden bg-black">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section header */}
                <motion.div
                    className="mb-28"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-white/30 text-xs font-medium tracking-[0.3em] uppercase block mb-4">
                        Why Us
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                        選ばれる理由
                    </h2>
                </motion.div>

                {/* Features grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {FEATURES.map((feature, index) => (
                        <FeatureCard key={feature.title} feature={feature} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

