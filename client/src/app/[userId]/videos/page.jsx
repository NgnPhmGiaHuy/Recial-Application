"use client"

import { useDispatch } from "react-redux";

import { handleNewUserData } from "@/utils";
import { useUserIdLayout, useUserProfileActions, useWebSocket, useWithAuth } from "@/hooks";
import { Header, LoadingPageComponent, UserAboutScaffold, UserProfileCover, UserProfileEdit } from "@/components";

const UserVideosPage = ({ params }) => {
    const dispatch = useDispatch();

    const { currentUser: userProps } = useUserIdLayout(params);
    const { profileActionRef, showEditProfile } = useUserProfileActions();

    const onDataReceived = async (data) => {
        await handleNewUserData(data, dispatch);
    };

    useWebSocket(process.env.NEXT_PUBLIC_WEBSOCKET_URL, onDataReceived);

    return (
        <>
            { userProps ? (
                <>
                    <Header/>
                    <div className="mx-[128px] flex flex-col relative z-0 ">
                        <div className="top-[56px] min-h-[calc(100vh-88px)] flex flex-col relative">
                            <div className="min-h-[inherit] mb-[calc(-100vh-56px)] flex flex-col flex-shrink-0 items-stretch justify-start relative">
                                <div className="min-w-[900px] min-h-[inherit] flex flex-row flex-nowrap flex-shrink-0 grow items-stretch justify-start relative">
                                    <div className="w-full min-h-[inherit] flex flex-col flex-shrink grow basis-0 relative">
                                        <main>
                                            <div className="my-[16px] flex flex-col gap-4 relative">
                                                <div>
                                                    <UserProfileCover/>
                                                </div>
                                                <div>
                                                    <UserAboutScaffold titleLabel="Videos" options={{ isVideoPage: true }}/>
                                                </div>
                                            </div>
                                        </main>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <LoadingPageComponent/>
            ) }
        </>
    );
};

export default useWithAuth(UserVideosPage);