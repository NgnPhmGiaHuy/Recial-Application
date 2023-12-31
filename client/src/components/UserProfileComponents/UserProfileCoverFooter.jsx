"use client"

import { useRef } from "react";

import { useClickOutside, useToggleState } from "@/hooks";
import {createUserFriendRequest} from "@/app/api/fetchUserData";

const UserProfileCoverFooter = ({ userProps, isCurrentUser, isFriend }) => {
    const peopleYouMayKnowButtonRef = useRef(null);
    const [showPeopleYouMayKnow, setShowPeopleUseMayKnow, handleShowPeopleYouMayKnow] = useToggleState(false);

    useClickOutside(peopleYouMayKnowButtonRef, showPeopleYouMayKnow, setShowPeopleUseMayKnow);

    const handleClick = async () => {
        if (!isCurrentUser && !isFriend) {
            await handleSentFriendRequest(userProps.user._id);
        }
    }

    const handleSentFriendRequest = async (friendId) => {
        try {
            await createUserFriendRequest(friendId);
        } catch (error) {
            console.error('Error handling friend request:', error);
        }
    }

    return (
        <div className="flex flex-col relative">
            {isCurrentUser || !isFriend ? (
                <div className="pt-[12px] flex flex-row items-center relative">
                    <div className="ml-[-8px] flex flex-row flex-wrap items-center justify-center relative">
                        <div className="min-w-[135px] min-h-[12px] ml-[8px] px-[16px] py-[6px] flex grow rounded-full cursor-pointer outline outline-lime-500 bg-lime-500 relative hover:outline-lime-700 hover:bg-lime-700 transition-all" onClick={handleClick}>
                            <div className="flex items-center justify-center gap-1 text-white">
                                <i>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
                                    </svg>
                                </i>
                                <span className="block text-[16px] text-center font-semibold break-words leading-5">
                                    <span className="overflow-hidden relative">
                                        {isCurrentUser ? "Add to story" : !isFriend && "Add friend"}
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div className="min-w-[135px] min-h-[12px] ml-[8px] px-[16px] py-[6px] flex grow rounded-full cursor-pointer outline outline-lime-700 relative hover:outline-2 hover:outline-lime-700 hover:bg-lime-100 transition-all">
                            <div className="flex items-center justify-center gap-1 text-lime-700">
                                {isCurrentUser ? (
                                    <i>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"/>
                                        </svg>
                                    </i>
                                ) : !isFriend && (
                                    <i>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"/>
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
                            <div className="min-h-[12px] ml-[8px] px-[16px] py-[6px] flex items-center justify-center rounded-full cursor-pointer outline outline-zinc-500 relative hover:outline-black hover:outline-2 hover:bg-zinc-200 transition-all"
                                onClick={handleShowPeopleYouMayKnow}>
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
            ) : null}
            <div>

            </div>
        </div>
    );
};

export default UserProfileCoverFooter;