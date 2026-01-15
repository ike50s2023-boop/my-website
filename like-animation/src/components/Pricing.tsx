"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { Check, ArrowRight } from "lucide-react";

const PRICING_PLANS = [
    {
        name: "ライト",
        description: "SNSやYouTubeショート向け",
        price: "¥50,000",
        priceNote: "〜",
        duration: "15-30秒",
        features: [
            "シンプルモーショングラフィックス",
            "テンプレートベース",
            "1回の修正対応",
            "納期：約5営業日",
        ],
        popular: false,
    },
    {
        name: "スタンダード",
        description: "プロモーション・広告向け",
        price: "¥150,000",
        priceNote: "〜",
        duration: "30-60秒",
        features: [
            "オリジナルアニメーション",
            "ストーリーボード作成",
            "3回の修正対応",
            "BGM・SE込み",
            "納期：約2週間",
        ],
        popular: true,
    },
    {
        name: "プレミアム",
        description: "ブランドムービー・VP向け",
        price: "¥300,000",
        priceNote: "〜",
        duration: "60秒以上",
        features: [
            "フルカスタム制作",
            "企画・コンセプト設計",
            "複数カット・シーン構成",
            "無制限修正対応",
            "納品後サポート",
            "納期：要相談",
        ],
        popular: false,
    },
];

function PricingCard({ plan, index }: { plan: (typeof PRICING_PLANS)[0]; index: number }) {
    return (
        <ScrollReveal
            className={`glass-card p-10 flex flex-col border-white/5 relative ${plan.popular ? "border-accent/40 bg-white/[0.05]" : "bg-white/[0.02]"
                }`}
            delay={index * 0.1}
        >
            {/* Popular badge */}
            {plan.popular && (
                <div className="absolute -top-3 left-6 px-3 py-1 bg-accent rounded-sm text-[10px] font-bold text-white uppercase tracking-widest">
                    Best Value
                </div>
            )}

            {/* Header */}
            <div className="mb-10">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-white/40 text-xs font-medium mb-8">{plan.description}</p>
                <div className="flex items-end gap-1">
                    <span className="text-4xl font-bold tracking-tight text-white">{plan.price}</span>
                    <span className="text-white/30 text-sm font-medium mb-1">{plan.priceNote}</span>
                </div>
            </div>

            {/* Features */}
            <ul className="space-y-4 mb-12 flex-grow">
                {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-white/60 text-xs font-light">{feature}</span>
                    </li>
                ))}
            </ul>

            {/* CTA */}
            <a
                href="#contact"
                className={`w-full flex items-center justify-center gap-2 py-4 rounded-sm font-bold text-xs uppercase tracking-widest transition-all ${plan.popular
                    ? "bg-white text-black hover:bg-white/90"
                    : "border border-white/10 text-white hover:bg-white/5"
                    }`}
            >
                Get Started
                <ArrowRight className="w-4 h-4" />
            </a>
        </ScrollReveal>
    );
}

export default function Pricing() {
    return (
        <section id="pricing" className="py-40 bg-black relative">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section header */}
                <ScrollReveal className="mb-24">
                    <span className="text-white/30 text-xs font-medium tracking-[0.3em] uppercase block mb-4">
                        Pricing
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                        料金プラン
                    </h2>
                </ScrollReveal>

                {/* Pricing cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {PRICING_PLANS.map((plan, index) => (
                        <PricingCard key={plan.name} plan={plan} index={index} />
                    ))}
                </div>

                {/* Note */}
                <ScrollReveal className="text-left text-white/20 text-[10px] mt-16 uppercase tracking-widest">
                    <p>
                        * すべてのプランは制作内容により変動します。詳しくはお問い合わせください。
                    </p>
                </ScrollReveal>
            </div>
        </section>
    );
}
