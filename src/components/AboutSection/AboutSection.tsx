import styles from "./AboutSection.module.css";

export function AboutSection() {
    return (
        <section id="about" className={styles.container}>
            <h1>About me</h1>
            <div className={styles.content}>
                <div className={styles.description_container}>
                    <p>Welcome on my page!</p>
                    <p>
                        I am a 23 year old Software Engineer with a relentless
                        passion for learning and staying at the forefront of
                        technology.
                    </p>
                    <p>
                        I embrace the philosophy that FOMO(Fear of Missing Out)
                        drives continuous improvement in our rapidly evolving
                        field.
                    </p>

                    <p>
                        Beyond my software engineering endeavours, I am a
                        hardware enthusiast as you may see on the pictures on
                        your right :) <br />
                        Additionally, I actively collect and peruse Wikipedia
                        articles spanning topics from medical science to
                        philosophical or history, maintaining them as valuable
                        references.
                    </p>
                    <p>Thank you for reading!</p>
                    <p>Leonhard Muellauer</p>
                </div>

                <div className={styles.image_section}>
                    <button>Show Image</button>
                </div>
            </div>
        </section>
    );
}
