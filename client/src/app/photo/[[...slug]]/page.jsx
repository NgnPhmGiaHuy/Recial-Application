"use client"

import { MediaPageScaffold } from "@/components";
import { handleNewPostData } from "@/utils/handleNewData";
import { useMediaData, useUserData, useWebSocket } from "@/hooks";

const PhotoPage = ({ searchParams }) => {
    const url = process.env.NEXT_PUBLIC_API_URL + "/api/v1/media/photo/?" + new URLSearchParams(searchParams).toString();

    const { userProps } = useUserData();
    const { mediaProps, setMediaProps } = useMediaData(url);

    const onDataReceived = async (data) => {
        await handleNewPostData(data, mediaProps, setMediaProps)
    };

    useWebSocket(process.env.NEXT_PUBLIC_WEBSOCKET_URL, onDataReceived);

    return (
        <div className="relative">
            <MediaPageScaffold userProps={userProps} mediaProps={mediaProps} mediaType="Photo"/>
        </div>
    );
};

export default PhotoPage;