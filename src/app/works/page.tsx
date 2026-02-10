"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, PlayCircle } from "lucide-react";
import Link from "next/link";
import { ALL_WORKS } from "@/data/works-data";
import { useState, useMemo } from "react";

export default function WorksPage() {
    const [activeCategory, setActiveCategory] = useState("すべて");

    // 全ての作品からユニークなカテゴリーを抽出
    const categories = useMemo(() => {
        const uniqueCategories = Array.from(new Set(ALL_WORKS.map(work => work.category)));
        return ["すべて", ...uniqueCategories];
    }, []);

    // カテゴリーでフィルタリング
    const filteredWorks = useMemo(() => {
        if (activeCategory === "すべて") return ALL_WORKS;
        return ALL_WORKS.filter(work => work.category === activeCategory);
    }, [activeCategory]);

    return (
        <main className="min-h-screen bg-black">
            <Header />

            <section className="pt-40 pb-24 px-6 max-w-7xl mx-auto">
                {/* Page Header */}
                <div className="text-center mb-16">
                    <span className="pro-badge mb-4">Portfolio</span>
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 rainbow-text">
                        制作事例一覧
                    </h1>
                    <p className="text-white/60 leading-relaxed max-w-2xl mx-auto">
                        多種多様な業界・ジャンルの制作実績がございます。<br className="hidden md:inline" />
                        クライアントのビジネスゴール達成に貢献した事例をご覧ください。
                    </p>
                </div>

                {/* Filter Categories */}
                <div className="flex flex-wrap justify-center gap-2 mb-16">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${activeCategory === cat
                                ? "bg-slate-900 text-white border-slate-900"
                                : "bg-white text-slate-500 border-slate-200 hover:border-slate-400 hover:text-slate-700"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Works Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    <AnimatePresence mode="popLayout">
                        {filteredWorks.map((work, index) => (
                            <motion.div
                                layout
                                key={work.slug}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Link
                                    href={`/works/${work.slug}`}
                                    className="block h-full"
                                >
                                    <div className="group cursor-pointer flex flex-col h-full">
                                        {/* Thumbnail Area with Video Preview */}
                                        <div className={`relative aspect-video rounded-2xl overflow-hidden mb-8 transition-all duration-500 group-hover:-translate-y-2 flex items-center justify-center ${index % 3 === 0 ? 'card-glow-teal' : index % 3 === 1 ? 'card-glow-red' : 'card-glow-amber'
                                            }`}>
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />

                                            {/* Video Preview */}
                                            {work.videoSrc ? (
                                                <video
                                                    src={work.videoSrc}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                    autoPlay
                                                    muted
                                                    loop
                                                    playsInline
                                                />
                                            ) : (
                                                <div className="p-4 text-center h-full flex items-center justify-center bg-zinc-900">
                                                    <div className="text-xl font-bold text-white/20 tracking-widest uppercase">{work.title}</div>
                                                </div>
                                            )}

                                            {/* Play Button Overlay */}
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none">
                                                <div className="p-4 rounded-full bg-black/40 backdrop-blur-md border border-white/20 group-hover:scale-110 transition-transform duration-300">
                                                    <PlayCircle size={48} className="text-white" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content Area */}
                                        <div className="flex-grow flex flex-col">
                                            <div className="flex flex-wrap gap-2 mb-3">
                                                {work.tags.slice(0, 2).map((tag) => (
                                                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-slate-400 border border-slate-200 px-2 py-0.5 rounded-sm">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            <h3 className="text-lg font-bold text-white mb-1 group-hover:rainbow-text transition-colors flex items-center gap-2">
                                                {work.title}
                                                <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-white" />
                                            </h3>
                                            <div className="text-xs font-bold text-white/40 mb-3">{work.subtitle}</div>
                                            <p className="text-white/60 leading-relaxed text-sm flex-grow">
                                                {work.description}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </section>

            <CTA />
            <Footer />
        </main>
    );
}
