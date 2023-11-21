"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";

export enum Theme {
    LIGHT = "light",
    DARK = "dark",
    UNKNOWN = "unknown",
}

/**
 * Invoke this method to get a more accurate initial theme state version
 * @returns
 */
function getTheme() {
    const theme = document.body.dataset.theme;
    if (theme === Theme.LIGHT) {
        return Theme.LIGHT;
    } else if (theme === Theme.DARK) {
        return Theme.DARK;
    } else {
        return Theme.UNKNOWN; //won't happen as dataset is already definied by RootLayout in server
    }
}

export function useTheme(): [Theme, Dispatch<SetStateAction<Theme>>] {
    const [theme, setTheme] = useState<Theme>(getTheme());

    useEffect(() => {
        const theme: Theme | string | null =
            document.body.getAttribute("data-theme");

        if (theme) {
            if (theme === Theme.LIGHT) {
                setTheme(Theme.LIGHT);
            } else if (theme === Theme.DARK) {
                setTheme(Theme.DARK);
            }
        }
    }, []);

    useEffect(() => {
        if (theme === Theme.LIGHT || theme === Theme.DARK) {
            document.body.dataset.theme = theme;
            document.cookie = `theme=${theme}`;
        }
    }, [theme]);

    return [theme, setTheme];
}
