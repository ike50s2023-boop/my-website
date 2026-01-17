"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { Check } from "lucide-react";

const PLANS = [
    {
        name: "Light",
        price: "20",
        description: "SNS広告や短尺動画に最適",
        features: ["15-30秒のアニメーション", "BGM・SE選定", "修正2回まで", "MP4納品"]
    },
    {
        name: "Standard",
        price: "40",
        description: "サービス紹介やマニュアル動画に",
        features: ["30-60秒のアニメーション", "ナレーション収録", "構成・絵コンテ作成", "修正無制限"],
        recommended: true
    },
    {
        name: "Premium",
        price: "80",
        description: "完全オリジナルのハイエンド表現",
        features: ["60秒〜のアニメーション", "オリジナルイラスト", "3DCG等の高度な演出", "プロジェクト管理"]
    }
];

export default function Pricing() {
    return (
        <section id="pricing" className="py-40 bg-black relative">
            <div className="max-w-7xl mx-auto px-6">
                <ScrollReveal className="text-center mb-20">
                    {/* Fix 4: Rainbow Header */}
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight rainbow-text inline-block mb-6">
                        料金プラン
                    </h2>
                    <p className="text-white/50">
                        明確な料金体系で、安心してご依頼いただけます。
                    </p>
                </ScrollReveal>

                <div className="grid md:grid-cols-3 gap-8">
                    {PLANS.map((plan, index) => (
                        <ScrollReveal key={plan.name} delay={index * 0.1}>
                            <div className={`
                                relative p-10 rounded-[2rem] h-full transition-all duration-300
                                ${plan.recommended
                                    ? "bg-white/10 border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.05)] transform scale-105" // Fix 5: Subtle emphasis
                                    : "bg-black border border-white/10 hover:border-white/20"
                                }
                            `}>
                                {plan.recommended && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-black text-xs font-bold rounded-full uppercase tracking-widest shadow-lg">
                                        Popular
                                    </div>
                                )}

                                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                                <div className="flex items-baseline gap-1 mb-6">
                                    <span className="text-sm text-white/50">¥</span>
                                    <span className="text-5xl font-black text-white">{plan.price}</span>
                                    <span className="text-sm text-white/50">万円〜</span>
                                </div>
                                <p className="text-white/40 text-sm mb-8 min-h-[48px]">{plan.description}</p>

                                <ul className="space-y-4 mb-10">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-3 text-sm text-white/70">
                                            <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                                <Check className="w-3 h-3 text-pop-secondary" />
                                            </div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href="#contact"
                                    className={`w-full block py-4 text-center rounded-xl font-bold transition-all ${plan.recommended
                                            ? "bg-white text-black hover:bg-gray-200"
                                            : "bg-white/5 text-white hover:bg-white/10"
                                        }`}
                                >
                                    相談する
                                </a>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
