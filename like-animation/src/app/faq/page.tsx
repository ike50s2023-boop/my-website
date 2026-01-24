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
        question: "制作時間はどのくらいかかりますか?",
        answer: "プロジェクトの規模や内容によって異なりますが、一般的なサービス紹介動画(60-90秒)で3-4週間、研修動画やブランドムービーで3-6週間が目安です。お急ぎの場合は特急対応も可能ですので、まずはご相談ください。初回ヒアリング時に詳細なスケジュールをご提示いたします。"
    },
    {
        question: "料金はどのように決まりますか?",
        answer: "動画の長さ、内容の複雑さ、使用する技術(実写、アニメーション、イラスト作成など)、修正回数などを総合的に判断してお見積もりいたします。基本的なサービス紹介動画は15万円〜、研修動画(簡易的な2Dアニメーションテンプレート活用、シンプルな図解)は10万円〜、が目安です。ご予算に応じた最適なプランをご提案いたしますので、お気軽にご相談ください。無料お見積もりも承っております。"
    },
    {
        question: "納品形式はどのようなものですか?",
        answer: "MP4形式(H.264コーデック)での納品が基本となります。解像度はフルHD(1920x1080)が標準ですが、4K(3840x2160)やその他の解像度にも対応可能です。YouTubeやSNS向けの最適化、縦型動画(9:16)、正方形(1:1)などのフォーマット変換も承ります。また、完成した映像データ(レンダリング済みファイル)は納品いたしますが、ソースファイル・プロジェクトデータは、著作権ならびに当方の制作ノウハウに該当するため、基本的にはお渡ししておりません。"
    }
];

const NOTICE_DATA = [
    {
        title: "制作実績の公開について",
        content: "制作させていただいたものは、こちらのHPや各SNSで実績として公開させていただきます。※公開不可の場合はご相談ください。その際、追加で制作費用の20%（追加オプション費用除く）が別途料金として発生いたしますが、ご了承ください。"
    },
    {
        title: "追加料金について",
        content: "追加料金対象: 確定後の大幅変更、3回目以降の修正、納品後の再編集。\nスケジュール影響: 追加作業発生時は、納期変更をお願いする場合があります。\n\n例）\n「大幅な変更」の目例：コンセプトの変更、ストーリー構成の組み替え、想定外の尺・シーン追加、確定原稿の全面的な書き換え 等\n\n「修正」の範囲例：色調・フォントの微調整、テロップ文言の修正、既存素材内での短いシーンの差し替え、ナレーションの一部言い回し修正 等"
    },
    {
        title: "知的財産権について",
        content: "契約の成立如何に関係なく、こちらが制作・提示した成果物、企画、デザイン案などに関する全ての知的財産権(翻案権・二次的著作物利用権を含む)は、事前の書面による合意なく、他者へ譲渡または使用を許諾しておりません。"
    },
    {
        title: "キャンセルについて",
        content: "ご契約締結前、または制作途中でのキャンセルにつきましては、それまでに進行した作業および投入したリソースに基づき、実費相当額をご請求させていただきます。"
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
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 rainbow-text">
                            よくあるご質問
                        </h1>
                        <p className="text-white/60 leading-relaxed max-w-2xl mx-auto">
                            お客様からよくいただくご質問をまとめました。<br className="hidden md:inline" />
                            その他のご質問がございましたら、お気軽にお問い合わせください。
                        </p>
                    </ScrollReveal>

                    {/* FAQ List */}
                    <div className="space-y-0 mb-20">
                        {FAQ_DATA.map((faq, index) => (
                            <FAQItem key={index} faq={faq} index={index} />
                        ))}
                    </div>

                    {/* Divider */}
                    <div className="relative mb-20">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-white/20"></div>
                        </div>
                        <div className="relative flex justify-center">
                            <span className="bg-black px-6 text-white/40 text-sm font-bold uppercase tracking-wider">注意事項</span>
                        </div>
                    </div>

                    {/* Notice Section */}
                    <div className="space-y-8">
                        {NOTICE_DATA.map((notice, index) => (
                            <ScrollReveal key={index} delay={index * 0.1}>
                                <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                        <span className="w-2 h-2 rounded-full bg-pop-primary"></span>
                                        {notice.title}
                                    </h3>
                                    <div className="text-white/70 leading-relaxed whitespace-pre-line">
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
