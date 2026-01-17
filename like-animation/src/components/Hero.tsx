"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight, Sparkles } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const HERO_CONTENT = {
    tagline: "Motion & Creativity Unframed",
    headline: "アイデアを動かす。",
    headlineAccent: "心を動かす。", // Applying rainbow here
    description: "スクリーンの枠を飛び出し、見る人の心に直接届く映像体験。\n確かな技術と遊び心で、想像を超えるアニメーションを。",
    ctaPrimary: "Start Project",
    ctaSecondary: "View Works"
};

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
    // Fix 3: Avoid masking/clipping by just fading/moving slightly without overflow hidden on parent if possible, or adjusting effect.
    // Changing effect to slide out to right and fade, instead of being masked by a container.
    const textX = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
    const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={containerRef} className="relative min-h-[110vh] flex flex-col items-center justify-center overflow-hidden pt-20 pb-32">

            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-pop-primary/20 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-pop-secondary/20 rounded-full blur-[100px] animate-[pulse_6s_ease-in-out_infinite]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                {/* Fix 2 & 7: Badge with Logo Entrance */}
                <motion.div
                    className="flex items-center justify-center gap-4 mb-10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 2.8 }}
                >
                    {/* Tiny Logo Animation */}
                    <motion.div
                        initial={{ opacity: 0, x: 20, rotate: -90 }}
                        animate={{ opacity: 1, x: 0, rotate: 0 }}
                        transition={{ duration: 0.6, delay: 3.2 }}
                        className="w-10 h-10 relative"
                    >
                        <Image src="/logo.png" width={40} height={40} alt="Logo" className="grayscale invert w-full h-full object-contain" />
                    </motion.div>

                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                        <Sparkles className="w-3.5 h-3.5 text-pop-secondary" />
                        <span className="text-white/80 text-xs font-bold tracking-[0.2em] uppercase">
                            {HERO_CONTENT.tagline}
                        </span>
                    </div>
                </motion.div>

                {/* Headline */}
                <div className="mb-12 relative">
                    <motion.h1
                        className="text-5xl md:text-8xl lg:text-9xl font-black text-white leading-[1.1] tracking-tighter"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 3.0, ease: [0.2, 0.65, 0.3, 0.9] }}
                        style={{ y }}
                    >
                        {/* Fix 1: No wrap */}
                        <div className="whitespace-nowrap inline-block">{HERO_CONTENT.headline}</div>
                        <br />
                        {/* Fix 3: Slide out effect instead of mask */}
                        <motion.div
                            style={{ x: textX, opacity: textOpacity }}
                            className="inline-block rainbow-text"
                        >
                            {HERO_CONTENT.headlineAccent}
                        </motion.div>
                    </motion.h1>
                </div>

                {/* Description */}
                <motion.p
                    className="text-white/60 text-lg md:text-xl font-medium mb-16 max-w-2xl mx-auto leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 3.4 }}
                >
                    {HERO_CONTENT.description}
                </motion.p>

                {/* CTAs */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 3.6 }}
                >
                    <a href="#contact" className="pop-button group flex items-center gap-2 text-base">
                        {HERO_CONTENT.ctaPrimary}
                        <ArrowDownRight className="transition-transform group-hover:rotate-[-45deg]" />
                    </a>
                    <a href="#works" className="minimal-button-outline text-white hover:bg-white hover:text-black transition-colors flex items-center gap-2">
                        {HERO_CONTENT.ctaSecondary}
                    </a>
                </motion.div>
            </div>

            {/* Floating Elements for "POP" feel */}
            <motion.div
                className="absolute bottom-20 right-10 md:right-20 hidden lg:block"
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="glass-card p-6 rotate-12 border-pop-secondary/30">
                    <Image src="/logo.png" width={80} height={80} alt="Badge" className="grayscale invert opacity-80" />
                </div>
            </motion.div>
        </section>
    );
}
