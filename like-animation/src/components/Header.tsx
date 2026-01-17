"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "制作事例", href: "#works" },
  { label: "サービスの特徴", href: "#features" },
  { label: "料金プラン", href: "#pricing" },
  { label: "制作の流れ", href: "#process" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const getLink = (href: string) => {
    if (isHome) return href;
    return `/${href}`;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="/"
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 2.2 }}
          >
            <div className="relative group">
              <div className="absolute inset-0 rainbow-glow opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              <Image src="/logo.png" alt="Like Animation" width={40} height={40} className="w-10 h-10 grayscale invert relative z-10" />
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-bold tracking-tight rainbow-text">Like Animation</span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {NAV_ITEMS.map((item, index) => (
              <motion.a
                key={item.label}
                href={getLink(item.href)}
                className="text-white/60 hover:text-white transition-colors text-xs font-medium tracking-widest uppercase"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2.2 + (index * 0.1) }}
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href={getLink("#contact")}
              className="px-6 py-2 bg-white text-black text-xs font-bold rounded-sm hover:bg-white/90 transition-colors uppercase tracking-widest"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 2.6 }}
            >
              Contact
            </motion.a>
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
              <a
                key={item.label}
                href={getLink(item.href)}
                className="text-white/70 hover:text-white font-medium py-2 text-sm uppercase tracking-widest"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={getLink("#contact")}
              className="bg-white text-black text-center py-3 rounded-sm font-bold text-sm uppercase tracking-widest mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </motion.nav>
        )}
      </div>
    </header>
  );
}
