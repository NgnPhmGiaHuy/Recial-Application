"use client"

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useGetUserDataFetcher, useCheckUserFriend } from "@/hooks";
import { setUserRelationship } from "@/store/actions/user/userRelationshipActions";
import { useGetUserContactById, useGetUserFollowerById, useGetUserFollowingById, useGetUserFriendById, useGetUserGroupListById, useGetUserPhotoListById, useGetUserProfileById, useUserIdData } from "@/hooks/useUser/useUserIdData";
import { setUserContactData, setUserFollowerData, setUserFollowingData, setUserFriendData, setUserFriendRequestData, setUserGroupListData, setUserPhotoListData, setUserProfileData } from "@/store/actions/user/userActions";

const useUserIdLayout = (params) => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.user);

    const isCurrentUser = useUserIdData(params.userId);
    const userProps = isCurrentUser ? useSelector(state => state.user) : useSelector(state => state.userId);

    isCurrentUser ? useGetUserDataFetcher("friend-request", setUserFriendRequestData): null;
    isCurrentUser ? useGetUserDataFetcher("friend", setUserFriendData) : useGetUserFriendById(params.userId);
    isCurrentUser ? useGetUserDataFetcher("profile", setUserProfileData) : useGetUserProfileById(params.userId);
    isCurrentUser ? useGetUserDataFetcher("contact", setUserContactData) : useGetUserContactById(params.userId);
    isCurrentUser ? useGetUserDataFetcher("follower", setUserFollowerData) : useGetUserFollowerById(params.userId);
    isCurrentUser ? useGetUserDataFetcher("following", setUserFollowingData) : useGetUserFollowingById(params.userId);
    isCurrentUser ? useGetUserDataFetcher("group-list", setUserGroupListData) : useGetUserGroupListById(params.userId);
    isCurrentUser ? useGetUserDataFetcher("photo-list", setUserPhotoListData) : useGetUserPhotoListById(params.userId);

    const { isFriend, isFriendRequest } = useCheckUserFriend(currentUser, userProps);

    useEffect(() => {
        dispatch(setUserRelationship({ isCurrentUser, isFriend, isFriendRequest }))
    }, [isCurrentUser, isFriend, isFriendRequest]);

    return { currentUser, isCurrentUser, isFriend, isFriendRequest };
};

export default useUserIdLayout;
