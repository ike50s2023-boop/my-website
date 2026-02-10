"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowRight } from "lucide-react";
import "./globals.css"; // Ensure styles are loaded

export default function NotFound() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center p-6 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#e91e8c]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#2196f3]/10 rounded-full blur-3xl" />

            <div className="relative z-10 text-center">
                {/* Animated 404 Text */}
                <motion.h1
                    className="text-9xl font-bold mb-4 text-white"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    404
                </motion.h1>

                <motion.h2
                    className="text-2xl md:text-3xl font-bold text-white mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Page Not Found
                </motion.h2>

                <motion.p
                    className="text-gray-400 mb-10 max-w-md mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    お探しのページが見つかりませんでした。<br />
                    URLが間違っているか、ページが移動・削除された可能性があります。
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <Link
                        href="/"
                        className="pop-button inline-flex items-center gap-2"
                    >
                        <Home className="w-5 h-5" />
                        トップページへ戻る
                    </Link>
                </motion.div>
            </div>
        </main>
    );
}
