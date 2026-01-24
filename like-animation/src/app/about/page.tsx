"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Target, Layout, PenTool, Sparkles, User, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
        title: "モーニングクエスト",
        service: "早起き支援アプリ",
        description: "「退屈な朝を、楽しい冒険に変える」早起き支援アプリ。AIによる最適な起床サポートや、早朝の活動がポイントになるゲーム要素で、利用者の生活習慣改善を後押しします。",
        videoUrl: "https://www.youtube.com/embed/gnvmyrNAyRw",
        details: [
            {
                title: "こだわり１：世界観の構築",
                challenge: "「早起き」という義務的で面倒なイメージを、ポジティブなものに変えたい。",
                solution: "「退屈な朝を、楽しい冒険に変える」というコンセプトを設計。歩くとコインが貯まったり、レベルアップしたりといったゲーム風の演出を加え、ワクワクする世界観を構築しました。",
                gif: "/assets/notion/chrome-capture-2025-6-27.gif"
            },
            {
                title: "こだわり２：情報の視覚化",
                challenge: "「AIが眠りの浅いタイミングで起こす」という、目に見えない機能を分かりやすく伝えたい。",
                solution: "マスコットが杖から「AI」を召喚するアニメーションで、機能をキャラクター化。活用記録グラフのアニメーションにより、利用後のメリットを具体的にイメージできるよう工夫しました。",
                gif: "/assets/notion/chrome-capture-2025-6-30.gif"
            },
            {
                title: "こだわり３：飽きさせない構成",
                challenge: "単調な機能説明の羅列になり、途中で離脱されるのを防ぎたい。",
                solution: "主人公が二度寝する共感シーンの直後、目覚まし時計がキャラクターに変身するという「意外性」で一気に視聴者を引き込み、最後まで物語への期待感を維持させました。",
                gif: "/assets/notion/chrome-capture-2025-6-27_(2).gif"
            }
        ]
    },
    {
        id: "skill-connect",
        title: "Skill Connect",
        service: "スキルシェアPF",
        description: "「教えたい人」と「学びたい人」をつなぐ、オンライン・スキルシェア・プラットフォーム。学びたい人の「時間・場所・費用」の悩みと、教えたい人の「スキル活用の機会」の悩みを同時に解決します。",
        videoUrl: "https://www.youtube.com/embed/_Kj83XnVRG8",
        details: [
            {
                title: "こだわり１：世界観の構築",
                challenge: "「学びたい人」と「教えたい人」の、まだ出会えていない\"もどかしい距離感\"をどう視覚的に表現するか。",
                solution: "地球を挟んで男女が宇宙に浮かんでいるというシンボリックなシーンから開始。物理的な距離や機会の損失といった抽象的な課題を、一目で理解できる視覚言語に翻訳しました。",
                gif: "/assets/notion/chrome-capture-2025-8-24.gif"
            },
            {
                title: "こだわり２：情報の視覚化",
                challenge: "ユーザーが抱える複数の悩みや、サービスの多機能さを、混乱させずに分かりやすく伝えること。",
                solution: "悩みをアイコン付きのキーワードとしてキャラクターの周りに浮かべるインフォグラフィックで表現。また、スマホやPCのUIが実際に動く様子を見せることで、利用の具体的イメージを掴めるようにしました。",
                gif: "/assets/notion/chrome-capture-2025-8-24_(1).gif"
            },
            {
                title: "こだわり３：飽きさせない構成",
                challenge: "サービス紹介にありがちな、単調な機能説明の羅列を避けたい。",
                solution: "「課題提起 → 解決策の提示 → 具体的な利用フロー → 未来の展望」という王道のストーリー構成を採用。「教えたい/学びたい」両者の視点から期待感を醸成しました。",
                gif: "/assets/notion/chrome-capture-2025-8-24_(3).gif"
            }
        ]
    }
];

