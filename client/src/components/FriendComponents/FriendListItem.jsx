"use client"

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

import { useClickOutside } from "@/hooks";
import { FriendListQuickSetting } from "@/components";

const FriendListItem = ({ userProps, action }) => {
    const friendListQuickSettingItemButtonRef = useRef(null);

    const [showFriendListQuickSettingItem, setShowFriendListQuickSettingItem] = useState(false)
    const [friendListQuickSettingItemTranslateYValue, setFriendListQuickSettingItemTranslateYValue] = useState(-270);

    const handleShowFriendListQuickSettingItem = useCallback((e) => {
        e.stopPropagation();
        setShowFriendListQuickSettingItem((prevState) => !prevState)
    }, []);

    useEffect(() => {
        if (friendListQuickSettingItemButtonRef.current && showFriendListQuickSettingItem) {
            setFriendListQuickSettingItemTranslateYValue(-friendListQuickSettingItemButtonRef.current.clientHeight);
        }
    }, [showFriendListQuickSettingItem]);

    useClickOutside(friendListQuickSettingItemButtonRef, showFriendListQuickSettingItem, setShowFriendListQuickSettingItem)

    return (
        <div className="pt-[12px] mx-[-4px] flex flex-col flex-auto justify-between relative" onClick={() => action(userProps?.user?._id)}>
            <div className="min-h-[44px] px-[4px] flex flex-row items-center justify-between rounded-xl relative cursor-pointer hover:bg-zinc-100 transition-all">
                <div className="my-[8px] mr-[12px] flex flex-col self-start relative">
                    <div className="w-[60px] h-[60px] flex flex-col items-center rounded-full overflow-hidden relative">
                        <Image src={userProps?.user?.profile?.profile_picture_url} alt={`${userProps?.user?.profile?.profile_picture_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                    </div>
                </div>
                <div className="my-[-6px] py-[12px] flex flex-row flex-shrink grow items-stretch justify-between basis-0 relative">
                    <div className="min-w-[50%] py-[6px] pr-[12px] flex flex-col flex-shrink items-stretch justify-center basis-0 grow relative">
                        <div className="my-[-5px] flex flex-col">
                            <div className="flex flex-row flex-nowrap items-center justify-between relative">
                                <div className="flex flex-col flex-shrink grow basis-0 relative">
                                    <span className="block text-[14px] text-black font-bold break-words relative leading-5">
                                        <span className="overflow-hidden line-clamp-1 relative">
                                            {userProps?.user?.profile?.username || userProps?.user?.profile?.firstname + " " + userProps?.user?.profile?.lastname}
                                        </span>
                                    </span>
                                </div>
                            </div>
                            {userProps?.mutual_friends?.length ? (
                                <div className="flex flex-row flex-nowrap items-center justify-between relative">
                                    <div className="flex flex-row items-center justify-between relative">
                                        <div className="ml-[8px] flex flex-row items-center justify-center relative">
                                            {userProps?.mutual_friends?.slice(0, 3).map((value, index) => {
                                                const zIndexValue = 10 - index;
                                                return (
                                                    <div key={index} style={{ zIndex: zIndexValue }} className="w-[20px] h-[20px] ml-[-8px] border-[2px] border-solid border-white rounded-full relative cursor-pointer overflow-hidden">
                                                        <Image src={value.profile_picture_url} alt={`${value.profile_picture_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover" />
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        <div className="flex flex-col items-center relative">
                                            <span className="block text-[14px] text-zinc-500 font-medium break-words relative leading-5">
                                                <span className="overflow-hidden relative">
                                                    {userProps?.mutual_friends?.length} mutual friends
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
                            <div className="w-[32px] h-[32px] flex items-center justify-center text-zinc-500 rounded-xl cursor-pointer overflow-hidden relative hover:bg-zinc-300 hover:text-black z-10 transition-all" onClick={handleShowFriendListQuickSettingItem}>
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
                {showFriendListQuickSettingItem && (
                    <FriendListQuickSetting userProps={userProps} friendListQuickSettingItemButtonRef={friendListQuickSettingItemButtonRef} friendListQuickSettingItemTranslateYValue={friendListQuickSettingItemTranslateYValue}/>
                )}
            </div>
        </div>
    );
};

export default FriendListItem;