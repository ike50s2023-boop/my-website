"use client";

import React from "react";
import Lottie from "lottie-react";

interface LottieWrapperProps {
    animationData: any;
    className?: string;
    loop?: boolean;
}

export default function LottieWrapper({
    animationData,
    className = "w-full h-full",
    loop = true
}: LottieWrapperProps) {
    return (
        <div className={className}>
            <Lottie
                animationData={animationData}
                loop={loop}
                style={{ width: '100%', height: '100%' }}
            />
        </div>
    );
}
