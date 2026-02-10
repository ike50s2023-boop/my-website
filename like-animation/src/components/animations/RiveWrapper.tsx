"use client";

import React from "react";
import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";

interface RiveWrapperProps {
    src: string;
    stateMachine?: string;
    className?: string;
    artboard?: string;
}

export default function RiveWrapper({
    src,
    stateMachine,
    className = "w-full h-full",
    artboard
}: RiveWrapperProps) {
    const { RiveComponent } = useRive({
        src,
        stateMachines: stateMachine,
        artboard: artboard,
        layout: new Layout({
            fit: Fit.Contain,
            alignment: Alignment.Center,
        }),
        autoplay: true,
    });

    return (
        <div className={className}>
            <RiveComponent />
        </div>
    );
}
