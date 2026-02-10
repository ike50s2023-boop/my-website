"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import AiCore from "./AiCore";

export default function Hero() {
    return (
        <section className="relative min-h-[95vh] flex flex-col items-center justify-center pt-32 pb-20 px-4 overflow-hidden bg-mesh">
            {/* Ambient Background Glows */}
            <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-primary/20 rounded-full blur-[120px] animate-pulse-slow -z-10" />
            <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] bg-accent/20 rounded-full blur-[100px] animate-pulse-slow -z-10" />

            <div className="max-w-5xl w-full text-center space-y-10 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="inline-block px-5 py-2 mb-8 text-[10px] font-bold tracking-[0.2em] uppercase rounded-full bg-white/5 text-accent border border-white/10 backdrop-blur-md">
                        Advanced Interactive Experience
                    </span>
                    <h1 className="text-6xl md:text-8xl font-display font-extrabold tracking-tight leading-[1.05] text-glow">
                        ユーザーを、<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-accent-secondary">
                            迷わせない。
                        </span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed font-medium"
                >
                    「ただの飾り」ではない。ユーザー体験を劇的に進化させ、<br className="hidden md:block" />
                    ビジネスの成果に直結する次世代のインタラクティブ・プロダクトへ。
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row items-center justify-center space-y-5 sm:space-y-0 sm:space-x-8"
                >
                    <button className="relative flex items-center space-x-3 px-10 py-5 bg-primary text-white font-bold rounded-full overflow-hidden group transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(99,102,241,0.5)]">
                        <span className="relative z-10">制作を相談する</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                    </button>

                    <button className="flex items-center space-x-3 px-8 py-4 font-bold text-foreground/80 hover:text-white transition-all group">
                        <div className="p-3 rounded-full border border-white/10 bg-white/5 group-hover:border-primary/50 group-hover:bg-primary/20 transition-all">
                            <Play className="w-4 h-4 fill-current text-accent" />
                        </div>
                        <span className="tracking-tight">デモ体験</span>
                    </button>
                </motion.div>
            </div>

            {/* Animation Component Slot */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="mt-24 w-full max-w-4xl aspect-[21/9] glass-panel rounded-[2.5rem] flex items-center justify-center relative group p-1 overflow-hidden"
                style={{ perspective: "1000px" }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent -z-10" />

                <AiCore />

                {/* Decorative labels */}
                <div className="absolute top-8 left-8 flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted">Core Module Status: Active</span>
                </div>

                <div className="absolute bottom-8 right-8 text-right hidden md:block">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted mb-1">Interactive Data Visualization</p>
                    <div className="h-0.5 w-16 bg-gradient-to-r from-transparent to-accent ml-auto" />
                </div>

                {/* Decorative Grid Mesh */}
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
            </motion.div>
        </section>
    );
}
