"use client"

import { useCallback, useEffect, useRef, useState } from "react";

import { useClickOutside, useFilteredNotification, useToggleState } from "@/hooks";
import { SmallTypeButton, NotificationHeaderContent, NotificationHeaderQuickSetting } from "@/components";

const NotificationScaffold = ({ userProps }) => {
    const notificationRef = useRef(null);
    const notificationQuickSettingButtonRef = useRef(null);

    const [showTypeNotification, setShowTypeNotification] = useState("all");
    const [showNotificationQuickSetting, setShowNotificationQuickSetting, handleNotificationQuickSettingButton] = useToggleState(false);

    const [notificationTranslateXValue, setNotificationTranslateXValue] = useState(0);
    const [notificationQuickSettingTranslateYValue, setNotificationQuickSettingTranslateYValue] = useState(0);

    const { filteredNotifications, showUnreadNotification, setShowUnreadNotification } = useFilteredNotification(userProps);

    const handleTypeClick = useCallback((type) => {
        if (type === "unread") {
            setShowUnreadNotification(true)
        } else {
            setShowUnreadNotification(false);
        }

        setShowTypeNotification(type);
    }, []);

    useEffect(() => {
        if (notificationRef.current && notificationQuickSettingButtonRef.current && showNotificationQuickSetting) {
            setNotificationTranslateXValue(notificationRef.current.clientWidth - notificationQuickSettingButtonRef.current.clientWidth - 32)
        }

        if (notificationQuickSettingButtonRef.current && showNotificationQuickSetting) {
            setNotificationQuickSettingTranslateYValue(-notificationQuickSettingButtonRef.current.clientHeight);
        }
    }, [showNotificationQuickSetting]);

    useClickOutside(notificationQuickSettingButtonRef, showNotificationQuickSetting, setShowNotificationQuickSetting)

    return (
        <div ref={notificationRef} className="max-w-full w-[760px] min-h-[inherit] my-[16px] flex flex-col justify-start relative">
            <div className="w-full flex relative">
                <div className="w-full rounded-xl shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] bg-white overflow-hidden relative">
                    <div className="max-w-[cacl(100vw-24px)] min-h-[inherit] flex flex-col">
                        <div className="flex flex-shrink grow overflow-x-hidden overflow-y-auto overscroll-y-contain basis-full relative">
                            <div className="flex flex-col grow relative">
                                <div className="mx-[16px] mb-[12px] mt-[20px] flex flex-row flex-shrink-0 items-center justify-between relative">
                                    <div className="flex flex-col flex-shrink basis-0 grow relative">
                                        <div className="flex flex-row flex-shrink-0 flex-nowrap items-center justify-between relative">
                                            <div className="flex flex-col">
                                                <span className="block text-[24px] text-black text-left break-words font-bold leading-7">
                                                    <span className="overflow-hidden relative">
                                                        Notification
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="flex flex-col flex-shrink-0 items-end justify-center basis-auto">
                                                <div ref={notificationQuickSettingButtonRef} className="w-[32px] h-[32px] flex items-center justify-center relative rounded-xl cursor-pointer hover:bg-zinc-100 transition-all overflow-hidden" onClick={handleNotificationQuickSettingButton}>
                                                    <i>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                                        </svg>
                                                    </i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="mb-[12px] pl-[16px] flex flex-row flex-wrap">
                                        <SmallTypeButton type="all" showType={showTypeNotification} onClick={handleTypeClick} />
                                        <SmallTypeButton type="unread" showType={showTypeNotification} onClick={handleTypeClick} />
                                    </div>
                                    <div className="mt-[-12px] mb-[20px] flex flex-col">
                                        { filteredNotifications?.newNotifications.length ? (
                                            <NotificationHeaderContent title="News" props={filteredNotifications?.newNotifications} hasNews={true}/>
                                        ) : null }
                                        { filteredNotifications?.otherNotifications.length ? (
                                            <NotificationHeaderContent title="Before" props={filteredNotifications?.otherNotifications} hasNews={true}/>
                                        ) : null }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                { showNotificationQuickSetting && <NotificationHeaderQuickSetting notificationQuickSettingButtonRef={notificationQuickSettingButtonRef} notificationTranslateXValue={notificationTranslateXValue} notificationQuickSettingTranslateYValue={notificationQuickSettingTranslateYValue}/> }
            </div>

        </div>
    );
};

export default NotificationScaffold;