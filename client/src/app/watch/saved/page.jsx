"use client"

import { useDispatch } from "react-redux";

import { handleNewWatchData } from "@/utils";
import { AsideScaffold, Header, VideoScaffold } from "@/components";
import { useUserData, useWatchData, useWebSocket, useWithAuth } from "@/hooks";

const API_URL = process.env.NEXT_PUBLIC_API_URL + "/api/v1/secure/watch/user";

const MovieSavedPage = () => {
    const dispatch = useDispatch();

    const { userProps } = useUserData();
    const { watchProps } = useWatchData(API_URL);

    const onDataReceived = async (data) => {
        await handleNewWatchData(data, dispatch);
    };

    useWebSocket(process.env.NEXT_PUBLIC_WEBSOCKET_URL, onDataReceived);

    return (
        <div>
            <Header/>
            <div className="flex flex-col relative z-0 ">
                <div className="top-[56px] min-h-[calc(100vh-88px)] flex flex-col relative">
                    <div className="min-h-[inherit] mb-[calc(-100vh-56px)] flex flex-col flex-shrink-0 items-stretch justify-start relative">
                        <div className="min-w-[900px] min-h-[inherit] flex flex-row flex-nowrap flex-shrink-0 grow items-stretch justify-start relative">
                            <div className="w-[320px] min-h-[inherit] flex flex-col flex-nowrap flex-shrink-0 items-stretch justify-center relative">
                                <div className="min-h-[inherit] flex flex-row flex-shrink flex-nowrap grow items-start justify-between basis-0 relative">
                                    <AsideScaffold aside={{ title: "Video", role: { watch: true } }}/>
                                </div>
                            </div>
                            <div className="flex flex-shrink grow basis-0 relative">
                                <VideoScaffold/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default useWithAuth(MovieSavedPage);