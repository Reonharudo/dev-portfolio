import { FloatingLinkBar } from "../FloatingLinkBar/FloatingLinkBar";
import { NavigationBar } from "../NavigationBar/NavigationBar";
import { TypingText } from "./TypingText/TypingText";

export function StartSection() {
    return (
        <div>
            <TypingText />
            <NavigationBar />
            <FloatingLinkBar />
        </div>
    );
}
