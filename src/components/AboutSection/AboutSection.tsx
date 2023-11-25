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
                    <p>Welcome on my page!</p>
                    <p>
                        I am a {age} year old Software Engineer with a
                        relentless passion for learning and staying at the
                        forefront of technology.
                    </p>
                    <p>
                        I embrace the philosophy that FOMO(Fear of Missing Out)
                        drives continuous improvement in our rapidly evolving
                        field.
                    </p>

                    <p>
                        Beyond my software engineering endeavours, I am a
                        hardware enthusiast. I&apos;m currently planning to
                        build a new rig with the upcoming Zen5 CPU (maybe
                        3D-VCache) so that I can finally upgrade to 32GB DDDR5
                        Ram. :)
                        <br />
                        <br />
                        Additionally, I actively collect and peruse Wikipedia
                        articles spanning topics from medical science to
                        philosophical or history, maintaining them as valuable
                        references. I have huge folders containing all the links
                        in my Dropbox. It&apos;s my go-to source for a bit of
                        everything.
                    </p>
                    <p>Leonhard Muellauer</p>
                </div>
            </div>
        </section>
    );
}
