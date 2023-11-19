import { ImageGallery } from "../ImageGallery/ImageGallery";
import { ProjectSlider } from "../ProjectSlider/ProjectSlider";
import allProjects from "./projects.json";

export function ProjectSection() {
    return (
        <section id="projects">
            <h1>Projects</h1>
            <ProjectSlider projects={allProjects} />
        </section>
    );
}
