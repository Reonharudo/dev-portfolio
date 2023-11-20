"use client";
import { CircularBtn } from "./CircularBtn/CircularBtn";
import Image from "next/image";
import styles from "./ImageGallery.module.css";
import { useLayoutEffect, useRef, useState } from "react";

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

    if (images.length === 0) {
        return null;
    }

    return (
        <div className={styles.container}>
            {/* Hero Image */}
            <div className={styles.image_desc_wrapper}>
                <Image
                    key={currentIndex}
                    src={images[currentIndex].imageURL}
                    alt={"project"}
                    className={`${styles.image} ${
                        isImmutable
                            ? undefined
                            : styles.animate_slide_from_right
                    }`}
                    width={1000}
                    height={600}
                ></Image>
                <p>{images[currentIndex].description}</p>
            </div>

            {!isImmutable && (
                <div className={styles.btn_wrapper}>
                    <button className={styles.play_btn}>
                        {"Pause "}
                        <Image
                            src={"/button-svg/stop_circle.svg"}
                            alt={"project"}
                            className={styles.image}
                            width={20}
                            height={20}
                        ></Image>
                    </button>
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
