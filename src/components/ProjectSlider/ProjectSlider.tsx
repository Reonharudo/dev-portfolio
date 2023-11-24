"use client";

import { useEffect, useRef, useState } from "react";
import {
    IntProjectShowcase,
    ProjectShowcase,
} from "./ProjectShowcase/ProjectShowcase";
import styles from "./ProjectSlider.module.css";
import { SpawnAnimation } from "../ImageGallery/ImageGallery";

interface ProjectSliderProps {
    projects: IntProjectShowcase[];
}

export function ProjectSlider({ projects = [] }: ProjectSliderProps) {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const prevIndex = useRef<number>(currentIndex);

    const startXCoordindate = useRef<number>(0);

    useEffect(() => {
        prevIndex.current = currentIndex;
    }, [currentIndex]);

    if (projects.length === 0) {
        return null;
    }

    function handleTouchStart(event: React.TouchEvent) {
        startXCoordindate.current = event.touches[0].clientX;
    }

    function handleTouchMove(event: React.TouchEvent) {
        const deltaX = event.touches[0].clientX - startXCoordindate.current;

        if (deltaX > 50) {
            // Swipe right
            setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
        } else if (deltaX < -50) {
            // Swipe left
            setCurrentIndex((prevIndex) =>
                Math.min(prevIndex + 1, projects.length - 1)
            );
        }
    }

    function getSpawnAnimation() {
        if (currentIndex > prevIndex.current) {
            return SpawnAnimation.SWIPE_FROM_RIGHT;
        } else if (currentIndex < prevIndex.current) {
            return SpawnAnimation.SWIPE_FROM_LEFT;
        }

        return SpawnAnimation.DEFAULT;
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
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                key={
                    currentIndex
                } /* IMPORTANT: DO NOT REMOVE key={currentIndex}. This needed so that React really renders this
                div after currentIndex changes, consequently triggering the associated keyframe with the css class 'project_showcase_highlight_animation'*/
                className={`${styles.project_showcase}  ${styles.hero_project}  ${styles.project_showcase_highlight_animation}`}
            >
                <ProjectShowcase
                    spawnAnimation={getSpawnAnimation()}
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
