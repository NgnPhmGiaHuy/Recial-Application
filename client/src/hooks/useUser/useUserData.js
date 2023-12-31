"use client"

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

import { fetchUserData, fetchUserFollower, fetchUserFollowing, fetchUserFriend, fetchUserFriendRequest, fetchUserGroupList, fetchUserMessage, fetchUserNotification, fetchUserPhotoList, fetchUserSearchQuery, fetchUserSetting } from "@/app/api/fetchUserData";

const useUserData = () => {
    const router = useRouter();
    const [userProps, setUserProps] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userData = await fetchUserData();

                if (!userData || userData.error) {
                    return router.push("/auth/login");
                }

                setUserProps((prevData) => ({ ...prevData, ...userData }));

                const userNotification = await fetchUserNotification();

                if (userNotification && !userNotification.error) {
                    setUserProps((prevData) => ({ ...prevData, notifications: [...userNotification] }));
                }

                const userMessage = await fetchUserMessage();

                if (userMessage && !userMessage.error) {
                    setUserProps((prevData) => ({ ...prevData, messages: [...userMessage] }));
                }

                const userSearch = await fetchUserSearchQuery();
                if (userSearch && !userSearch.error) {
                    setUserProps((prevData) => ({ ...prevData, search: [...userSearch] }));
                }

                const userSetting = await fetchUserSetting();
                if (userSetting && !userSetting.error) {
                    setUserProps((prevData) => ({ ...prevData, setting: userSetting }));
                }

                const userFollowing = await fetchUserFollowing()
                if (userFollowing && !userFollowing.error) {
                    setUserProps((prevData) => ({
                        ...prevData,
                        user: { ...prevData.user, following: [...userFollowing] }
                    }));
                }

                const userFollower = await fetchUserFollower()
                if (userFollower && !userFollower.error) {
                    setUserProps((prevData) => ({
                        ...prevData,
                        user: { ...prevData.user, followers: [...userFollower] }
                    }));
                }

                const userFriend = await fetchUserFriend();

                if (userFriend && !userFriend.error) {
                    setUserProps((prevData) => ({
                        ...prevData,
                        user: { ...prevData.user, friends: [...userFriend] }
                    }));
                }

                const userFriendRequest = await fetchUserFriendRequest();
                if (userFriendRequest && !userFriendRequest.error) {
                    setUserProps((prevData) => ({ ...prevData, friend_request: [...userFriendRequest] }));
                }

                const userPhotoList = await fetchUserPhotoList();

                if (userPhotoList && !userPhotoList.error) {
                    setUserProps((prevData) => ({ ...prevData, photo_list: [...userPhotoList] }));
                }

                const userGroupList = await fetchUserGroupList();

                if (userGroupList && !userGroupList.error) {
                    setUserProps((prevData) => ({ ...prevData, group_list: [...userGroupList] }));
                }
            } catch (error) {
                throw error;
            }
        };

        fetchData();
    }, [router]);

    return {userProps, setUserProps};
};

export default useUserData;