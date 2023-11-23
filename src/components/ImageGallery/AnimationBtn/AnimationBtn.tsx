import styles from "./AnimationBtn.module.css";
import Image from "next/image";
interface AnimationBtnProps {
    showStop: boolean;
    onClick: () => any;
}

export function AnimationBtn({ showStop = true, onClick }: AnimationBtnProps) {
    return (
        <button className={styles.container} onClick={onClick}>
            {showStop ? "Pause" : "Play"}

            <Image
                src={`${
                    showStop
                        ? "/button-svg/stop_circle.svg"
                        : "/button-svg/play_circle.svg"
                }`}
                alt={"project"}
                className={styles.image}
                width={20}
                height={20}
            ></Image>
        </button>
    );
}
