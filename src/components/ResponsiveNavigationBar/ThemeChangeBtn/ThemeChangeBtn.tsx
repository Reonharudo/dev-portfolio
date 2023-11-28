"use client";
import { Theme } from "@/components/hooks/theme";
import { MoonIcon } from "@/components/icons/MoonIcon";
import { SunIcon } from "@/components/icons/SunIcon";
import { useCallback, useEffect, useState } from "react";
import styles from "./ThemeChangeBtn.module.css";
import { useLocalStorage } from "@/components/hooks/useLocalStorage";

interface ThemeChangeBtnProps {
    theme: Theme;
    className?: string;
}

export function ThemeChangeBtn({ theme, className }: ThemeChangeBtnProps) {
    /*
        Theme from cookie has higher priority, then the value in LocalStorage
     *  The localStorage value is used, to presumable update the cookie
     */
    const [currentTheme, setCurrentTheme] = useState<Theme>(theme);
    const [localStorageTheme, setLocalStorageTheme] = useLocalStorage<Theme>({
        key: "theme",
    });

    const setThemeCookieAndOnHTMLBody = useCallback((theme: Theme) => {
        //Set dataset theme attribute
        document.body.dataset.theme = theme;

        // Set cookie
        // -- Set expiration date to 350 days from now
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 350);

        const expires = expirationDate.toUTCString();

        document.cookie = `theme=${theme}; expires=${expires}`;
    }, []);

    const handleLocalStorageThemeChange = useCallback(() => {
        if (
            localStorageTheme === Theme.DARK ||
            localStorageTheme === Theme.LIGHT
        ) {
            setThemeCookieAndOnHTMLBody(localStorageTheme);
        } else {
            //set default
            setLocalStorageTheme(theme);
        }
    }, [
        localStorageTheme,
        setThemeCookieAndOnHTMLBody,
        setLocalStorageTheme,
        theme,
    ]);

    useEffect(() => {
        handleLocalStorageThemeChange();
    }, [localStorageTheme, handleLocalStorageThemeChange]);

    function handleClick(selectedTheme: Theme) {
        if (selectedTheme === Theme.DARK) {
            setThemeCookieAndOnHTMLBody(Theme.LIGHT);
            setCurrentTheme(Theme.LIGHT);
            setLocalStorageTheme(Theme.LIGHT);
        } else if (selectedTheme === Theme.LIGHT) {
            setThemeCookieAndOnHTMLBody(Theme.DARK);
            setCurrentTheme(Theme.DARK);
            setLocalStorageTheme(Theme.DARK);
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
