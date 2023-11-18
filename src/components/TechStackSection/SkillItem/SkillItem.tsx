import styles from "./SkillItem.module.css";
import Image from "next/image";

interface SkillItemProps {
    image?: {
        url: string;
        altText: string;
    };
    text: string;
}

export function SkillItem({ image, text }: SkillItemProps) {
    return (
        <div className={styles.container}>
            {image && (
                <Image
                    className={styles.avatar_image}
                    src={image.url}
                    alt={image.altText}
                    width={30}
                    height={30}
                />
            )}
            {text}
        </div>
    );
}
