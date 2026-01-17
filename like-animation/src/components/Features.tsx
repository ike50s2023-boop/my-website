"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { Zap, Heart, Layout, Sparkles } from "lucide-react";

export default function Features() {
    const features = [
        {
            icon: Zap,
            title: "「見えないもの」を可視化",
            description: "システム構造、抽象的な概念、膨大なデータ。言葉だけでは伝わりにくい情報を、直感的なアニメーションと図解で「一目でわかる」形に変換します。",
            color: "text-amber-400"
        },
        {
            icon: Heart,
            title: "ビジネスの変化に対応する「資産性」",
            description: "実写動画と異なり、撮影し直す必要がありません。UIの変更やサービスのアップデートに合わせて、部分的な修正だけで長く使い続けられる「資産」としての動画を制作します。",
            color: "text-pop-primary"
        },
        {
            icon: Layout,
            title: "営業・教育をワンストップで",
            description: "制作したアセット（イラストやキャラクター）は、営業資料やWebサイト、社内マニュアルにも流用可能。ブランドイメージを統一しながら、トータルコストを抑えます。",
            color: "text-pop-secondary"
        }
    ];

    return (
        <section id="features" className="py-40 bg-black relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-pop-primary/10 rounded-full blur-[120px] mix-blend-screen opacity-50" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pop-secondary/10 rounded-full blur-[100px] mix-blend-screen opacity-50" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <ScrollReveal className="text-center mb-20" yOffset={100} duration={1.2}>
                    {/* Fix 4: Rainbow Header */}
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight rainbow-text inline-block mb-6">
                        独自の強み
                    </h2>
                    <p className="text-white/50 text-lg font-light max-w-2xl mx-auto">
                        「伝わらない」損失をゼロにする、<br />ビジネス直結型アニメーション。
                    </p>
                </ScrollReveal>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <ScrollReveal key={feature.title} delay={index * 0.1}>
                                <div className="glass-card p-8 h-full hover:bg-white/10 transition-colors group">
                                    <div className={`mb-6 ${feature.color}`}>
                                        <Icon className="w-10 h-10" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-pop-secondary transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-white/50 text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </ScrollReveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

