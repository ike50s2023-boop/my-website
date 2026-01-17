"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { ArrowRight, Mail } from "lucide-react";

export default function CTA() {
    return (
        <section id="contact" className="py-40 relative overflow-hidden bg-black">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-pop-primary/10 via-transparent to-transparent opacity-50" />

            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <ScrollReveal yOffset={60} duration={1.2}>
                    {/* Fix 4: Rainbow Header */}
                    <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-8 rainbow-text">
                        動画活用で、<br /><span className="inline-block whitespace-nowrap">ビジネスを加速させる。</span>
                    </h2>
                    <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
                        まずは「現状の課題」をお聞かせください。<br />
                        具体的な映像イメージがなくても構いません。<br />
                        目的達成のための最適なプランをご提案します。
                    </p>
                    <a
                        href="/contact"
                        className="pop-button inline-flex items-center gap-3 group"
                    >
                        無料相談を予約する
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </a>
                </ScrollReveal>
            </div>
        </section>
    );
}
