"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Clock } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-grid-pattern opacity-100 pointer-events-none" />

            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 z-0" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-50/80 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 z-0" />

            <div className="pro-container relative z-10 w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Left: Copy */}
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="pro-badge mb-6 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                            BtoB特化・目的達成型動画制作
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 tracking-tight leading-[1.1] mb-8">
                            「ただ作るだけ」の<br />動画はもう終わり。
                        </h1>

                        <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium mb-8 max-w-xl">
                            ビジネスの課題は「綺麗さ」だけでは解決できません。<br />
                            CVR改善・業務効率化に特化した、<br />
                            <span className="text-slate-900 font-bold border-b-2 border-accent/30">"成果に繋がる"</span> 戦略的アニメーション制作。
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-slate-800 transition-all hover:scale-105 shadow-xl shadow-slate-900/10"
                            >
                                無料相談・戦略相談はこちら
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </a>
                            <a
                                href="#works"
                                className="inline-flex items-center justify-center px-8 py-4 border border-slate-200 text-slate-600 font-bold rounded-lg hover:bg-slate-50 transition-all"
                            >
                                制作実績を見る
                            </a>
                        </div>

                        {/* Authority / Social Proof */}
                        <div className="pt-8 border-t border-slate-200 grid grid-cols-3 gap-8">
                            <div>
                                <div className="text-3xl font-bold text-slate-900">800<span className="text-base font-normal text-slate-500 ml-1">本+</span></div>
                                <div className="text-xs text-slate-500 font-medium mt-1">累計制作実績</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-slate-900">92<span className="text-base font-normal text-slate-500 ml-1">%</span></div>
                                <div className="text-xs text-slate-500 font-medium mt-1">リピート定着率</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-slate-900">1.8<span className="text-base font-normal text-slate-500 ml-1">倍</span></div>
                                <div className="text-xs text-slate-500 font-medium mt-1">CVR改善実績</div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Right: Abstract Trust Visual */}
                <div className="hidden lg:block relative h-[600px]">
                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-100 to-white rounded-2xl border border-slate-200/60 shadow-2xl p-8 overflow-hidden">
                        {/* Abstract UI representation */}
                        <div className="w-full h-full relative">
                            <motion.div
                                className="absolute top-10 left-10 w-48 p-4 bg-white rounded-xl shadow-lg border border-slate-100 z-20"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2 bg-blue-50 rounded-lg text-accent"><BarChart3 size={16} /></div>
                                    <div className="text-sm font-bold text-slate-700">CVR改善</div>
                                </div>
                                <div className="w-full h-2 bg-slate-100 rounded-full mb-2 overflow-hidden">
                                    <motion.div
                                        className="h-full bg-accent"
                                        initial={{ width: "30%" }}
                                        animate={{ width: "85%" }}
                                        transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatDelay: 3 }}
                                    />
                                </div>
                                <div className="text-xs text-slate-400 text-right">+150% UP</div>
                            </motion.div>

                            <motion.div
                                className="absolute bottom-20 right-10 w-56 p-4 bg-slate-900 text-white rounded-xl shadow-2xl z-30"
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2 bg-slate-800 rounded-lg text-white"><Clock size={16} /></div>
                                    <div className="text-sm font-bold">工数削減</div>
                                </div>
                                <div className="text-xs text-slate-400 leading-relaxed">
                                    マニュアル作成時間<br />
                                    <span className="text-lg font-bold text-white">40時間 → 0時間</span>
                                </div>
                            </motion.div>

                            {/* Center Connectors */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 400 600">
                                <motion.path
                                    d="M100,200 C150,200 150,400 300,450"
                                    fill="none"
                                    stroke="#0f172a"
                                    strokeWidth="2"
                                    strokeDasharray="10 10"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -z-10 -bottom-10 -right-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
                </div>
            </div>
        </section>
    );
}
