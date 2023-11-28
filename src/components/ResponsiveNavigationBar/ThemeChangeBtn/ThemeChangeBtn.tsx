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

    const setThemeCookieAndOnHTMLBody = useCallback((newTheme: Theme) => {
        //Set dataset theme attribute
        document.body.dataset.theme = newTheme;

        // Set cookie
        // -- Set expiration date to 350 days from now
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 350);

        const expires = expirationDate.toUTCString();

        document.cookie = `theme=${newTheme}; expires=${expires}`;
    }, []);

    const handleLocalStorageThemeChange = useCallback(() => {
        if (
            localStorageTheme === Theme.DARK ||
            localStorageTheme === Theme.LIGHT
        ) {
            setThemeCookieAndOnHTMLBody(localStorageTheme);
            setCurrentTheme(localStorageTheme);
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
        //update local storage only on mount
        handleLocalStorageThemeChange();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function handleClick(selectedTheme: Theme) {
        if (selectedTheme === Theme.DARK) {
            setCurrentTheme(() => {
                setThemeCookieAndOnHTMLBody(Theme.LIGHT);
                setLocalStorageTheme(Theme.LIGHT);
                return Theme.LIGHT;
            });
        } else if (selectedTheme === Theme.LIGHT) {
            setCurrentTheme(() => {
                setThemeCookieAndOnHTMLBody(Theme.DARK);
                setLocalStorageTheme(Theme.DARK);
                return Theme.DARK;
            });
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
