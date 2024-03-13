"use client"

import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { useToggleState } from "@/hooks";

const useMediaNavigation = () => {
    const router = useRouter();
    const mediaProps = useSelector(state => state.media);
    const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

    const [showPrevButton, setShowPrevButton, handleShowPrevButton] = useToggleState(false);
    const [showNextButton, setShowNextButton, handleShowNextButton] = useToggleState(false);

    useEffect(() => {
        const currentIndex = mediaProps?.media?.media_recent?.indexOf(mediaProps?.media?._id);
        if (currentIndex !== -1) {
            setCurrentMediaIndex(currentIndex);
        }
    }, [mediaProps]);

    const fetchMediaURL = (mediaId, mediaType) => {
        let mediaURL;
        if (mediaType === "Story") {
            mediaURL = `http://localhost:3000/story?user=${mediaProps?.media?.user?.profile?._id}&set=${mediaId}`;
        } else if (mediaType === "Photo") {
            mediaURL = `http://localhost:3000/post?user=${mediaProps?.media?.user?.profile?._id}&post=${mediaProps.media.media_set}&photo=${mediaId}`;
        }
        return mediaURL;
    };

    const fetchMedia = (indexDelta) => {
        const newIndex = (currentMediaIndex + indexDelta + mediaProps?.media?.media_recent?.length) % mediaProps?.media?.media_recent?.length;
        const newMediaId = mediaProps?.media?.media_recent[newIndex];

        if (newMediaId) {
            const mediaType = mediaProps.media.media_type;
            const mediaURL = fetchMediaURL(newMediaId, mediaType);

            router.push(mediaURL);

            setCurrentMediaIndex(newIndex);
        }
    };

    const fetchPreviousMedia = () => {
        fetchMedia(-1);
    };

    const fetchNextMedia = () => {
        fetchMedia(1);
    };

    const handleExistClick = () => {
        return router.back();
    };

    return { currentMediaIndex, showPrevButton, showNextButton, handleExistClick, handleShowPrevButton, handleShowNextButton, fetchPreviousMedia, fetchNextMedia };
};

export default useMediaNavigation;
