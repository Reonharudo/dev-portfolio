import { MobileNavigationBar } from "../MobileNavigationBar/MobileNavigationBar";
import { NavigationItem } from "../NavigationItem/NavigationItem";
import styles from "./NavigationBar.module.css";

import { ThemeChangeBtn } from "../ThemeChangeBtn/ThemeChangeBtn";
import { useSSRTheme } from "@/components/hooks/useSSRTheme";

export function NavigationBar() {
    const theme = useSSRTheme();

    return (
        <nav className={styles.navigation_container}>
            <div className={styles.mobile_wrapper}>
                <MobileNavigationBar />
            </div>

            <div className={styles.desktop_wrapper}>
                <NavigationItem url={"#start"} text={"Start"} />
                <NavigationItem url={"#about"} text={"About"} />
                <NavigationItem url={"#techstack"} text={"Techstack"} />
                <NavigationItem url={"#projects"} text={"Projects"} />
                <NavigationItem url={"#contact"} text={"Contact"} />
            </div>
            <ThemeChangeBtn theme={theme} />
        </nav>
    );
}
