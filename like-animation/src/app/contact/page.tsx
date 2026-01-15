"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
    const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus("submitting");

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setFormStatus("success");
    };

    return (
        <main className="min-h-screen bg-white">
            <Header />

            <section className="pt-40 pb-24 px-6 max-w-2xl mx-auto">
                <ScrollReveal className="text-center mb-16">
                    <span className="inline-block px-4 py-1 rounded-full bg-pop-primary/10 text-pop-primary text-sm font-black uppercase tracking-widest mb-4">
                        Contact
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter mt-4">
                        お問い合わせ
                    </h1>
                    <p className="text-gray-500 font-bold mt-6">
                        制作のご依頼、お見積もり、ご相談など、<br />
                        お気軽にお問い合わせください。
                    </p>
                </ScrollReveal>

                {formStatus === "success" ? (
                    <ScrollReveal className="pop-card p-12 text-center border-4 border-green-100">
                        <div className="w-20 h-20 bg-green-100 rounded-[24px] flex items-center justify-center mx-auto mb-8">
                            <CheckCircle2 className="w-10 h-10 text-green-600" />
                        </div>
                        <h3 className="text-3xl font-black text-gray-900 mb-4">送信完了しました</h3>
                        <p className="text-gray-600 font-bold mb-10">
                            お問い合わせありがとうございます。<br />
                            内容を確認次第、担当者よりご連絡させていただきます。
                        </p>
                        <button
                            onClick={() => window.location.reload()}
                            className="text-pop-primary hover:text-pop-secondary transition-colors font-black"
                        >
                            続けて送信する
                        </button>
                    </ScrollReveal>
                ) : (
                    <ScrollReveal delay={0.2} className="pop-card p-8 md:p-12">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* Name */}
                            <div className="space-y-3">
                                <label htmlFor="name" className="text-sm font-black text-gray-900 uppercase tracking-widest">
                                    お名前 <span className="text-pop-secondary">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent focus:border-pop-primary focus:bg-white rounded-2xl text-gray-900 focus:outline-none transition-all font-bold"
                                    placeholder="山田 太郎"
                                />
                            </div>

                            {/* Email */}
                            <div className="space-y-3">
                                <label htmlFor="email" className="text-sm font-black text-gray-900 uppercase tracking-widest">
                                    メールアドレス <span className="text-pop-secondary">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent focus:border-pop-primary focus:bg-white rounded-2xl text-gray-900 focus:outline-none transition-all font-bold"
                                    placeholder="info@example.com"
                                />
                            </div>

                            {/* Company */}
                            <div className="space-y-3">
                                <label htmlFor="company" className="text-sm font-black text-gray-900 uppercase tracking-widest">
                                    会社名
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent focus:border-pop-primary focus:bg-white rounded-2xl text-gray-900 focus:outline-none transition-all font-bold"
                                    placeholder="株式会社〇〇"
                                />
                            </div>

                            {/* Type */}
                            <div className="space-y-3">
                                <label htmlFor="type" className="text-sm font-black text-gray-900 uppercase tracking-widest">
                                    お問い合わせ種別
                                </label>
                                <div className="relative">
                                    <select
                                        id="type"
                                        className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent focus:border-pop-primary focus:bg-white rounded-2xl text-gray-900 focus:outline-none transition-all font-bold appearance-none cursor-pointer"
                                        defaultValue="consultation"
                                    >
                                        <option value="consultation">制作のご相談</option>
                                        <option value="quote">お見積もり依頼</option>
                                        <option value="other">その他</option>
                                    </select>
                                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Message */}
                            <div className="space-y-3">
                                <label htmlFor="message" className="text-sm font-black text-gray-900 uppercase tracking-widest">
                                    詳細・ご相談内容
                                </label>
                                <textarea
                                    id="message"
                                    rows={6}
                                    className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent focus:border-pop-primary focus:bg-white rounded-2xl text-gray-900 focus:outline-none transition-all font-bold resize-none"
                                    placeholder="制作したい動画のイメージや、参考にしたい動画のURLなどございましたらご記入ください。"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={formStatus === "submitting"}
                                className="w-full pop-button flex items-center justify-center gap-3 py-6 text-xl disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {formStatus === "submitting" ? (
                                    <>
                                        <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                                        送信中...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-6 h-6" />
                                        送信する
                                    </>
                                )}
                            </button>
                        </form>
                    </ScrollReveal>
                )}
            </section>

            <Footer />
        </main>
    );
}
