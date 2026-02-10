"use client";

import Link from "next/link";
import { MoveRight } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-[100] px-6 py-6">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-viz-primary flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-[0_0_15px_rgba(99,102,241,0.5)]">
            <div className="w-4 h-4 border-2 border-white rounded-sm" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-white uppercase">
            Like <span className="text-accent">Animation</span>
          </span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm font-medium text-white/60 hover:text-white transition-colors">Features</Link>
          <Link href="#pricing" className="text-sm font-medium text-white/60 hover:text-white transition-colors">Pricing</Link>
          <Link href="#about" className="text-sm font-medium text-white/60 hover:text-white transition-colors">About</Link>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-sm font-semibold text-white/80 hover:text-white transition-colors px-4 py-2">
            Login
          </button>
          <button className="group relative px-6 py-2.5 bg-viz-primary rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)]">
            <span className="relative z-10 flex items-center gap-2 text-sm font-bold text-white">
              Get Started
              <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-viz-primary to-viz-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>
      </nav>
    </header>
  );
}
