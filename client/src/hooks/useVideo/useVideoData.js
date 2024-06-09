"use client"

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useGetVideoMediaFetcher } from "@/hooks";
import { clearMediaDataRecent, setMediaAuthorData, setMediaCommentData, setMediaData, setMediaReactionData, setMediaSavedData } from "@/store/actions/media/mediaActions";

const useVideoData = (videoId) => {
    const dispatch = useDispatch();

    const endpoints = [
        { url: `info/?video_id=${videoId}`, action: setMediaData },
        { url: `saved/?video_id=${videoId}`, action: setMediaSavedData },
        { url: `author/?video_id=${videoId}`, action: setMediaAuthorData },
        { url: `comment/?video_id=${videoId}`, action: setMediaCommentData },
        { url: `reaction/?video_id=${videoId}`, action: setMediaReactionData },
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
