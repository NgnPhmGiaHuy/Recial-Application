"use client"

import { useEffect } from "react";

const useScrollHandler = (callback, dependencies) => {
    const debounce = (func, delay) => {
        let timeoutId;

        return function (...args) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func.apply(this, args);
            }, delay);
        };
    };

    useEffect(() => {
        const handleScroll = debounce(async () => {
            await callback();
        }, 200);

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, dependencies);
};

export default useScrollHandler;
