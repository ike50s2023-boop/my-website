"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CTA() {
    return (
        <section id="contact" className="py-60 bg-black relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-blue-900/5 blur-[120px] rounded-full -z-0" />

            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <ScrollReveal>
                    <h2 className="text-5xl md:text-8xl font-bold mb-12 text-white tracking-tight leading-[1.1]">
                        アイデアを<br />
                        カタチにしませんか？
                    </h2>

                    <p className="text-white/40 text-xl md:text-2xl font-light mb-20 max-w-2xl mx-auto leading-relaxed">
                        「まだ具体的に決まっていない」でも大丈夫。
                        まずはお気軽にご相談ください。
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <a
                            href="mailto:contact@like-animation.com"
                            className="minimal-button flex items-center justify-center gap-4 text-sm px-12 py-5 uppercase tracking-widest"
                        >
                            <MessageCircle className="w-5 h-5" />
                            Free Consultation
                            <ArrowRight className="w-5 h-5" />
                        </a>
                        <a
                            href="#"
                            className="text-white/40 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors"
                        >
                            Contact us directly
                        </a>
                    </div>

                    {/* Trust signals */}
                    <div className="mt-32 pt-12 border-t border-white/5 flex flex-wrap justify-center gap-12 text-[10px] font-bold uppercase tracking-[0.2em] text-white/20">
                        <div className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                            Free Estimates
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                            Fast Response
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                            Full Support
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
