"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./TypingText.module.css";

export function TypingText() {
    const spanRef = useRef<HTMLElement | null>(null);
    const [typedText, setTypedText] = useState<string>("");

    async function startAnimation() {
        const endText = "Hi, I am Leonhard Muellauer ";
        const animatedTextElem = spanRef.current;
        console.log("starting");
        let currentProgress = "";
        if (animatedTextElem) {
            for (let i = 0; i < endText.length; i++) {
                await sleepForMS(200);

                currentProgress += endText.charAt(i);
                setTypedText(currentProgress);
            }
        }
    }

    async function sleepForMS(ms: number) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    useEffect(() => {
        startAnimation();
        if (spanRef.current) {
            spanRef.current.innerHTML = "";
        }
    }, []);

    return (
        <div>
            <span ref={spanRef}>
                {"Hi, I am Leonhard Muellauer "}
                {typedText}
            </span>
            <span aria-hidden="true" className={styles.animated_caret}></span>
        </div>
    );
}
