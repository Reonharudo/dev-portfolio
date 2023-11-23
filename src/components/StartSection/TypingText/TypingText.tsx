"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./TypingText.module.css";

export function TypingText() {
    const [typedText, setTypedText] = useState<string>("");

    async function startAnimation() {
        const endText = "Hi, I am Leonhard Muellauer ";

        console.log("starting");
        let currentProgress = "";

        for (let i = 0; i < endText.length; i++) {
            await sleepForMS(100);

            currentProgress += endText.charAt(i);
            setTypedText(currentProgress);
        }
    }

    async function sleepForMS(ms: number) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    useEffect(() => {
        startAnimation();
    }, []);

    return (
        <div>
            <h1 className={styles.headline}>
                <noscript>{"Hi, I am Leonhard Muellauer "}</noscript>

                {typedText}
                <span
                    aria-hidden="true"
                    className={styles.animated_caret}
                ></span>
            </h1>
        </div>
    );
}
