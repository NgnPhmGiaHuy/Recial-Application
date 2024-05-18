"use client"

import { shallowEqual, useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";

const useMediaCopyLink = () => {
    const mediaProps = useSelector(state => state.media, shallowEqual);

    const [currentURL, setCurrentURL] = useState("");
    const [copyLinkSuccess, setCopyLinkSuccess] = useState("");

    useEffect(() => {
        if (typeof window !== "undefined") {
            setCurrentURL(window.location.href);
        }
    }, []);


    const handleCopyToClipboard = useCallback(() => {
        navigator.clipboard.writeText(currentURL)
            .then(() => setCopyLinkSuccess('Copied!'))
            .catch((error) => console.error('Failed to copy:', error));
    }, [mediaProps?._id]);

    return { currentURL, copyLinkSuccess, handleCopyToClipboard };
}

export default useMediaCopyLink;