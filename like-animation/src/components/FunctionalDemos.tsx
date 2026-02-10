"use client";

import { motion } from "framer-motion";
import { MousePointer2, Database, Zap, Sparkles } from "lucide-react";

const demos = [
    {
        icon: <MousePointer2 className="w-6 h-6" />,
        title: "インタラクティブ・ガイド",
        problem: "「使い方が難しくて使いこなせない」",
        solution: "Rive の State Machine を使い、ユーザーの操作に先回りして次のアクションをアニメーションで示唆。マニュアル不要の体験へ。",
        preview: "User Steps Logic"
    },
    {
        icon: <Database className="w-6 h-6" />,
        title: "データの生命体化 (Live Data)",
        problem: "「数字の羅列で変化が読み取れない」",
        solution: "リアルタイムなデータ変化を、単なる数値の書き換えではなく「呼吸するグラフ」として表現。異常値やトレンドを本能的に察知させます。",
        preview: "Fluid Chart Pulse"
    },
    {
        icon: <Zap className="w-6 h-6" />,
        title: "インテリジェント・応答",
        problem: "「操作に対するリアクションが乏しく不安」",
        solution: "保存完了やエラー、処理中といった状態変化を、直感的なマイクロアニメーションで表現。プロダクトへの「信頼感」を醸成します。",
        preview: "Trust Feedback Loop"
    }
];

export default function FunctionalDemos() {
    return (
        <section className="py-32 px-4 bg-white/2 relative overflow-hidden">
            <div className="max-w-6xl mx-auto space-y-20">
                <div className="text-center space-y-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest"
                    >
                        <Sparkles className="w-4 h-4" />
                        <span>Functional Animation</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
                        「かっこいい」の先にある、<br />
                        <span className="text-glow text-primary">実務のためのアニメーション。</span>
                    </h2>
                    <p className="text-muted text-lg max-w-3xl mx-auto">
                        動画でも静止画でも不可能な「ユーザーとの対話」を Rive で実装。<br />
                        説明コストを下げ、プロダクトを愛される存在へと進化させる具体的な活用例です。
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {demos.map((demo, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-panel p-8 space-y-8 flex flex-col h-full border-white/5 hover:border-primary/30 transition-all duration-500 group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                {demo.icon}
                            </div>

                            <div className="space-y-4 flex-grow">
                                <div className="space-y-2">
                                    <p className="text-[10px] text-red-400 font-bold uppercase tracking-tighter opacity-70">Case: {demo.problem}</p>
                                    <h3 className="text-2xl font-display font-bold">{demo.title}</h3>
                                </div>
                                <p className="text-muted text-sm leading-relaxed">{demo.solution}</p>
                            </div>

                            {/* Visualization Placeholder */}
                            <div className="aspect-video bg-black/40 rounded-2xl border border-white/5 flex items-center justify-center relative overflow-hidden group-hover:border-primary/20 transition-all">
                                <div className="absolute inset-0 bg-mesh opacity-10" />
                                <span className="text-[10px] font-bold text-muted uppercase tracking-[0.25em]">{demo.preview} Preview</span>
                                {/* ここに将来的に Rive アニメーションが配置される */}
                                <div className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
