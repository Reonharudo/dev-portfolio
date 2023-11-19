"use client";

import { useState } from "react";
import {
    IntProjectShowcase,
    ProjectShowcase,
} from "./ProjectShowcase/ProjectShowcase";
import styles from "./ProjectSlider.module.css";
import Image from "next/image";

interface ProjectSliderProps {
    projects: IntProjectShowcase[];
}

export function ProjectSlider({ projects = [] }: ProjectSliderProps) {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    if (projects.length === 0) {
        return null;
    }
    const { headline, description, images } = projects[currentIndex];

    return (
        <div className={styles.container}>
            {currentIndex > 0 && currentIndex < projects.length && (
                <div
                    className={`${styles.btn_desc_container} ${styles.inactive_item_blurry}`}
                    onClick={() => setCurrentIndex(currentIndex - 1)}
                >
                    <ProjectShowcase
                        isImmutable={true}
                        headline={projects[currentIndex - 1].headline}
                        description={projects[currentIndex - 1].description}
                        images={projects[currentIndex - 1].images}
                    />
                </div>
            )}

            <div
                key={
                    currentIndex
                } /* IMPORTANT: DO NOT REMOVE key={currentIndex}. This needed so that React really renders this
                div after currentIndex changes, consequently triggering the associated keyframe with the css class 'project_showcase_highlight_animation'*/
                className={`${styles.project_showcase}  ${styles.hero_project}  ${styles.project_showcase_highlight_animation}`}
            >
                <ProjectShowcase
                    headline={headline}
                    description={description}
                    images={images}
                />
            </div>

            {currentIndex !== projects.length - 1 && (
                <div
                    className={`${styles.btn_desc_container} ${styles.btn_container_next} ${styles.inactive_item_blurry}`}
                    onClick={() => setCurrentIndex(currentIndex + 1)}
                >
                    <ProjectShowcase
                        isImmutable={true}
                        headline={projects[currentIndex + 1].headline}
                        description={projects[currentIndex + 1].description}
                        images={projects[currentIndex + 1].images}
                    />
                </div>
            )}
        </div>
    );
}
