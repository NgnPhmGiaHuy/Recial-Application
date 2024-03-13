"use client"

import { useUserData, useWithAuth } from "@/hooks";
import { Header, NotificationScaffold } from "@/components";

const NotificationsPage = () => {
    const { userProps } = useUserData();

    return (
        <div>
            <Header disableNotification={true}/>
            <div className="flex flex-col relative z-0 ">
                <div className="top-[56px] min-h-[calc(100vh-56px)] flex flex-col relative">
                    <div className="min-h-[inherit] mb-[calc(-100vh-56px)] flex flex-col relative">
                        <div className="min-w-[900px] min-h-[inherit] flex justify-center relative">
                            <NotificationScaffold userProps={userProps}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default useWithAuth(NotificationsPage);