"use client"

import useSWR from "swr";
import { flushSync } from "react-dom";
import { useRef, useState } from "react";

import fetcherWithAccessToken from "@/app/api/fetcherWithAccessToken";

export const useStoryData = () => {
    const { data, error, isLoading, isValidating } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/secure/story/`, fetcherWithAccessToken);

    return { storyProps: data, error, isLoading, isValidating }
};

export const useStoryControls = () => {
    const storyItemSelectedRef = useRef(null);
    const [storyItemIndex, setStoryItemIndex] = useState(0);

    const handleShowPrevStory = () => {
        flushSync(() => {
            if (storyItemIndex > 0){
                setStoryItemIndex(storyItemIndex - 3 < 0 ? 0 : storyItemIndex - 3);
            } else {
                setStoryItemIndex(0);
            }
        });
        if (storyItemSelectedRef.current) {
            storyItemSelectedRef.current.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center"
            });
        }
    }

    const handleShowNextStory = (maxIndex) => {
        flushSync(() => {
            const newIndex = storyItemIndex + 3;
            if (newIndex < maxIndex) {
                setStoryItemIndex(newIndex);
            } else {
                setStoryItemIndex(maxIndex - 1);
            }
        });
        if (storyItemSelectedRef.current) {
            storyItemSelectedRef.current.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center"
            });
        }
    }

    return { storyItemSelectedRef, storyItemIndex, handleShowPrevStory, handleShowNextStory };
};