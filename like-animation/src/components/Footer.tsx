"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { Mail, Twitter, Instagram, Youtube } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const CONTACT_INFO = {
    email: "contact@like-animation.com",
};

const SOCIAL_LINKS = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
];

const QUICK_LINKS = [
    { label: "制作事例", href: "#works" },
    { label: "サービスの特徴", href: "#features" },
    { label: "料金プラン", href: "#pricing" },
    { label: "制作の流れ", href: "#process" },
];

export default function Footer() {
    const pathname = usePathname();
    const isHome = pathname === "/";

    const getLink = (href: string) => {
        if (isHome) return href;
        return `/${href}`;
    };

    return (
        <footer className="bg-black py-20 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    {/* Brand column */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <Image src="/logo.png" alt="Like Animation" width={32} height={32} className="w-8 h-8 grayscale invert opacity-50" />
                            <h3 className="text-sm font-bold text-white/50 tracking-widest uppercase">Like Animation</h3>
                        </div>
                        <p className="text-white/30 text-xs font-light leading-relaxed">
                            スクリーンの枠を飛び出し、<br />見る人の心に直接届く映像を。
                        </p>
                    </div>

                    {/* Quick links */}
                    <div className="space-y-6">
                        <h4 className="text-white/20 text-[10px] font-bold uppercase tracking-[0.3em]">Navigation</h4>
                        <ul className="space-y-3">
                            {QUICK_LINKS.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={getLink(link.href)}
                                        className="text-white/40 hover:text-white text-xs font-light transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-6">
                        <h4 className="text-white/20 text-[10px] font-bold uppercase tracking-[0.3em]">Contact</h4>
                        <a href={`mailto:${CONTACT_INFO.email}`} className="text-white/40 hover:text-white text-xs font-light transition-colors block">
                            {CONTACT_INFO.email}
                        </a>
                    </div>

                    {/* Social */}
                    <div className="space-y-6">
                        <h4 className="text-white/20 text-[10px] font-bold uppercase tracking-[0.3em]">Social</h4>
                        <div className="flex gap-6">
                            {SOCIAL_LINKS.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        aria-label={social.label}
                                        className="text-white/30 hover:text-white transition-colors"
                                    >
                                        <Icon className="w-4 h-4" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-white/10 text-[10px] font-medium uppercase tracking-widest">
                        © 2026 Like Animation.
                    </p>
                    <div className="flex gap-8">
                        <a href="/privacy" className="text-white/10 hover:text-white/30 text-[10px] font-medium uppercase tracking-widest transition-colors">
                            Privacy Policy
                        </a>
                        <a href="/terms" className="text-white/10 hover:text-white/30 text-[10px] font-medium uppercase tracking-widest transition-colors">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
