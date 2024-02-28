"use client"

import { useRef } from "react";

const useMultipleRefs = (refNames) => {
    const refs = Object.entries(refNames).reduce((acc, [name, initialValue]) => {
        acc[name] = useRef(initialValue);
        return acc;
    }, {});

    return refs;
};

export default useMultipleRefs;