function CaseStudyDetail({ detail }: { detail: any }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-white/10 rounded-2xl overflow-hidden glass-card mb-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
            >
                <div>
                    <h4 className="text-white font-bold text-lg">{detail.title}</h4>
                </div>
                <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                    <ChevronDown className="text-white/40" />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="p-6 pt-0 border-t border-white/5">
                            <div className="grid md:grid-cols-2 gap-8 mt-4">
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-pop-secondary text-xs font-bold uppercase tracking-widest mb-1">Challenge</p>
                                        <p className="text-white/80 text-sm">{detail.challenge}</p>
                                    </div>
                                    <div>
                                        <p className="text-pop-primary text-xs font-bold uppercase tracking-widest mb-1">Solution</p>
                                        <p className="text-white/60 text-sm leading-relaxed">{detail.solution}</p>
                                    </div>
                                </div>
                                <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl relative aspect-video">
                                    <Image src={detail.gif} alt={detail.title} fill className="object-cover" unoptimized />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

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
                                <div className={`h-full p-8 rounded-2xl bg-gradient-to-br ${principle.color} to-white/5 border border-white/10 glass-card`}>
                                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
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
            <section className="py-24 bg-black/50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <ScrollReveal xOffset={-50}>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                                企画をカタチにする<br />丁寧な設計プロセス
                            </h2>
                            <p className="text-white/60 leading-relaxed mb-8">
                                良い映像は、良い設計図から生まれます。本格的なアニメーション制作の前に、ラフコンテと絵コンテを通じて、完成イメージを完璧に共有します。
                            </p>
                            <div className="space-y-4">
                                <div className="flex gap-4 items-start">
                                    <div className="w-8 h-8 rounded-full bg-pop-primary/20 flex items-center justify-center flex-shrink-0 text-white font-bold text-xs ring-1 ring-pop-primary/40">1</div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">ラフコンテ</h4>
                                        <p className="text-white/40 text-sm">全体の流れ、構造、テンポを最優先で固めます。</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="w-8 h-8 rounded-full bg-pop-secondary/20 flex items-center justify-center flex-shrink-0 text-white font-bold text-xs ring-1 ring-pop-secondary/40">2</div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">絵コンテ</h4>
                                        <p className="text-white/40 text-sm">表情、配色、カメラワークまで詳細に設計し、品質を保証します。</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal xOffset={50}>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-4">
                                    <div className="rounded-2xl overflow-hidden border border-white/10 h-64 relative group">
                                        <Image src="/assets/notion/2025-06-27_06h36_19.png" alt="Rough Storyboard" fill className="object-cover transition-transform group-hover:scale-105" />
                                        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black to-transparent">
                                            <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Step 01 / Rough</span>
                                        </div>
                                    </div>
                                    <div className="rounded-2xl overflow-hidden border border-white/10 h-40 relative flex items-center justify-center bg-pop-primary/10">
                                        <PenTool className="text-white/20 w-12 h-12" />
                                    </div>
                                </div>
                                <div className="pt-12 space-y-4">
                                    <div className="rounded-2xl overflow-hidden border border-white/10 h-40 relative flex items-center justify-center bg-pop-secondary/10">
                                        <Sparkles className="text-white/20 w-12 h-12" />
                                    </div>
                                    <div className="rounded-2xl overflow-hidden border border-white/10 h-64 relative group">
                                        <Image src="/assets/notion/2025-06-27_06h37_01.png" alt="Detailed Storyboard" fill className="object-cover transition-transform group-hover:scale-105" />
                                        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black to-transparent">
                                            <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Step 02 / Detailed</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Case Studies Deep Dive */}
            <section className="py-32 bg-black">
                <div className="max-w-7xl mx-auto px-6">
                    <ScrollReveal className="text-center mb-24">
                        <span className="pro-badge mb-4">Deep Dive</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">制作における「３つの工夫」</h2>
                        <p className="text-white/40 max-w-2xl mx-auto">制作プロセスの裏側。課題に対する具体的な「解決策」と「こだわり」をご紹介します。</p>
                    </ScrollReveal>

                    <div className="space-y-32">
                        {CASE_STUDIES.map((study, idx) => (
                            <div key={study.id} className={`grid lg:grid-cols-2 gap-16 items-start ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                                <ScrollReveal xOffset={idx % 2 === 0 ? -50 : 50} className={idx % 2 !== 0 ? 'lg:order-2' : ''}>
                                    <div className="space-y-8">
                                        <div>
                                            <div className="flex items-center gap-3 mb-4">
                                                <span className="px-3 py-1 bg-white/10 border border-white/10 rounded-full text-[10px] font-bold text-pop-secondary uppercase tracking-widest">Case {idx + 1}</span>
                                                <h3 className="text-2xl md:text-3xl font-bold text-white">{study.title}</h3>
                                            </div>
                                            <p className="text-white/60 leading-relaxed mb-6">{study.description}</p>
                                        </div>

                                        <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                                            <iframe
                                                src={study.videoUrl}
                                                title={study.title}
                                                className="w-full h-full"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                    </div>
                                </ScrollReveal>

                                <ScrollReveal xOffset={idx % 2 === 0 ? 50 : -50} className={idx % 2 !== 0 ? 'lg:order-1' : ''}>
                                    <div className="pt-4 lg:pt-12">
                                        {study.details.map((detail, dIdx) => (
                                            <CaseStudyDetail key={dIdx} detail={detail} />
                                        ))}
                                    </div>
                                </ScrollReveal>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Profile Section */}
            <section className="py-32 bg-black relative">
                <div className="max-w-4xl mx-auto px-6">
                    <ScrollReveal>
                        <div className="p-12 rounded-[40px] bg-gradient-to-br from-white/10 to-transparent border border-white/10 glass-card relative overflow-hidden">
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
                                            2023年4月に動画制作の世界へ。<br />
                                            2024年7月、ある映像作品に心を奪われ、After Effectsが持つ表現の無限の可能性に魅了されました。以来、自らの手で心動かす映像を創り出すことに情熱を注いでいます。
                                        </p>
                                        <div className="pt-4 not-italic">
                                            <p className="text-xs text-white/40 font-bold uppercase tracking-widest mb-2">好きな言葉</p>
                                            <p className="text-white text-lg font-medium">「創造の旅とは、終わりなき学びの連続である」</p>
                                            <p className="text-sm text-white/40 mt-2">学び続ける限り、表現の限界は存在しないと信じています。昨日よりも今日、今日よりも明日、より良いクリエイティブを追求し続けます。</p>
                                        </div>
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
