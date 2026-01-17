"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQ_DATA = [
    {
        question: "制作期間はどのくらいかかりますか?",
        answer: "プロジェクトの規模や内容によって異なりますが、一般的なサービス紹介動画(60-90秒)で2-3週間、研修動画やブランドムービーで3-6週間が目安です。お急ぎの場合は特急対応も可能ですので、まずはご相談ください。初回ヒアリング時に詳細なスケジュールをご提示いたします。"
    },
    {
        question: "料金はどのように決まりますか?",
        answer: "動画の長さ、内容の複雑さ、使用する技術(実写、アニメーション、3DCGなど)、修正回数などを総合的に判断してお見積もりいたします。基本的なサービス紹介動画は30万円〜、研修動画は50万円〜、ブランドムービーは100万円〜が目安です。ご予算に応じた最適なプランをご提案いたしますので、お気軽にご相談ください。無料お見積もりも承っております。"
    },
    {
        question: "修正は何回まで対応していただけますか?",
        answer: "基本プランでは、各制作フェーズ(シナリオ、コンテ、初稿、本編集)ごとに2回まで修正対応が含まれています。それ以上の修正が必要な場合は、追加料金にて対応させていただきます。お客様のご要望を初回ヒアリングで詳しくお伺いすることで、修正回数を最小限に抑え、スムーズな制作進行を心がけております。"
    },
    {
        question: "納品形式はどのようなものですか?",
        answer: "MP4形式(H.264コーデック)での納品が基本となります。解像度はフルHD(1920x1080)が標準ですが、4K(3840x2160)やその他の解像度にも対応可能です。YouTubeやSNS向けの最適化、縦型動画(9:16)、正方形(1:1)などのフォーマット変換も承ります。また、ご要望に応じてプロジェクトファイル(After Effects、Premiere Proなど)の納品も可能です。"
    }
];

function FAQItem({ faq, index }: { faq: typeof FAQ_DATA[0]; index: number }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="border-b border-white/10"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex items-start justify-between gap-4 text-left group"
            >
                <div className="flex-grow">
                    <h3 className="text-lg md:text-xl font-bold text-white group-hover:rainbow-text transition-colors">
                        {faq.question}
                    </h3>
                </div>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                >
                    <ChevronDown className="w-6 h-6 text-white/60" />
                </motion.div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="pb-6 pr-12">
                            <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default function FAQPage() {
    return (
        <main className="min-h-screen bg-black">
            <Header />

            <section className="pt-40 pb-24 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Page Header */}
                    <ScrollReveal className="text-center mb-16">
                        <span className="pro-badge mb-4">FAQ</span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            よくあるご質問
                        </h1>
                        <p className="text-white/60 leading-relaxed max-w-2xl mx-auto">
                            お客様からよくいただくご質問をまとめました。<br className="hidden md:inline" />
                            その他のご質問がございましたら、お気軽にお問い合わせください。
                        </p>
                    </ScrollReveal>

                    {/* FAQ List */}
                    <div className="space-y-0">
                        {FAQ_DATA.map((faq, index) => (
                            <FAQItem key={index} faq={faq} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            <CTA />
            <Footer />
        </main>
    );
}
