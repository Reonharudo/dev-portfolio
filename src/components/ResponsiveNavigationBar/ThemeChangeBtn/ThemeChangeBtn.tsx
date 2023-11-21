"use client";
import { MoonIcon } from "@/components/icons/MoonIcon";
import { SunIcon } from "@/components/icons/SunIcon";
import { useState } from "react";

export function ThemeChangeBtn({ theme }: { theme: string }) {
    const [currentTheme, setCurrentTheme] = useState<string>(theme);

    function handleClick(theme: string) {
        if (theme === "dark") {
            document.body.dataset.theme = "light";
            document.cookie = `theme=light`;
            setCurrentTheme("light");
        } else if (theme === "light") {
            document.body.dataset.theme = "dark";
            document.cookie = `theme=${"dark"}`;
            setCurrentTheme("dark");
        }
    }

    return (
        <button onClick={() => handleClick(theme)}>
            {currentTheme === "dark" && <SunIcon height={30} width={30} />}

            {currentTheme === "light" && <MoonIcon height={30} width={30} />}
        </button>
    );
}
