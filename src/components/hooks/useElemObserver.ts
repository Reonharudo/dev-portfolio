"use client";

import { MutableRefObject, useEffect, useState } from "react";

export function useElemObserver(elemRef: MutableRefObject<HTMLElement | null>) {
    const [isInViewport, setIsInViewport] = useState<boolean>();

    function handleIntersection([entry]: IntersectionObserverEntry[]) {
        setIsInViewport(entry.isIntersecting);
    }

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0,
        };

        const observer = new IntersectionObserver(handleIntersection, options);

        if (elemRef.current) {
            observer.observe(elemRef.current);
        }

        return () => {
            if (elemRef.current) {
                observer.unobserve(elemRef.current);
            }
        };
    }, []);

    return isInViewport;
}
