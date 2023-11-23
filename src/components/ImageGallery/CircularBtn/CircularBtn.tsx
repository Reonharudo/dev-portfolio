import { useEffect, useRef } from "react";
import styles from "./CircularBtn.module.css";

interface CircularBtnProps {
    isActive: boolean;
    disable?: boolean;
    handleClick: (elem: HTMLButtonElement | null) => any;
    handleOnActive: (elem: HTMLButtonElement | null) => any;
}

export function CircularBtn({
    isActive,
    handleClick,
    disable = false,
    handleOnActive,
}: Readonly<CircularBtnProps>) {
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        if (isActive) {
            handleOnActive(buttonRef.current);
        }
    }, [isActive, handleOnActive]);

    return (
        <button
            ref={buttonRef}
            disabled={disable}
            onClick={() => handleClick(buttonRef.current)}
            className={`${isActive ? styles.btn_active : styles.btn_inactive} ${
                disable ? styles.btn_disabled : undefined
            }`}
        ></button>
    );
}
