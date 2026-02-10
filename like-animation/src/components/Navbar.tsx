"use client";

import Link from "next/link";
import { Zap } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <div className="flex items-center justify-between w-full max-w-6xl px-6 py-3 glass-panel">
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="p-1.5 rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 group-hover:from-primary/50 group-hover:to-accent/50 transition-all duration-300 border border-white/10">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-display font-bold tracking-tight text-glow uppercase">
            Like Animation<span className="text-accent">.</span><span className="text-[8px] opacity-30 ml-1">V2</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-10 text-[13px] font-bold uppercase tracking-widest text-muted">
          <Link href="#features" className="hover:text-accent transition-colors">Features</Link>
          <Link href="#how-it-works" className="hover:text-accent transition-colors">How it Works</Link>
          <Link href="/about" className="hover:text-accent transition-colors">About</Link>
        </div>

        <button className="relative px-6 py-2.5 text-[13px] font-bold uppercase tracking-wider rounded-full bg-primary text-white overflow-hidden group hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(99,102,241,0.3)]">
          <span className="relative z-10">Get Started</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
        </button>
      </div>
    </nav>
  );
}
