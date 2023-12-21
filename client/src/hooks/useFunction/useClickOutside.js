"use client"

import { useEffect } from "react";

const useClickOutside = (ref, state, setState) => {
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setState(false);
            }
        };

        if (state) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [state]);
};

export default useClickOutside;
