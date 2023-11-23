"use client";
import { CircularBtn } from "./CircularBtn/CircularBtn";
import Image from "next/image";
import styles from "./ImageGallery.module.css";
import { useEffect, useRef, useState } from "react";
import { AnimationBtn } from "./AnimationBtn/AnimationBtn";
import { off } from "process";

export enum SpawnAnimation {
    SWIPE_FROM_LEFT,
    SWIPE_FROM_RIGHT,
    DEFAULT,
}

export interface ImageWithDescription {
    imageURL: string;
    description?: string;
}

interface ImageGalleryProps {
    images: ImageWithDescription[];
    isImmutable: boolean;
    spawnAnimation?: SpawnAnimation;
}

export function ImageGallery({
    images = [],
    isImmutable = false,
    spawnAnimation = SpawnAnimation.DEFAULT,
}: Readonly<ImageGalleryProps>) {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const prevIndex = useRef<number>(currentIndex);
    const heroImageRef = useRef<HTMLImageElement | null>(null);
    const wasInitialAnimationClassNameAssigned = useRef<boolean>(false);

    const currentIntervalRef = useRef<NodeJS.Timeout | null>(null);
    const [isAutomaticImageSliderActive, setIsAutomaticImageSliderActice] =
        useState<boolean>(true);

    const containerRef = useRef<HTMLDivElement | null>(null);

    if (images.length === 0) {
        return null;
    }

    function getInitialAnimationClassNameOnMount() {
        if (wasInitialAnimationClassNameAssigned.current) {
            return undefined;
        }

        switch (spawnAnimation) {
            case SpawnAnimation.SWIPE_FROM_LEFT:
                return styles.animate_slide_from_left;
            case SpawnAnimation.SWIPE_FROM_RIGHT:
                return styles.animate_slide_from_right;
            case SpawnAnimation.DEFAULT:
                return undefined;
        }
    }

    function getDynamicAnimationClassNameDependingOnIndex() {
        if (currentIndex > prevIndex.current) {
            return styles.animate_slide_from_right;
        } else if (currentIndex < prevIndex.current) {
            return styles.animate_slide_from_left;
        }
    }

    useEffect(() => {
        /*
            as currentIndex is updated, it means we can assume 
            the initial animation has already run.
        */
        wasInitialAnimationClassNameAssigned.current = true;

        /*
            save prevIndex as useEffect() runs before 
            the actual rendering process
        */
        prevIndex.current = currentIndex;
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

    function scrollToElement(buttonElem: HTMLButtonElement | null) {
        buttonElem?.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
        });

        console.log(buttonElem, buttonElem?.getBoundingClientRect());
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
                    className={`${
                        styles.image
                    } ${getInitialAnimationClassNameOnMount()} ${getDynamicAnimationClassNameDependingOnIndex()}`}
                    width={1000}
                    height={600}
                ></Image>
                <p className={styles.image_desc}>
                    {images[currentIndex].description}
                </p>
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

            <div className={styles.selection_btn_group} ref={containerRef}>
                {images.map((_value, index) => (
                    <div className={styles.btn_carousel_item}>
                        <CircularBtn
                            handleOnActive={scrollToElement}
                            disable={isImmutable}
                            key={index}
                            isActive={index === currentIndex}
                            handleClick={() => setCurrentIndex(index)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
