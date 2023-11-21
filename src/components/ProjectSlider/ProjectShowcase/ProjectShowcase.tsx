import {
    ImageWithDescription,
    ImageGallery,
    SpawnAnimation,
} from "@/components/ImageGallery/ImageGallery";
import styles from "./ProjectShowcase.module.css";

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
    return (
        <div className={`${styles.background} ${styles.container}`}>
            <div className={styles.image_gallery}>
                <ImageGallery
                    spawnAnimation={spawnAnimation}
                    isImmutable={isImmutable}
                    images={images}
                />
            </div>

            <div className={styles.description}>
                <h1>{headline}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
}
