"use client"

import Image from "next/image";
import {useCallback, useEffect, useRef, useState} from 'react';

import {useClickOutside} from "@/hooks";
import {formatTimeAgoFull} from "@/utils";
import {QuickSettingItem} from "@/components";
import {notificationTypeOfColor, headerNotificationQuickSettingItemList} from "@/constants/HeaderConstants";

const NotificationHeaderItem = ({notificationProps}) => {
    const notificationQuickSettingItemRef = useRef(null);
    const notificationQuickSettingItemButtonRef = useRef(null);

    const [notificationQuickSettingItemTranslateXValue, setNotificationQuickSettingItemTranslateXValue] = useState(0);

    const [showHeaderNotificationItemQuickSetting, setShowHeaderNotificationItemQuickSetting] = useState(false);
    const [showHeaderNotificationContentItemMoreButton, setShowNotificationMessageContentItemMoreButton] = useState(false)

    const notificationSvgIcon = notificationTypeOfColor[notificationProps.notification_type]?.svgIcon || notificationTypeOfColor.default.svgIcon;
    const notificationTextColor = notificationTypeOfColor[notificationProps.notification_type]?.textColor || notificationTypeOfColor.default.textColor;
    const notificationBackgroundColor = notificationTypeOfColor[notificationProps.notification_type]?.backgroundColor || notificationTypeOfColor.default.backgroundColor;

    const handleShowHeaderNotificationQuickSettingButton = useCallback(() => {
        setShowHeaderNotificationItemQuickSetting((preShowNotificationQuickSetting) => !preShowNotificationQuickSetting);
    }, []);

    useEffect(() => {
        if (notificationQuickSettingItemRef.current && notificationQuickSettingItemButtonRef.current && showHeaderNotificationItemQuickSetting) {
            setNotificationQuickSettingItemTranslateXValue(notificationQuickSettingItemRef.current.clientWidth - notificationQuickSettingItemButtonRef.current.clientWidth - 5)
        }
    }, [showHeaderNotificationItemQuickSetting])

    useClickOutside(notificationQuickSettingItemButtonRef, showHeaderNotificationItemQuickSetting, setShowHeaderNotificationItemQuickSetting);

    return (
        <li ref={notificationQuickSettingItemRef} className="relative" onMouseOver={() => setShowNotificationMessageContentItemMoreButton(true)} onMouseOut={() => setShowNotificationMessageContentItemMoreButton(false)}>
            <div className="px-[8px] relative">
                <a href="" className="block">
                    <div className="px-[8px] flex flex-row items-center rounded-md hover:bg-zinc-100 transition-all relative">
                        <div className="flex flex-col self-start relative my-[8px] mr-[12px]">
                            <div className="inline-block align-bottom relative">
                                <div className="sm:w-[56px] w-[48px] sm:h-[56px] h-[48px] align-bottom rounded-full overflow-hidden relative">
                                    {notificationProps.source && notificationProps.source.sourceProps && (
                                        <Image src={notificationProps?.source.sourceProps} alt={`${notificationProps?.source.sourceProps}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                                    )}
                                </div>
                                <div className="absolute bottom-[8px] right-[8px] translate-x-1/2 translate-y-1/2 rounded-full z-10">
                                    <div className="w-full h-full relative">
                                        <div className="flex flex-col items-center justify-center bg-transparent overflow-x-hidden overflow-y-hidden">
                                            <i style={{ color: notificationTextColor, backgroundColor: notificationBackgroundColor}} className={`sm:w-[28px] w-[20px] sm:h-[28px] h-[20px] flex items-center justify-center object-cover rounded-full`}>
                                                {notificationSvgIcon}
                                            </i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row flex-shrink items-center grow">
                            <div className="flex flex-col flex-shrink grow py-[12px] relative">
                                <div>
                                    <div className="flex flex-col my-[-5px]">
                                        <div >
                                            <span className="max-w-full block text-black text-left sm:text-[15px] text-[12px] font-normal sm:leading-5 leading-4 break-words">
                                                <span className="overflow-x-hidden overflow-y-hidden line-clamp-3 relative">
                                                    {notificationProps?.notification_content}
                                                </span>
                                            </span>
                                        </div>
                                        <div className="mt-[5px]">
                                            <span className="max-w-full block text-lime-500 text-left sm:text-[13px] text-[10px] font-normal break-words leading-4">
                                                <span className="block overflow-x-hidden overflow-y-hidden whitespace-nowrap text-ellipsis relative">
                                                    <span className="font-semibold break-words">
                                                        {formatTimeAgoFull(notificationProps?.updated_at)} ago
                                                    </span>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="my-[8px] ml-[12px] self-center relative">
                                <div className="flex flex-row items-center">
                                    <div className="w-[20px] pl-[4px] flex flex-row bg-transparent relative cursor-pointer">
                                        <span className={`${notificationProps?.is_read ? "" : "bg-lime-500"} sm:w-[12px] w-[8px] sm:h-[12px] h-[8px] inline-flex items-center justify-center rounded-full`}></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
                <div>
                    <div className={`${showHeaderNotificationContentItemMoreButton ? "w-[36px] h-[36px] -translate-y-1/2" : "w-[1px] h-[1px] overflow-x-hidden overflow-y-hidden"} top-[50%] right-[48px] flex absolute`}>
                        <div className="ml-[8px]">
                            <div>
                                <div className="rounded-full">
                                    <div ref={notificationQuickSettingItemButtonRef}
                                         className="w-[36px] h-[36px] flex justify-center items-center text-gray-500 cursor-pointer rounded-full bg-white shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] border border-solid border-gray-200 relative hover:bg-zinc-100 transition-all"
                                         onClick={handleShowHeaderNotificationQuickSettingButton}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {showHeaderNotificationItemQuickSetting ? (
                    <div ref={notificationQuickSettingItemButtonRef} className="absolute top-0 left-0 translate-x-[10px] translate-y-[-145px] z-50" style={{ '--tw-translate-x': `${notificationQuickSettingItemTranslateXValue}px`}}>
                        <div className="relative mt-[15px] rounded-l-md rounded-b-md shadow-[rgba(0,_0,_0,_0.24)_4px_7px_50px_1px]">
                            <div className="overflow-x-hidden overflow-y-hidden rounded-l-md rounded-b-md bg-white">
                                <div className="flex flex-col grow items-stretch origin-top-left relative">
                                    <div className="w-[344px] py-[8px] overflow-x-hidden overflow-y-auto overscroll-y-contain flex flex-col relative">
                                        <div className="flex flex-col grow relative">
                                            {headerNotificationQuickSettingItemList.map((value, index) => (
                                                <QuickSettingItem key={index} settingProps={value}/>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <svg height="12" viewBox="0 0 21 12" width="21" className="absolute right-0 bottom-[calc(100%-1)] scale-x-[-1] scale-y-[1] translate-x-[-60px] translate-y-[-1px]" fill="white">
                                <path d="M20.685.12c-2.229.424-4.278 1.914-6.181 3.403L5.4 10.94c-2.026 2.291-5.434.62-5.4-2.648V.12h20.684z"></path>
                            </svg>
                        </div>
                    </div>
                ) : null}
            </div>
        </li>
    );
};

export default NotificationHeaderItem;