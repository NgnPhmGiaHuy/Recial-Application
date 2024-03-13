"use client"

import { useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";

import { useCountComment, useCountLikeReaction, useOverflowText } from "@/hooks";

const useMediaPageFunctionality = () => {
    const userProps = useSelector(state => state.user);
    const mediaProps = useSelector(state => state.media);

    const totalLike = useCountLikeReaction(mediaProps?.media);
    const totalComment = useCountComment(mediaProps?.media);

    const [hasFollow, setHasFollow] = useState(false);
    const [currentURL, setCurrentURL] = useState("");
    const [copyLinkSuccess, setCopyLinkSuccess] = useState("");

    const {textRef, showMoreText, isOverflowing, handleShowMoreText} = useOverflowText(mediaProps?.media_text);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setCurrentURL(window.location.href);
        }
    }, []);

    useEffect(() => {
        const updateFollowStatus = () => {
            if (userProps?.user?._id === mediaProps?.media?.user?.profile?._id) {
                return setHasFollow(true);
            } else {
                userProps?.user?.following.map((value) => {
                    const foundUser = value?.user?._id === mediaProps?.media?.user?.profile?._id;
                    if (foundUser) {
                        setHasFollow(foundUser);
                    }
                })
            }
        };

        updateFollowStatus();
    }, [userProps, mediaProps]);

    const handleCopyToClipboard = useCallback(() => {
        navigator.clipboard.writeText(currentURL)
            .then(() => setCopyLinkSuccess('Copied!'))
            .catch((error) => console.error('Failed to copy:', error));
    }, [mediaProps?.media?._id]);

    return { totalLike, totalComment, hasFollow, currentURL, copyLinkSuccess, textRef, showMoreText, isOverflowing, handleShowMoreText, handleCopyToClipboard };
}

export default useMediaPageFunctionality;