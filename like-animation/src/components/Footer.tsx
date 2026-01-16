"use client";

import { Mail, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const CONTACT_INFO = {
    email: "contact@like-animation.com",
};

const SOCIAL_LINKS = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
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
        <footer className="bg-slate-900 py-20 border-t border-slate-800 text-slate-400">
            <div className="pro-container">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 gap-y-16 mb-20">
                    {/* Brand column */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <Image src="/logo.png" alt="Like Animation" width={32} height={32} className="w-8 h-8 grayscale invert opacity-80" />
                            <h3 className="text-sm font-bold text-white tracking-widest uppercase">Like Animation</h3>
                        </div>
                        <p className="text-xs font-medium leading-relaxed">
                            ビジネスの課題を「動画」で解決する。<br />
                            BtoB特化型アニメーション制作パートナー。
                        </p>
                    </div>

                    {/* Quick links */}
                    <div className="space-y-6">
                        <h4 className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em]">Navigation</h4>
                        <ul className="space-y-3">
                            {QUICK_LINKS.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={getLink(link.href)}
                                        className="text-slate-400 hover:text-white text-xs font-medium transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-6">
                        <h4 className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em]">Contact</h4>
                        <a href={`mailto:${CONTACT_INFO.email}`} className="text-slate-400 hover:text-white text-xs font-medium transition-colors block">
                            {CONTACT_INFO.email}
                        </a>
                        <p className="text-[10px] text-slate-500">
                            平日 10:00 - 18:00
                        </p>
                    </div>

                    {/* Social */}
                    <div className="space-y-6">
                        <h4 className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em]">Social</h4>
                        <div className="flex gap-6">
                            {SOCIAL_LINKS.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        aria-label={social.label}
                                        className="text-slate-500 hover:text-white transition-colors"
                                    >
                                        <Icon className="w-5 h-5" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-slate-600 text-[10px] font-medium uppercase tracking-widest">
                        © 2026 Like Animation. All Rights Reserved.
                    </p>
                    <div className="flex gap-8">
                        <a href="/privacy" className="text-slate-600 hover:text-slate-400 text-[10px] font-medium uppercase tracking-widest transition-colors">
                            Privacy Policy
                        </a>
                        <a href="/terms" className="text-slate-600 hover:text-slate-400 text-[10px] font-medium uppercase tracking-widest transition-colors">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
