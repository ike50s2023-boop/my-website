"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { ArrowRight, Mail } from "lucide-react";

export default function CTA() {
    return (
        <section id="contact" className="py-40 relative overflow-hidden bg-black">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-pop-primary/10 via-transparent to-transparent opacity-50" />

            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <ScrollReveal>
                    {/* Fix 4: Rainbow Header */}
                    <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-8 leading-tight">
                        Ready to <br />
                        <span className="rainbow-text">Make Waves?</span>
                    </h2>
                    <p className="text-white/40 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto">
                        あなたのアイデアを、最高のアニメーションで形にします。<br />
                        まずはお気軽にご相談ください。
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a href="#contact" className="pop-button w-full sm:w-auto flex items-center justify-center gap-2 group">
                            Start Project
                            <ArrowRight className="transition-transform group-hover:translate-x-1" />
                        </a>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
