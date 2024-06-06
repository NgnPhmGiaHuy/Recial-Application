"use client"

import { useDispatch } from "react-redux";

import { handleNewMediaData } from "@/utils";
import { LoadingPageComponent, MediaPageScaffold } from "@/components";
import { usePhotoData, useUserData, useWebSocket, useWithAuth } from "@/hooks";

const PhotoPage = ({ searchParams }) => {
    const urlParams = new URLSearchParams(searchParams);
    const user = urlParams.get("user");
    const photo = urlParams.get("photo");

    const dispatch = useDispatch();
    const { userProps } = useUserData();
    const { errors, loadingStates } = usePhotoData(user, photo);

    const onDataReceived = async (data) => {
        await handleNewMediaData(data, dispatch)
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
            <MediaPageScaffold/>
        </div>
    );
};

export default useWithAuth(PhotoPage);