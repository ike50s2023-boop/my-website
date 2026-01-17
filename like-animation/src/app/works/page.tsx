"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { motion } from "framer-motion";
import { ArrowUpRight, PlayCircle } from "lucide-react";

// Extended list for the standalone works page
const ALL_WORKS = [
    {
        title: "Skill Connect",
        subtitle: "CtoC プラットフォーム紹介動画",
        description: "複雑なアプリの利用フローを、60秒で「疑似体験」させる。ユーザー同士をつなぐマッチングサービスの仕組みを、UIアニメーションで直感的に表現。",
        tags: ["Service Introduction", "UI Animation", "CVR Up"],
        color: "bg-blue-50",
    },
    {
        title: "ロジカルシンキング研修",
        subtitle: "社内研修・eラーニング教材",
        description: "「やらされる研修」を「見たくなるコンテンツ」へ。抽象的なビジネススキルを、共感を生むストーリーと図解で解説。",
        tags: ["Internal Training", "Educational", "Understanding Up"],
        color: "bg-slate-50",
    },
    {
        title: "採用ブランディング",
        subtitle: "インタビュー動画",
        description: "社員の熱意を伝えるドキュメンタリータッチの映像。働く人の「リアル」を届け、ミスマッチを防ぎます。",
        tags: ["Recruiting", "Branding", "Interview"],
        color: "bg-indigo-50",
    },
    {
        title: "DXソリューション紹介",
        subtitle: "サービス解説アニメーション",
        description: "目に見えないクラウドサービスの価値を、インフォグラフィックで可視化。導入メリットを直感的に伝えます。",
        tags: ["SaaS", "Infographic", "Sales Support"],
        color: "bg-slate-100",
    },
    {
        title: "製造業 安全教育ビデオ",
        subtitle: "マニュアル動画",
        description: "紙のマニュアルでは伝わりにくい作業手順を、3DCGと実写を組み合わせて解説。事故リスクを低減。",
        tags: ["Manual", "Safety", "Industrial"],
        color: "bg-orange-50",
    },
    {
        title: "コーポレートビジョン",
        subtitle: "ブランドムービー",
        description: "企業の長期ビジョンを、エモーショナルなストーリー展開で映像化。インナーブランディングにも活用。",
        tags: ["Branding", "Corporate", "Vision"],
        color: "bg-blue-50",
    },
];

export default function WorksPage() {
    return (
        <main className="min-h-screen bg-black">
            <Header />

            <section className="pt-40 pb-24 px-6 max-w-7xl mx-auto">
                {/* Page Header */}
                <div className="text-center mb-16">
                    <span className="pro-badge mb-4">Portfolio</span>
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        制作事例一覧
                    </h1>
                    <p className="text-white/60 leading-relaxed max-w-2xl mx-auto">
                        多種多様な業界・ジャンルの制作実績がございます。<br className="hidden md:inline" />
                        クライアントのビジネスゴール達成に貢献した事例をご覧ください。
                    </p>
                </div>

                {/* Filter Categories */}
                <div className="flex flex-wrap justify-center gap-2 mb-16">
                    {["All", "Service Intro", "Manual / Training", "Branding", "Recruiting"].map((cat, i) => (
                        <button
                            key={cat}
                            className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${i === 0
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
                    {ALL_WORKS.map((work, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group cursor-pointer flex flex-col h-full"
                        >
                            {/* Thumbnail Area */}
                            <div className={`relative aspect-video rounded-xl overflow-hidden mb-6 border border-white/10 shadow-sm transition-all duration-300 group-hover:shadow-lg ${work.color} flex items-center justify-center`}>
                                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors z-10" />

                                {/* Play Button Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20 transform scale-90 group-hover:scale-100 duration-300">
                                    <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-accent">
                                        <PlayCircle size={24} fill="currentColor" className="text-white fill-accent" />
                                    </div>
                                </div>

                                {/* Placeholder */}
                                <div className="p-4 text-center">
                                    <div className="text-xl font-bold text-slate-300 tracking-widest uppercase">{work.title}</div>
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
                        </motion.div>
                    ))}
                </div>
            </section>

            <CTA />
            <Footer />
        </main>
    );
}
