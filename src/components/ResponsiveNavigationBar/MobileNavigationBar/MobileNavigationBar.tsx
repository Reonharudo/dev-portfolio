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
                        <div className={styles.content}>
                            <div>
                                <button
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                >
                                    <Image
                                        onClick={() =>
                                            setIsMenuOpen(!isMenuOpen)
                                        }
                                        src={"/close_icon.svg"}
                                        alt={"Close"}
                                        width={30}
                                        height={30}
                                    />
                                    Close
                                </button>
                            </div>

                            <NavigationItem url={"#start"} text={"Start"} />
                            <NavigationItem url={"#about"} text={"About"} />
                            <NavigationItem
                                url={"#techstack"}
                                text={"Techstack"}
                            />
                            <NavigationItem
                                url={"#projects"}
                                text={"Projects"}
                            />
                            <NavigationItem url={"#contact"} text={"Contact"} />
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
