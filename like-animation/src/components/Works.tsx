"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, PlayCircle } from "lucide-react";
import Image from "next/image";

const PORTFOLIO_ITEMS = [
    {
        title: "Skill Connect",
        subtitle: "CtoC プラットフォーム紹介動画",
        description: "複雑なアプリの利用フローを、60秒で「疑似体験」させる。ユーザー同士をつなぐマッチングサービスの仕組みを、UIアニメーションで直感的に表現。言葉だけでは伝わりにくい「手軽さ」や「カレンダー連携の利便性」を視覚化し、LPでのアプリ登録率（CVR）向上に貢献しました。",
        tags: ["Service Introduction", "UI Animation", "CVR Up"],
        color: "bg-blue-50",
        image: "/images/work-1.jpg" // Note: Build placeholders if needed or use divs
    },
    {
        title: "ロジカルシンキング研修",
        subtitle: "社内研修・eラーニング教材",
        description: "「やらされる研修」を「見たくなるコンテンツ」へ。抽象的なビジネススキルを、共感を生むストーリーと図解で解説。テキスト教材では定着しづらかった思考法をアニメーション化し、受講者の理解度テスト平均点が20点アップ。現場で「使える」研修へと変革しました。",
        tags: ["Internal Training", "Educational", "Understanding Up"],
        color: "bg-slate-50",
        image: "/images/work-2.jpg"
    }
];

export default function Works() {
    return (
        <section id="works" className="pro-section bg-white relative">
            <div className="pro-container">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="pro-badge mb-4">Portfolio</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                        ビジネス課題を解決した、<br className="md:hidden" />確かな実績。
                    </h2>
                    <p className="text-slate-500 leading-relaxed">
                        単なる映像制作にとどまらず、クライアントのKPI達成にコミットした制作事例の一部をご紹介します。
                    </p>
                </div>

                {/* Portfolio Grid */}
                <div className="grid lg:grid-cols-2 gap-12">
                    {PORTFOLIO_ITEMS.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group cursor-pointer"
                        >
                            {/* Thumbnail Area */}
                            <div className={`relative aspect-video rounded-xl overflow-hidden mb-8 border border-slate-100 shadow-sm transition-all duration-500 group-hover:shadow-xl ${item.color} flex items-center justify-center`}>
                                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors z-10" />

                                {/* Play Button Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20 transform scale-90 group-hover:scale-100 duration-300">
                                    <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center text-accent">
                                        <PlayCircle size={32} fill="currentColor" className="text-white fill-accent" />
                                    </div>
                                </div>

                                {/* Placeholder Visual (Replace with Image when available) */}
                                <div className="text-center p-8 opacity-40 group-hover:opacity-50 transition-opacity">
                                    <div className="text-4xl font-bold text-slate-300 tracking-widest uppercase">{item.title}</div>
                                </div>
                            </div>

                            {/* Content Area */}
                            <div className="pr-4">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {item.tags.map((tag) => (
                                        <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-slate-400 border border-slate-200 px-2 py-1 rounded-sm">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-accent transition-colors flex items-center gap-2">
                                    {item.title}
                                    <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent" />
                                </h3>
                                <div className="text-sm font-bold text-slate-500 mb-4">{item.subtitle}</div>
                                <p className="text-slate-600 leading-relaxed text-sm">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
