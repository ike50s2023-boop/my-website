"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ_DATA = [
    {
        question: "制作時間はどのくらいかかりますか?",
        answer: "プロジェクトの規模や内容によって異なりますが、一般的なサービス紹介動画(60-90秒)で3-4週間程度が目安です。"
    },
    {
        question: "料金はどのように決まりますか?",
        answer: "動画の長さ、内容の複雑さ、使用する技術、修正回数などを総合的に判断してお見積もりいたします。"
    }
];

const NOTICE_DATA = [
    {
        title: "制作実績の公開について",
        content: "制作させていただいたものは、実績として公開させていただきます。※公開不可の場合はご相談ください。"
    },
    {
        title: "追加料金について",
        content: "確定後の大幅変更、規定回数以上の修正等は追加料金の対象となります。"
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
                        className="overflow-hidden"
                    >
                        <div className="pb-6 pr-12 text-white/70 leading-relaxed">
                            {faq.answer}
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
                    <ScrollReveal className="text-center mb-16">
                        <span className="pro-badge mb-4">FAQ</span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 rainbow-text">
                            よくあるご質問
                        </h1>
                    </ScrollReveal>

                    <div className="space-y-0 mb-20">
                        {FAQ_DATA.map((faq, index) => (
                            <FAQItem key={index} faq={faq} index={index} />
                        ))}
                    </div>

                    <div className="space-y-8">
                        {NOTICE_DATA.map((notice, index) => (
                            <ScrollReveal key={index} delay={index * 0.1}>
                                <div className="p-8 bg-white/5 rounded-2xl border border-white/10 glass-card">
                                    <h3 className="text-xl font-bold text-white mb-4">
                                        {notice.title}
                                    </h3>
                                    <div className="text-white/60 leading-relaxed">
                                        {notice.content}
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            <CTA />
            <Footer />
        </main>
    );
}
