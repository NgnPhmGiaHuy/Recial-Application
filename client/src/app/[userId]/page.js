"use client"

import {useEffect, useState} from "react";

import {useUserData} from "@/hooks";
import {fakeUserData, fakePostListData} from "@/constants";
import {AsideUser, Header, UserProfile} from "@/components";
import useUserIdData from "@/hooks/useUserIdData";

const UserPage = ({params}) => {
    const { userId } = params;
    const userData = useUserData();
    const userDataById = useUserIdData(params)
    const [userProps, setUserProps] = useState(null);
    const isCurrentUser = userData?.user?._id === userId;

    useEffect(() => {
        if (!isCurrentUser) {
            setUserProps(userDataById);
        }
    }, [isCurrentUser, userDataById]);

    return (
        <div>
            <Header userProps={userData}/>
            {userProps ? (
                <div className="mx-[128px] flex flex-col relative z-0 ">
                    <div className="top-[56px] min-h-[calc(100vh-88px)] flex flex-col relative">
                        <div className="min-h-[inherit] mb-[calc(-100vh-56px)] flex flex-col flex-shrink-0 items-stretch justify-start relative">
                            <div className="min-w-[900px] min-h-[inherit] flex flex-row flex-nowrap flex-shrink-0 grow items-stretch justify-start relative">
                                <div className="w-full min-h-[inherit] flex flex-col flex-shrink grow basis-0 relative">
                                    <UserProfile userProps={userProps} postProps={fakePostListData} isCurrentUser={isCurrentUser}/>
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
            ) : null}
        </div>
    );
};

export default UserPage;