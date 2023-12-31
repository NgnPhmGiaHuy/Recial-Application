"use client"

import { useRef } from "react";

import { useClickOutside, useToggleState } from "@/hooks";
import {createUserFriendRequest, setUserFriendRequest} from "@/app/api/fetchUserData";

const UserProfileCoverFooter = ({ userProps, isCurrentUser, isFriend, isFriendRequest }) => {
    const peopleYouMayKnowButtonRef = useRef(null);
    const [showPeopleYouMayKnow, setShowPeopleUseMayKnow, handleShowPeopleYouMayKnow] = useToggleState(false);

    useClickOutside(peopleYouMayKnowButtonRef, showPeopleYouMayKnow, setShowPeopleUseMayKnow);

    const handleClick = async () => {
        if (!isCurrentUser && !isFriend && !isFriendRequest) {
            await handleSentFriendRequest(userProps.user._id);
        }
    }

    const handleSentFriendRequest = async (friendId) => {
        try {
            await createUserFriendRequest(friendId);
        } catch (error) {
            throw error;
        }
    }

    const handleFriendRequest = async (status) => {
        try {
            await setUserFriendRequest(status, userProps);
        } catch (error) {
            throw error;
        }
    }

    return (
        <div className="flex flex-col relative">
            {isCurrentUser || !isFriend || isFriendRequest ? (
                <>
                    <div className="pt-[12px] flex flex-row items-center relative">
                        <div className="ml-[-6px] flex flex-row flex-wrap items-center justify-center relative">
                            <div className={`${isFriendRequest ? "outline-blue-500 bg-blue-500 hover:outline-blue-700 hover:bg-blue-700" : "outline-lime-500 bg-lime-500 hover:outline-lime-700 hover:bg-lime-700"} min-w-[135px] min-h-[12px] ml-[8px] px-[16px] py-[6px] flex grow rounded-md cursor-pointer outline relative transition-all`} onClick={handleClick}>
                                <div className="flex items-center justify-center gap-1 text-white">
                                    {isFriendRequest ? (
                                        <i>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"/>
                                            </svg>
                                        </i>
                                    ) : (isCurrentUser || !isFriend) && (
                                        <i>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="M12 4.5v15m7.5-7.5h-15"/>
                                            </svg>
                                        </i>
                                    )}
                                    <span className="block text-[16px] text-center font-semibold break-words leading-5">
                                        <span className="overflow-hidden relative">
                                            {isCurrentUser ? "Add to story" : isFriendRequest ? "Response" : !isFriend && "Add friend"}
                                        </span>
                                    </span>
                                </div>
                            </div>
                            <div
                                className="min-w-[135px] min-h-[12px] ml-[8px] px-[16px] py-[6px] flex grow rounded-md cursor-pointer outline outline-lime-700 relative hover:outline-2 hover:outline-lime-700 hover:bg-lime-100 transition-all">
                                <div className="flex items-center justify-center gap-1 text-lime-700">
                                    {isCurrentUser ? (
                                        <i>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"/>
                                            </svg>
                                        </i>
                                    ) : (isFriendRequest || !isFriend) && (
                                        <i>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"/>
                                            </svg>
                                        </i>
                                    )}
                                    <span className="block text-[16px] text-center font-semibold break-words leading-5">
                                        <span className="overflow-hidden relative">
                                            {isCurrentUser ? "Edit profile" : !isFriend && "Message"}
                                        </span>
                                    </span>
                                </div>
                            </div>
                            {isCurrentUser && (
                                <div className="min-h-[12px] ml-[8px] px-[16px] py-[6px] flex items-center justify-center rounded-full cursor-pointer outline outline-zinc-500 relative hover:outline-black hover:outline-2 hover:bg-zinc-200 transition-all" onClick={handleShowPeopleYouMayKnow}>
                                    <div className="flex items-center justify-center gap-1 text-black">
                                        {showPeopleYouMayKnow ? (
                                            <i>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                     strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                          d="M4.5 15.75l7.5-7.5 7.5 7.5"/>
                                                </svg>
                                            </i>
                                        ) : (
                                            <i>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                     strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
                                                </svg>
                                            </i>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    {isFriendRequest && (
                        <div className="mt-[16px]">
                            <div className="w-full pb-[16px] flex relative">
                                <div className="w-full bg-zinc-100 rounded-md overflow-hidden relative">
                                    <div className="flex flex-row flex-wrap items-stretch justify-between relative">
                                        <div className="p-[12px] flex flex-col flex-shrink-0 items-center self-center relative">
                                            <span className="block text-[17px] text-black text-left font-semibold break-words relative leading-5">
                                                <span className="overflow-hidden relative">
                                                    {userProps?.user?.username || userProps?.user?.firstname + " " + userProps?.user?.lastname} sent you a friend request
                                                </span>
                                            </span>
                                        </div>
                                        <div className="p-[6px] flex flex-shrink-0 self-center relative">
                                            <div className="flex flex-row flex-wrap flex-shrink-0 items-stretch justify-between relative">
                                                <div className="p-[6px] flex flex-col flex-shrink grow basis-auto relative">
                                                    <div className="w-full flex flex-col justify-center cursor-pointer relative" onClick={() => handleFriendRequest("Confirm")}>
                                                        <div className="h-[36px] px-[12px] flex flex-nowrap flex-shrink-0 items-center justify-center rounded-md bg-blue-500 hover:bg-blue-700 relative transition-all">
                                                            <span className="block text-[16px] text-white text-center font-semibold break-words leading-5">
                                                                <span className="overflow-hidden relative">
                                                                    Confirm request
                                                                </span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="p-[6px] flex flex-col flex-shrink grow basis-auto relative">
                                                    <div className="w-full flex flex-col justify-center cursor-pointer relative" onClick={() => handleFriendRequest("Delete")}>
                                                        <div className="h-[36px] px-[12px] flex flex-nowrap flex-shrink-0 items-center justify-center rounded-md bg-zinc-200 hover:bg-zinc-300 relative transition-all">
                                                            <span className="block text-[16px] text-gray-700 text-center font-semibold break-words leading-5">
                                                                <span className="overflow-hidden relative">
                                                                    Delete request
                                                                </span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </>
            ) : null}
            <div>

            </div>
        </div>
    );
};

export default UserProfileCoverFooter;