"use client"

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";

const useMediaNavigation = (url) => {
    const router = useRouter();
    const mediaProps = useSelector(state => state.media, shallowEqual);

    const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
    const [showPrev, setShowPrev] = useState(false);
    const [showNext, setShowNext] = useState(false);

    useEffect(() => {
        const currentIndex = mediaProps?.media_recent?.indexOf(mediaProps?._id);
        if (currentIndex !== -1) {
            setCurrentMediaIndex(currentIndex);
        }
    }, [mediaProps]);

    useEffect(() => {
        if (mediaProps?.media_recent) {
            setShowPrev(currentMediaIndex !== 0);
            setShowNext(currentMediaIndex < mediaProps.media_recent.length - 1);
        }
    }, [currentMediaIndex, mediaProps, setShowPrev, setShowNext]);


    const fetchMediaURL = (mediaId) => {
        const urlObject = new URL(url, window.location.origin);
        const params = new URLSearchParams(urlObject.search);

        params.set("photo", mediaId);

        urlObject.search = params.toString();

        return urlObject.pathname + urlObject.search;
    };

    const fetchMedia = (indexDelta) => {
        const newIndex = currentMediaIndex + indexDelta;

        if (newIndex >= 0 && newIndex < mediaProps?.media_recent?.length) {
            const newMediaId = mediaProps.media_recent[newIndex];

            const mediaURL = fetchMediaURL(newMediaId);

            router.replace(mediaURL);

            return setCurrentMediaIndex(newIndex);
        }
    };

    const fetchPreviousMedia = () => {
        fetchMedia(-1);
    };

    const fetchNextMedia = () => {
        fetchMedia(1);
    };

    const handleExistClick = async () => {
        return router.back();
    };

    return { currentMediaIndex, showPrev, showNext, handleExistClick, fetchPreviousMedia, fetchNextMedia };
};

export default useMediaNavigation;
