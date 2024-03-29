import { SectionHeadline } from "../SectionHeadline/SectionHeadline";
import { SkillItem } from "./SkillItem/SkillItem";
import styles from "./TechStackSection.module.css";

export function TechStackSection() {
    return (
        <section className={styles.section} id="techstack">
            <SectionHeadline>Techstack</SectionHeadline>
            <div className={styles.skills_view}>
                <SkillItem
                    text={"Java"}
                    image={{
                        url: "/technology-icons/java_icon.svg",
                        altText: "Java",
                    }}
                />
                <SkillItem text={"Java Swing"} />
                <SkillItem text={"JavaFX / FXML"} />
                <SkillItem text={"Java Socket (Distributed System)"} />
                <SkillItem
                    text={"Spring Boot"}
                    image={{
                        url: "/technology-icons/spring_icon.svg",
                        altText: "Java",
                    }}
                />
                <SkillItem text={"MapStruct"} />
                <SkillItem text={"Lombok"} />
                <SkillItem text={"SL4J"} />
                <SkillItem text={"RestAPI"} />
                <SkillItem
                    text={"Maven"}
                    image={{
                        url: "/technology-icons/maven_icon.svg",
                        altText: "Java",
                    }}
                />
                <SkillItem
                    text={"Gradle"}
                    image={{
                        url: "/technology-icons/gradle_icon.svg",
                        altText: "Java",
                    }}
                />

                <SkillItem
                    text={"MySQL"}
                    image={{
                        url: "/technology-icons/mysql_icon.svg",
                        altText: "Java",
                    }}
                />
                <SkillItem
                    text={"PostgreSQL"}
                    image={{
                        url: "/technology-icons/postgresdb_icon.svg",
                        altText: "Java",
                    }}
                />
                <SkillItem text={"NoSQL CouchDB"} />
                <SkillItem
                    text={"NoSQL MongoDB"}
                    image={{
                        url: "/technology-icons/mongodb_icon.svg",
                        altText: "Java",
                    }}
                />
                <SkillItem text={"SQLite"} />
                <SkillItem text={"SQL"} />
                <SkillItem text={"Oracle Database PL/SQL"} />
                <SkillItem text={"S3 Storage"} />

                <SkillItem
                    text={"NodeJS"}
                    image={{
                        url: "/technology-icons/nodejs_icon.svg",
                        altText: "Java",
                    }}
                />
                <SkillItem
                    text={"Javascript / Typescript"}
                    image={{
                        url: "/technology-icons/typescript_icon.svg",
                        altText: "Java",
                    }}
                />
                <SkillItem
                    text={"Angular"}
                    image={{
                        url: "/technology-icons/angular_icon.svg",
                        altText: "Java",
                    }}
                />
                <SkillItem
                    text={"jQuery"}
                    image={{
                        url: "/technology-icons/jquery_icon.svg",
                        altText: "Java",
                    }}
                />
                <SkillItem text={"Vue"} />
                <SkillItem
                    text={"PHP"}
                    image={{
                        url: "/technology-icons/php_icon.svg",
                        altText: "Java",
                    }}
                />
                <SkillItem
                    text={"NextJS (SSR, ISR, SSG)"}
                    image={{
                        url: "/technology-icons/nextjs_icon.svg",
                        altText: "Java",
                    }}
                />
                <SkillItem text={"SharpJS"} />
                <SkillItem text={"ExpressJS"} />
                <SkillItem text={"Restify"} />
                <SkillItem text={"Fastify"} />
                <SkillItem text={"React"} />
                <SkillItem text={"CSS"} />
                <SkillItem text={"HTML"} />
                <SkillItem text={"Bootstrap"} />
                <SkillItem text={"SauceLabs"} />
                <SkillItem text={"Mocha"} />
                <SkillItem text={"Jasmine"} />
                <SkillItem text={"Sequelize"} />
                <SkillItem text={"Prisma"} />
                <SkillItem text={"Meta Lexical"} />
                <SkillItem text={"PM2"} />
                <SkillItem text={"Webpack / Vite"} />

                <SkillItem text={"JSON"} />
                <SkillItem text={"XML"} />

                <SkillItem text={"Micro16"} />
                <SkillItem text={"Cisco"} />

                <SkillItem text={"WebdriverIO"} />
                <SkillItem text={"Selenium"} />
                <SkillItem text={"Playwright"} />
                <SkillItem text={"Cypress"} />
                <SkillItem text={"Testing Library"} />
                <SkillItem text={"Mockito"} />
                <SkillItem text={"SonarQube"} />
                <SkillItem text={"ESLint"} />
                <SkillItem text={"JUnit"} />
                <SkillItem text={"TDD"} />

                <SkillItem text={"Haskell"} />

                <SkillItem text={"Github / Gitlab / BitBucket"} />
                <SkillItem text={"Github Workflow"} />
                <SkillItem text={"AWS"} />
                <SkillItem text={"Digital Ocean"} />
                <SkillItem text={"GCP (Programmable Search Engine)"} />
                <SkillItem text={"XMPP"} />
                <SkillItem text={"Jira / Confluence"} />
                <SkillItem text={"SCRUM"} />
                <SkillItem text={"Git"} />

                <SkillItem text={"Docker"} />
                <SkillItem text={"Jenkins"} />

                <SkillItem text={"Figma"} />
                <SkillItem text={"UML"} />
                <SkillItem text={"ERM (Chen Notation)"} />
                <SkillItem text={"Erwin Data Modeler"} />

                <SkillItem text={"Windows"} />
                <SkillItem text={"MacOS"} />
                <SkillItem text={"Linux (Ubuntu)"} />
                <SkillItem text={"VirtualBox"} />
                <SkillItem text={"CLI / Bash / WSL"} />
                <SkillItem text={"Regex"} />

                <SkillItem text={"Python"} />
                <SkillItem text={"SQLAlchemy"} />
                <SkillItem text={"Uvicorn"} />
                <SkillItem text={"Pydantic"} />
                <SkillItem text={"Pytest"} />
                <SkillItem text={"Virtual Env Python"} />
                <SkillItem text={"FastAPI"} />
                <SkillItem text={"Pandas"} />
                <SkillItem text={"C#"} />
                <SkillItem text={"ASP .NET Core"} />

                <SkillItem text={"Electron"} />
                <SkillItem text={"Alexa SDK"} />
                <SkillItem text={"OpenAPI / SwaggerUI"} />
                <SkillItem text={"Kotlin"} />
            </div>
        </section>
    );
}
