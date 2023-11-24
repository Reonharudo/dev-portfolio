"use client";
import {
    ImageWithDescription,
    ImageGallery,
    SpawnAnimation,
} from "@/components/ImageGallery/ImageGallery";
import styles from "./ProjectShowcase.module.css";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import { useState } from "react";

export interface IntProjectShowcase {
    headline: string;
    description: string;
    images: ImageWithDescription[];
    isImmutable?: boolean;
    spawnAnimation?: SpawnAnimation;
}

export function ProjectShowcase({
    headline,
    description,
    images,
    isImmutable = false,
    spawnAnimation = SpawnAnimation.DEFAULT,
}: IntProjectShowcase) {
    const [currentImageCount, setCurrentImageCount] = useState<number>(0);

    return (
        <div
            className={`${styles.background} ${styles.container} ${
                isImmutable ? styles.immutable : ""
            }`}
        >
            <div className={styles.image_gallery}>
                <ImageGallery
                    onImageChange={(index: number) =>
                        setCurrentImageCount(index + 1)
                    }
                    spawnAnimation={spawnAnimation}
                    isImmutable={isImmutable}
                    images={images}
                />
            </div>

            <div className={styles.description_container}>
                {!isImmutable && (
                    <ProgressBar
                        maximum={images.length}
                        count={currentImageCount}
                    />
                )}
                <h1 className={styles.project_headline}>{headline}</h1>
                <p
                    className={
                        isImmutable
                            ? styles.description_immutable
                            : styles.description
                    }
                >
                    {description}
                </p>
            </div>
        </div>
    );
}
