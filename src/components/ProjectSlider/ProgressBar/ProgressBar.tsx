import styles from "./ProgressBar.module.css";

interface ProgressBarProps {
    maximum: number;
    count: number;
}

export function ProgressBar({ maximum, count = 0 }: ProgressBarProps) {
    const progressPercentage = (count / maximum) * 100;

    return (
        <div className={styles.wrapper}>
            <div
                className={styles.progress}
                style={{ width: `${progressPercentage}%` }}
            ></div>
            <div className={styles.total}></div>
        </div>
    );
}
