"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NAV_ITEMS = [
  { label: "制作事例", href: "#works" },
  { label: "サービスの特徴", href: "#features" },
  { label: "料金プラン", href: "#pricing" },
  { label: "制作の流れ", href: "#process" },
  { label: "制作のこだわり", href: "/about" },
  { label: "よくあるご質問", href: "/faq" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const getLink = (href: string) => {
    if (href.startsWith("#")) {
      return isHome ? href : `/${href}`;
    }
    return href;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <div className="relative group">
              <div className="absolute inset-0 rainbow-glow opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              <Image src="/logo.png" alt="Like Animation" width={40} height={40} className="w-10 h-10 relative z-10" />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-lg font-bold tracking-tight rainbow-text leading-none">Like Animation</span>
              <span className="text-[0.6rem] font-bold text-white/50 tracking-[0.2em] leading-none mt-1 normal-case">Motion & Creativity Unframed</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {NAV_ITEMS.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2.2 + (index * 0.1) }}
              >
                <Link
                  href={getLink(item.href)}
                  className={
                    item.href.startsWith("/")
                      ? "text-white/60 hover:text-white transition-colors text-xs font-medium tracking-widest uppercase underline underline-offset-4"
                      : "text-white/60 hover:text-white transition-colors text-xs font-medium tracking-widest uppercase"
                  }
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <Link
              href={getLink("#contact")}
              className="px-6 py-2 bg-white text-black text-xs font-bold rounded-sm hover:bg-white/90 transition-colors uppercase tracking-widest"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            className="md:hidden mt-4 pb-4 flex flex-col gap-4 bg-black border border-white/10 p-6 rounded-lg"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={getLink(item.href)}
                className="text-white/70 hover:text-white font-medium py-2 text-sm uppercase tracking-widest"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={getLink("#contact")}
              className="bg-white text-black text-center py-3 rounded-sm font-bold text-sm uppercase tracking-widest mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </motion.nav>
        )}
      </div>
    </header>
  );
}
