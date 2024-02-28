"use client"

import Image from "next/image";
import { useRef, useState } from "react";

import { formatTimeAgoShort } from "@/utils";
import { QuickSettingItem } from "@/components";
import { useClickOutside, useToggleState } from "@/hooks";
import { headerMessageQuickSetting } from "@/constants/HeaderConstants";

const HeaderMessageContentItem = ({messageProps}) => {
    const messageQuickSettingItemButtonRef = useRef();

    const [showHeaderMessageContentItemMoreButton, setShowHeaderMessageContentItemMoreButton] = useState(false);
    const [showHeaderMessageItemQuickSetting, setShowHeaderMessageItemQuickSetting, handleShowHeaderMessageItemQuickSettingButton] = useToggleState(false);

    useClickOutside(messageQuickSettingItemButtonRef, showHeaderMessageItemQuickSetting, setShowHeaderMessageItemQuickSetting);

    return (
        <li className="relative" onMouseOver={() => setShowHeaderMessageContentItemMoreButton(true)} onMouseOut={() => setShowHeaderMessageContentItemMoreButton(false)}>
            <div className="px-[8px] relative">
                <div className="flex flex-col flex-shrink-0 grow relative">
                    <a href="" className="block relative">
                        <div className="flex flex-col items-stretch p-[8px] m-[-6px]">
                            <div className="flex flex-row flex-shrink-0 flex-nowrap items-center justify-between relative rounded-md hover:bg-zinc-100 transition-all">
                                <div className="flex flex-col flex-shrink-0 relative p-[6px]">
                                    <div className="w-[56px] h-[56px] relative cursor-pointer">
                                        <div className="w-full h-full absolute">
                                            <div className="w-full h-full overflow-hidden block rounded-full bg-white border border-solid border-gray-500 relative">
                                                <div className="w-full h-full flex flex-col relative">
                                                    <Image src={messageProps?.source?.profile_picture_url} alt={`${messageProps?.source?.profile_picture_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-row flex-shrink flex-wrap grow basis-auto items-center justify-between relative">
                                    <div className="max-w-full flex flex-col flex-shrink-0 grow relative p-[6px]">
                                        <span className="block text-[15px] text-black text-left font-medium break-words leading-5">
                                            <span className="block overflow-hidden whitespace-nowrap text-ellipsis relative">
                                                {messageProps?.source?.username || messageProps?.source?.firstname + " " + messageProps?.source?.lastname}
                                            </span>
                                        </span>
                                        <div className="min-h-[16px] flex flex-row items-center pt-[6px]">
                                            <span className="flex items-center break-words pr-[2px]">
                                                <span className="block text-[14px] text-gray-500 font-normal break-words leading-4">
                                                    <span className="max-w-[150px] block overflow-hidden whitespace-nowrap text-ellipsis relative">
                                                        {messageProps?.message_content}
                                                    </span>
                                                </span>
                                            </span>
                                            <span className="flex items-center break-words">
                                                <span className="block text-[13px] text-gray-500 font-normal break-words leading-4 mx-[4px]">
                                                    <span className="block overflow-hidden whitespace-nowrap text-ellipsis relative">
                                                        <span> · </span>
                                                    </span>
                                                </span>
                                            </span>
                                            <span className="flex items-center break-words pl-[2px]">
                                                <span className="block text-[14px] text-gray-500 font-normal break-words leading-4">
                                                    <span className="block overflow-hidden whitespace-nowrap text-ellipsis line-clamp-1 relative">
                                                        {formatTimeAgoShort(messageProps?.updated_at)}
                                                    </span>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col flex-shrink-0 relative p-[6px]">
                                    <div className="flex flex-row flex-nowrap items-center">
                                        <i className="w-[20px] h-[20px] flex items-center justify-center rounded-full overflow-hidden relative">
                                            {messageProps?.is_mute ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.143 17.082a24.248 24.248 0 003.844.148m-3.844-.148a23.856 23.856 0 01-5.455-1.31 8.964 8.964 0 002.3-5.542m3.155 6.852a3 3 0 005.667 1.97m1.965-2.277L21 21m-4.225-4.225a23.81 23.81 0 003.536-1.003A8.967 8.967 0 0118 9.75V9A6 6 0 006.53 6.53m10.245 10.245L6.53 6.53M3 3l3.53 3.53" />
                                                </svg>
                                                ) : messageProps?.is_read ? (
                                                    <Image src={messageProps?.destination?.profile_picture_url} alt={`${messageProps?.destination?.profile_picture_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                                            ) : null}
                                        </i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div>
                    <div className={`${showHeaderMessageContentItemMoreButton ? "w-[32px] h-[32px] -translate-y-1/2" : "w-[1px] h-[1px] overflow-hidden"} top-[50%] right-[48px] flex absolute`}>
                        <div className="ml-[8px]">
                            <div>
                                <div className="rounded-full">
                                    <div ref={messageQuickSettingItemButtonRef}
                                         className="w-[32px] h-[32px] flex justify-center items-center text-gray-500 cursor-pointer rounded-xl bg-white shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] border border-solid border-gray-200 relative hover:bg-zinc-100 transition-all"
                                         onClick={handleShowHeaderMessageItemQuickSettingButton}>
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
                {showHeaderMessageItemQuickSetting ? (
                    <div ref={messageQuickSettingItemButtonRef} className="absolute top-0 left-0 translate-x-[10px] translate-y-[-265px] z-50">
                        <div className="relative mt-[15px] rounded-l-md rounded-r-md shadow-[rgba(0,_0,_0,_0.24)_4px_7px_50px_1px]">
                            <div className="overflow-hidden rounded-l-md rounded-r-md bg-white">
                                <div className="flex flex-col grow items-stretch origin-top-left relative">
                                    <div className="w-[344px] py-[8px] overflow-x-hidden overflow-y-auto overscroll-y-contain flex flex-col relative">
                                        <div className="flex flex-col grow relative">
                                            {headerMessageQuickSetting.map((value, index) => (
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

export default HeaderMessageContentItem;