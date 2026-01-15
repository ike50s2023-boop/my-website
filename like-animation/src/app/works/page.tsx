"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { WorkCard, WORKS } from "@/components/Works";
import { motion } from "framer-motion";

const ALL_WORKS = [
    ...WORKS,
    {
        title: "採用ブランディング",
        category: "インタビュー動画",
        description: "社員の熱意を伝えるドキュメンタリータッチの映像",
        color: "var(--pop-primary)",
    },
    {
        title: "展示会用アイキャッチ",
        category: "3DCG",
        description: "ブースで足を止めさせるインパクト重視のループ映像",
        color: "var(--pop-secondary)",
    },
    {
        title: "YouTube広告",
        category: "マンガ動画",
        description: "親しみやすさと訴求力を両立したコミック表現",
        color: "var(--pop-accent)",
    },
    {
        title: "アプリUI紹介",
        category: "モーショングラフィックス",
        description: "スムーズな操作感を伝えるUIアニメーション",
        color: "var(--pop-dark)",
    },
];

export default function WorksPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            <section className="pt-40 pb-24 px-6 max-w-7xl mx-auto">
                {/* Page Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block px-4 py-1 rounded-full bg-pop-primary/10 text-pop-primary text-sm font-black uppercase tracking-widest mb-4">
                        Portfolio
                    </span>
                    <h1 className="text-4xl md:text-7xl font-black text-gray-900 tracking-tighter mt-4">
                        制作事例一覧
                    </h1>
                    <p className="text-gray-500 font-bold mt-8 max-w-2xl mx-auto">
                        多種多様な業界・ジャンルの制作実績がございます。
                        <br className="hidden md:block" />
                        ここに掲載していない実績も多数ございますので、お気軽にお問い合わせください。
                    </p>
                </motion.div>

                {/* Filter Categories */}
                <motion.div
                    className="flex flex-wrap justify-center gap-4 mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {["All", "Motion Graphics", "2D Animation", "3DCG", "Live Action"].map((cat, i) => (
                        <button
                            key={cat}
                            className={`px-6 py-3 rounded-full text-sm font-black tracking-widest uppercase transition-all ${i === 0
                                    ? "bg-pop-dark text-white shadow-lg"
                                    : "bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-900"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>

                {/* Works Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
                    {ALL_WORKS.map((work, index) => (
                        <WorkCard key={`${work.title}-${index}`} work={work} index={index} />
                    ))}
                </div>
            </section>

            <CTA />
            <Footer />
        </main>
    );
}
