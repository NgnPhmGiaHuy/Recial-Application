"use client"

import { useRef } from "react";

import { handleNewUserData, handleNewPostData } from "@/utils/handleNewData";
import { AsideUser, CreatePostDialog, Header, UserProfile, UserProfileEdit } from "@/components";
import { useClickOutside, usePostDataByUserId, useToggleState, useUserIdLayout, useWebSocket } from "@/hooks";

const UserPage = ({ params, asAProps }) => {
    const { userData, setUserData, userProps, setUserProps, isFriend, isFriendRequest, isCurrentUser } = useUserIdLayout(params.userId);
    const { postByIdRef, postByUserIdProps, setPostByUserIdProps } = usePostDataByUserId(params.userId);

    const [showCreatePost, setMainCreatePost, handleShowCreatePost] = useToggleState(false);
    const [showEditProfile, setShowEditProfile, handleShowEditProfile] = useToggleState(false);

    const ref = {
        createPostRef: useRef(null),
        editProfileRef: useRef(null),
    };

    const handleState = {
        handleShowCreatePost: handleShowCreatePost,
        handleShowEditProfile: handleShowEditProfile,
    };

    const userCheck = {
        isFriend: isFriend,
        isCurrentUser: isCurrentUser,
        isFriendRequest: isFriendRequest,
    }

    const onDataReceived = async (data) => {
        await handleNewPostData(data, postByUserIdProps, setPostByUserIdProps);
        await handleNewUserData(data, userData, setUserData);
    };

    useWebSocket(process.env.NEXT_PUBLIC_WEBSOCKET_URL, onDataReceived);

    useClickOutside(ref.createPostRef, showCreatePost, setMainCreatePost);
    useClickOutside(ref.editProfileRef, showEditProfile, setShowEditProfile);

    return (
        <div>
            {asAProps ? null : (
                <Header userProps={userData}/>
            )}
            {userProps ? (
                <>
                    <div className={`${asAProps ? "mr-[24px]" : "mx-[128px]"} flex flex-col relative z-0`}>
                        <div className={`${asAProps ? "top-0" : "top-[56px]"} min-h-[calc(100vh-88px)] flex flex-col relative`}>
                            <div className="min-h-[inherit] mb-[calc(-100vh-56px)] flex flex-col flex-shrink-0 items-stretch justify-start relative">
                                <div className="min-w-[900px] min-h-[inherit] flex flex-row flex-nowrap flex-shrink-0 grow items-stretch justify-start relative">
                                    <div className="w-full min-h-[inherit] flex flex-col flex-shrink grow basis-0 relative">
                                        <UserProfile userData={userData} userProps={userProps} postProps={postByUserIdProps} ref={ref} handleState={handleState} postByIdRef={postByIdRef} userCheck={userCheck} isFriend={isFriend} isFriendRequest={isFriendRequest} isCurrentUser={isCurrentUser} handleShowCreatePost={handleShowCreatePost}/>
                                    </div>
                                    <div className="w-[320px] min-h-[inherit] flex flex-col flex-nowrap flex-shrink-0 items-stretch justify-center relative">
                                        <div className="min-h-[inherit] flex flex-row flex-shrink flex-nowrap grow items-start justify-between basis-0 relative">
                                            <AsideUser userProps={userProps}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        {showCreatePost && (
                            <CreatePostDialog userProps={userProps} setUserProps={setUserData} createPostRef={ref.createPostRef} handleShowCreatePost={handleShowCreatePost}/>
                        )}
                        {showEditProfile && (
                            <UserProfileEdit userProps={userProps} editProfileRef={ref.editProfileRef} handleState={handleState}/>
                        )}
                    </div>
                </>
            ) : null}
        </div>
    );
};

export default UserPage;