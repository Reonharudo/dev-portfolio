"use client"
import { NavigationItem } from "./NavigationItem/NavigationItem";
import styles from "./NavigationBar.module.css"
import { useEffect } from "react";

export function NavigationBar() {
    function handleScroll() {
        console.log("scrolling");
        //document.getelementbyid and check if visible with intersection observer in the viewport
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, [])



    return <nav className={styles.navigation_container}>
        <NavigationItem url={"#start"} text={"Start"} />
        <NavigationItem url={"#techstack"} text={"Techstack"} />
        <NavigationItem url={"#projects"} text={"Projects"} />
        <NavigationItem url={"#contact"} text={"Contact"} />
    </nav>
}