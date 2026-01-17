"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight, Sparkles } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const HERO_CONTENT = {
    tagline: "Motion & Creativity Unframed",
    headline: "「ただ作るだけ」の動画はもう終わり。",
    headlineAccent: "”伝わる”動画制作。",
    description: "売上アップ・業務効率化に特化。\n企画・制作から運用まで丸投げOK。\n御社の営業・採用課題を「伝わる動画」で解決します。",
    ctaPrimary: "無料相談・戦略相談はこちら",
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
                {/* Floating Elements removed per user request */}
                {/* Logo & Badge Area - Stacked Vertically */}
                <motion.div
                    className="flex flex-col items-center justify-center gap-6 mb-8"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 2.8 }}
                >
                    {/* Logo - Larger, Vertical Placement */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 3.0 }}
                        className="w-40 h-40 relative"
                    >
                        <Image
                            src="/logo-new.png"
                            width={160}
                            height={160}
                            alt="Logo"
                            className="w-full h-full object-contain"
                        />
                    </motion.div>

                    {/* Text Badge - No Frame, Just Text */}
                    <motion.div
                        className="flex items-center gap-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 3.4 }}
                    >
                        <Sparkles className="w-5 h-5 text-pop-secondary" />
                        <span className="text-white text-base md:text-lg font-bold tracking-[0.2em] uppercase">
                            {HERO_CONTENT.tagline}
                        </span>
                    </motion.div>
                </motion.div>

                {/* Main Headline - Resized to fit, PALT for kerning */}
                <h1
                    className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-tight"
                    style={{ fontFeatureSettings: '"palt"' }}
                >
                    <span className="inline-block overflow-hidden">
                        <motion.span
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.8, delay: 3.0, ease: [0.16, 1, 0.3, 1] }}
                            className="block"
                        >
                            {HERO_CONTENT.headline}
                        </motion.span>
                    </span>
                    <br />
                    <motion.div
                        style={{ x: textX, opacity: textOpacity }}
                        className="inline-block rainbow-text mt-2 md:mt-4"
                    >
                        {HERO_CONTENT.headlineAccent}
                    </motion.div>
                </h1>
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

            {/* Floating Elements removed */}
        </section>
    );
}
