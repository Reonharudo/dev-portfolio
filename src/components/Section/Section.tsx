import { useEffect, useRef } from "react";

interface SectionProps {
    id: string;
    text: string;
    handleWhenVisibleInViewport: () => any;
}

export function Section({
    id,
    text,
    handleWhenVisibleInViewport,
}: SectionProps) {
    const sectionRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const node = sectionRef.current;
        if (!node) {
            return;
        }

        const observer = new IntersectionObserver(handleWhenVisibleInViewport, {
            rootMargin: "0px",
            threshold: 1,
        });
        observer.observe(node);

        return () => {
            observer.disconnect();
        };
    }, [handleWhenVisibleInViewport]);

    return (
        <section id={id} ref={sectionRef}>
            {text}
        </section>
    );
}
