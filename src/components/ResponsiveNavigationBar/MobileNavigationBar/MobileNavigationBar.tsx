"use client";
import { useLayoutEffect, useState } from "react";
import styles from "./MobileNavigationBar.module.css";
import Image from "next/image";
import { createPortal } from "react-dom";
import { NavigationItem } from "../NavigationItem/NavigationItem";
import { MobileNavigationItem } from "./MobileNavigationItem/MobileNavigationItem";
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
                            <MobileNavigationItem
                                handleClose={setIsMenuOpen}
                                url={"#start"}
                                text={"Start"}
                            />
                            <MobileNavigationItem
                                handleClose={setIsMenuOpen}
                                url={"#about"}
                                text={"About"}
                            />
                            <MobileNavigationItem
                                handleClose={setIsMenuOpen}
                                url={"#techstack"}
                                text={"Techstack"}
                            />
                            <MobileNavigationItem
                                handleClose={setIsMenuOpen}
                                url={"#projects"}
                                text={"Projects"}
                            />
                            <MobileNavigationItem
                                handleClose={setIsMenuOpen}
                                url={"#contact"}
                                text={"Contact"}
                            />
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
