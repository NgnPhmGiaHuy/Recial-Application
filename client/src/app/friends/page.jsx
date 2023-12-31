"use client"

import {fakeUserData} from "@/constants";
import { AsideScaffold, FriendScaffold, Header } from "@/components";
import { useUserData, useWithAuth } from "@/hooks";

const FriendPage = () => {
    const { userProps } = useUserData();
    
    return (
        <div>
            <Header navigationProps="mynetwork" userProps={userProps}/>
            <div className="flex flex-col relative z-0 ">
                <div className="top-[56px] min-h-[calc(100vh-88px)] flex flex-col relative">
                    <div className="min-h-[inherit] mb-[calc(-100vh-56px)] flex flex-col flex-shrink-0 items-stretch justify-start relative">
                        <div className="min-w-[900px] min-h-[inherit] flex flex-row flex-nowrap flex-shrink-0 grow items-stretch justify-start relative">
                            <div className="w-[320px] min-h-[inherit] flex flex-col flex-nowrap flex-shrink-0 items-stretch justify-center relative">
                                <div className="min-h-[inherit] flex flex-row flex-shrink flex-nowrap grow items-start justify-between basis-0 relative">
                                    <AsideScaffold asideTitle="Friends" navigationProps="home"/>
                                </div>
                            </div>
                            <div className="w-full min-h-[inherit] flex flex-col flex-shrink grow basis-0 relative">
                                <FriendScaffold userProps={fakeUserData}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default useWithAuth(FriendPage);