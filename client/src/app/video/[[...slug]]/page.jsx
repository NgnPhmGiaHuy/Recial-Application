"use client"

import { useDispatch } from "react-redux";

import { handleNewMediaData } from "@/utils";
import { useVideoData, useWebSocket, useWithAuth } from "@/hooks";
import { LoadingPageComponent, MediaPageScaffold } from "@/components";

const VideoPage = ({ searchParams }) => {
    const urlParams = new URLSearchParams(searchParams);

    const video = urlParams.get("video");
    const progress = urlParams.get("progress");

    const dispatch = useDispatch();
    const { errors, loadingStates } = useVideoData(video);

    const onDataReceived = async (data) => {
        await handleNewMediaData(data, dispatch);
    };

    useWebSocket(process.env.NEXT_PUBLIC_WEBSOCKET_URL, onDataReceived);

    const hasError = errors.some(error => error);
    const isLoading = loadingStates.some(isLoading => isLoading);

    if (isLoading) {
        return <LoadingPageComponent />;
    }

    if (hasError) {
        return <div>Error loading data...</div>;
    }

    return (
        <div className="relative">
            <MediaPageScaffold progress={progress}/>
        </div>
    );
};

export default useWithAuth(VideoPage);
