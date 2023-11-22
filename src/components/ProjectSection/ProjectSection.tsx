import { ProjectSlider } from "../ProjectSlider/ProjectSlider";
import { SectionHeadline } from "../SectionHeadline/SectionHeadline";
import allProjects from "./projects.json";
import styles from "./ProjectSection.module.css";
export function ProjectSection() {
    return (
        <section id="projects">
            <SectionHeadline>Projects</SectionHeadline>
            <ProjectSlider projects={allProjects} />
        </section>
    );
}
