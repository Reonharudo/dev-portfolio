import styles from "./AboutSection.module.css";
import { SectionHeadline } from "../SectionHeadline/SectionHeadline";

function calculateAge(birthYear = 2001, birthMonth = 2, birthDay = 5) {
    const today = new Date();
    const birthdate = new Date(birthYear, birthMonth - 1, birthDay);

    let age = today.getFullYear() - birthdate.getFullYear();

    if (
        today.getMonth() < birthdate.getMonth() ||
        (today.getMonth() === birthdate.getMonth() &&
            today.getDate() < birthdate.getDate())
    ) {
        age--;
    }

    return age;
}

export function AboutSection() {
    const age = calculateAge();

    return (
        <section id="about" className={styles.container}>
            <SectionHeadline>About</SectionHeadline>
            <div className={styles.content}>
                <div className={styles.description_container}>
                    <p>
                        👋 Hello! I am a {age} year old Software Engineer with a
                        relentless passion for learning and staying staying
                        ahead in the ever-evolving world of technology.
                    </p>
                    <p>
                        🚀 I believe in the power of continuous improvement,
                        fueled by the Fear of Missing Out (FOMO). This
                        philosophy has propelled me to explore cutting-edge
                        technologies and embrace new challenges, resulting in my
                        recent discovery of NextJS. A framework that saves me a
                        lot of time to build SEO and performance critical
                        Web-Apps.
                    </p>

                    <p>
                        💻 As a hardware enthusiast, I&apos;m currently gearing
                        up to build my next rig, eagerly anticipating the
                        performance boost from the upcoming Zen5 CPU and
                        3D-VCache. My goal? To elevate my computing experience
                        with a seamless upgrade to 32GB DDR5 RAM.
                    </p>

                    <p>
                        📚 Beyond code, I immerse myself in diverse realms. My
                        collection of Wikipedia articles spans topics from
                        medical science to philosophy and history, serving as a
                        treasure trove of valuable references.
                    </p>

                    <p>
                        If you have any questions, or just want to chat, feel
                        free to reach out to me!
                    </p>
                    <p>Leonhard Muellauer</p>
                </div>
            </div>
        </section>
    );
}
