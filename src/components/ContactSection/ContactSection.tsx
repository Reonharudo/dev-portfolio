import Image from "next/image";
import styles from "./ContactSection.module.css";

export function ContactSection() {
    return (
        <section id="contact">
            <h1>Contact</h1>
            <div className={styles.container}>
                <h1 className={styles.msg}>Thank you for visiting my page!</h1>
                <a
                    href="mailto:leonhard.muellauer@gmail.com"
                    className={styles.contact_btn}
                >
                    <span>Contact me</span>
                    <Image
                        src={"/mail_icon.svg"}
                        alt={"Mail"}
                        width={30}
                        height={30}
                    />
                </a>
            </div>
        </section>
    );
}
