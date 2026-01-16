"use client";

import { motion } from "framer-motion";
import { Layers, RefreshCw, Briefcase, CheckCircle2 } from "lucide-react";

const FEATURES = [
    {
        icon: Layers,
        title: "「見えないもの」を可視化",
        description: "システム構造、抽象的な概念、膨大なデータ。言葉だけでは伝わりにくい情報を、直感的なアニメーションと図解で「一目でわかる」形に変換します。",
        points: ["SaaS/クラウドアニメーション", "ビジネスモデル図解", "データビジュアライゼーション"]
    },
    {
        icon: RefreshCw,
        title: "ビジネスの変化に対応する「資産性」",
        description: "実写動画と異なり、撮影し直す必要がありません。UIの変更やサービスのアップデートに合わせて、部分的な修正だけで長く使い続けられる「資産」としての動画を制作します。",
        points: ["UI変更時の低コスト修正", "タレント契約リスクなし", "多言語展開が容易"]
    },
    {
        icon: Briefcase,
        title: "営業・教育をワンストップで",
        description: "制作したアセット（イラストやキャラクター）は、営業資料やWebサイト、社内マニュアルにも流用可能。ブランドイメージを統一しながら、トータルコストを抑えます。",
        points: ["Web/資料への素材流用", "ブランドトーンの統一", "営業×採用の横断活用"]
    },
];

export default function Features() {
    return (
        <section id="features" className="pro-section bg-slate-50 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-100/50 skew-x-12 translate-x-1/2 pointer-events-none" />

            <div className="pro-container relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="pro-badge mb-4">Our Strengths</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                        「伝わらない」損失をゼロにする、<br className="md:hidden" />ビジネス直結型アニメーション。
                    </h2>
                    <p className="text-slate-500 leading-relaxed">
                        なぜ、多くのBtoB企業が私たちを選ぶのか。<br className="hidden md:inline" />
                        それは「表現の美しさ」以上に「情報の整理力」を大切にしているからです。
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {FEATURES.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-8 text-accent">
                                    <Icon size={32} />
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-4 h-14 flex items-center">
                                    {feature.title}
                                </h3>

                                <p className="text-slate-600 text-sm leading-relaxed mb-8">
                                    {feature.description}
                                </p>

                                <ul className="space-y-3 pt-6 border-t border-slate-100">
                                    {feature.points.map((point) => (
                                        <li key={point} className="flex items-start gap-3 text-sm text-slate-500 font-medium">
                                            <CheckCircle2 size={16} className="text-accent flex-shrink-0 mt-0.5" />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

