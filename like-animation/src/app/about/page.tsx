"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";
import { Lightbulb, Target, Layout, PenTool, Sparkles, User, MessageCircle, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const PRINCIPLES = [
    {
        icon: Sparkles,
        title: "心を掴む「世界観」の構築",
        description: "サービスのコンセプトを、視聴者が「面白そう！」と直感的に感じる魅力的な世界観に翻訳します。ブランドの価値を物語として伝えます。",
        color: "from-pop-primary/20"
    },
    {
        icon: Target,
        title: "直感的に「伝わる」情報の視覚化",
        description: "複雑な情報も、アニメーションやインフォグラフィックを用いて直感的に理解できる形に変換。整理された視覚情報で訴求力を高めます。",
        color: "from-pop-secondary/20"
    },
    {
        icon: Layout,
        title: "視聴者を「飽きさせない」構成",
        description: "冒頭の引き込みから意外性のある演出まで。計算された緩急で視聴者の集中力を最後まで維持する「物語」として設計します。",
        color: "from-pop-orange/20"
    }
];

const CASE_STUDIES = [
    {
        id: "morning-quest",
        title: "制作事例 1：『モーニングクエスト』",
        subtitle: "面倒な早起きを、楽しい冒険に変える",
        youtube: "https://youtu.be/gnvmyrNAyRw",
        points: [
            {
                label: "世界観の構築",
                text: "「退屈な朝を冒険に変える」コンセプト。コイン獲得やレベルアップ演出でワクワク感を創出。",
                image: "/assets/notion/chrome-capture-2025-6-27.gif"
            },
            {
                label: "情報の視覚化",
                text: "AI機能をキャラクター化。生活改善効果をグラフアニメーションで見える化。",
                image: "/assets/notion/chrome-capture-2025-6-30.gif"
            },
            {
                label: "飽きさせない構成",
                text: "目覚まし時計がキャラに変身する「意外性」で一気に引き込み、集中を維持。",
                image: "/assets/notion/chrome-capture-2025-6-27_(2).gif"
            }
        ]
    },
    {
        id: "skill-connect",
        title: "制作事例 2：『Skill Connect』",
        subtitle: "「教えたい」と「学びたい」を接続するプラットフォーム",
        youtube: "https://youtu.be/_Kj83XnVRG8",
        points: [
            {
                label: "ビジュアル化の力",
                text: "地球を挟んだ宇宙の対比で、抽象的な「分断」と「接続」を一目で表現。",
                image: "/assets/notion/chrome-capture-2025-8-24.gif"
            },
            {
                label: "UI擬似体験",
                text: "スマホUIが動く様子を見せることで、利用時の具体的なイメージを醸成。",
                image: "/assets/notion/chrome-capture-2025-8-24_(1).gif"
            },
            {
                label: "理想の未来",
                text: "「スキルが収入に変わる」期待感を、ストーリー仕立ての構成で最大化。",
                image: "/assets/notion/chrome-capture-2025-8-24_(3).gif"
            }
        ]
    }
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-black">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-40 pb-24 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1501780392773-287d506245a5?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb"
                        alt="Hero Cover"
                        fill
                        className="object-cover opacity-20 blur-sm"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <ScrollReveal>
                        <span className="pro-badge mb-6">🎥 Proposal & Vision</span>
                        <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tighter rainbow-text">
                            視聴者の心を動かす<br className="hidden md:block" />映像制作のご提案
                        </h1>
                        <p className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                            初めまして！動画クリエイターの<strong className="text-white">高木 明</strong>です。<br />
                            単に「動く説明書」を作るのではなく、クライアントの課題を解決し、<br className="hidden md:block" />
                            視聴者がファンになるような「記憶に残る映像体験」をデザインします。
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* Three Principles */}
            <section className="py-24 bg-black relative">
                <div className="max-w-7xl mx-auto px-6">
                    <ScrollReveal className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                            制作で最も大切にする３つのこと
                        </h2>
                        <div className="w-20 h-1 bg-pop-primary mx-auto" />
                    </ScrollReveal>

                    <div className="grid md:grid-cols-3 gap-8">
                        {PRINCIPLES.map((principle, idx) => (
                            <ScrollReveal key={idx} delay={idx * 0.2}>
                                <div className={`h-full p-8 rounded-3xl bg-gradient-to-br ${principle.color} to-white/5 border border-white/10 glass-card`}>
                                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                                        <principle.icon className="text-white w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4">{principle.title}</h3>
                                    <p className="text-white/60 leading-relaxed text-sm">{principle.description}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-black/50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <ScrollReveal xOffset={-50}>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                                企画をカタチにする<br />丁寧な設計プロセス
                            </h2>
                            <p className="text-white/60 leading-relaxed mb-8">
                                良い映像は、良い設計図から生まれます。本格的なアニメーション制作の前に、ラフコンテと絵コンテを通じて、完成イメージを完璧に共有します。
                            </p>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">ラフコンテ：アイデアの骨子づくり</h4>
                                        <p className="text-white/40 text-sm">物語のテンポや構造を固める初期段階。</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">絵コンテ：完成形の設計図</h4>
                                        <p className="text-white/40 text-sm">Illustratorで表情やカメラワークまで詳細に指定。</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal xOffset={50}>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-4">
                                    <div className="rounded-2xl overflow-hidden border border-white/10 h-64 relative">
                                        <Image src="/assets/notion/2025-06-27_06h36_19.png" alt="Rough Storyboard" fill className="object-cover" />
                                        <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/60 backdrop-blur-md rounded text-[10px] text-white">ROUGH</div>
                                    </div>
                                    <div className="rounded-2xl overflow-hidden border border-white/10 h-40 relative">
                                        <div className="absolute inset-0 bg-pop-primary/10" />
                                        <PenTool className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/20 w-12 h-12" />
                                    </div>
                                </div>
                                <div className="pt-12 space-y-4">
                                    <div className="rounded-2xl overflow-hidden border border-white/10 h-40 relative">
                                        <div className="absolute inset-0 bg-pop-secondary/10" />
                                        <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/20 w-12 h-12" />
                                    </div>
                                    <div className="rounded-2xl overflow-hidden border border-white/10 h-64 relative">
                                        <Image src="/assets/notion/2025-06-27_06h37_01.png" alt="Detailed Storyboard" fill className="object-cover" />
                                        <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/60 backdrop-blur-md rounded text-[10px] text-white">DETAILED</div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Case Studies Deep Dive */}
            {CASE_STUDIES.map((study, idx) => (
                <section key={study.id} className={`py-40 ${idx % 2 === 0 ? 'bg-black' : 'bg-slate-900/20'}`}>
                    <div className="max-w-7xl mx-auto px-6">
                        <ScrollReveal className="mb-20">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{study.title}</h2>
                            <p className="text-pop-secondary font-medium tracking-widest uppercase text-sm mb-12">{study.subtitle}</p>

                            <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 relative group">
                                <Link href={study.youtube} target="_blank" className="absolute inset-0 z-10 flex items-center justify-center">
                                    <div className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-500">
                                        <Youtube className="text-white w-10 h-10" />
                                    </div>
                                </Link>
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
                                <div className="flex h-full items-center justify-center bg-zinc-900 text-white/20 text-xl italic font-serif">
                                    {study.title} Preview
                                </div>
                            </div>
                        </ScrollReveal>

                        <div className="grid md:grid-cols-3 gap-8 mt-24">
                            {study.points.map((point, pIdx) => (
                                <ScrollReveal key={pIdx} delay={pIdx * 0.1}>
                                    <div className="rounded-2xl overflow-hidden bg-white/5 border border-white/5 hover:border-white/20 transition-all flex flex-col h-full">
                                        <div className="aspect-video relative overflow-hidden">
                                            <Image src={point.image} alt={point.label} fill className="object-cover transition-transform duration-700 hover:scale-110" />
                                        </div>
                                        <div className="p-6">
                                            <h4 className="text-pop-primary text-[10px] font-black uppercase tracking-[0.3em] mb-4">Point {pIdx + 1}: {point.label}</h4>
                                            <p className="text-white/70 text-sm leading-relaxed">{point.text}</p>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>
            ))}

            {/* Profile Section */}
            <section className="py-32 bg-black relative">
                <div className="max-w-4xl mx-auto px-6">
                    <ScrollReveal>
                        <div className="p-12 rounded-[40px] bg-gradient-to-br from-white/10 to-transparent border border-white/10 glass-card relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-pop-primary/10 rounded-full blur-[100px] -mr-32 -mt-32" />

                            <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
                                <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-white/20 relative flex-shrink-0">
                                    <div className="absolute inset-0 bg-zinc-800 flex items-center justify-center">
                                        <User className="text-white/20 w-16 h-16" />
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold text-white mb-2">高木 明 <span className="text-sm font-light text-white/40 ml-2">Akira Takagi</span></h2>
                                    <p className="text-pop-secondary text-sm font-black uppercase tracking-widest mb-6">Video Creator / Motion Designer</p>

                                    <div className="space-y-6 text-white/60 leading-relaxed italic border-l-2 border-white/10 pl-6">
                                        <p>
                                            2023年4月に動画制作の世界へ。2024年7月、ある映像作品に心を奪われ、After Effectsが持つ表現の無限の可能性に魅了されました。以来、自らの手で心動かす映像を創り出すことに情熱を注いでいます。
                                        </p>
                                        <p className="font-bold text-white not-italic">
                                            「創造の旅とは、終わりなき学びの連続である」
                                        </p>
                                        <p className="text-xs">
                                            好きなこと：After Effects / アニメ鑑賞 / ギター演奏
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <CTA />
            <Footer />
        </main>
    );
}
