"use client"

import { debounce} from "lodash";
import { useEffect } from "react";

const useScrollHandler = (callback, dependencies) => {
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
