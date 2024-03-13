"use client"

import { MediaPageScaffold } from "@/components";
import { handleNewPostData } from "@/utils/handleNewData";
import { useMediaData, useUserData, useWebSocket, useWithAuth } from "@/hooks";

const PhotoPage = ({ searchParams }) => {
    const url = process.env.NEXT_PUBLIC_API_URL + "/api/v1/public/media/photo/?" + new URLSearchParams(searchParams).toString();

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
                    <MediaPageScaffold mediaType="Photo"/>
                </div>
            ) : (
                <div className="w-screen h-screen py-[16px] flex items-center justify-center relative">
                    <div className="w-[120px] h-[120px] inline-block animate-spin rounded-full border-8 border-solid border-current border-e-transparent align-[-0.125em] text-lime-700 motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
                        <span
                            className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                            Loading...
                        </span>
                    </div>
                </div>
            ) }
        </>
    );
};

export default useWithAuth(PhotoPage);