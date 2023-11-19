import styles from "./CircularBtn.module.css";

interface CircularBtnProps {
    isActive: boolean;
    handleClick: () => any;
    disable?: boolean;
}
export function CircularBtn({
    isActive,
    handleClick,
    disable = false,
}: Readonly<CircularBtnProps>) {
    return (
        <button
            disabled={disable}
            onClick={() => handleClick()}
            className={`${isActive ? styles.btn_active : styles.btn_inactive} ${
                disable ? styles.btn_disabled : undefined
            }`}
        ></button>
    );
}
