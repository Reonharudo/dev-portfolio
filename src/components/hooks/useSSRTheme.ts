import { cookies, headers } from "next/headers";

export function useSSRTheme() {
    const cookieStore = cookies();
    const themeCookie = cookieStore.get("theme");

    const headersList = headers();

    //read more about it here: https://web.dev/articles/user-preference-media-features-headers
    const prefersColorSchemeClientHintHeader = headersList.get(
        "Sec-CH-Prefers-Color-Scheme"
    );

    if (prefersColorSchemeClientHintHeader) {
        console.log("lol");
        return prefersColorSchemeClientHintHeader;
    }

    // Check if a theme cookie exists
    if (themeCookie) {
        console.log("Oh");
        return themeCookie.value;
    }

    return "light";
}
