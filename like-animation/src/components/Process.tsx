"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { MessageSquare, Layout, Film, Share2 } from "lucide-react";

const steps = [
    {
        number: "01",
        title: "ヒアリング・要件定義",
        description: "誰に・何を・どう伝えるかを言語化。予算・納期に合わせたプランを策定します。",
        color: "text-blue-400"
    },
    {
        number: "02",
        title: "構成・ビジュアル設計",
        description: "構成案から絵コンテへ。イラストやトーン＆マナーをここで確定させます。",
        color: "text-amber-400"
    },
    {
        number: "03",
        title: "Vコンテ（動画設計図）の作成",
        description: "本制作前に「動く設計図」を確認。タイミングやテンポを事前にチェックし、手戻りを防ぐ品質保証プロセス。",
        color: "text-pop-primary",
        highlight: true // Emphasize this step
    },
    {
        number: "04",
        title: "本制作・納品",
        description: "アニメーション付け、BGM/ナレーション追加を行い、最終データを納品します。",
        color: "text-green-400"
    }
];

export default function Process() {
    return (
        <section id="process" className="py-20 md:py-40 bg-black relative">
            <div className="max-w-4xl mx-auto px-6">
                <ScrollReveal className="text-center mb-24" yOffset={60} duration={1.2}>
                    {/* Fix 4: Rainbow Header */}
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight rainbow-text inline-block mb-6">
                        制作の流れ
                    </h2>
                    <p className="text-white/50 text-lg font-light">
                        「思っていたのと違う」をゼロにする、<br />徹底した確認プロセス。
                    </p>
                </ScrollReveal>

                <div className="relative">
                    {/* Connecting Line */}
                    <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-500 via-pop-primary to-green-500 opacity-30 md:hidden" />

                    <div className="space-y-12">
                        {steps.map((step, index) => (
                            <ScrollReveal key={step.number} delay={index * 0.1} yOffset={100}>
                                <div className={`relative flex gap-8 p-6 rounded-2xl transition-all border ${step.highlight ? 'bg-white/[0.08] border-pop-primary/40 shadow-[0_0_30px_rgba(255,46,99,0.1)]' : 'bg-white/[0.03] border-white/10 hover:bg-white/[0.06] hover:border-white/20'}`}>
                                    {/* Number/Icon Column */}
                                    <div className="flex-shrink-0 relative z-10">
                                        <div className={`w-14 h-14 rounded-full bg-black border border-white/10 flex items-center justify-center text-xl font-bold ${step.color} shadow-lg shadow-black/50`}>
                                            <div className="absolute inset-0 rounded-full bg-current opacity-10 blur-sm" />
                                            {step.number}
                                        </div>
                                    </div>

                                    {/* Content Column */}
                                    <div className="pt-2">
                                        <div className="flex items-center gap-3 mb-3">
                                            <h3 className={`text-xl font-bold text-white ${step.highlight ? 'text-pop-primary' : ''}`}>
                                                {step.title}
                                            </h3>
                                            {step.highlight && (
                                                <span className="px-2 py-0.5 text-[10px] bg-pop-primary text-white font-bold rounded-full tracking-wider">
                                                    IMPORTANT
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-white/60 leading-relaxed font-light">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
