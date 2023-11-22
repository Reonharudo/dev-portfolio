"use client";
import React, { use, useEffect, useRef, useState } from "react";
import styles from "./SectionHeadline.module.css";

export function SectionHeadline({ children }: { children: React.ReactNode }) {
    const headlineRef = useRef<HTMLHeadingElement | null>(null);
    const [isInViewport, setIsInViewport] = useState<boolean>();

    function handleIntersection([entry]: IntersectionObserverEntry[]) {
        setIsInViewport(entry.isIntersecting);
    }

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0,
        };

        const observer = new IntersectionObserver(handleIntersection, options);

        if (headlineRef.current) {
            observer.observe(headlineRef.current);
        }

        return () => {
            if (headlineRef.current) {
                observer.unobserve(headlineRef.current);
            }
        };
    }, []);

    return (
        <div className={styles.background} ref={headlineRef}>
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
