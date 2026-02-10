"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function AiCore() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth out mouse movement
    const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
    const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

    const rotateX = useTransform(springY, [-300, 300], [10, -10]);
    const rotateY = useTransform(springX, [-300, 300], [-10, 10]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const moveX = clientX - window.innerWidth / 2;
            const moveY = clientY - window.innerHeight / 2;
            mouseX.set(moveX);
            mouseY.set(moveY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <motion.div
            style={{ rotateX, rotateY, perspective: 1000 }}
            className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center"
        >
            {/* Outer Rotating Ring */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-primary/20 rounded-full"
            />

            {/* Orbiting Elements (SaaS data points) */}
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15 + i * 5, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0"
                >
                    <div
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-accent rounded-full shadow-[0_0_15px_var(--accent)]"
                        style={{ transform: `translateY(-${(i + 1) * 20}px)` }}
                    />
                </motion.div>
            ))}

            {/* Pulsing Aura */}
            <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.4, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-4 bg-gradient-to-tr from-primary/30 to-accent/30 rounded-full blur-3xl"
            />

            {/* Core Sphere */}
            <motion.div
                className="relative z-10 w-32 h-32 md:w-40 md:h-40 glass-panel rounded-full flex items-center justify-center border-white/20 shadow-[0_0_50px_rgba(99,102,241,0.3)] group cursor-pointer overflow-hidden"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-accent/40 rounded-full animate-pulse" />

                {/* Floating Particles inside Core */}
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0.3, 0.8, 0.3]
                        }}
                        transition={{
                            duration: 2 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2
                        }}
                        className="absolute w-1 h-1 bg-white rounded-full blur-[0.5px]"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`
                        }}
                    />
                ))}

                <div className="relative text-white font-display font-black text-2xl tracking-tighter group-hover:scale-110 transition-transform">
                    CORE
                </div>
            </motion.div>
        </motion.div>
    );
}
