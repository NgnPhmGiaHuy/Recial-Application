"use client"

import { useState } from "react";
import { useDispatch } from "react-redux";

import { handleNewMessageData } from "@/utils";
import { useUserData, useWebSocket, useWithAuth } from "@/hooks";
import { AsideMessage, Header, LoadingPageComponent, MessageCreate, MessageNoChatSelected } from "@/components";

const MessagePage = () => {
    const dispatch = useDispatch();

    const { userProps } = useUserData();
    const [showCreateMessage, setShowCreateMessage] = useState(false);

    const onDataReceived = async (data) => {
        await handleNewMessageData(data, dispatch);
    };

    useWebSocket(process.env.NEXT_PUBLIC_WEBSOCKET_URL, onDataReceived);

    return (
        <>
            { userProps ? (
                <div>
                    <Header disableMessage={true}/>
                    <div className="flex flex-col relative">
                        <div className="flex flex-col relative z-0 ">
                            <div className="top-[56px] min-h-[calc(100vh-56px)] flex flex-col relative">
                                <div className="min-h-[inherit] mb-[calc(-100vh-56px)] flex flex-col flex-shrink-0 items-stretch justify-start relative">
                                    <div className="min-w-[900px] min-h-[inherit] flex flex-row flex-nowrap flex-shrink-0 grow items-stretch justify-start relative">
                                        <div className="w-[360px] min-h-[inherit] flex flex-col flex-nowrap flex-shrink-0 items-stretch justify-center relative">
                                            <div className="min-h-[inherit] flex flex-row flex-shrink flex-nowrap grow items-start justify-between basis-0 relative">
                                                <AsideMessage setShowCreateMessage={setShowCreateMessage}/>
                                            </div>
                                        </div>
                                        <div className="max-w-full w-full min-h-[inherit] flex flex-col flex-shrink grow basis-0 relative">
                                            { showCreateMessage ? (
                                                <div className="min-h-[inherit] flex flex-col flex-shrink grow relative">
                                                    <MessageCreate/>
                                                </div>
                                            ) : (
                                                <MessageNoChatSelected/>
                                            ) }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <LoadingPageComponent/>
            ) }
        </>
    );
};

export default useWithAuth(MessagePage);