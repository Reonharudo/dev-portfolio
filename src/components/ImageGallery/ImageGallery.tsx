"use client";
import { CircularBtn } from "./CircularBtn/CircularBtn";
import Image from "next/image";
import styles from "./ImageGallery.module.css";
import { useState } from "react";

interface ImageGalleryProps {
    imageURLs: string[];
}

export function ImageGallery({
    imageURLs = [
        "/projects/engaku/engaku_collection_list.png",
        "/projects/engaku/add_series_modal.png",
    ],
}: Readonly<ImageGalleryProps>) {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    return (
        <div className={`${styles.background} ${styles.container}`}>
            <div className={styles.image_wrapper}>
                <Image
                    src={imageURLs[currentIndex]}
                    alt={"project"}
                    className={styles.image}
                    width={1000}
                    height={600}
                ></Image>
            </div>

            <div className={styles.selection_btn_group}>
                {imageURLs.map((value, index) => (
                    <CircularBtn
                        isActive={index === currentIndex}
                        handleClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>

            <div className={styles.description}>
                <h1>Engaku</h1>
            </div>
        </div>
    );
}
