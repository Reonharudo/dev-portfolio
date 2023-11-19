import styles from "./CircularBtn.module.css";

interface CircularBtnProps {
    isActive: boolean;
    handleClick: () => any;
}
export function CircularBtn({
    isActive,
    handleClick,
}: Readonly<CircularBtnProps>) {
    return (
        <button
            onClick={() => handleClick()}
            className={`${isActive ? styles.btn_active : styles.btn_inactive}`}
        ></button>
    );
}
