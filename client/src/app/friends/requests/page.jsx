"use client"

import { useState } from "react";

import UserPage from "@/app/[userId]/page";
import { AsideScaffold, Header } from "@/components";
import { handleNewUserData } from "@/utils/handleNewData";
import { useUserData, useWebSocket, useWithAuth } from "@/hooks";
import { useGetUserFriendRequestData } from "@/hooks/useUser/useUserData";

const FriendRequestPage = () => {
    const { userProps, setUserProps } = useUserData();

    const [friendRequestId, setFriendRequestId] = useState(null);

    const handleFriendClick = (clickedFriendId) => {
        return setFriendRequestId(clickedFriendId);
    }

    const onDataReceived = async (data) => {
        await handleNewUserData(data, userProps, setUserProps);
    };

    useGetUserFriendRequestData();
    useWebSocket(process.env.NEXT_PUBLIC_WEBSOCKET_URL, onDataReceived);
    
    return (
        <>
            { userProps ? (
                <div>
                    <Header/>
                    <div className="flex flex-col relative z-0 ">
                        <div className="top-[56px] min-h-[calc(100vh-88px)] flex flex-col relative">
                            <div className="min-h-[inherit] mb-[calc(-100vh-56px)] flex flex-col flex-shrink-0 items-stretch justify-start relative">
                                <div className="min-w-[900px] min-h-[inherit] flex flex-row flex-nowrap flex-shrink-0 grow items-stretch justify-start relative">
                                    <div className="w-[400px] min-h-[inherit] flex flex-col flex-nowrap flex-shrink-0 items-stretch justify-center relative">
                                        <div className="min-h-[inherit] flex flex-row flex-shrink flex-nowrap grow items-start justify-between basis-0 relative">
                                            <AsideScaffold aside={{ title: "Friend Requests", subtitle: "Friends", role: { friend_request: true } }} action={handleFriendClick}/>
                                        </div>
                                    </div>
                                    { friendRequestId && (
                                        <div className="w-full min-h-[inherit] flex flex-col flex-shrink grow basis-0 relative">
                                            <UserPage params={{ userId: friendRequestId }} asAProps={true}/>
                                        </div>
                                    ) }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="w-screen h-screen py-[16px] flex items-center justify-center relative">
                    <div className="w-[120px] h-[120px] inline-block animate-spin rounded-full border-8 border-solid border-current border-e-transparent align-[-0.125em] text-lime-700 motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
                        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                            Loading...
                        </span>
                    </div>
                </div>
            ) }
        </>
    );
};

export default useWithAuth(FriendRequestPage);