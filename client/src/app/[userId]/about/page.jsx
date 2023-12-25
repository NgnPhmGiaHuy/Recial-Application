"use client"

import {Header, UserAbout} from "@/components";
import {useTokenRefresh, useUserIdLayout} from "@/hooks";

const UserAboutPage = ({params}) => {
    useTokenRefresh();

    const {userData, userProps, isCurrentUser} = useUserIdLayout(params.userId);

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
                                    <UserAbout userProps={userProps} isCurrentUser={isCurrentUser}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default UserAboutPage;