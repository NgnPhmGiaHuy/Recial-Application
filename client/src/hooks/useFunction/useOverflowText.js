"use client"

import { useEffect, useRef, useState } from "react";

import { useToggleState } from "@/hooks";

const useOverflowText = (depends) => {
    const textRef = useRef(null);
    const [isOverflowing, setIsOverflowing] = useState(false);
    const [showMoreText, setShowMoreText, handleShowMoreText] = useToggleState(false);

    useEffect(() => {
        if (textRef.current) {
            const { clientHeight, scrollHeight } = textRef.current;
            setIsOverflowing(scrollHeight > clientHeight);
        }
    }, [depends]);

    return { textRef, showMoreText, isOverflowing, handleShowMoreText };
}

export default useOverflowText;