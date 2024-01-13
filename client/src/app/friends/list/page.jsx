"use client"

import { useEffect, useState } from "react";

import UserPage from "@/app/[userId]/page";
import { AsideScaffold, Header } from "@/components";
import { handleNewUserData } from "@/utils/handleNewData";
import { useUserData, useWebSocket, useWithAuth } from "@/hooks";
import { handleRemoveUserIdLocalStorage } from "@/utils/handleAuth";

const FriendListPage = () => {
    const { userProps, setUserProps } = useUserData();
    
    const [friendId, setFriendId] = useState(null);

    const handleFriendClick = (clickedFriendId) => {
        setFriendId(clickedFriendId);
        return handleRemoveUserIdLocalStorage();
    }

    const onDataReceived = async (data) => {
        await handleNewUserData(data, userProps, setUserProps);
    };

    useWebSocket(process.env.NEXT_PUBLIC_WEBSOCKET_URL, onDataReceived);

    useEffect(() => {
    }, [friendId]);

    return (
        <div>
            <Header userProps={userProps}/>
            <div className="flex flex-col relative z-0 ">
                <div className="top-[56px] min-h-[calc(100vh-88px)] flex flex-col relative">
                    <div className="min-h-[inherit] mb-[calc(-100vh-56px)] flex flex-col flex-shrink-0 items-stretch justify-start relative">
                        <div className="min-w-[900px] min-h-[inherit] flex flex-row flex-nowrap flex-shrink-0 grow items-stretch justify-start relative">
                            <div className="w-[360px] min-h-[inherit] flex flex-col flex-nowrap flex-shrink-0 items-stretch justify-center relative">
                                <div className="min-h-[inherit] flex flex-row flex-shrink flex-nowrap grow items-start justify-between basis-0 relative">
                                    <AsideScaffold aside={{ title: "All friends", subtitle: "Friends", role: { friends_list: true } }} userProps={userProps} action={handleFriendClick}/>
                                </div>
                            </div>
                            {friendId && (
                                <div className="w-full min-h-[inherit] flex flex-col flex-shrink grow basis-0 relative">
                                    <UserPage params={{ userId: friendId }} asAProps={true}/>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default useWithAuth(FriendListPage);