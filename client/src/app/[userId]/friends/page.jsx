"use client"

import { handeNewUserData } from "@/utils/handleNewData";
import { useTokenRefresh, useUserIdLayout, useWebSocket } from "@/hooks";
import { Header, UserAboutScaffold, UserProfileCover } from "@/components";

const UserFriendsPage = ({ params }) => {
    useTokenRefresh();

    const { userData, setUserData, userProps, setUserProps, isCurrentUser } = useUserIdLayout(params.userId);

    const onDataReceived = async (data) => {
        isCurrentUser ? await handeNewUserData(data, userData, setUserData) : await handeNewUserData(data, userProps, setUserProps);
    };

    useWebSocket(process.env.NEXT_PUBLIC_WEBSOCKET_URL, onDataReceived);

    return (
        <div>
            {userData ? (
                <Header userProps={userData}/>
            ) : null}
            {userProps ? (
                <div className="mx-[128px] flex flex-col relative z-0 ">
                    <div className="top-[56px] min-h-[calc(100vh-88px)] flex flex-col relative">
                        <div className="min-h-[inherit] mb-[calc(-100vh-56px)] flex flex-col flex-shrink-0 items-stretch justify-start relative">
                            <div className="min-w-[900px] min-h-[inherit] flex flex-row flex-nowrap flex-shrink-0 grow items-stretch justify-start relative">
                                <div className="w-full min-h-[inherit] flex flex-col flex-shrink grow basis-0 relative">
                                    <main>
                                        <div className="my-[16px] flex flex-col gap-4 relative">
                                            <div>
                                                <UserProfileCover userProps={userProps} navigationProps="friends" isCurrentUser={isCurrentUser}/>
                                            </div>
                                            <div>
                                                <UserAboutScaffold mediaProps={userProps?.user?.friends} isFriendPage={true} isCurrentUser={isCurrentUser}/>
                                            </div>
                                        </div>
                                    </main>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default UserFriendsPage;