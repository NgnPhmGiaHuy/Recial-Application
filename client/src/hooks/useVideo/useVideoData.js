"use client"

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useGetVideoMediaFetcher } from "@/hooks";
import { clearMediaDataRecent, setMediaAuthor, setMediaComment, setMediaData, setMediaReaction } from "@/store/actions/media/mediaActions";

const useVideoData = (videoId) => {
    const dispatch = useDispatch();

    const endpoints = [
        { url: `info/?video_id=${videoId}`, action: setMediaData },
        { url: `author/?video_id=${videoId}`, action: setMediaAuthor },
        { url: `comment/?video_id=${videoId}`, action: setMediaComment },
        { url: `reaction/?video_id=${videoId}`, action: setMediaReaction },
    ];

    const results = endpoints.map(({ url, action }) => useGetVideoMediaFetcher(url, action, dispatch));

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
};

export default useVideoData;
