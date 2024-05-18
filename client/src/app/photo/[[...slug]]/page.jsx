"use client"

import { handleNewPostData } from "@/utils/handleNewData";
import { LoadingPageComponent, MediaPageScaffold } from "@/components";
import { usePhotoData, useUserData, useWebSocket, useWithAuth } from "@/hooks";

const PhotoPage = ({ searchParams }) => {
    const urlParams = new URLSearchParams(searchParams);

    const user = urlParams.get("user");
    const photo = urlParams.get("photo");

    const { userProps } = useUserData();
    const { mediaProps } = usePhotoData(user, photo);

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

export default useWithAuth(PhotoPage);