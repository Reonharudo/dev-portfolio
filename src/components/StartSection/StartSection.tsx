import { TypingText } from "./TypingText/TypingText";
import styles from "./StartSection.module.css";
import Image from "next/image";

export function StartSection() {
    return (
        <div className={styles.container} id="start">
            <div className={styles.description_container}>
                <div className={styles.description}>
                    <TypingText />
                    <span>Software Engineer 📍 Vienna</span>
                </div>
            </div>

            <div className={styles.avatar_image_container}>
                <Image
                    className={styles.avatar_image}
                    src={"/me.png"}
                    alt={"LinkedIn Logo"}
                    width={400}
                    height={440}
                />
            </div>
        </div>
    );
}
