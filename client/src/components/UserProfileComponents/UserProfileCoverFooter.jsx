"use client"

import { useRef } from "react";

import { useClickOutside, useToggleState } from "@/hooks";
import {createUserFriendRequest, setUserFriendRequest} from "@/app/api/fetchUserData";
import {UserProfileCoverFooterFriendRequest, UserProfileEdit} from "@/components";

const UserProfileCoverFooter = ({ userProps, userCheck, handleState }) => {
    const peopleYouMayKnowButtonRef = useRef(null);

    const [showPeopleYouMayKnow, setShowPeopleYouMayKnow, handleShowPeopleYouMayKnow] = useToggleState(false);

    useClickOutside(peopleYouMayKnowButtonRef, showPeopleYouMayKnow, setShowPeopleYouMayKnow);

    const handleClick = async () => {
        if (!userCheck?.isCurrentUser && !userCheck?.isFriend && !userCheck?.isFriendRequest) {
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

    return (
        <div className="flex flex-col relative">
            {userCheck?.isCurrentUser || !userCheck?.isFriend || userCheck?.isFriendRequest ? (
                <>
                    <div className="pt-[12px] flex flex-row items-center relative">
                        <div className="ml-[-6px] flex flex-row flex-wrap items-center justify-center relative">
                            <div className={`${userCheck?.isFriendRequest ? "outline-blue-500 bg-blue-500 hover:outline-blue-700 hover:bg-blue-700" : "outline-lime-500 bg-lime-500 hover:outline-lime-700 hover:bg-lime-700"} min-w-[135px] min-h-[12px] ml-[8px] px-[16px] py-[6px] flex grow rounded-md cursor-pointer outline relative transition-all`} onClick={handleClick}>
                                <div className="flex items-center justify-center gap-1 text-white">
                                    {userCheck?.isFriendRequest ? (
                                        <i>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"/>
                                            </svg>
                                        </i>
                                    ) : (userCheck?.isCurrentUser || !userCheck?.isFriend) && (
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
                                            {userCheck?.isCurrentUser ? "Add to story" : userCheck?.isFriendRequest ? "Response" : !userCheck?.isFriend && "Add friend"}
                                        </span>
                                    </span>
                                </div>
                            </div>
                            <div onClick={userCheck?.isCurrentUser && handleState.handleShowEditProfile} className="min-w-[135px] min-h-[12px] ml-[8px] px-[16px] py-[6px] flex grow rounded-md cursor-pointer outline outline-lime-700 relative hover:outline-2 hover:outline-lime-700 hover:bg-lime-100 transition-all">
                                <div className="flex items-center justify-center gap-1 text-lime-700">
                                    {userCheck?.isCurrentUser ? (
                                        <i>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"/>
                                            </svg>
                                        </i>
                                    ) : (userCheck?.isFriendRequest || !userCheck?.isFriend) && (
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
                                            {userCheck?.isCurrentUser ? "Edit profile" : !userCheck?.isFriend && "Message"}
                                        </span>
                                    </span>
                                </div>
                            </div>
                            {userCheck?.isCurrentUser && (
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
                    {userCheck?.isFriendRequest && (
                        <UserProfileCoverFooterFriendRequest userProps={userProps}/>
                    )}
                </>
            ) : null}
        </div>
    );
};

export default UserProfileCoverFooter;