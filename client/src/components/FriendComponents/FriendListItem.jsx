"use client"

import Image from "next/image";
import {useCallback, useEffect, useRef, useState} from "react";

import {QuickSettingItem} from "@/components";

const FriendListItem = ({userProps}) => {
    const asideFriendListQuickSettingItemList = [
        {
            isSettingItemBreak: false,
            settingItemIcon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                </svg>
            ),
            settingItemTitle: `Message ${userProps.username}`,
            hasSettingItemSwitchButton: false,
        }, {
            isSettingItemBreak: false,
            settingItemIcon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
                </svg>
            ),
            settingItemTitle: `Follow ${userProps.username}`,
            settingItemSubtitle: `See posts from ${userProps.username}.`,
            hasSettingItemSwitchButton: false,
        },{
            isSettingItemBreak: false,
            settingItemIcon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
            ),
            settingItemTitle: `Block ${userProps.username}'s profile`,
            settingItemSubtitle: `${userProps.username} won't be able to see you or contact you on Recial.`,
            hasSettingItemSwitchButton: false,
        },{
            isSettingItemBreak: false,
            settingItemIcon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="8.5" cy="7" r="4"></circle>
                    <line x1="18" y1="8" x2="23" y2="13"></line>
                    <line x1="23" y1="8" x2="18" y2="13"></line>
                </svg>
            ),
            settingItemTitle: `Unfriend ${userProps.username}`,
            settingItemSubtitle: `Remove ${userProps.username} as a friend.`,
            hasSettingItemSwitchButton: false,
        },
    ]

    const friendListQuickSettingItemButtonRef = useRef(null);

    const [showFriendListQuickSettingItem, setShowFriendListQuickSettingItem] = useState(false)
    const [friendListQuickSettingItemTranslateYValue, setFriendListQuickSettingItemTranslateYValue] = useState(-270);

    const handleShowFriendListQuickSettingItem = useCallback(() => {
        setShowFriendListQuickSettingItem((prevShowFriendListQuickSettingItem) => !prevShowFriendListQuickSettingItem)
    }, []);

    useEffect(() => {
        if (friendListQuickSettingItemButtonRef.current && showFriendListQuickSettingItem) {
            setFriendListQuickSettingItemTranslateYValue(-friendListQuickSettingItemButtonRef.current.clientHeight);
        }

        const handleClickOutside = (event) => {
            if (friendListQuickSettingItemButtonRef.current && !friendListQuickSettingItemButtonRef.current.contains(event.target)) {
                setShowFriendListQuickSettingItem(false)
            }
        }

        if (showFriendListQuickSettingItem) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [showFriendListQuickSettingItem]);

    return (
        <div className="pt-[12px] mx-[-4px] flex flex-col flex-auto justify-between relative">
            <div className="min-h-[44px] px-[4px] flex flex-row items-center justify-between rounded-md relative cursor-pointer hover:bg-zinc-100 transition-all">
                    <div className="my-[8px] mr-[12px] flex flex-col self-start relative">
                        <div className="w-[60px] h-[60px] flex flex-col items-center rounded-full overflow-hidden relative">
                            <Image src={userProps.profile_picture_url} alt={`${userProps.profile_picture_url}-image`} fill className="object-cover"/>
                        </div>
                    </div>
                    <div className="my-[-6px] py-[12px] flex flex-row flex-shrink grow items-stretch justify-between basis-0 relative">
                        <div className="min-w-[50%] py-[6px] pr-[12px] flex flex-col flex-shrink items-stretch justify-center basis-0 grow relative">
                            <div className="my-[-5px] flex flex-col">
                                <div className="flex flex-row flex-nowrap items-center justify-between relative">
                                    <div className="flex flex-col flex-shrink grow basis-0 relative">
                                        <span className="block text-[14px] text-black font-bold break-words relative leading-5">
                                            <span className="overflow-x-hidden overflow-y-hidden line-clamp-1 relative">
                                                {userProps.username}
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                {userProps.mutual_friends.length ? (
                                    <div className="flex flex-row flex-nowrap items-center justify-between relative">
                                        <div className="flex flex-row items-center justify-between relative">
                                            <div className="ml-[8px] flex flex-row items-center justify-center relative">
                                                {userProps.mutual_friends.slice(0, 3).map((value, index) => {
                                                    const zIndexValue = 10 - index;
                                                    return (
                                                        <div key={index} style={{ zIndex: zIndexValue }} className="w-[20px] h-[20px] ml-[-8px] border-[2px] border-solid border-white rounded-full relative cursor-pointer overflow-hidden">
                                                            <Image src={value.profile_picture_url} alt={`${value.profile_picture_url}-image`} fill className="object-cover" />
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                            <div className="flex flex-col items-center relative">
                                                <span className="block text-[14px] text-zinc-500 font-medium break-words relative leading-5">
                                                    <span className="overflow-x-hidden overflow-y-hidden relative">
                                                        {userProps.mutual_friends.length} mutual friends
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ): null}
                            </div>
                        </div>
                        <div className="my-[8px] ml-[12px] self-center relative">
                            <div className="flex flex-row items-center relative">
                                <div className="w-[32px] h-[32px] flex items-center justify-center text-zinc-500 rounded-full cursor-pointer overflow-hidden relative hover:bg-zinc-200 z-10" onClick={handleShowFriendListQuickSettingItem}>
                                    <i>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                        </svg>
                                    </i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div>
                {showFriendListQuickSettingItem ? (
                    <div ref={friendListQuickSettingItemButtonRef} className="absolute top-0 left-0 translate-x-[315px] translate-y-[55px] z-50">
                        <div className="relative mt-[15px] rounded-r-md rounded-b-md shadow-[rgba(0,_0,_0,_0.24)_4px_7px_50px_1px]">
                            <div className="overflow-x-hidden overflow-y-hidden rounded-r-md rounded-b-md bg-white">
                                <div className="flex flex-col grow items-stretch origin-top-left relative">
                                    <div className="w-[344px] py-[8px] overflow-x-hidden overflow-y-auto overscroll-y-contain flex flex-col relative">
                                        <div className="flex flex-col grow relative">
                                            {asideFriendListQuickSettingItemList.map((value, index) => (
                                                <QuickSettingItem key={index} settingItemData={value}/>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <svg height="12" viewBox="0 0 21 12" width="21" className="absolute right-0 bottom-[calc(100%-1)] scale-x-[1] scale-y-[-1] translate-x-[-323px]" style={{ '--tw-translate-y': `${friendListQuickSettingItemTranslateYValue + 5}px` }} fill="white">
                                <path d="M20.685.12c-2.229.424-4.278 1.914-6.181 3.403L5.4 10.94c-2.026 2.291-5.434.62-5.4-2.648V.12h20.684z"></path>
                            </svg>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default FriendListItem;