"use client"

import { useEffect, useRef, useState, useCallback } from "react";

import { useClickOutside, useFilteredNotification, useToggleState } from "@/hooks";
import { HeaderTypeButtonItem, NotificationHeaderQuickSetting, NotificationHeaderContent } from "@/components";

const NotificationHeader = ({ forwardedRef, userProps }) => {
    const notificationQuickSettingButtonRef = useRef(null);

    const [showTypeNotification, setShowTypeNotification] = useState("all");
    const [notificationQuickSettingTranslateYValue, setNotificationQuickSettingTranslateYValue] = useState(0)
    const [showNotificationQuickSetting, setShowNotificationQuickSetting, handleNotificationQuickSettingButton] = useToggleState(false);

    const {filteredNotifications, showUnreadNotification, setShowUnreadNotification} = useFilteredNotification(userProps);

    const handleTypeClick = useCallback((type) => {
        if (type === "unread") {
            setShowUnreadNotification(true)
        } else {
            setShowUnreadNotification(false);
        }

        setShowTypeNotification(type);
    }, []);

    useEffect(() => {
        if (notificationQuickSettingButtonRef.current && showNotificationQuickSetting) {
            setNotificationQuickSettingTranslateYValue(-notificationQuickSettingButtonRef.current.clientHeight);
        }
    }, [showNotificationQuickSetting]);

    useClickOutside(notificationQuickSettingButtonRef, showNotificationQuickSetting, setShowNotificationQuickSetting);

    return (
        <div ref={forwardedRef} className="absolute top-0 left-0 sm:translate-x-[-172px] translate-x-[-160px] translate-y-[48px]">
            <div className="mt-[5px] mr-[8px]">
                <div className="overflow-x-hidden overflow-y-hidden rounded-md bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                    <div className="sm:w-[360px] w-[300px] sm:max-h-[calc(100vh-56px-16px)] max-h-[calc(80vh-56px-16px)] flex flex-col">
                        <div className="flex flex-col flex-shrink grow overflow-x-hidden overflow-y-auto overscroll-y-contain no-scrollbar basis-full relative">
                            <div className="flex flex-col grow relative">
                                <div className="mx-[16px] mb-[12px] mt-[20px] flex flex-row flex-shrink-0 items-center justify-between relative">
                                    <div className="flex flex-col flex-shrink basis-0 grow relative">
                                        <div className="flex flex-row flex-shrink-0 flex-nowrap items-center justify-between relative">
                                            <div className="flex flex-col">
                                                <span className="block text-[22px] text-black text-left break-words font-bold leading-7">
                                                    <h2>Notification</h2>
                                                </span>
                                            </div>
                                            <div className="flex flex-col flex-shrink-0 items-end justify-center basis-auto">
                                                <div ref={notificationQuickSettingButtonRef} className="w-[32px] h-[32px] flex items-center justify-center relative rounded-full text-zinc-500 cursor-pointer hover:bg-zinc-100 transition-all overflow-hidden" onClick={handleNotificationQuickSettingButton}>
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
                                        <HeaderTypeButtonItem type="all" showType={showTypeNotification} onClick={handleTypeClick}/>
                                        <HeaderTypeButtonItem type="unread" showType={showTypeNotification} onClick={handleTypeClick}/>
                                    </div>
                                    <div className="mt-[-12px] mb-[20px] flex flex-col">
                                        {filteredNotifications?.newNotifications?.length ? (
                                            <NotificationHeaderContent title="News" props={filteredNotifications?.newNotifications} hasNews={false}/>
                                        ) : null}
                                        {filteredNotifications?.otherNotifications?.length ? (
                                            <NotificationHeaderContent title="Before" props={filteredNotifications?.otherNotifications} hasNews={filteredNotifications?.newNotifications.length}/>
                                        ) : null}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {showNotificationQuickSetting && (
                    <NotificationHeaderQuickSetting notificationQuickSettingButtonRef={notificationQuickSettingButtonRef} notificationQuickSettingTranslateYValue={notificationQuickSettingTranslateYValue}/>
                )}
            </div>
        </div>
    );
};

export default NotificationHeader;