"use client";
import { CircularBtn } from "./CircularBtn/CircularBtn";
import Image from "next/image";
import styles from "./ImageGallery.module.css";
import { useState } from "react";

export interface ImageWithDescription {
    imageURL: string;
    description?: string;
}

export interface ImageGalleryProps {
    images: ImageWithDescription[];
}

export function ImageGallery({ images = [] }: Readonly<ImageGalleryProps>) {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    if (images.length === 0) {
        return null;
    }

    return (
        <div className={styles.container}>
            <div className={styles.image_desc_wrapper}>
                <Image
                    src={images[currentIndex].imageURL}
                    alt={"project"}
                    className={styles.image}
                    width={1000}
                    height={600}
                ></Image>
                <p>{images[currentIndex].description}</p>
            </div>

            <div className={styles.selection_btn_group}>
                {images.map((value, index) => (
                    <CircularBtn
                        isActive={index === currentIndex}
                        handleClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
}
