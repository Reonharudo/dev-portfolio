"use client";
import React, { useRef } from "react";
import styles from "./SectionHeadline.module.css";
import { useElemObserver } from "../hooks/useElemObserver";

export function SectionHeadline({
    children,
    className = "",
}: {
    className?: string;
    children: React.ReactNode;
}) {
    const headlineRef = useRef<HTMLHeadingElement | null>(null);
    const isInViewport = useElemObserver(headlineRef);

    return (
        <div
            className={`${styles.background} ${styles.container} ${className}`}
            ref={headlineRef}
        >
            <AnimatedHeadline key={`${isInViewport}`}>
                {children}
            </AnimatedHeadline>
        </div>
    );
}

function AnimatedHeadline({ children }: { children: React.ReactNode }) {
    return (
        <h1 className={`${styles.headline} ${styles.animate_fade_from_top}`}>
            {children}
        </h1>
    );
}
