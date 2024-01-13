"use client"

import { useUserData } from "@/hooks";
import { AsideScaffold, GroupScaffoldJoin, Header } from "@/components";

const GroupJoinPage = () => {
    const { userProps, setUserProps } = useUserData();

    return (
        userProps && (
            <>
                <div>
                    <Header userProps={userProps}/>
                    <div className="flex flex-col relative">
                        <div className="flex flex-col relative z-0 ">
                            <div className="top-[56px] min-h-[calc(100vh-88px)] flex flex-col relative">
                                <div className="min-h-[inherit] mb-[calc(-100vh-56px)] flex flex-col flex-shrink-0 items-stretch justify-start relative">
                                    <div className="min-w-[900px] min-h-[inherit] flex flex-row flex-nowrap flex-shrink-0 grow items-stretch justify-start relative">
                                        <div className="w-[360px] min-h-[inherit] flex flex-col flex-nowrap flex-shrink-0 items-stretch justify-center relative">
                                            <div className="min-h-[inherit] flex flex-row flex-shrink flex-nowrap grow items-start justify-between basis-0 relative">
                                                <AsideScaffold aside={{ title: "Group", role: { group_feed: true } }} userProps={userProps}/>
                                            </div>
                                        </div>
                                        <div className="flex flex-col flex-shrink grow basis-0 relative">
                                            <GroupScaffoldJoin userProps={userProps}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    );
};

export default GroupJoinPage;