"use client"

import { useDispatch } from "react-redux";

import { handleNewUserData } from "@/utils";
import { Header, LoadingPageComponent, UserAbout, UserProfileEdit } from "@/components";
import { useUserIdLayout, useUserProfileActions, useWebSocket, useWithAuth } from "@/hooks";

const UserAboutPage = ({ params }) => {
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
                                        <UserAbout/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        { showEditProfile && <UserProfileEdit editProfileRef={profileActionRef.editProfileRef}/>}
                    </div>
                </>
            ) : (
                <LoadingPageComponent/>
            ) }
        </>
    );
};

export default useWithAuth(UserAboutPage);