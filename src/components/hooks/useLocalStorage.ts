"use client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface useLocalStorageProps<T extends string> {
    key: string;
    initialValue?: T;
}

export function useLocalStorage<T extends string>({
    key,
    initialValue,
}: useLocalStorageProps<T>): [
    string | undefined,
    Dispatch<SetStateAction<string | undefined>>
] {
    const [value, setValue] = useState<string | undefined>(initialValue);

    function handleStorageChange(ev: StorageEvent) {
        const key = ev.key;
        if (key) {
            const latestVal = localStorage.getItem(key);
            if (latestVal) {
                setValue(latestVal);
            }
        }
    }

    useEffect(() => {
        if (!initialValue) {
            const prevVal = localStorage.getItem(key);
            if (prevVal) {
                setValue(prevVal);
            }
        }
        window.addEventListener("storage", handleStorageChange);
    }, [initialValue, key]);

    useEffect(() => {
        if (value) {
            localStorage.setItem(key, value);
        }
    }, [key, value]);

    return [value, setValue];
}
