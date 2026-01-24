"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { Play, ExternalLink, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { FEATURED_WORKS, WorkData } from "@/data/works-data";
import Link from "next/link";

export function WorkCard({ work, index, onOpen }: { work: WorkData; index: number; onOpen: () => void }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
    const x = useTransform(scrollYProgress, [0, 0.4], [index % 2 === 0 ? -30 : 30, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

    return (
        <motion.div
            className="group relative cursor-pointer"
            style={{ x, opacity, y }}
            onClick={onOpen}
        >
            <div ref={cardRef} className="relative aspect-video w-full overflow-hidden rounded-lg mb-6 transition-colors border border-white/5 bg-white/5 group-hover:border-white/20">
                {/* Rainbow hover border highlight */}
                <div className="absolute inset-0 rainbow-glow opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" />

                <motion.div style={{ scale }} className="w-full h-full relative">
                    <video
                        src={work.videoSrc}
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        onContextMenu={(e) => e.preventDefault()}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-transparent transition-colors duration-500">
                        <Play className="w-12 h-12 transition-all text-white/40 group-hover:scale-125 group-hover:opacity-0" />
                    </div>
                </motion.div>

                {/* Overlay */}
                <div className="absolute inset-0 transition-colors duration-500 bg-black/20 group-hover:bg-black/0" />

                {/* Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 backdrop-blur-md rounded-sm text-[10px] font-bold uppercase tracking-widest bg-black/50 border border-white/10 text-white">
                    {work.category}
                </div>
            </div>

            {/* Content */}
            <div className="space-y-2">
                <h3 className="text-xl font-bold transition-colors text-white group-hover:rainbow-text">
                    {work.title}
                </h3>
                <p className="text-sm font-light leading-relaxed text-white/60">{work.description}</p>
            </div>
        </motion.div>
    );
}

export default function Works() {
    const [activeVideo, setActiveVideo] = useState<string | null>(null);

    return (
        <section id="works" className="py-40 bg-black relative">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section header */}
                <ScrollReveal className="mb-24" xOffset={-100} duration={1.2}>
                    <span className="text-white/30 text-xs font-medium tracking-[0.3em] uppercase block mb-4">
                        Portfolio
                    </span>
                    {/* Fix 4: Rainbow Header */}
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight rainbow-text inline-block">
                        制作事例
                    </h2>
                </ScrollReveal>

                {/* Works grid */}
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 mb-20">
                    {FEATURED_WORKS.map((work, index) => (
                        <WorkCard
                            key={work.title}
                            work={work}
                            index={index}
                            onOpen={() => setActiveVideo(work.videoSrc)}
                        />
                    ))}
                </div>

                {/* View more CTA */}
                <ScrollReveal className="text-center">
                    <Link
                        href="/works"
                        className="minimal-button-outline inline-flex items-center gap-3 group text-white border-white/20 hover:bg-white hover:text-black"
                    >
                        すべての制作事例を見る
                        <ExternalLink className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                </ScrollReveal>
            </div>

            {/* Video Modal */}
            <AnimatePresence>
                {activeVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-black/95 backdrop-blur-xl"
                        onClick={() => setActiveVideo(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-white hover:text-black transition-colors"
                                onClick={() => setActiveVideo(null)}
                            >
                                <X className="w-6 h-6" />
                            </button>
                            <video
                                src={activeVideo}
                                className="w-full h-full"
                                controls
                                autoPlay
                                playsInline
                                controlsList="nodownload"
                                onContextMenu={(e) => e.preventDefault()}
                                disablePictureInPicture
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
