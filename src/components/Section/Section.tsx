import { useEffect, useRef } from "react"

interface SectionProps {
    id: string,
    text: string,
    handleWhenVisibleInViewport: () => any
}

export function Section({
    id,
    text,
    handleWhenVisibleInViewport
}: SectionProps) {
    const sectionRef = useRef<HTMLElement | null>(null)

    const observer = new IntersectionObserver(handleWhenVisibleInViewport, { rootMargin: "0px", threshold: 1 });

    useEffect(() => {
        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }
    }, [handleWhenVisibleInViewport])


    return <section id={id} ref={sectionRef}>
        {text}
    </section>
}