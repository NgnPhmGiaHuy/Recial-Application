"use client"


import {useState, useEffect} from "react";

import UserPage from "@/app/[userId]/page";
import {AsideScaffold, Header} from "@/components";
import {useTokenRefresh, useUserData, useWithAuth} from "@/hooks";

const FriendRequestPage = () => {
    useTokenRefresh();
    
    const { userProps } = useUserData();

    const [friendRequestId, setFriendRequestId] = useState(null);

    useEffect(() => {
    }, [friendRequestId]);
    
    return (
        <div>
            <Header navigationProps="mynetwork" userProps={userProps}/>
            <div className="flex flex-col relative z-0 ">
                <div className="top-[56px] min-h-[calc(100vh-88px)] flex flex-col relative">
                    <div className="min-h-[inherit] mb-[calc(-100vh-56px)] flex flex-col flex-shrink-0 items-stretch justify-start relative">
                        <div className="min-w-[900px] min-h-[inherit] flex flex-row flex-nowrap flex-shrink-0 grow items-stretch justify-start relative">
                            <div className="w-[360px] min-h-[inherit] flex flex-col flex-nowrap flex-shrink-0 items-stretch justify-center relative">
                                <div className="min-h-[inherit] flex flex-row flex-shrink flex-nowrap grow items-start justify-between basis-0 relative">
                                    <AsideScaffold asideTitle="Friend Requests" asideSubtitle="Friends" asideFriendRequest={true} userProps={userProps} setFriendId={setFriendRequestId}/>
                                </div>
                            </div>
                            {friendRequestId ? (
                                <div className="w-full min-h-[inherit] flex flex-col flex-shrink grow basis-0 relative">
                                    <UserPage params={{userId: friendRequestId}} asAProps={true}/>
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default useWithAuth(FriendRequestPage);