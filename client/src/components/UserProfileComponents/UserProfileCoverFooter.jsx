"use client"

import { useRef } from "react";
import { shallowEqual, useSelector } from "react-redux";

import { useClickOutside, useToggleState, useUserProfile } from "@/hooks";
import { ChatBubbleOvalLeftEllipsisIcon, ChevronDownIcon, ChevronUpIcon, PencilSquareIcon, PlusIcon, PrimaryActionButton, SecondaryActionButton, ToggleActionButton, UserPlusIcon, UserProfileCoverFooterFriendRequest, UsersIcon } from "@/components";

const UserProfileCoverFooter = () => {
    const userCheck = useSelector(state => state.userRelationship, shallowEqual);
    const userProps = userCheck.isCurrentUser ? useSelector(state => state.user, shallowEqual) : useSelector(state => state.userId, shallowEqual);

    const peopleYouMayKnowButtonRef = useRef(null);

    const [showPeopleYouMayKnow, setShowPeopleYouMayKnow, handleShowPeopleYouMayKnow] = useToggleState(false);

    useClickOutside(peopleYouMayKnowButtonRef, showPeopleYouMayKnow, setShowPeopleYouMayKnow);

    const { handleToggleEditProfile, handleClick } = useUserProfile(userCheck, userProps);

    return (
        <div className="flex flex-col relative">
            { userCheck?.isCurrentUser || userCheck?.isFriend || userCheck?.isNotFriend || userCheck?.isFriendRequest ? (
                <>
                    <div className="pt-[12px] flex flex-row items-center relative">
                        <div className="ml-[-6px] flex-center flex-row flex-wrap relative">
                            { userCheck.isFriend && (
                                <PrimaryActionButton handleClick={handleClick} icon={<UsersIcon fill="none" stroke="currentColor" strokeWidth={2} width={20} height={20} />} label="Friends"/>
                            )}
                            { userCheck.isNotFriend && (
                                <PrimaryActionButton handleClick={handleClick} icon={<UserPlusIcon fill="none" stroke="currentColor" strokeWidth={2} width={20} height={20} />} label="Add friend"/>
                            ) }
                            {userCheck.isFriendRequest && (
                                <PrimaryActionButton handleClick={handleClick} icon={<UserPlusIcon fill="none" stroke="currentColor" strokeWidth={2} width={20} height={20} />} label="Response"/>
                            ) }
                            { userCheck.isCurrentUser && (
                                <PrimaryActionButton handleClick={handleClick} icon={<PlusIcon fill="none" stroke="currentColor" strokeWidth={2} width={20} height={20} />} label="Add to story"/>
                            ) }
                            { (userCheck.isFriend || userCheck.isNotFriend || userCheck.isFriendRequest) && (
                                <SecondaryActionButton handleToggleAction={handleToggleEditProfile} icon={<ChatBubbleOvalLeftEllipsisIcon fill="none" stroke="currentColor" strokeWidth={2} width={20} height={20} />} label="Message"/>
                            ) }
                            { userCheck.isCurrentUser && (
                                <SecondaryActionButton handleToggleAction={handleToggleEditProfile} icon={<PencilSquareIcon width={20} height={20} />} label="Edit Profile"/>
                            ) }
                            { userCheck?.isCurrentUser && (
                                <ToggleActionButton showToggle={showPeopleYouMayKnow} handleToggleAction={handleShowPeopleYouMayKnow} icons={{
                                    toggleOn: <ChevronUpIcon fill="none" stroke="currentColor" strokeWidth={2} width={20} height={20} />,
                                    toggleOff: <ChevronDownIcon fill="none" stroke="currentColor" strokeWidth={2} width={20} height={20} />
                                }}/>
                            ) }
                        </div>
                    </div>
                    { userCheck?.isFriendRequest && (
                        <UserProfileCoverFooterFriendRequest userProps={userProps}/>
                    ) }
                </>
            ) : null }
        </div>
    );
};

export default UserProfileCoverFooter;