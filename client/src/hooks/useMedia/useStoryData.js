"use client"

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useGetMediaFetcher } from "@/hooks";
import { clearMediaDataRecent, setMediaAuthorData, setMediaCommentData, setMediaData, setMediaReactionData } from "@/store/actions/media/mediaActions";

const useStoryData = (user, story) => {
    const dispatch = useDispatch();

    const endpoints = [
        { url: `story/?story_id=${story}`, action: setMediaData },
        { url: `story/author/?user_id=${user}`, action: setMediaAuthorData },
        { url: `story/comment/?story_id=${story}`, action: setMediaCommentData },
        { url: `story/reaction/?story_id=${story}`, action: setMediaReactionData },
    ];

    const results = endpoints.map(({ url, action }) => useGetMediaFetcher(url, action, dispatch));

    useEffect(() => {
        dispatch(clearMediaDataRecent());
    }, [dispatch]);

    return {
        mediaProps: results[0].data,
        mediaAuthorProps: results[1].data,
        mediaCommentProps: results[2].data,
        mediaReactionProps: results[3].data,
        errors: results.map(result => result.error),
        loadingStates: results.map(result => result.isLoading),
        validatingStates: results.map(result => result.isValidating),
    };
}

export default useStoryData;