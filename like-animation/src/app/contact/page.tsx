"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Send, CheckCircle2 } from "lucide-react";
import { useState, Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";

function ContactForm() {
    const searchParams = useSearchParams();
    const plan = searchParams.get("plan");
    const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");
    const [defaultMessage, setDefaultMessage] = useState("");

    useEffect(() => {
        if (plan) {
            setDefaultMessage(`${plan}プランについてのお問い合わせ\n\n`);
        }
    }, [plan]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus("submitting");

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setFormStatus("success");
    };

    if (formStatus === "success") {
        return (
            <ScrollReveal className="pop-card p-12 text-center border-4 border-green-100/20 bg-white/5">
                <div className="w-20 h-20 bg-green-100/10 rounded-[24px] flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="text-3xl font-black text-white mb-4">送信完了しました</h3>
                <p className="text-white/60 font-medium mb-10">
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
        );
    }

    return (
        <ScrollReveal delay={0.2} className="relative p-8 md:p-12 bg-white/5 rounded-[32px] border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name */}
                <div className="space-y-3">
                    <label htmlFor="name" className="text-sm font-black text-white/40 uppercase tracking-widest">
                        お名前 <span className="text-pop-secondary">*</span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        required
                        className="w-full px-6 py-4 bg-white/5 border-2 border-white/5 focus:border-pop-primary focus:bg-white/10 rounded-2xl text-white focus:outline-none transition-all font-bold"
                        placeholder="山田 太郎"
                    />
                </div>

                {/* Email */}
                <div className="space-y-3">
                    <label htmlFor="email" className="text-sm font-black text-white/40 uppercase tracking-widest">
                        メールアドレス <span className="text-pop-secondary">*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-6 py-4 bg-white/5 border-2 border-white/5 focus:border-pop-primary focus:bg-white/10 rounded-2xl text-white focus:outline-none transition-all font-bold"
                        placeholder="info@example.com"
                    />
                </div>

                {/* Company */}
                <div className="space-y-3">
                    <label htmlFor="company" className="text-sm font-black text-white/40 uppercase tracking-widest">
                        会社名
                    </label>
                    <input
                        type="text"
                        id="company"
                        className="w-full px-6 py-4 bg-white/5 border-2 border-white/5 focus:border-pop-primary focus:bg-white/10 rounded-2xl text-white focus:outline-none transition-all font-bold"
                        placeholder="株式会社〇〇"
                    />
                </div>

                {/* Type */}
                <div className="space-y-3">
                    <label htmlFor="type" className="text-sm font-black text-white/40 uppercase tracking-widest">
                        お問い合わせ種別
                    </label>
                    <div className="relative">
                        <select
                            id="type"
                            className="w-full px-6 py-4 bg-white/5 border-2 border-white/5 focus:border-pop-primary focus:bg-white/10 rounded-2xl text-white focus:outline-none transition-all font-bold appearance-none cursor-pointer"
                            defaultValue={plan ? "quote" : "consultation"}
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
                    <label htmlFor="message" className="text-sm font-black text-white/40 uppercase tracking-widest">
                        詳細・ご相談内容
                    </label>
                    <textarea
                        id="message"
                        rows={6}
                        className="w-full px-6 py-4 bg-white/5 border-2 border-white/5 focus:border-pop-primary focus:bg-white/10 rounded-2xl text-white focus:outline-none transition-all font-bold resize-none"
                        placeholder="制作したい動画のイメージや、参考にしたい動画のURLなどございましたらご記入ください。"
                        defaultValue={defaultMessage}
                        key={defaultMessage} // Re-render when default message changes
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
    );
}

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-black">
            <Header />

            <section className="pt-40 pb-24 px-6 max-w-2xl mx-auto">
                <ScrollReveal className="text-center mb-16">
                    <span className="inline-block px-4 py-1 rounded-full bg-pop-primary/10 text-pop-primary text-sm font-black uppercase tracking-widest mb-4">
                        Contact
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mt-4">
                        お問い合わせ
                    </h1>
                    <p className="text-white/60 font-medium mt-6">
                        制作のご依頼、お見積もり、ご相談など、<br />
                        お気軽にお問い合わせください。
                    </p>
                </ScrollReveal>

                <Suspense fallback={<div className="text-white text-center">Loading form...</div>}>
                    <ContactForm />
                </Suspense>
            </section>

            <Footer />
        </main >
    );
}
