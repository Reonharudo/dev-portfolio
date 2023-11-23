"use client";
import { useLayoutEffect, useState } from "react";
import styles from "./MobileNavigationBar.module.css";
import Image from "next/image";
import { createPortal } from "react-dom";
import { MobileNavigationItem } from "./MobileNavigationItem/MobileNavigationItem";
import { CloseIcon } from "@/components/icons/CloseIcon";
import { MenuIcon } from "@/components/icons/MenuIcon";
import { ThemeChangeBtn } from "../ThemeChangeBtn/ThemeChangeBtn";
import { Theme } from "@/components/hooks/theme";

interface MobileNavigationProps {
    theme: Theme;
}

export function MobileNavigationBar({ theme }: MobileNavigationProps) {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    useLayoutEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    }, [isMenuOpen]);

    return (
        <div>
            {isMenuOpen &&
                createPortal(
                    <div className={styles.navigation_container}>
                        <div className={styles.btn_container}>
                            <button
                                className={styles.close_btn}
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                <CloseIcon
                                    width={30}
                                    height={30}
                                    className={styles.icon}
                                />
                                Close
                            </button>

                            <ThemeChangeBtn
                                className={styles.theme_btn}
                                theme={theme}
                            />
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
                <MenuIcon
                    onClick={() => setIsMenuOpen(true)}
                    width={30}
                    height={30}
                    className={`${styles.icon} ${styles.menu_btn}`}
                />
            )}
        </div>
    );
}
