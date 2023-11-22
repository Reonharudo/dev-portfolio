"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./AboutSection.module.css";
import { ImageGallery } from "../ImageGallery/ImageGallery";
import { SectionHeadline } from "../SectionHeadline/SectionHeadline";

export function AboutSection() {
    const [showImageGallery, setShowImageGallery] = useState<boolean>(false);

    const btnRef = useRef<HTMLButtonElement | null>(null);
    const imageGalleryWrapper = useRef<HTMLDivElement | null>(null);

    function scrollToBtn() {
        btnRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "center", // Center the element in the viewport
            inline: "nearest",
        });
    }

    function scrollToImageGallery() {
        imageGalleryWrapper.current?.scrollIntoView({
            behavior: "smooth",
            block: "center", // Center the element in the viewport
            inline: "nearest",
        });
    }

    function calculateAge(birthYear = 2001, birthMonth = 2, birthDay = 5) {
        const today = new Date();
        const birthdate = new Date(birthYear, birthMonth - 1, birthDay);

        let age = today.getFullYear() - birthdate.getFullYear();

        if (
            today.getMonth() < birthdate.getMonth() ||
            (today.getMonth() === birthdate.getMonth() &&
                today.getDate() < birthdate.getDate())
        ) {
            age--;
        }

        return age;
    }

    useEffect(() => {
        if (showImageGallery) {
            scrollToImageGallery();
        }
    }, [showImageGallery]);

    return (
        <section id="about" className={styles.container}>
            <SectionHeadline>About</SectionHeadline>
            <div className={styles.content}>
                <div className={styles.description_container}>
                    <p>Welcome on my page!</p>
                    <p>
                        I am a {calculateAge()} year old Software Engineer with
                        a relentless passion for learning and staying at the
                        forefront of technology.
                    </p>
                    <p>
                        I embrace the philosophy that FOMO(Fear of Missing Out)
                        drives continuous improvement in our rapidly evolving
                        field.
                    </p>

                    <p>
                        Beyond my software engineering endeavours, I am a
                        hardware enthusiast as you may see on the{" "}
                        <span
                            className={styles.inline_btn}
                            onClick={scrollToBtn}
                        >
                            pictures
                        </span>{" "}
                        :) <br />
                        Additionally, I actively collect and peruse Wikipedia
                        articles spanning topics from medical science to
                        philosophical or history, maintaining them as valuable
                        references.
                    </p>
                    <p>Thank you for reading!</p>
                    <p>Leonhard Muellauer</p>
                </div>

                {showImageGallery && (
                    <div
                        className={styles.image_gallery_wrapper}
                        ref={imageGalleryWrapper}
                    >
                        <button
                            className={styles.btn}
                            onClick={() => setShowImageGallery(false)}
                        >
                            Hide
                        </button>
                        <ImageGallery
                            images={[
                                {
                                    imageURL:
                                        "/projects/engaku/add_series_modal.png",
                                },
                            ]}
                            isImmutable={false}
                        />
                    </div>
                )}
                {!showImageGallery && (
                    <div className={styles.image_section}>
                        <button
                            onClick={() => setShowImageGallery(true)}
                            ref={btnRef}
                            className={styles.btn}
                            id="show_images_about_section"
                        >
                            Show Pictures
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
