import { ProjectSlider } from "../ProjectSlider/ProjectSlider";
import allProjects from "./projects.json";
import styles from "./ProjectSection.module.css";
export function ProjectSection() {
    return (
        <section id="projects">
            <h1 className={styles.headline}>Projects</h1>
            <ProjectSlider projects={allProjects} />
        </section>
    );
}
