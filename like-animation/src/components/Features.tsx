"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { Zap, Heart, Layout, Sparkles } from "lucide-react";

export default function Features() {
    const features = [
        {
            icon: Zap,
            title: "Impact First",
            description: "最初の3秒で心を掴む。視聴継続率を高めるための演出設計。",
            color: "text-amber-400"
        },
        {
            icon: Heart,
            title: "Emotional Design",
            description: "機能説明だけじゃない。ブランドの「想い」を乗せたストーリーテリング。",
            color: "text-pop-primary"
        },
        {
            icon: Layout,
            title: "Cross Device",
            description: "スマホ、PC、サイネージ。あらゆるスクリーンで最適化された視聴体験。",
            color: "text-pop-secondary"
        },
        {
            icon: Sparkles,
            title: "Trend & Pop",
            description: "今の時代の空気感を取り入れた、「シェアしたくなる」映像表現。",
            color: "text-purple-400"
        }
    ];

    return (
        <section id="features" className="py-40 bg-black relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-pop-primary/10 rounded-full blur-[120px] mix-blend-screen opacity-50" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pop-secondary/10 rounded-full blur-[100px] mix-blend-screen opacity-50" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <ScrollReveal className="text-center mb-20">
                    {/* Fix 4: Rainbow Header */}
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight rainbow-text inline-block mb-6">
                        選ばれる理由
                    </h2>
                    <p className="text-white/50 text-lg font-light max-w-2xl mx-auto">
                        Logic <span className="text-pop-secondary">&times;</span> Magic<br />
                        ロジカルな構成とエモーショナルな演出の融合。
                    </p>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <ScrollReveal key={feature.title} delay={index * 0.1}>
                                <div className="glass-card p-8 h-full hover:bg-white/10 transition-colors group">
                                    <div className={`mb-6 ${feature.color}`}>
                                        <Icon className="w-10 h-10" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-pop-secondary transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-white/50 text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </ScrollReveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

