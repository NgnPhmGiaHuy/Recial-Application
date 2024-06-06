"use client"

import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { useGetUserDataFetcher, useCheckUserFriend } from "@/hooks";
import { setUserRelationship } from "@/store/actions/user/userRelationshipActions";
import { useGetUserContactById, useGetUserFollowerById, useGetUserFollowingById, useGetUserFriendById, useGetUserGroupListById, useGetUserPhotoListById, useGetUserProfileById, useUserIdData, useGetUserVideoListById } from "@/hooks/useUser/useUserIdData";
import { setUserContactData, setUserFollowerData, setUserFollowingData, setUserFriendData, setUserFriendRequestData, setUserGroupListData, setUserPhotoListData, setUserProfileData, setUserVideoListData } from "@/store/actions/user/userActions";

const useUserIdLayout = (params) => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.user, shallowEqual);

    const isCurrentUser = useUserIdData(params.userId);
    const userProps = isCurrentUser ? useSelector(state => state.user, shallowEqual) : useSelector(state => state.userId, shallowEqual);

    isCurrentUser ? useGetUserDataFetcher("friend-request", setUserFriendRequestData): null;
    isCurrentUser ? useGetUserDataFetcher("friend", setUserFriendData) : useGetUserFriendById(params.userId);
    isCurrentUser ? useGetUserDataFetcher("profile", setUserProfileData) : useGetUserProfileById(params.userId);
    isCurrentUser ? useGetUserDataFetcher("contact", setUserContactData) : useGetUserContactById(params.userId);
    isCurrentUser ? useGetUserDataFetcher("follower", setUserFollowerData) : useGetUserFollowerById(params.userId);
    isCurrentUser ? useGetUserDataFetcher("following", setUserFollowingData) : useGetUserFollowingById(params.userId);
    isCurrentUser ? useGetUserDataFetcher("group-list", setUserGroupListData) : useGetUserGroupListById(params.userId);
    isCurrentUser ? useGetUserDataFetcher("photo-list", setUserPhotoListData) : useGetUserPhotoListById(params.userId);
    isCurrentUser ? useGetUserDataFetcher("video-list", setUserVideoListData) : useGetUserVideoListById(params.userId);

    const { isFriend, isFriendRequest } = useCheckUserFriend(currentUser, userProps);

    useEffect(() => {
        dispatch(setUserRelationship({ isCurrentUser, isFriend, isNotFriend: !isCurrentUser && !isFriend && !isFriendRequest ,isFriendRequest }))
    }, [isCurrentUser, isFriend, isFriendRequest]);

    return { currentUser, isCurrentUser, isFriend, isFriendRequest };
};

export default useUserIdLayout;
