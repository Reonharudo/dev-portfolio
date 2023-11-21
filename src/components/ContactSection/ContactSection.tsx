import Image from "next/image";
import styles from "./ContactSection.module.css";
import { MailIcon } from "../icons/MailIcon";

export function ContactSection() {
    return (
        <section id="contact">
            <h1 className={styles.headline}>Contact</h1>
            <div className={styles.container}>
                <h1 className={styles.msg}>Thank you for visiting my page!</h1>
                <a
                    href="mailto:leonhard.muellauer@gmail.com"
                    className={styles.contact_btn}
                >
                    <span>Contact me</span>
                    <MailIcon height={30} width={30} className={styles.icon} />
                </a>
            </div>
        </section>
    );
}
