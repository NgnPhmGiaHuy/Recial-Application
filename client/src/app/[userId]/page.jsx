"use client"

import { useDispatch } from "react-redux";

import { handleNewUserData, handleNewUserPostData } from "@/utils";
import { usePostDataByUserId, useUserIdLayout, useUserProfileActions, useWebSocket, useWithAuth } from "@/hooks";
import { AsideUser, CreatePostDialog, Header, LoadingPageComponent, UserProfile, UserProfileEdit } from "@/components";

const UserPage = ({ params, asAProps }) => {
    usePostDataByUserId(params.userId);

    const dispatch = useDispatch();
    const { currentUser: userProps } = useUserIdLayout(params);
    const { profileActionRef, showCreatePost, showEditProfile } = useUserProfileActions();

    const onDataReceived = async (data) => {
        await handleNewUserData(data, dispatch);
        await handleNewUserPostData(data, dispatch);
    };

    useWebSocket(process.env.NEXT_PUBLIC_WEBSOCKET_URL, onDataReceived);

    return (
        <>
            { !asAProps && <Header/> }
            { userProps ? (
                <>
                    <div className={`${asAProps ? "mr-[24px]" : "mx-[128px]"} flex flex-col relative z-0`}>
                        <div className={`${asAProps ? "top-0" : "top-[56px]"} min-h-[calc(100vh-88px)] flex flex-col relative`}>
                            <div className="min-h-[inherit] mb-[calc(-100vh-56px)] flex flex-col flex-shrink-0 items-stretch justify-start relative">
                                <div className="min-w-[900px] min-h-[inherit] flex flex-row flex-nowrap flex-shrink-0 grow items-stretch justify-start relative">
                                    <div className="w-full min-h-[inherit] flex flex-col flex-shrink grow basis-0 relative">
                                        <UserProfile/>
                                    </div>
                                    <div className="w-[320px] min-h-[inherit] flex flex-col flex-nowrap flex-shrink-0 items-stretch justify-center relative">
                                        <div className="min-h-[inherit] flex flex-row flex-shrink flex-nowrap grow items-start justify-between basis-0 relative">
                                            <AsideUser/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        { showEditProfile && <UserProfileEdit editProfileRef={profileActionRef.editProfileRef}/> }
                        { showCreatePost && <CreatePostDialog createPostRef={profileActionRef.createPostRef}/> }
                    </div>
                </>
            ) : (
                <LoadingPageComponent/>
            ) }
        </>
    );
};

export default useWithAuth(UserPage);