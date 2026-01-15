"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function FloatingMascot() {
    return (
        <div className="fixed bottom-10 right-10 z-[60] pointer-events-none">
            <motion.div
                className="float-mascot flex flex-col items-center gap-2"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 3, duration: 1 }}
            >
                <div className="relative group pointer-events-auto cursor-pointer">
                    <div className="absolute inset-0 rainbow-glow blur-lg opacity-40 group-hover:opacity-80 transition-opacity" />
                    <div className="relative bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-full">
                        <Heart className="w-6 h-6 text-white group-hover:text-pink-500 transition-colors" />
                    </div>
                </div>
                <span className="text-[10px] text-white/30 font-bold uppercase tracking-widest">Creative Soul</span>
            </motion.div>
        </div>
    );
}
