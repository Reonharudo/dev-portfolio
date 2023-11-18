import { SkillItem } from "./SkillItem/SkillItem";
import styles from "./TechStackSection.module.css";

export function TechStackSection() {
    return (
        <section id="techstack">
            <h1>Techstack</h1>
            <div className={styles.skills_view}>
                <SkillItem
                    text={"Java"}
                    image={{
                        url: "/technology-icons/java_icon.svg",
                        altText: "Java",
                    }}
                />
                <SkillItem text={"Java Swing"} />
                <SkillItem text={"JavaFX"} />
                <SkillItem text={"Spring Boot"} />
                <SkillItem text={"RestAPI"} />
                <SkillItem text={"Maven"} />
                <SkillItem text={"Gradle"} />

                <SkillItem text={"MySQL"} />
                <SkillItem text={"PostgresDB"} />
                <SkillItem text={"NoSQL CouchDB"} />
                <SkillItem text={"NoSQL MongoDB"} />
                <SkillItem text={"Oracle Database PL/SQL"} />
                <SkillItem text={"S3 Storage"} />

                <SkillItem text={"NodeJS"} />
                <SkillItem text={"Javascript / Typescript"} />
                <SkillItem text={"Angular"} />
                <SkillItem text={"jQuery"} />
                <SkillItem text={"Vue"} />
                <SkillItem text={"PHP"} />
                <SkillItem text={"NextJS (SSR, ISR, SSG)"} />
                <SkillItem text={"SharpJS"} />
                <SkillItem text={"ExpressJS"} />
                <SkillItem text={"React"} />
                <SkillItem text={"CSS"} />
                <SkillItem text={"Bootstrap"} />
                <SkillItem text={"Prisma"} />

                <SkillItem text={"Micro16"} />
                <SkillItem text={"Cisco"} />

                <SkillItem text={"WebdriverIO"} />
                <SkillItem text={"Selenium"} />
                <SkillItem text={"Playwright"} />
                <SkillItem text={"Cypress"} />
                <SkillItem text={"Mockito"} />
                <SkillItem text={"JUNit"} />
                <SkillItem text={"TDD"} />

                <SkillItem text={"Haskell"} />

                <SkillItem text={"Github / Gitlab / BitBucket"} />
                <SkillItem text={"Github Workflow"} />
                <SkillItem
                    text={"AWS / DO / GCP (Programmable Search Engine)"}
                />
                <SkillItem text={"XMPP"} />
                <SkillItem text={"Jira"} />
                <SkillItem text={"SCRUM"} />
                <SkillItem text={"Git"} />

                <SkillItem text={"Docker"} />
                <SkillItem text={"Jenkins"} />

                <SkillItem text={"Figma"} />

                <SkillItem text={"Python"} />
                <SkillItem text={"Pandas"} />
            </div>
        </section>
    );
}
