"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
    return (
        <section className="py-24 md:py-32 bg-slate-900 text-white relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />

            <div className="pro-container relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                        映像活用で、ビジネスを加速させる。
                    </h2>
                    <p className="text-slate-400 text-lg md:text-xl mb-12 leading-relaxed">
                        まずは現状の課題をお聞かせください。<br />
                        具体的な動画のイメージがなくても大丈夫です。<br className="hidden md:inline" />
                        貴社の目標達成に最適なプランをご提案します。
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center px-10 py-5 bg-white text-slate-900 font-bold text-lg rounded-xl hover:bg-slate-100 transition-all hover:scale-105 shadow-2xl shadow-white/10"
                        >
                            無料相談・お見積もりはこちら
                            <ArrowRight className="ml-2" />
                        </a>
                    </div>

                    <p className="mt-8 text-sm text-slate-500">
                        ※ オンラインMTG（Zoom/Meet）も可能です。<br />
                        ※ 営業目的のお問い合わせはお断りしております。
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
