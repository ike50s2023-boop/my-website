"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { MessageSquare, FileText, Palette, Clapperboard, Rocket } from "lucide-react";

const STEPS = [
    {
        icon: MessageSquare,
        title: "無料ヒアリング",
        description: "ご要望・目的・予算感をお聞かせください。オンラインで30分程度。",
    },
    {
        icon: FileText,
        title: "企画・お見積もり",
        description: "最適なプランと概算費用をご提案。ご納得いただいてから制作開始。",
    },
    {
        icon: Palette,
        title: "デザイン・絵コンテ",
        description: "ビジュアルの方向性を固めます。この段階で細かい修正が可能です。",
    },
    {
        icon: Clapperboard,
        title: "アニメーション制作",
        description: "承認いただいた絵コンテをもとに、動きをつけていきます。",
    },
    {
        icon: Rocket,
        title: "納品・サポート",
        description: "各種フォーマットで納品。公開後の効果測定もサポートします。",
    },
];

export default function Process() {
    return (
        <section id="process" className="py-40 bg-black relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                {/* Section header */}
                <ScrollReveal className="mb-24">
                    <span className="text-white/30 text-xs font-medium tracking-[0.3em] uppercase block mb-4">
                        Process
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                        制作の流れ
                    </h2>
                </ScrollReveal>

                {/* Steps */}
                <div className="relative">
                    {/* Connection line */}
                    <div className="absolute left-6 top-8 bottom-8 w-[1px] bg-white/10" />

                    <div className="space-y-16">
                        {STEPS.map((step, index) => {
                            const Icon = step.icon;

                            return (
                                <ScrollReveal
                                    key={step.title}
                                    className="relative pl-16 flex flex-col md:flex-row md:items-start gap-6"
                                    delay={index * 0.1}
                                >
                                    {/* Number badge */}
                                    <div className="absolute left-0 top-0 w-12 h-12 rounded-full border border-white/20 bg-black flex items-center justify-center z-10">
                                        <Icon className="w-5 h-5 text-white/50" />
                                    </div>

                                    {/* Content */}
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-4">
                                            <span className="text-[10px] font-bold text-accent uppercase tracking-widest">
                                                Step {index + 1}
                                            </span>
                                            <h3 className="text-xl font-bold text-white tracking-tight">{step.title}</h3>
                                        </div>
                                        <p className="text-white/40 text-sm font-light leading-relaxed max-w-xl">{step.description}</p>
                                    </div>
                                </ScrollReveal>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
