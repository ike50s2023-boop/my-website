"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
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
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const getLink = (href: string) => {
    if (isHome) return href;
    return `/${href}`;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled ? "bg-white/90 backdrop-blur-md border-slate-200 py-4 shadow-sm" : "bg-transparent border-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="/"
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <Image
                src="/logo.png"
                alt="Like Animation"
                width={40}
                height={40}
                className="w-8 h-8 md:w-10 md:h-10 object-contain" // Presuming logo works on white, or needs invert removed
              />
            </div>
            <div className="hidden sm:block">
              <span className={`text-lg font-bold tracking-tight transition-colors ${isScrolled ? "text-slate-900" : "text-slate-900"}`}>
                Like Animation
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {NAV_ITEMS.map((item, index) => (
              <motion.a
                key={item.label}
                href={getLink(item.href)}
                className={`text-sm font-medium transition-colors hover:text-accent ${isScrolled ? "text-slate-600" : "text-slate-700"}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href={getLink("#contact")}
              className="px-6 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-lg hover:bg-slate-800 transition-all hover:shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              お問い合わせ
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            className="md:hidden mt-4 bg-white border border-slate-100 p-6 rounded-xl shadow-xl flex flex-col gap-4 absolute left-6 right-6 top-full"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={getLink(item.href)}
                className="text-slate-600 hover:text-accent font-bold py-2 text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={getLink("#contact")}
              className="bg-accent text-white text-center py-3 rounded-lg font-bold text-sm mt-2 shadow-md hover:bg-accent/90"
              onClick={() => setIsMenuOpen(false)}
            >
              無料相談はこちら
            </a>
          </motion.nav>
        )}
      </div>
    </header>
  );
}
