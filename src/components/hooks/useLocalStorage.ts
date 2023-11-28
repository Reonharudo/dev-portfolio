"use client";
import {
    Dispatch,
    SetStateAction,
    useCallback,
    useEffect,
    useState,
} from "react";

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
    const initValue = useCallback(() => {
        try {
            const prevVal = localStorage.getItem(key);
            if (prevVal) {
                return prevVal;
            }
        } catch (err) {
            return initialValue;
        }
    }, [key, initialValue]);

    const [value, setValue] = useState<string | undefined>(initValue);

    const handleStorageChange = useCallback((ev: StorageEvent) => {
        const key = ev.key;
        if (key) {
            const latestVal = localStorage.getItem(key);
            if (latestVal) {
                setValue(latestVal);
            }
        }
    }, []);

    useEffect(() => {
        window.addEventListener("storage", handleStorageChange);

        return () => {
            window.removeEventListener("storage", handleStorageChange);
        };
    }, [handleStorageChange]);

    useEffect(() => {
        try {
            if (value) {
                localStorage.setItem(key, value);
            }
        } catch (err) {
            console.warn(err);
        }
    }, [value, key]);

    return [value, setValue];
}
