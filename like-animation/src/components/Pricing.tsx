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

                {/* Additional Information */}
                <ScrollReveal delay={0.4}>
                    <div className="max-w-4xl mx-auto mt-20 space-y-6">
                        {/* Divider */}
                        <div className="relative mb-12">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-white/20"></div>
                            </div>
                            <div className="relative flex justify-center">
                                <span className="bg-black px-6 text-white/40 text-sm font-bold uppercase tracking-wider">料金に関する注意事項</span>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                                <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-pop-primary"></span>
                                    ディレクション費について
                                </h4>
                                <p className="text-white/60 text-sm leading-relaxed">
                                    企画・構成、打ち合わせ、映像全体の演出・監修など、制作全般のディレクション費用を含みます。
                                </p>
                            </div>

                            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                                <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-pop-secondary"></span>
                                    BGMについて
                                </h4>
                                <p className="text-white/60 text-sm leading-relaxed">
                                    商用利用および編集が可能なフリー音楽素材サイトから、映像の雰囲気や構成に合わせて選定・編集いたします。<br />
                                    <span className="text-white/40 text-xs">※特定の楽曲をご希望の場合は、ライセンス取得など別途ご対応が必要です。</span>
                                </p>
                            </div>

                            <div className="p-6 bg-white/5 rounded-xl border border-white/10 md:col-span-2">
                                <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-pop-accent"></span>
                                    実写映像・写真とアニメーションの融合制作について
                                </h4>
                                <p className="text-white/60 text-sm leading-relaxed">
                                    実写映像・写真とアニメーションを組み合わせた制作は可能ですが、当方では撮影業務は承っておりません。<br />
                                    お客様にて事前にご用意いただいた映像・写真データをもとに制作いたします。データ形式・解像度等については別途ご相談ください。
                                </p>
                            </div>

                            <div className="p-6 bg-white/5 rounded-xl border border-white/10 md:col-span-2">
                                <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>
                                    料金について
                                </h4>
                                <p className="text-white/60 text-sm leading-relaxed">
                                    本料金は、諸事情により予告なく変更される場合があります。あらかじめご了承ください。
                                </p>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
