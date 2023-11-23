import styles from "./ContactSection.module.css";
import { MailIcon } from "../icons/MailIcon";
import { SectionHeadline } from "../SectionHeadline/SectionHeadline";

export function ContactSection() {
    return (
        <section id="contact">
            <SectionHeadline>Contact</SectionHeadline>
            <div className={styles.container}>
                <h1 className={styles.msg}>Thank you for visiting my page!</h1>
                <a
                    href="mailto:leonhard.muellauer.business@gmail.com"
                    className={styles.contact_btn}
                >
                    <span>Contact me</span>
                    <MailIcon height={30} width={30} className={styles.icon} />
                </a>
            </div>
        </section>
    );
}
