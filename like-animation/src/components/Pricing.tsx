"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const PLANS = [
    {
        name: "ライトプラン",
        desc: "SNS・Youtubeショート向け",
        price: "¥50,000~",
        features: ["テンプレートベース", "15-30秒尺", "修正1回まで", "素材支給必須"],
        color: "border-slate-200",
        btnColor: "bg-slate-100 text-slate-600 hover:bg-slate-200"
    },
    {
        name: "スタンダードプラン",
        desc: "プロモーション・製品紹介向け",
        price: "¥150,000~",
        features: ["完全オリジナル演出", "30-60秒尺", "修正3回まで", "ナレーション/BGM込", "構成案作成"],
        popular: true,
        color: "border-accent ring-4 ring-accent/10",
        btnColor: "bg-accent text-white hover:bg-accent/90"
    },
    {
        name: "プレミアムプラン",
        desc: "展示会・リブランディング向け",
        price: "¥300,000~",
        features: ["ハイエンド演出", "60秒以上", "修正回数無制限", "コンサルティング定例", "二次利用権付与"],
        color: "border-slate-200",
        btnColor: "bg-slate-900 text-white hover:bg-slate-800"
    }
];

export default function Pricing() {
    return (
        <section id="pricing" className="pro-section bg-slate-50 relative">
            <div className="pro-container">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="pro-badge mb-4">Pricing</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                        明確な料金体系。<br className="md:hidden" />安心のコミットメント。
                    </h2>
                    <p className="text-slate-500 leading-relaxed">
                        「要見積もり」で時間を無駄にしません。<br className="hidden md:inline" />
                        ご予算に合わせた最適なプランを提案します。
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 items-start">
                    {PLANS.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`bg-white rounded-2xl p-8 border ${plan.color} relative shadow-xl shadow-slate-200/50`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-wider uppercase">
                                    Most Popular
                                </div>
                            )}

                            <h3 className="text-lg font-bold text-slate-900 mb-2">{plan.name}</h3>
                            <p className="text-slate-500 text-xs mb-6">{plan.desc}</p>

                            <div className="text-3xl font-bold text-slate-900 mb-8 tracking-tight">
                                {plan.price}
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                                        <Check size={16} className="text-accent flex-shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="#contact"
                                className={`flex items-center justify-center w-full py-4 rounded-lg font-bold text-sm transition-all ${plan.btnColor}`}
                            >
                                まずは相談する
                                <ArrowRight size={16} className="ml-2" />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
