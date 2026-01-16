"use client";

import { motion } from "framer-motion";
import { MessageSquare, LayoutTemplate, Film, FileCheck } from "lucide-react";

const STEPS = [
    {
        icon: MessageSquare,
        step: "STEP 01",
        title: "ヒアリング・要件定義",
        description: "「誰に」「何を」「どう」伝えるかを言語化。予算・納期に合わせた最適なプランを策定します。",
    },
    {
        icon: LayoutTemplate,
        step: "STEP 02",
        title: "構成・ビジュアル設計",
        description: "構成案から絵コンテを作成。イラストのタッチやトーン＆マナーをここで確定させます。",
    },
    {
        icon: Film,
        step: "STEP 03",
        title: "Vコンテ（動画設計図）の作成",
        description: "本制作前に「動く設計図」をご確認いただきます。タイミングやテンポを事前にチェックし、手戻りを防ぐ品質保証プロセスです。",
        highlight: true, // Special emphasis
    },
    {
        icon: FileCheck,
        step: "STEP 04",
        title: "本制作・納品",
        description: "アニメーション付け、BGM・ナレーション追加を行い、最終データを納品します。",
    },
];

export default function Process() {
    return (
        <section id="process" className="pro-section bg-white border-t border-slate-100">
            <div className="pro-container">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="pro-badge mb-4">Flow</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                        「思っていたのと違う」をゼロにする、<br className="md:hidden" />徹底した確認プロセス。
                    </h2>
                </div>

                <div className="relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 z-0" />

                    <div className="grid lg:grid-cols-4 gap-8">
                        {STEPS.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className="relative z-10"
                                >
                                    <div className={`w-24 h-24 rounded-full border-8 mx-auto mb-8 flex items-center justify-center bg-white ${step.highlight ? "border-accent text-accent shadow-lg shadow-accent/20" : "border-slate-50 text-slate-400"}`}>
                                        <Icon size={32} />
                                    </div>

                                    <div className="text-center px-4">
                                        <span className={`block text-xs font-bold tracking-widest mb-2 ${step.highlight ? "text-accent" : "text-slate-400"}`}>
                                            {step.step}
                                        </span>
                                        <h3 className="text-lg font-bold text-slate-900 mb-4 h-12 flex items-center justify-center">
                                            {step.title}
                                        </h3>
                                        <p className="text-sm text-slate-500 leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>

                                    {step.highlight && (
                                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-accent text-white text-[10px] font-bold px-3 py-1 rounded-full whitespace-nowrap">
                                            重要プロセス
                                        </div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
