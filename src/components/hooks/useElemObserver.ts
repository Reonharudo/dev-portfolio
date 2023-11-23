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

        const node = elemRef.current;
        if (!node) {
            return;
        }

        const observer = new IntersectionObserver(handleIntersection, options);
        observer.observe(node);

        return () => {
            observer.disconnect();
        };
    }, [elemRef]);

    return isInViewport;
}
