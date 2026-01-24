"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
    {
        name: "Light",
        price: "5",
        duration: "15〜30秒",
        description: "素材支給でコストを抑え、SNSやサイネージで短期間にインパクトを残すプラン。",
        features: ["尺：15〜30秒（SNS・広告用）", "素材支給・テンプレートベース", "構成作成（簡易）", "Vコンテなし（スピード重視）", "修正：各工程 1回まで"],
        popular: false
    },
    {
        name: "Standard",
        price: "15",
        duration: "60秒前後",
        description: "企画・構成からナレーションまで丸投げOK。Webサイト掲載や営業ツールに最適な定番プラン。",
        features: ["尺：60秒前後（サービス紹介等）", "企画・構成・絵コンテ作成", "簡易Vコンテ（動きの全体確認）", "ナレーション・BGM込み", "修正：各工程 2回まで"],
        popular: true
    },
    {
        name: "Premium",
        price: "30",
        duration: "目安120秒",
        description: "リッチな演出とマルチ展開で訴求力を最大化。失敗できない大型プロジェクトに。",
        features: ["尺：目安120秒（完全オーダー）", "詳細Vコンテ（完成イメージ試写）", "ハイエンド演出・イラスト", "マルチサイズ納品（縦・横など）", "修正：各工程 3回まで"],
        popular: false
    }
];

export default function Pricing() {
    return (
        <section id="pricing" className="py-40 bg-black relative">
            <ScrollReveal className="text-center mb-24" yOffset={100} duration={1.2}>
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
                            <div className={`relative p-10 rounded-3xl h-full transition-all duration-300 glass-card ${plan.popular ? 'bg-white/10 border border-pop-secondary/50 scale-105 z-10' : ''}`}>
                                {plan.popular && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-pop-secondary text-black px-6 py-1.5 rounded-full text-xs font-black tracking-widest uppercase shadow-lg whitespace-nowrap">
                                        Recommended
                                    </div>
                                )}

                                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                                <div className="flex items-end gap-1 mb-2">
                                    <span className="text-sm text-white/50">目安</span>
                                    <span className="text-4xl font-bold text-white tracking-tighter">{plan.price}</span>
                                    <span className="text-sm text-white/50">万円〜</span>
                                </div>
                                <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold text-white/80">
                                    <span className="text-pop-secondary">⏱</span>
                                    {plan.duration}
                                </div>
                                <p className="text-white/60 text-sm mb-8 pb-8 border-b border-white/10 leading-relaxed min-h-[4.5em]">
                                    {plan.description}
                                </p>
                                <ul className="space-y-4 mb-10">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-3 text-sm text-white/80">
                                            <Check className="w-4 h-4 text-pop-secondary mt-0.5 flex-shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href={`/contact?plan=${plan.name}`}
                                    className={`block w-full py-4 rounded-full font-bold text-sm tracking-widest uppercase transition-all text-center ${plan.popular ? 'bg-pop-secondary text-black hover:bg-white hover:text-black shadow-lg' : 'border border-white/20 text-white hover:bg-white hover:text-black'}`}
                                >
                                    Select Plan
                                </Link>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
