"use client"

import { handleNewPostData } from "@/utils/handleNewData";
import { LoadingPageComponent, MediaPageScaffold } from "@/components";
import { useStoryData, useUserData, useWebSocket, useWithAuth } from "@/hooks";

const StoryPage = ({ searchParams }) => {
    const urlParams = new URLSearchParams(searchParams);

    const user = urlParams.get("user");
    const story = urlParams.get("story");

    const { userProps } = useUserData();
    const { mediaProps } = useStoryData(user, story);

    // const onDataReceived = async (data) => {
    //     await handleNewPostData(data, mediaProps, setMediaProps)
    // };
    //
    // useWebSocket(process.env.NEXT_PUBLIC_WEBSOCKET_URL, onDataReceived);

    return (
        <>
            { mediaProps ? (
                <div className="relative">
                    <MediaPageScaffold/>
                </div>
            ) : (
                <LoadingPageComponent/>
            ) }
        </>
    );
};

export default useWithAuth(StoryPage);