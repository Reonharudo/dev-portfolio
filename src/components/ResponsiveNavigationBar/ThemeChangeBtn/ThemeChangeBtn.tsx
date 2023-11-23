"use client";
import { Theme } from "@/components/hooks/theme";
import { MoonIcon } from "@/components/icons/MoonIcon";
import { SunIcon } from "@/components/icons/SunIcon";
import { useState } from "react";
import styles from "./ThemeChangeBtn.module.css";

interface ThemeChangeBtnProps {
    theme: Theme;
    className?: string;
}

export function ThemeChangeBtn({ theme, className }: ThemeChangeBtnProps) {
    const [currentTheme, setCurrentTheme] = useState<Theme>(theme);

    function handleClick(selectedTheme: Theme) {
        if (selectedTheme === Theme.DARK) {
            document.body.dataset.theme = Theme.LIGHT;
            document.cookie = `theme=${Theme.LIGHT}`;
            setCurrentTheme(Theme.LIGHT);
        } else if (selectedTheme === Theme.LIGHT) {
            document.body.dataset.theme = Theme.DARK;
            document.cookie = `theme=${Theme.DARK}`;
            setCurrentTheme(Theme.DARK);
        }
    }

    return (
        <button
            className={`${styles.button} ${className}`}
            onClick={() => handleClick(currentTheme)}
        >
            {currentTheme === Theme.DARK && <SunIcon height={25} width={25} />}
            {currentTheme === Theme.LIGHT && (
                <MoonIcon height={25} width={25} />
            )}
        </button>
    );
}
