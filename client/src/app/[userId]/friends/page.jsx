"use client"

import { useUserIdLayout, useUserProfileActions, useWebSocket, useWithAuth } from "@/hooks";
import { Header, UserAboutScaffold, UserProfileCover, UserProfileEdit } from "@/components";

const UserFriendsPage = ({ params }) => {
    const { currentUser: userProps, isCurrentUser, isFriend, isFriendRequest } = useUserIdLayout(params);
    const { profileActionRef, showCreatePost, showEditProfile } = useUserProfileActions();

    // const onDataReceived = async (data) => {
    //     await handleNewUserData(data, userData, setUserData);
    // };

    // useWebSocket(process.env.NEXT_PUBLIC_WEBSOCKET_URL, onDataReceived);

    return (
        <div>
            { userProps && (
                <Header/>
            ) }
            { userProps && (
                <>
                    <div className="mx-[128px] flex flex-col relative z-0 ">
                        <div className="top-[56px] min-h-[calc(100vh-88px)] flex flex-col relative">
                            <div className="min-h-[inherit] mb-[calc(-100vh-56px)] flex flex-col flex-shrink-0 items-stretch justify-start relative">
                                <div className="min-w-[900px] min-h-[inherit] flex flex-row flex-nowrap flex-shrink-0 grow items-stretch justify-start relative">
                                    <div className="w-full min-h-[inherit] flex flex-col flex-shrink grow basis-0 relative">
                                        <main>
                                            <div className="my-[16px] flex flex-col gap-4 relative">
                                                <div>
                                                     <UserProfileCover />
                                                </div>
                                                <UserAboutScaffold titleLabel="Friends" options={{ isFriendPage: true }}/>
                                            </div>
                                        </main>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        { showEditProfile && <UserProfileEdit editProfileRef={profileActionRef.editProfileRef}/>}
                    </div>
                </>
            ) }
        </div>
    );
};

export default useWithAuth(UserFriendsPage);