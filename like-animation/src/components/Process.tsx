"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { MessageSquare, Layout, Film, Share2 } from "lucide-react";

const STEPS = [
    {
        icon: MessageSquare,
        step: "01",
        title: "Hearing",
        description: "クリエイティブの方向性を決定するヒアリング。",
        color: "text-blue-400"
    },
    {
        icon: Layout,
        step: "02",
        title: "Planning",
        description: "絵コンテとビデオコンテで完成形を共有。",
        color: "text-amber-400"
    },
    {
        icon: Film,
        step: "03",
        title: "Animation",
        description: "細部までこだわり抜いたモーション制作。",
        color: "text-pop-primary"
    },
    {
        icon: Share2,
        step: "04",
        title: "Delivery",
        description: "ご希望のフォーマットで納品。",
        color: "text-green-400"
    }
];

export default function Process() {
    return (
        <section id="process" className="py-40 bg-black relative">
            <div className="max-w-7xl mx-auto px-6">
                <ScrollReveal className="text-center mb-24">
                    {/* Fix 4: Rainbow Header */}
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight rainbow-text inline-block mb-6">
                        制作の流れ
                    </h2>
                    <p className="text-white/50">最短2週間での納品が可能です。</p>
                </ScrollReveal>

                <div className="grid md:grid-cols-4 gap-8">
                    {STEPS.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <ScrollReveal key={step.step} delay={index * 0.1}>
                                <div className="relative group">
                                    {/* Connector Line (except last) */}
                                    {index < STEPS.length - 1 && (
                                        <div className="hidden md:block absolute top-12 left-1/2 w-full h-[2px] bg-gradient-to-r from-white/20 to-transparent z-0" />
                                    )}

                                    <div className="relative z-10 bg-black p-6 rounded-2xl border border-white/10 hover:border-pop-secondary/50 transition-colors">
                                        <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                                            {/* Fix 6: Colored Icons */}
                                            <Icon className={`w-6 h-6 ${step.color}`} />
                                        </div>
                                        <div className="text-center">
                                            <div className="text-pop-secondary font-black text-xl mb-2">{step.step}</div>
                                            <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                                            <p className="text-white/40 text-xs leading-relaxed">{step.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
