import Image from "next/image";
import styles from "./FloatingLinkBar.module.css";
import { GithubIcon } from "../icons/GithubIcon";
import { MailIcon } from "../icons/MailIcon";

export function FloatingLinkBar() {
    return (
        <div className={styles.container}>
            <a href="https://github.com/Reonharudo" target="_blank">
                <GithubIcon height={30} width={30} className={styles.icon} />
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

            <a href="mailto:leonhard.muellauer.business@gmail.com">
                <MailIcon height={30} width={30} className={styles.icon} />
            </a>
        </div>
    );
}
