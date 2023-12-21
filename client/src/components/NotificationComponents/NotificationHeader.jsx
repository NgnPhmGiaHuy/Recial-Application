"use client"

import { useEffect, useRef, useState, useCallback } from 'react';

import {useClickOutside, useFilteredNotification} from "@/hooks";
import { headerNotificationQuickSettingList } from "@/constants/HeaderConstants";
import { HeaderTypeButtonItem, QuickSettingItem, NotificationHeaderItem } from "@/components";

const NotificationHeader = ({ forwardedRef, userProps }) => {
    const notificationQuickSettingButtonRef = useRef(null);

    const [showTypeNotification, setShowTypeNotification] = useState("all");
    const [showNotificationQuickSetting, setShowNotificationQuickSetting] = useState(false);
    const [notificationQuickSettingTranslateYValue, setNotificationQuickSettingTranslateYValue] = useState(0)

    const {filteredNotifications, showUnreadNotification, setShowUnreadNotification} = useFilteredNotification(userProps);

    const handleTypeClick = useCallback((type) => {
        if (type === "unread") {
            setShowUnreadNotification(true)
        } else {
            setShowUnreadNotification(false);
        }

        setShowTypeNotification(type);
    }, []);

    const handleNotificationQuickSettingButton = useCallback(() => {
        setShowNotificationQuickSetting((prevShowNotificationQuickSetting) => !prevShowNotificationQuickSetting);
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
                        <div className="flex flex-col flex-shrink grow overflow-x-hidden overflow-y-auto overscroll-y-contain basis-full relative">
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
                                        <HeaderTypeButtonItem type="all" showType={showTypeNotification}
                                                              onClick={handleTypeClick}/>
                                        <HeaderTypeButtonItem type="unread" showType={showTypeNotification}
                                                              onClick={handleTypeClick}/>
                                    </div>
                                    <div className="mt-[-12px] mb-[20px] flex flex-col">
                                        {filteredNotifications?.newNotifications.length ? (
                                            <>
                                                <div className="flex flex-col pt-[20px] pb-[4px]">
                                                    <div className="flex flex-col flex-shrink-0 grow relative px-[16px]">
                                                        <div className="flex flex-col my-[-5px]">
                                                            <div className="my-[5px] flex flex-row flex-nowrap items-center justify-between relative">
                                                                <div className="flex flex-col flex-shrink grow relative">
                                                                    <span className="block text-[17px] text-black font-semibold break-words leading-5">
                                                                        <span className="overflow-x-hidden overflow-y-hidden relative">
                                                                            News
                                                                        </span>
                                                                    </span>
                                                                </div>
                                                                <div className="flex flex-col flex-shrink-0 self-start justify-center relative ml-[8px]">
                                                                    <div className="flex flex-row flex-shrink-0 flex-nowrap items-center justify-between relative ">
                                                                        <a href="/notifications" className="text-[15px] text-lime-500 font-normal break-words leading-5 rounded-md cursor-pointer hover:text-lime-700 hover:bg-zinc-100 transition-all p-[8px]">
                                                                            <span className="overflow-x-hidden overflow-y-hidden relative">
                                                                                See all
                                                                            </span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <ul className="relative">
                                                    {filteredNotifications?.newNotifications.map((value, index) => (
                                                        <NotificationHeaderItem key={index} notificationProps={value}/>
                                                    ))}
                                                </ul>
                                            </>
                                        ) : null}
                                        {filteredNotifications?.otherNotifications.length ? (
                                            <>
                                                <div className="mt-[-4px]">
                                                    <div className="flex flex-col pt-[20px] pb-[4px]">
                                                        <div className="flex flex-col flex-shrink-0 grow relative px-[16px]">
                                                            <div className="flex flex-col my-[-5px]">
                                                                <div className="my-[5px] flex flex-row flex-nowrap items-center justify-between relative">
                                                                    <div className="flex flex-col flex-shrink grow relative">
                                                                        <span className="block text-[17px] text-black font-semibold break-words leading-5">
                                                                            <span className="overflow-x-hidden overflow-y-hidden relative ">
                                                                                Before
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                    {!filteredNotifications?.newNotifications.length ? (
                                                                        <div className="flex flex-col flex-shrink-0 self-start justify-center relative ml-[8px]">
                                                                            <div className="flex flex-row flex-shrink-0 flex-nowrap items-center justify-between relative ">
                                                                                <a href="/notifications" className="text-[15px] text-lime-500 font-normal break-words leading-5 rounded-md cursor-pointer hover:text-lime-700 hover:bg-zinc-100 transition-all p-[8px]">
                                                                                <span className="overflow-x-hidden overflow-y-hidden relative">
                                                                                    See all
                                                                                </span>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    ) : null}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <ul className="relative">
                                                    {filteredNotifications?.otherNotifications.map((value, index) => (
                                                        <NotificationHeaderItem key={index} notificationProps={value}/>
                                                    ))}
                                                </ul>
                                            </>
                                        ) : null}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {showNotificationQuickSetting ? (
                    <div ref={notificationQuickSettingButtonRef}
                         className="absolute top-0 left-0 translate-x-[-20px] translate-y-[60px] z-50">
                        <div
                            className="relative mt-[15px] rounded-l-md rounded-b-md shadow-[rgba(0,_0,_0,_0.24)_4px_7px_50px_1px]">
                            <div className="overflow-x-hidden overflow-y-hidden rounded-l-md rounded-b-md bg-white">
                                <div className="flex flex-col grow items-stretch origin-top-left relative">
                                <div
                                        className="w-[344px] py-[8px] overflow-x-hidden overflow-y-auto overscroll-y-contain flex flex-col relative">
                                        <div className="flex flex-col grow relative">
                                            {headerNotificationQuickSettingList.map((value, index) => (
                                                <QuickSettingItem key={index} settingProps={value}/>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <svg height="12" viewBox="0 0 21 12" width="21"
                                 className="absolute right-0 bottom-[calc(100%-1)] scale-x-[-1] scale-y-[-1] translate-x-0"
                                 style={{'--tw-translate-y': `${notificationQuickSettingTranslateYValue + 5}px`}}
                                 fill="white">
                                <path
                                    d="M20.685.12c-2.229.424-4.278 1.914-6.181 3.403L5.4 10.94c-2.026 2.291-5.434.62-5.4-2.648V.12h20.684z"></path>
                            </svg>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default NotificationHeader;