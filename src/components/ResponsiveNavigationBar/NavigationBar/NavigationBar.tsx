"use client";
import { MobileNavigationBar } from "../MobileNavigationBar/MobileNavigationBar";
import { NavigationItem } from "../NavigationItem/NavigationItem";
import styles from "./NavigationBar.module.css";
import { useEffect } from "react";

export function NavigationBar() {
    function handleScroll() {
        console.log("scrolling");
        //document.getelementbyid and check if visible with intersection observer in the viewport
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

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
        </nav>
    );
}
