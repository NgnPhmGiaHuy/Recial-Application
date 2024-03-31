"use client"

import { useDispatch } from "react-redux";
import UserPage from "@/app/[userId]/page";

import { handleNewUserData } from "@/utils";
import { setUserFriendRequestData } from "@/store/actions/user/userActions";
import { AsideScaffold, Header, LoadingPageComponent } from "@/components";
import { useFriendData, useGetUserDataFetcher, useWebSocket, useWithAuth } from "@/hooks";

const FriendRequestPage = () => {
    const dispatch = useDispatch();
    const { userProps, friendId, handleFriendClick } = useFriendData();

    const onDataReceived = async (data) => {
        await handleNewUserData(data, dispatch);
    };

    useWebSocket(process.env.NEXT_PUBLIC_WEBSOCKET_URL, onDataReceived);
    useGetUserDataFetcher("friend-request", setUserFriendRequestData);

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
                                    { friendId && (
                                        <div className="w-full min-h-[inherit] flex flex-col flex-shrink grow basis-0 relative">
                                            <UserPage params={{ userId: friendId }} asAProps={true}/>
                                        </div>
                                    ) }
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

export default useWithAuth(FriendRequestPage);