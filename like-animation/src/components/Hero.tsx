"use client";

import { motion } from "framer-motion";
import { Sparkles, BarChart3, Zap } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-viz-primary/10 rounded-full blur-[120px] -z-10 animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-viz-secondary/10 rounded-full blur-[100px] -z-10 animate-pulse delay-700" />

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center lg:text-left space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-viz-primary/10 border border-viz-primary/20 backdrop-blur-sm">
                        <Sparkles className="w-4 h-4 text-viz-primary" />
                        <span className="text-xs font-bold uppercase tracking-widest text-viz-primary/80">Next-Gen Data Visualization</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-space-grotesk font-black text-white leading-[1.1]">
                        Data to Insight, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-viz-primary via-viz-secondary to-viz-primary bg-[length:200%_auto] animate-gradient-flow">
                            In Seconds.
                        </span>
                    </h1>

                    <p className="text-xl text-white/60 max-w-xl mx-auto lg:mx-0 font-medium">
                        Turn your complex CSV and Excel data into stunning, interactive visualizations with the power of generative AI. No design skills required.
                    </p>

                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                        <button className="px-8 py-4 bg-viz-primary text-white font-bold rounded-full hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(99,102,241,0.4)]">
                            Start Building Now
                        </button>
                        <button className="px-8 py-4 bg-white/5 text-white font-bold rounded-full border border-white/10 hover:bg-white/10 transition-all">
                            Watch Demo
                        </button>
                    </div>

                    <div className="flex items-center justify-center lg:justify-start gap-8 pt-8 border-t border-white/5">
                        <div className="flex items-center gap-2">
                            <Zap className="w-5 h-5 text-viz-secondary" />
                            <span className="text-sm font-bold text-white/50">Lightning Fast</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <BarChart3 className="w-5 h-5 text-viz-secondary" />
                            <span className="text-sm font-bold text-white/50">Pixel Perfect</span>
                        </div>
                    </div>
                </motion.div>

                {/* Right Content: The "Stage" for User's Animation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative aspect-square lg:aspect-auto h-[500px] w-full"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-viz-primary/20 to-viz-secondary/20 rounded-[40px] blur-2xl -z-10" />
                    <div className="w-full h-full rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden flex items-center justify-center relative group">

                        {/* THIS IS WHERE THE USER'S LOTTIE/RIVE WILL GO */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
                            <div className="w-32 h-32 mb-6 rounded-full border-4 border-dashed border-viz-primary/40 animate-spin-slow flex items-center justify-center">
                                <BarChart3 className="w-12 h-12 text-viz-primary animate-pulse" />
                            </div>
                            <h3 className="text-2xl font-space-grotesk font-bold text-white mb-2">
                                User Animation Stage
                            </h3>
                            <p className="text-white/40 text-sm max-w-xs">
                                Waiting for your After Effects "Hero" animation. <br /> Place your Lottie JSON here to blow their minds.
                            </p>
                        </div>

                        {/* Decorative Grid */}
                        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
                    </div>

                    {/* Floaters */}
                    <div className="absolute -top-6 -right-6 w-24 h-24 bg-viz-primary/20 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center animate-bounce-slow">
                        <Zap className="w-10 h-10 text-viz-primary shadow-glow" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
