"use client";
import { CircularBtn } from "./CircularBtn/CircularBtn";
import Image from "next/image";
import styles from "./ImageGallery.module.css";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimationBtn } from "./AnimationBtn/AnimationBtn";

export interface ImageWithDescription {
    imageURL: string;
    description?: string;
}

interface ImageGalleryProps {
    images: ImageWithDescription[];
    isImmutable: boolean;
}

export function ImageGallery({
    images = [],
    isImmutable = false,
}: Readonly<ImageGalleryProps>) {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const prevIndex = useRef<number>(currentIndex);
    const heroImageRef = useRef<HTMLImageElement | null>(null);

    const currentIntervalRef = useRef<NodeJS.Timeout | null>(null);
    const [isAutomaticImageSliderActive, setIsAutomaticImageSliderActice] =
        useState<boolean>(true);

    if (images.length === 0) {
        return null;
    }

    function getAnimationClassName() {
        if (currentIndex > prevIndex.current) {
            return styles.animate_slide_from_right;
        } else if (currentIndex < prevIndex.current) {
            return styles.animate_slide_from_left;
        }
    }

    useEffect(() => {
        prevIndex.current = currentIndex; //save prevIndex as useEffect() runs before the actual rendering process
    }, [currentIndex]);

    function slideThroughImages() {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                // Calculate the next index based on the current index
                let nextIndex = prevIndex + 1;

                // If the next index is out of bounds, reset to the first image
                if (nextIndex >= images.length) {
                    nextIndex = 0;
                }

                return nextIndex;
            });
        }, 4000);
        return interval;
    }

    useEffect(() => {
        if (currentIntervalRef.current) {
            clearInterval(currentIntervalRef.current);
        }
        if (!isImmutable && isAutomaticImageSliderActive) {
            const interval = slideThroughImages();
            currentIntervalRef.current = interval;

            return () => {
                clearInterval(interval);
            };
        }
    }, [isAutomaticImageSliderActive, currentIndex]);

    return (
        <div className={styles.container}>
            {/* Hero Image */}
            <div className={styles.image_desc_wrapper}>
                <Image
                    ref={heroImageRef}
                    key={currentIndex}
                    src={images[currentIndex].imageURL}
                    alt={"project"}
                    className={`${styles.image} ${getAnimationClassName()}`}
                    width={1000}
                    height={600}
                ></Image>
                <p>{images[currentIndex].description}</p>
            </div>

            {!isImmutable && (
                <div className={styles.btn_wrapper}>
                    <AnimationBtn
                        showStop={isAutomaticImageSliderActive}
                        onClick={() =>
                            setIsAutomaticImageSliderActice(
                                !isAutomaticImageSliderActive
                            )
                        }
                    />
                </div>
            )}

            <div className={styles.selection_btn_group}>
                {images.map((value, index) => (
                    <CircularBtn
                        disable={isImmutable}
                        key={index}
                        isActive={index === currentIndex}
                        handleClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
}
