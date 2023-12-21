"use client"

import Image from "next/image";
import {useCallback, useRef, useState} from "react";

import {useClickOutside} from "@/hooks";
import {UserProfileCoverNavigation} from "@/components";

const UserProfileCover = ({userProps, navigationProps, isCurrentUser}) => {
    const peopleYouMayKnowButtonRef = useRef(null);
    const [showPeopleYouMayKnow, setShowPeopleUseMayKnow] = useState(false);

    const handleShowPeopleYouMayKnow = useCallback(() => {
        setShowPeopleUseMayKnow((prevShowPeopleYouMayKnow) => !prevShowPeopleYouMayKnow);
    }, []);

    useClickOutside(peopleYouMayKnowButtonRef, showPeopleYouMayKnow, setShowPeopleUseMayKnow)

    return (
        <section className="flex flex-col bg-white rounded-md shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] relative">
            <div className="flex flex-col relative">
                <div className="w-full h-[134px] flex flex-col relative">
                    <div className="top-0 right-0 bottom-0 left-0 absolute">
                        <figure className="w-full h-[134px] rounded-t-md overflow-hidden relative">
                            {userProps?.user?.profile_cover_photo_url ? (
                                <div className="w-full h-full bg-white relative">
                                    <Image src={userProps?.user?.profile_cover_photo_url} alt={`${userProps?.user?.profile_cover_photo_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                                </div>
                            ) : null}
                        </figure>
                    </div>
                </div>
                <div className="flex flex-col relative">
                    <div className="px-[24px] pb-[24px]">
                        <div className="mt-[64px] flex flex-col relative">
                            <div className="h-0">
                                <div className="w-[128px] h-[128px] border-2 border-solid border-white rounded-md overflow-hidden relative translate-y-[-100%]">
                                    <Image src={userProps?.user?.profile_picture_url} alt={`${userProps?.user?.profile_picture_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                                </div>
                            </div>
                            <div className="mt-[8px] flex flex-col relative">
                                <div className="flex flex-col relative">
                                    <span className="block text-[32px] text-black text-left font-semibold break-words leading-10">
                                        <span className="overflow-hidden text-ellipsis relative">
                                            {userProps?.user?.username || userProps?.user?.firstname + " " + userProps?.user?.lastname}
                                        </span>
                                    </span>
                                </div>
                                {userProps?.user?.short_description ? (
                                    <div className="mb-[4px] flex flex-col relative">
                                        <p className="block text-[16px] text-black text-left font-normal break-words leading-5">
                                            <span className="overflow-hidden line-clamp-2 relative">
                                                {userProps?.user?.short_description}
                                            </span>
                                        </p>
                                    </div>
                                ) : null}
                                <div className="flex flex-row items-center relative">
                                    {userProps?.user?.job_title ? (
                                        <div className="pr-[4px] flex flex-col relative">
                                            <span className="block text-[14px] text-zinc-500 text-left font-normal break-words leading-5">
                                                <span className="overflow-hidden relative">
                                                    {userProps?.user?.job_title}
                                                </span>
                                            </span>
                                        </div>
                                    ) : null}
                                    <div className="flex flex-row items-center relative">
                                        {userProps?.user?.location ? (
                                            <div className="pr-[4px] flex items-center after:ml-[4px] after:w-[2px] after:h-[2px] after:rounded-full after:bg-zinc-500">
                                                <span className="block text-[14px] text-zinc-500 text-left font-normal break-words leading-5">
                                                    <span className="overflow-hidden relative">
                                                        {userProps?.user?.location?.city}, {userProps?.user?.location?.state}, {userProps?.user?.location?.country}
                                                    </span>
                                                </span>
                                            </div>
                                        ) : null}
                                        {userProps?.user?.followers && userProps.user?.followers.length ? (
                                            <div className="pr-[4px] flex items-center after:ml-[4px] after:w-[2px] after:h-[2px] after:rounded-full after:bg-zinc-500">
                                                <span className="block text-[14px] text-zinc-500 text-left font-normal break-words leading-5">
                                                    <span className="overflow-hidden relative">
                                                        {userProps?.user?.followers.length} follower
                                                    </span>
                                                </span>
                                            </div>
                                        ) : null}
                                        {userProps?.user?.following && userProps.user?.following.length ? (
                                            <div className="pr-[4px] flex items-center after:bg-zinc-500">
                                                <span className="block text-[14px] text-zinc-500 text-left font-normal break-words leading-5">
                                                    <span className="overflow-hidden relative">
                                                        {userProps?.user?.following.length} following
                                                    </span>
                                                </span>
                                            </div>
                                        ) : null}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col relative">
                            {isCurrentUser ? (
                                <div className="pt-[12px] flex flex-row items-center relative">
                                    <div className="ml-[-8px] flex flex-row flex-wrap items-center justify-center relative">
                                        <div className="min-w-[135px] min-h-[12px] ml-[8px] px-[16px] py-[6px] flex grow rounded-full cursor-pointer outline outline-lime-500 bg-lime-500 relative hover:outline-lime-700 hover:bg-lime-700 transition-all">
                                            <div className="flex items-center justify-center gap-1 text-white">
                                                <i>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                                    </svg>
                                                </i>
                                                <span className="block text-[16px] text-center font-semibold break-words leading-5">
                                                    <span className="overflow-hidden relative">
                                                        Add to story
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="min-w-[135px] min-h-[12px] ml-[8px] px-[16px] py-[6px] flex grow rounded-full cursor-pointer outline outline-lime-700 relative hover:outline-2 hover:outline-lime-700 hover:bg-lime-100 transition-all">
                                            <div className="flex items-center justify-center gap-1 text-lime-700">
                                                <i>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                                    </svg>
                                                </i>
                                                <span className="block text-[16px] text-center font-semibold break-words leading-5">
                                                    <span className="overflow-hidden relative">
                                                        Edit profile
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="min-h-[12px] ml-[8px] px-[16px] py-[6px] flex items-center justify-center rounded-full cursor-pointer outline outline-zinc-500 relative hover:outline-black hover:outline-2 hover:bg-zinc-200 transition-all" onClick={handleShowPeopleYouMayKnow}>
                                            <div className="flex items-center justify-center gap-1 text-black">
                                                {showPeopleYouMayKnow ? (
                                                    <i>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                                        </svg>
                                                    </i>
                                                ) : (
                                                    <i>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                        </svg>
                                                    </i>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : null}
                            <div>

                            </div>
                        </div>
                    </div>
                    <div>
                        <UserProfileCoverNavigation userProps={userProps} navigationProps={navigationProps}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserProfileCover;