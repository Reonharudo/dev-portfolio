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
                    className={`${styles.btn_desc_container} ${styles.btn_container_prev}`}
                >
                    <button
                        className={styles.prev_btn}
                        onClick={() => setCurrentIndex(currentIndex - 1)}
                    >
                        <Image
                            src={"/button-svg/arrow_left.svg"}
                            alt={"project"}
                            width={20}
                            height={20}
                        ></Image>
                    </button>
                    <span className={styles.tooltip}>Previous Project</span>
                </div>
            )}

            <div className={styles.project_showcase}>
                <ProjectShowcase
                    headline={headline}
                    description={description}
                    images={images}
                />
            </div>

            {currentIndex !== projects.length - 1 && (
                <div
                    className={`${styles.btn_desc_container} ${styles.btn_container_next}`}
                >
                    <button
                        className={styles.next_btn}
                        onClick={() => setCurrentIndex(currentIndex + 1)}
                    >
                        <Image
                            src={"/button-svg/arrow_right.svg"}
                            alt={"project"}
                            width={20}
                            height={20}
                        ></Image>
                    </button>
                    <span className={styles.tooltip}>Next Project</span>
                </div>
            )}
        </div>
    );
}
