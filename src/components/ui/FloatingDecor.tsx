"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const OBJECTS = [
    { size: 300, color: "bg-pop-primary/10", blur: "blur-[120px]", delay: 0 },
    { size: 400, color: "bg-pop-secondary/10", blur: "blur-[150px]", delay: 2 },
    { size: 250, color: "bg-blue-500/10", blur: "blur-[100px]", delay: 4 },
    { size: 350, color: "bg-purple-500/10", blur: "blur-[130px]", delay: 1 },
];

export default function FloatingDecor() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {OBJECTS.map((obj, i) => (
                <motion.div
                    key={i}
                    className={`absolute rounded-full ${obj.color} ${obj.blur}`}
                    style={{
                        width: obj.size,
                        height: obj.size,
                        left: `${(i * 30 + 10) % 90}%`,
                        top: `${(i * 25 + 20) % 80}%`,
                    }}
                    animate={{
                        x: [0, 50, -30, 0],
                        y: [0, -60, 40, 0],
                        scale: [1, 1.1, 0.9, 1],
                    }}
                    transition={{
                        duration: 20 + i * 5,
                        repeat: Infinity,
                        delay: obj.delay,
                        ease: "linear",
                    }}
                />
            ))}

            {/* Unframed visual lines */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute top-0 left-1/4 w-px h-full bg-white rotate-12" />
                <div className="absolute top-0 right-1/3 w-px h-full bg-white -rotate-[15deg]" />
            </div>
        </div>
    );
}
