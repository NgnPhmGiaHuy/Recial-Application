"use client"

import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createUserFriendRequest } from "@/utils";
import { useClickOutside, useToggleState } from "@/hooks";
import { UserProfileCoverFooterFriendRequest } from "@/components";
import { toggleEditProfile } from "@/store/actions/toggle/toggleActions";

const UserProfileCoverFooter = () => {
    const dispatch = useDispatch();

    const userCheck = useSelector(state => state.userRelationship);

    const userProps = userCheck.isCurrentUser ? useSelector(state => state.user) : useSelector(state => state.userId);

    const peopleYouMayKnowButtonRef = useRef(null);

    const [showPeopleYouMayKnow, setShowPeopleYouMayKnow, handleShowPeopleYouMayKnow] = useToggleState(false);

    useClickOutside(peopleYouMayKnowButtonRef, showPeopleYouMayKnow, setShowPeopleYouMayKnow);

    const handleToggleEditProfile = () => {
        dispatch(toggleEditProfile());
    };

    const handleClick = async () => {
        if (!userCheck?.isCurrentUser && !userCheck?.isFriend && !userCheck?.isFriendRequest) {
            await handleSentFriendRequest(userProps.user._id);
        }
    }

    const handleSentFriendRequest = async (friendId) => {
        try {
            return await createUserFriendRequest(friendId);
        } catch (error) {
            return console.error(error);
        }
    }

    return (
        <div className="flex flex-col relative">
            {userCheck?.isCurrentUser || !userCheck?.isFriend || userCheck?.isFriendRequest ? (
                <>
                    <div className="pt-[12px] flex flex-row items-center relative">
                        <div className="ml-[-6px] flex flex-row flex-wrap items-center justify-center relative">
                            <div className={`${userCheck?.isFriendRequest ? "outline-lime-500 bg-lime-500 hover:outline-blue-700 hover:bg-blue-700" : "outline-lime-500 bg-lime-500 hover:outline-lime-700 hover:bg-lime-700"} min-w-[135px] min-h-[12px] ml-[8px] px-[16px] py-[6px] flex grow rounded-md cursor-pointer outline relative transition-all`} onClick={handleClick}>
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
                            <div onClick={userCheck?.isCurrentUser && handleToggleEditProfile} className="min-w-[135px] min-h-[12px] ml-[8px] px-[16px] py-[6px] flex grow rounded-md cursor-pointer outline outline-lime-700 relative hover:outline-2 hover:outline-lime-700 hover:bg-lime-100 transition-all">
                                <div className="flex items-center justify-center gap-1 text-lime-700">
                                    {userCheck?.isCurrentUser ? (
                                        <i>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 576 512"
                                                 strokeWidth={1.5} stroke="none" className="w-5 h-5">
                                                <path d="m402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6m156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8M460.1 174L402 115.9L216.2 301.8l-7.3 65.3l65.3-7.3zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1l30.9-30.9c4-4.2 4-10.8-.1-14.9"/>
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