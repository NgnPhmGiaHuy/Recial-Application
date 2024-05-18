"use client"

import { LoadingPageComponent, MediaPageScaffold } from "@/components";
import { handleNewPostData } from "@/utils/handleNewData";
import { usePostMediaData, useUserData, useWebSocket, useWithAuth } from "@/hooks";

const PostPage = ({ searchParams }) => {
    const urlParams = new URLSearchParams(searchParams);

    const user = urlParams.get("user");
    const post = urlParams.get("post");
    const photo = urlParams.get("photo");

    const { userProps } = useUserData();
    const { mediaProps } = usePostMediaData(user, post, photo);

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

export default useWithAuth(PostPage);