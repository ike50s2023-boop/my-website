"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";
import { Calendar, Tag } from "lucide-react";

const NEWS_DATA = [
    {
        date: "2026.01.15",
        category: "サービス",
        title: "新サービス『動画制作コンサルティング』開始のお知らせ",
        excerpt: "この度、Like Animationでは新たに「動画制作コンサルティング」サービスを開始いたしました。動画マーケティング戦略の立案から、制作、運用、効果測定まで、トータルでサポートいたします。初回相談は無料ですので、お気軽にお問い合わせください。",
        slug: "consulting-service-launch"
    },
    {
        date: "2025.12.25",
        category: "お知らせ",
        title: "年末年始休業のお知らせ",
        excerpt: "平素は格別のご高配を賜り、厚く御礼申し上げます。誠に勝手ながら、弊社では下記の期間を年末年始休業とさせていただきます。休業期間:2025年12月29日(月)〜2026年1月5日(月)。休業期間中にいただいたお問い合わせにつきましては、1月6日(火)以降、順次対応させていただきます。",
        slug: "year-end-holiday-notice"
    }
];

export default function NewsPage() {
    return (
        <main className="min-h-screen bg-black">
            <Header />

            <section className="pt-40 pb-24 px-6">
                <div className="max-w-5xl mx-auto">
                    {/* Page Header */}
                    <ScrollReveal className="text-center mb-16">
                        <span className="pro-badge mb-4">News</span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            お知らせ
                        </h1>
                        <p className="text-white/60 leading-relaxed max-w-2xl mx-auto">
                            Like Animationの最新情報やお知らせをご覧いただけます。
                        </p>
                    </ScrollReveal>

                    {/* News List */}
                    <div className="space-y-8">
                        {NEWS_DATA.map((news, index) => (
                            <motion.article
                                key={news.slug}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group"
                            >
                                <div className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/[0.07]">
                                    {/* Meta Info */}
                                    <div className="flex flex-wrap items-center gap-4 mb-4">
                                        <div className="flex items-center gap-2 text-white/60">
                                            <Calendar className="w-4 h-4" />
                                            <time className="text-sm font-medium">{news.date}</time>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Tag className="w-4 h-4 text-pop-primary" />
                                            <span className="text-xs font-bold uppercase tracking-wider text-pop-primary border border-pop-primary/30 px-3 py-1 rounded-full">
                                                {news.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:rainbow-text transition-colors">
                                        {news.title}
                                    </h2>

                                    {/* Excerpt */}
                                    <p className="text-white/70 leading-relaxed">
                                        {news.excerpt}
                                    </p>
                                </div>
                            </motion.article>
                        ))}
                    </div>

                    {/* Empty State Message */}
                    {NEWS_DATA.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-white/40 text-lg">現在、お知らせはありません。</p>
                        </div>
                    )}
                </div>
            </section>

            <CTA />
            <Footer />
        </main>
    );
}
