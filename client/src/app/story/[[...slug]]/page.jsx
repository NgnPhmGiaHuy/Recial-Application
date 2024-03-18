"use client"

import { LoadingPageComponent, MediaPageScaffold } from "@/components";
import { handleNewPostData } from "@/utils/handleNewData";
import { useMediaData, useUserData, useWebSocket, useWithAuth } from "@/hooks";

const StoryPage = ({ searchParams }) => {
    const url = process.env.NEXT_PUBLIC_API_URL + "/api/v1/public/media/story/?" + new URLSearchParams(searchParams).toString();

    const { userProps } = useUserData();
    const { mediaProps } = useMediaData(url);

    // const onDataReceived = async (data) => {
    //     await handleNewPostData(data, mediaProps, setMediaProps)
    // };
    //
    // useWebSocket(process.env.NEXT_PUBLIC_WEBSOCKET_URL, onDataReceived);

    return (
        <>
            { mediaProps ? (
                <div className="relative">
                    <MediaPageScaffold mediaType="Story"/>
                </div>
            ) : (
                <LoadingPageComponent/>
            ) }
        </>
    );
};

export default useWithAuth(StoryPage);