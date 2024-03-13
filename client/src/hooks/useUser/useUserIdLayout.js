"use client"

import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";

import useCheckUserFriend from "@/hooks/useUser/useCheckUserFriend";
import { setUserRelationship } from "@/store/actions/user/userRelationshipActions";
import { useGetUserContactById, useGetUserFollowerById, useGetUserFollowingById, useGetUserFriendById, useGetUserGroupListById, useGetUserPhotoListById, useGetUserProfileById, useUserIdData } from "@/hooks/useUser/useUserIdData";
import { useGetUserContactData, useGetUserFollowerData, useGetUserFollowingData, useGetUserFriendData, useGetUserFriendRequestData, useGetUserGroupListData, useGetUserPhotoListData, useGetUserProfileData } from "@/hooks/useUser/useUserData";

const useUserIdLayout = (params) => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.user);

    const isCurrentUser = useUserIdData(params.userId);
    const userProps = isCurrentUser ? useSelector(state => state.user) : useSelector(state => state.userId);

    const currentUserFriendRequest = isCurrentUser ? useGetUserFriendRequestData(): null;
    const userFriendData = isCurrentUser ? useGetUserFriendData() : useGetUserFriendById(params.userId);
    const userProfileData = isCurrentUser ? useGetUserProfileData() : useGetUserProfileById(params.userId);
    const userContactData = isCurrentUser ? useGetUserContactData() : useGetUserContactById(params.userId);
    const userFollowerData = isCurrentUser ? useGetUserFollowerData() : useGetUserFollowerById(params.userId);
    const userFollowingData = isCurrentUser ? useGetUserFollowingData() : useGetUserFollowingById(params.userId);
    const userGroupListData = isCurrentUser ? useGetUserGroupListData() : useGetUserGroupListById(params.userId);
    const userPhotoListData = isCurrentUser ? useGetUserPhotoListData() : useGetUserPhotoListById(params.userId);

    const { isFriend, isFriendRequest } = useCheckUserFriend(currentUser, userProps);

    useEffect(() => {
        dispatch(setUserRelationship({ isCurrentUser, isFriend, isFriendRequest }))
    }, [isCurrentUser, isFriend, isFriendRequest]);

    return { currentUser, isCurrentUser, isFriend, isFriendRequest };
};

export default useUserIdLayout;
