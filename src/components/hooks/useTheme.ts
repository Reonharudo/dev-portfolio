import { Dispatch, SetStateAction, useEffect, useState } from "react";

export enum ClientTheme {
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
    if (theme === ClientTheme.LIGHT) {
        return ClientTheme.LIGHT;
    } else if (theme === ClientTheme.DARK) {
        return ClientTheme.DARK;
    } else {
        return ClientTheme.UNKNOWN; //won't happen as dataset is already definied by RootLayout in server
    }
}

export function useTheme(): [
    ClientTheme,
    Dispatch<SetStateAction<ClientTheme>>
] {
    const [theme, setTheme] = useState<ClientTheme>(getTheme());

    useEffect(() => {
        const theme: ClientTheme | string | null =
            document.body.getAttribute("data-theme");

        if (theme) {
            if (theme === ClientTheme.LIGHT) {
                setTheme(ClientTheme.LIGHT);
            } else if (theme === ClientTheme.DARK) {
                setTheme(ClientTheme.DARK);
            }
        }
    }, []);

    useEffect(() => {
        if (theme === ClientTheme.LIGHT || theme === ClientTheme.DARK) {
            document.body.dataset.theme = theme;
            document.cookie = `theme=${theme}`;
        }
    }, [theme]);

    return [theme, setTheme];
}
