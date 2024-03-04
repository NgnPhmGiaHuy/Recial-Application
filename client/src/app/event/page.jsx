"use client"

import { useUserData, useWithAuth } from "@/hooks";
import { EventAside, EventAsideActivity, EventScaffold, Header } from "@/components";

const EventPage = () => {
    const { userProps, setUserProps } = useUserData();

    return (
        userProps &&
        <>
            <div>
                <Header userProps={userProps}/>
                <div className="flex flex-col relative z-0">
                    <div className="top-[56px] min-h-[calc(100vh-88px)] flex flex-col relative">
                        <div className="min-h-[inherit] mb-[calc(-100vh-56px)] flex flex-col flex-shrink-0 items-stretch justify-start relative">
                            <div className="min-w-[900px] min-h-[inherit] flex flex-row flex-nowrap flex-shrink-0 grow items-stretch justify-start relative">
                                <div className="w-[calc(260px+12px)] min-h-[inherit] flex flex-col flex-nowrap flex-shrink-0 items-stretch justify-center relative">
                                    <div className="min-h-[inherit] flex flex-row flex-shrink flex-nowrap grow items-start justify-between basis-0 relative">
                                        <EventAside/>
                                    </div>
                                </div>
                                <div className="min-h-[inherit] flex flex-col flex-shrink grow basis-0 relative">
                                    <EventScaffold userProps={userProps}/>
                                </div>
                                <div className="w-[calc(300px+12px)] min-h-[inherit] flex flex-col flex-nowrap flex-shrink-0 items-stretch justify-center relative">
                                    <div className="min-h-[inherit] flex flex-row flex-shrink flex-nowrap grow items-start justify-between basis-0 relative">
                                        <EventAsideActivity userProps={userProps}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default useWithAuth(EventPage);