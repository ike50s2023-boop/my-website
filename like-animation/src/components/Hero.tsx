"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const HERO_CONTENT = {
    tagline: "Motion & Creativity Unframed",
    headline: "アイデアを動かす。",
    headlineAccent: "心を動かす。",
    description:
        "アニメーション動画で、あなたのメッセージを「見る人の心に直接届く」映像体験に。確かな技術と遊び心で、想像を超える価値を創造します。",
    ctaPrimary: "無料でご相談",
    ctaSecondary: "制作事例を見る",
};

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
    const textY = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
    const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
    const bgY = useTransform(scrollYProgress, [0, 1], [0, 400]);

    return (
        <section ref={containerRef} className="relative min-h-[120vh] flex flex-col items-center justify-start overflow-hidden pt-40 pb-32">
            {/* Background Gradient with Parallax */}
            <motion.div
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-900/20 via-transparent to-transparent -z-10"
                style={{ y: bgY }}
            />

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                {/* Tagline */}
                <motion.div
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-10"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 3.0 }}
                    style={{ opacity }}
                >
                    <Sparkles className="w-3.5 h-3.5 text-accent" />
                    <span className="text-white/70 text-xs font-medium tracking-widest uppercase">{HERO_CONTENT.tagline}</span>
                </motion.div>

                {/* Headline */}
                <div className="overflow-hidden mb-10">
                    <motion.h1
                        className="text-5xl md:text-8xl lg:text-9xl font-bold leading-[1.1] tracking-tight text-white"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 3.2, ease: [0.33, 1, 0.68, 1] }}
                        style={{ y }}
                    >
                        {HERO_CONTENT.headline}
                        <br />
                        <span className="rainbow-text">{HERO_CONTENT.headlineAccent}</span>
                    </motion.h1>
                </div>

                {/* Description */}
                <motion.p
                    className="text-white/50 text-xl md:text-2xl mb-14 max-w-2xl mx-auto font-light leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 3.4 }}
                    style={{ y: textY, opacity }}
                >
                    {HERO_CONTENT.description}
                </motion.p>

                {/* CTAs */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-6 justify-center mb-24"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 3.6 }}
                >
                    <a href="#contact" className="minimal-button flex items-center justify-center gap-3 relative group overflow-hidden">
                        <div className="absolute inset-0 bg-white group-hover:bg-white/90 transition-colors" />
                        <span className="relative z-10">{HERO_CONTENT.ctaPrimary}</span>
                        <ArrowRight className="w-5 h-5 relative z-10" />
                    </a>
                    <a href="#works" className="minimal-button-outline flex items-center justify-center gap-3">
                        {HERO_CONTENT.ctaSecondary}
                    </a>
                </motion.div>

                {/* Visual / Image with Scroll-linked Zoom */}
                <motion.div
                    className="relative max-w-4xl mx-auto mt-20"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 3.8 }}
                    style={{ scale }}
                >
                    {/* Rainbow Glow behind image */}
                    <div className="absolute -inset-20 rainbow-glow opacity-20" />

                    <div className="relative aspect-video w-full rounded-lg overflow-hidden border border-white/10 group">
                        <Image
                            src="/logo-new.png"
                            alt="Like Animation Visual"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            priority
                            unoptimized
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

