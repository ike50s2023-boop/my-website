"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { CheckCircle2, Lightbulb, Wrench, TrendingUp } from "lucide-react";
import Link from "next/link";
import { WorkData } from "@/data/works-data";

export default function WorkDetailPageContent({ work }: { work: WorkData }) {
    return (
        <main className="min-h-screen bg-black">
            <Header />

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <ScrollReveal>
                        <span className="pro-badge mb-4">{work.category}</span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 rainbow-text">
                            {work.title}
                        </h1>
                        <p className="text-xl text-white/60 leading-relaxed mb-8">
                            {work.subtitle}
                        </p>
                    </ScrollReveal>

                    {/* Video Embed */}
                    <ScrollReveal delay={0.2}>
                        <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl mb-12">
                            <video
                                src={work.videoSrc}
                                className="w-full h-full object-cover"
                                controls
                                playsInline
                                controlsList="nodownload"
                                onContextMenu={(e) => e.preventDefault()}
                                disablePictureInPicture
                            />
                        </div>
                    </ScrollReveal>

                    {/* Project Info */}
                    <ScrollReveal delay={0.3}>
                        <div className="grid md:grid-cols-3 gap-8 mb-20">
                            {work.client && (
                                <div>
                                    <div className="text-white/40 text-sm font-bold uppercase tracking-wider mb-2">
                                        クライアント
                                    </div>
                                    <div className="text-white text-lg">{work.client}</div>
                                </div>
                            )}
                            {work.duration && (
                                <div>
                                    <div className="text-white/40 text-sm font-bold uppercase tracking-wider mb-2">
                                        制作期間
                                    </div>
                                    <div className="text-white text-lg">{work.duration}</div>
                                </div>
                            )}
                            <div>
                                <div className="text-white/40 text-sm font-bold uppercase tracking-wider mb-2">
                                    カテゴリー
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {work.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs font-bold uppercase tracking-wider text-white/60 border border-white/20 px-2 py-1 rounded-sm"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Overview Section */}
            <section className="py-20 px-6 bg-white/5">
                <div className="max-w-5xl mx-auto">
                    <ScrollReveal>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-3">
                            <Lightbulb className="w-8 h-8 text-pop-primary" />
                            プロジェクト概要
                        </h2>
                        <p className="text-lg text-white/70 leading-relaxed">{work.overview}</p>
                    </ScrollReveal>
                </div>
            </section>

            {/* Challenges Section */}
            <section className="py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <ScrollReveal>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-3">
                            <CheckCircle2 className="w-8 h-8 text-pop-secondary" />
                            課題
                        </h2>
                        <div className="space-y-4">
                            {work.challenges.map((challenge, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-4 p-6 bg-white/5 rounded-lg border border-white/10"
                                >
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-pop-secondary/20 flex items-center justify-center text-pop-secondary font-bold">
                                        {index + 1}
                                    </div>
                                    <p className="text-white/70 leading-relaxed">{challenge}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Solutions Section */}
            <section className="py-20 px-6 bg-white/5">
                <div className="max-w-5xl mx-auto">
                    <ScrollReveal>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-3">
                            <Wrench className="w-8 h-8 text-pop-accent" />
                            解決策
                        </h2>
                        <div className="space-y-4">
                            {work.solutions.map((solution, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-4 p-6 bg-white/5 rounded-lg border border-white/10"
                                >
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-pop-accent/20 flex items-center justify-center text-pop-accent font-bold">
                                        {index + 1}
                                    </div>
                                    <p className="text-white/70 leading-relaxed">{solution}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Technologies Section */}
            <section className="py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <ScrollReveal>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">使用技術</h2>
                        <div className="flex flex-wrap gap-3">
                            {work.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-6 py-3 bg-white/10 text-white font-bold rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Results Section */}
            {work.results && work.results.length > 0 && (
                <section className="py-20 px-6 bg-white/5">
                    <div className="max-w-5xl mx-auto">
                        <ScrollReveal>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-3">
                                <TrendingUp className="w-8 h-8 text-pop-primary" />
                                成果
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {work.results.map((result, index) => (
                                    <div
                                        key={index}
                                        className="p-6 bg-gradient-to-br from-pop-primary/10 to-pop-secondary/10 rounded-lg border border-white/10"
                                    >
                                        <p className="text-white/80 leading-relaxed">{result}</p>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>
                    </div>
                </section>
            )}

            {/* Navigation */}
            <section className="py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <ScrollReveal>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/works"
                                className="minimal-button-outline text-white border-white/20 hover:bg-white hover:text-black text-center"
                            >
                                他の事例を見る
                            </Link>
                            <Link
                                href="/contact"
                                className="pop-button text-center"
                            >
                                無料相談はこちら
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <Footer />
        </main>
    );
}
