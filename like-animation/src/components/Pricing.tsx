"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { Check } from "lucide-react";

const plans = [
    {
        name: "Light",
        price: "5",
        description: "素材支給でコストを抑えたい方へ。",
        features: ["ヒアリング", "構成作成(簡易)", "アニメーション編集", "修正1回"],
        popular: false
    },
    {
        name: "Standard",
        price: "15",
        description: "標準的なアニメーション制作。",
        features: ["詳細ヒアリング", "企画・構成・絵コンテ", "オリジナルイラスト", "ナレーション・BGM", "修正2回"],
        popular: true
    },
    {
        name: "Premium",
        price: "25",
        description: "リッチな演出と長期運用。",
        features: ["戦略的企画・コンサル", "ハイエンドアニメーション", "複数パターン制作", "広告運用サポート", "修正無制限"],
        popular: false
    }
];

export default function Pricing() {
    return (
        <section id="pricing" className="py-40 bg-black relative">
            <ScrollReveal className="text-center mb-24" yOffset={100} duration={1.2}>
                {/* Fix 4: Rainbow Header */}
                <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight rainbow-text inline-block mb-6">
                    料金プラン
                </h2>
                <p className="text-white/50 text-lg font-light">
                    「要見積もり」の不安を解消。<br />明確な目安をご提示します。
                </p>
            </ScrollReveal>

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <ScrollReveal key={plan.name} delay={index * 0.1}>
                            <div className={`relative p-10 rounded-3xl h-full transition-all duration-300 ${plan.popular ? 'bg-white/10 border-white/20 shadow-[0_0_50px_rgba(255,255,255,0.1)] scale-105 z-10' : 'bg-white/5 border-white/10 hover:bg-white/10 scale-100'}`}>
                                {plan.popular && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase shadow-lg">
                                        Popular
                                    </div>
                                )}

                                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                                <div className="flex items-end gap-1 mb-6">
                                    <span className="text-sm text-white/50">目安</span>
                                    <span className="text-4xl font-bold text-white tracking-tighter">{plan.price}</span>
                                    <span className="text-sm text-white/50">万円〜</span>
                                </div>
                                <p className="text-white/60 text-sm mb-8 pb-8 border-b border-white/10">
                                    {plan.description}
                                </p>
                                <ul className="space-y-4 mb-10">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-3 text-sm text-white/80">
                                            <Check className="w-4 h-4 text-pop-secondary" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button className={`w-full py-4 rounded-full font-bold text-sm tracking-widest uppercase transition-all ${plan.popular ? 'bg-white text-black hover:bg-pop-secondary hover:text-white' : 'border border-white/20 text-white hover:bg-white hover:text-black'}`}>
                                    Select Plan
                                </button>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
