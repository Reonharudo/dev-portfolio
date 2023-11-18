"use client";
import { useLayoutEffect, useState } from "react";
import styles from "./MobileNavigationBar.module.css";
import Image from "next/image";
import { createPortal } from "react-dom";
import { NavigationItem } from "../NavigationItem/NavigationItem";
export function MobileNavigationBar() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    useLayoutEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    }, [isMenuOpen]);

    return (
        <div style={{ position: "relative" }}>
            {isMenuOpen &&
                createPortal(
                    <div className={styles.navigation_container}>
                        <div className={styles.btn_container}>
                            <button
                                className={styles.close_btn}
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                <Image
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    src={"/close_icon.svg"}
                                    alt={"Close"}
                                    width={30}
                                    height={30}
                                />
                                Close
                            </button>
                        </div>
                        <div className={styles.link_content}>
                            <a href={"#start"} className={styles.link}>
                                Start
                            </a>
                            <a href={"#about"} className={styles.link}>
                                About
                            </a>

                            <a href={"#techstack"} className={styles.link}>
                                TechStack
                            </a>

                            <a href={"#projects"} className={styles.link}>
                                Projects
                            </a>

                            <a href={"#contact"} className={styles.link}>
                                Contact
                            </a>
                        </div>
                    </div>,
                    document.body
                )}
            {!isMenuOpen && (
                <Image
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    src={"/menu_icon.svg"}
                    alt={"Menu Icon"}
                    width={30}
                    height={30}
                />
            )}
        </div>
    );
}
