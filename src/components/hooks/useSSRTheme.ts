import { cookies, headers } from "next/headers";
import { Theme } from "./theme";

export function useSSRTheme(): Theme {
    const cookieStore = cookies();
    const themeCookie = cookieStore.get("theme");

    const headersList = headers();

    // Read more about it here: https://web.dev/articles/user-preference-media-features-headers
    const prefersColorSchemeClientHintHeader = headersList.get(
        "Sec-CH-Prefers-Color-Scheme"
    );

    if (prefersColorSchemeClientHintHeader) {
        console.log("lol");
        return prefersColorSchemeClientHintHeader as Theme;
    }

    // Check if a theme cookie exists
    if (themeCookie) {
        return themeCookie.value as Theme;
    }

    return Theme.LIGHT; // Use the enum value instead of a string
}
