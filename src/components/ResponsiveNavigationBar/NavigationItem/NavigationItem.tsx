"use client";

import styles from "./NavigationItem.module.css";
interface NavigationItemProps {
    url: string;
    text: string;
}

export function NavigationItem({ url, text }: NavigationItemProps) {
    return (
        <a href={url} className={styles.link}>
            {text}
        </a>
    );
}
