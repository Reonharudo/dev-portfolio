import {
    ImageWithDescription,
    ImageGallery,
} from "@/components/ImageGallery/ImageGallery";
import styles from "./ProjectShowcase.module.css";

export interface IntProjectShowcase {
    headline: string;
    description: string;
    images: ImageWithDescription[];
    isImmutable?: boolean;
}

export function ProjectShowcase({
    headline,
    description,
    images,
    isImmutable = false,
}: IntProjectShowcase) {
    return (
        <div className={`${styles.background} ${styles.container}`}>
            <div className={styles.image_gallery}>
                <ImageGallery
                    isImmutable={isImmutable}
                    images={images}
                ></ImageGallery>
            </div>

            <div className={styles.description}>
                <h1>{headline}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
}
