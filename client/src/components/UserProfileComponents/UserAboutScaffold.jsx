import dynamic from "next/dynamic";

import {UserAboutPhotoScaffoldItem, UserAboutScaffoldItem, UserAboutVideoScaffoldItem} from "@/components";
const DynamicUserAboutVideoScaffoldItem = dynamic(() => import("@/components/UserProfileComponents/UserAboutVideoScaffoldItem"), { ssr: false });

const UserAboutScaffold = ({ userProps, mediaProps, titleLabel, isCurrentUser, isFriendItem, isFriendPage, isGroup, isGroupPage, isPhoto, isPhotoPage, isVideo, isVideoPage }) => {
    return (
        <div className="flex flex-col rounded-xl shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] bg-white overflow-hidden relative">
            <div className="p-[16px]">
                <div className="mb-[8px] flex">
                    <div className="flex grow items-center relative">
                        <div className="flex flex-col relative">
                            <a href="">
                                <span className="text-[20px] text-black text-left font-bold break-words relative leading-6">
                                    <span className="overflow-hidden relative">
                                        {titleLabel ? titleLabel : (
                                            <>
                                                {isFriendItem || isFriendPage ? "Friends" : null}
                                                {isGroup ? "Groups" : null}
                                                {isPhoto || isPhotoPage ? "Photos" : null}
                                                {isVideo || isVideoPage ? "Videos" : null}
                                            </>
                                        )}
                                    </span>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="m-[-4px] flex flex-row flex-shrink-0 items-center justify-between relative">
                        {isCurrentUser && (isFriendItem || isFriendPage) ? (
                            <>
                                <div className="p-[4px] flex flex-col flex-shrink-0 relative">
                                    <a href="/friends/requests">
                                        <div className="px-[12px] py-[10px] flex flex-row flex-nowrap items-center justify-center rounded-xl cursor-pointer relative hover:bg-zinc-100 transition-all">
                                            <span className="text-[15px] text-lime-500 text-left font-semibold break-words relative leading-5">
                                                <span className="overflow-hidden relative">
                                                    Friend requests
                                                </span>
                                            </span>
                                        </div>
                                    </a>
                                </div>
                                <div className="p-[4px] flex flex-col flex-shrink-0 relative">
                                    <a href="/friends">
                                        <div className="px-[12px] py-[10px] flex flex-row flex-nowrap items-center justify-center rounded-xl cursor-pointer relative hover:bg-zinc-100 transition-all">
                                            <span className="text-[15px] text-lime-500 text-left font-semibold break-words relative leading-5">
                                                <span className="overflow-hidden relative">
                                                    Find Friends
                                                </span>
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            </>
                        ) : null}
                        {isCurrentUser && (isPhotoPage || isVideoPage) ? (
                            <div className="p-[4px] flex flex-col flex-shrink-0 relative">
                                <div className="px-[12px] py-[10px] flex flex-row flex-nowrap items-center justify-center rounded-xl cursor-pointer relative hover:bg-zinc-100 transition-all">
                                    <span className="text-[15px] text-lime-500 text-left font-semibold break-words relative leading-5">
                                        <span className="overflow-hidden relative">
                                            Add photos/video
                                        </span>
                                    </span>
                                </div>
                            </div>
                        ) : null}
                        <div className="p-[4px] flex flex-col flex-shrink-0 relative">
                            <div className="p-[8px] flex flex-row flex-nowrap items-center justify-center rounded-xl cursor-pointer bg-zinc-100 relative hover:bg-zinc-200 transition-all">
                                <div className="w-[16px] h-[16px] mx-[3px] flex items-center justify-center overflow-hidden relative">
                                    <i>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                        </svg>
                                    </i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section>
                    {isFriendItem || isGroup ? (
                        <div className="flex flex-row flex-wrap justify-between relative">
                            {mediaProps?.slice(0, 8).map((value, index) => (
                                <UserAboutScaffoldItem key={index} userProps={value}/>
                            ))}
                        </div>
                    ) : null}
                    {isFriendPage || isGroupPage ? (
                        <div className="flex flex-row flex-wrap justify-between relative">
                            {mediaProps?.map((value, index) => (
                                <UserAboutScaffoldItem key={index} userProps={value}/>
                            ))}
                        </div>
                    ) : null}
                    {isPhoto ? (
                        <div className="flex flex-row flex-wrap relative">
                            {mediaProps?.slice(0, 8).map((value, index) => (
                                <UserAboutPhotoScaffoldItem key={index} userProps={userProps} mediaProps={value}/>
                            ))}
                        </div>
                    ) : null}
                    {isPhotoPage ? (
                        <div className="flex flex-row flex-wrap relative">
                            {mediaProps?.map((value, index) => (
                                <UserAboutPhotoScaffoldItem key={index} userProps={userProps} mediaProps={value}/>
                            ))}
                        </div>
                    ) : null}
                    {isVideo ? (
                        <div className="flex flex-row flex-wrap relative">
                            {mediaProps?.slice(0, 8).map((value, index) => (
                                <DynamicUserAboutVideoScaffoldItem key={index} userProps={value}/>
                            ))}
                        </div>
                    ) : null}
                    {isVideoPage ? (
                        <div className="flex flex-row flex-wrap relative">
                            {mediaProps?.map((value, index) => (
                                <DynamicUserAboutVideoScaffoldItem key={index} userProps={value}/>
                            ))}
                        </div>
                    ) : null}
                    {isFriendPage || isGroupPage || isPhotoPage || isVideoPage ? null : (
                        <a href={`${isFriendItem ? "/user/friends" : null}`}>
                            <div className="h-[40px] px-[12px] flex flex-row flex-nowrap items-center justify-center rounded-lg bg-zinc-100 relative hover:bg-zinc-200 transition-all">
                                <span className="text-[17px] text-black text-left font-semibold break-words relative leading-5">
                                    <span className="overflow-hidden relative">
                                        See all
                                    </span>
                                </span>
                            </div>
                        </a>
                    )}
                </section>
            </div>
        </div>
    );
};

export default UserAboutScaffold;