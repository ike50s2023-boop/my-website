"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    yOffset?: number;
    xOffset?: number;
    threshold?: number;
    once?: boolean;
    style?: React.CSSProperties;
}

export default function ScrollReveal({
    children,
    className = "",
    delay = 0,
    duration = 0.8,
    yOffset = 40,
    xOffset = 0,
    threshold = 0.1,
    once = true,
    style,
}: ScrollRevealProps) {
    const ref = useRef(null);

    // amount: threshold (0 to 1) dictates how much of the element must vary to trigger
    const isInView = useInView(ref, { once, amount: threshold });

    return (
        <motion.div
            ref={ref}
            className={className}
            style={style}
            initial={{ opacity: 0, y: yOffset, x: xOffset }}
            animate={isInView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: yOffset, x: xOffset }}
            transition={{
                duration,
                delay,
                ease: [0.22, 1, 0.36, 1], // Custom cubic bezier for a very "human" soft feel
            }}
        >
            {children}
        </motion.div>
    );
}
