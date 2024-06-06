"use client"

import { useDispatch } from "react-redux";

import { handleNewMediaData } from "@/utils";
import { LoadingPageComponent, MediaPageScaffold } from "@/components";
import { usePostMediaData, useUserData, useWebSocket, useWithAuth } from "@/hooks";

const PostPage = ({ searchParams }) => {
    const urlParams = new URLSearchParams(searchParams);
    const dispatch = useDispatch();

    const user = urlParams.get("user");
    const post = urlParams.get("post");
    const photo = urlParams.get("photo");

    const { userProps } = useUserData();
    const { errors, loadingStates } = usePostMediaData(user, post, photo);

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
             <MediaPageScaffold/>
         </div>
    );
};

export default useWithAuth(PostPage);