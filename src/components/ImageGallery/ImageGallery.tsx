"use client";
import { CircularBtn } from "./CircularBtn/CircularBtn";
import Image from "next/image";
import styles from "./ImageGallery.module.css";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimationBtn } from "./AnimationBtn/AnimationBtn";

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
    onImageChange: (imageIndex: number) => any;
}

export function ImageGallery({
    images = [],
    isImmutable = false,
    spawnAnimation = SpawnAnimation.DEFAULT,
    onImageChange,
}: Readonly<ImageGalleryProps>) {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const prevIndex = useRef<number>(currentIndex);
    const heroImageRef = useRef<HTMLImageElement | null>(null);
    const wasInitialAnimationClassNameAssigned = useRef<boolean>(false);

    const currentIntervalRef = useRef<NodeJS.Timeout | null>(null);
    const [isAutomaticImageSliderActive, setIsAutomaticImageSliderActice] =
        useState<boolean>(true);

    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        onImageChange(currentIndex);
    }, [currentIndex]);

    const slideThroughImagesAutomatic = useCallback(() => {
        if (!isImmutable) {
            //clear prev interval
            clearPrevInterval();

            //set new interval
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

            currentIntervalRef.current = interval;
        }
    }, [isImmutable, images]);

    useEffect(() => {
        slideThroughImagesAutomatic();
    }, [isImmutable, slideThroughImagesAutomatic]);

    useEffect(() => {
        /*
            as currentIndex is updated, it means we can assume 
            the initial animation has already run.
        */
        wasInitialAnimationClassNameAssigned.current = true;

        /*
            save prevIndex as useEffect() runs before 
            the actual rendering process due to ref not being mutated during
            rendering processes
        */
        prevIndex.current = currentIndex;
    }, [currentIndex]);

    if (images.length === 0) {
        return null;
    }

    /**
     * Returns animation CSS classname after mount [] otherwise
     * undefinied is returned
     *
     * @returns css classname or undefinied
     */
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

    function clearPrevInterval() {
        if (currentIntervalRef.current) {
            clearInterval(currentIntervalRef.current);
        }
    }

    function scrollToElement(buttonElem: HTMLButtonElement | null) {
        // Check if container is in viewport
        const isContainerInViewport = () => {
            const container = containerRef.current;
            if (!container) {
                return false;
            }

            const containerRect = container.getBoundingClientRect();
            return (
                containerRect.top >= 0 &&
                containerRect.left >= 0 &&
                containerRect.bottom <=
                    (window.innerHeight ||
                        document.documentElement.clientHeight) &&
                containerRect.right <=
                    (window.innerWidth || document.documentElement.clientWidth)
            );
        };

        if (isContainerInViewport()) {
            /* Now simulate minimal sliding effect */
            containerRef.current?.scrollBy({
                behavior: "smooth",
                left: 5,
            });

            buttonElem?.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "nearest",
            });
        }
    }

    function handleManualSlideThroughImage(newCurrentIndex: number) {
        //clear prev interval
        clearPrevInterval();

        setCurrentIndex(newCurrentIndex);
    }

    const openImageInNewTab = () => {
        if (!isImmutable) {
            window.open(images[currentIndex].imageURL, "_blank");
        }
    };

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
                    priority={true}
                    height={600}
                    placeholder={
                        "data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                    }
                    onClick={openImageInNewTab}
                ></Image>
                <p className={styles.image_desc}>
                    {images[currentIndex].description}
                </p>
            </div>

            <div className={styles.grid_button_container}>
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
                        <div className={styles.btn_carousel_item} key={index}>
                            <CircularBtn
                                handleOnActive={scrollToElement}
                                disable={isImmutable}
                                key={index}
                                isActive={index === currentIndex}
                                handleClick={() =>
                                    handleManualSlideThroughImage(index)
                                }
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
