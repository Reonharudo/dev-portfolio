import Image from "next/image";
import styles from "./FloatingLinkBar.module.css";

export function FloatingLinkBar() {
    return (
        <div className={styles.container}>
            <a href="https://github.com/Reonharudo" target="_blank">
                <Image
                    src={"/github_logo.svg"}
                    alt={"Gitub Logo"}
                    width={30}
                    height={30}
                />
            </a>
            <a
                href="https://www.linkedin.com/in/leonhard-kenshi-m%C3%BCllauer-b533631b6/"
                target="_blank"
            >
                <Image
                    src={"/linkedin_logo.webp"}
                    alt={"LinkedIn Logo"}
                    width={30}
                    height={30}
                />
            </a>

            <a href="mailto:leonhard.muellauer@gmail.com">
                <Image
                    src={"/mail_icon.svg"}
                    alt={"Mail"}
                    width={30}
                    height={30}
                />
            </a>
        </div>
    );
}
