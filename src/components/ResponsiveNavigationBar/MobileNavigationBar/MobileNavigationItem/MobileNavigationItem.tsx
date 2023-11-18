import styles from "./MobileNavigationItem.module.css";
interface NavigationItemProps {
    url: string;
    text: string;
    handleClose: (value: boolean) => any;
}

export function MobileNavigationItem({
    url,
    text,
    handleClose,
}: NavigationItemProps) {
    return (
        <a
            href={url}
            className={styles.link}
            onClick={() => handleClose(false)}
        >
            {text}
        </a>
    );
}
