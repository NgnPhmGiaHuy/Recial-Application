"use client"

import {MediaPageScaffold} from "@/components";
import {useMediaData, useTokenRefresh, useUserData, useWebSocket} from "@/hooks";
import {handleNewData} from "@/utils/handleNewData";

const PostPage = ({searchParams}) => {
    useTokenRefresh();

    const url = process.env.NEXT_PUBLIC_API_URL + "/api/v1/media/post/?" + new URLSearchParams(searchParams).toString();

    const { userProps } = useUserData();
    const { mediaProps, setMediaProps } = useMediaData(url);

    const onDataReceived = async (data) => {
        await handleNewData(data, mediaProps, setMediaProps)
    };

    useWebSocket(process.env.NEXT_PUBLIC_WEBSOCKET_URL, onDataReceived);

    return (
        <div className="relative">
            <MediaPageScaffold userProps={userProps} mediaProps={mediaProps} mediaType="Photo"/>
        </div>
    );
};

export default PostPage;