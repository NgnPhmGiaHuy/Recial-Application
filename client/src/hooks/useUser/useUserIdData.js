"use client"

import {useEffect, useState} from "react";
import {fetchUserIdData, fetchUserIdFollower, fetchUserIdFollowing, fetchUserIdFriend, fetchUserIdGroupList, fetchUserIdPhotoList} from "@/app/api/fetchUserIdData";

const useUserIdData = ({ userId, router }) => {
    const [userIdProps, setUserIdProps] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userIdData = await fetchUserIdData(userId);

                if (!userIdData || userIdData.error === "Access token not found") {
                    return router.push("/auth/login");
                }

                setUserIdProps((prevData) => ({ ...prevData, ...userIdData }));

                const userFriend = await fetchUserIdFriend(userId);

                if (userFriend && !userFriend.error) {
                    setUserIdProps((prevData) => ({
                        ...prevData,
                        user: { ...prevData.user, friends: [...userFriend] }
                    }));
                }

                const userPhotoList = await fetchUserIdPhotoList(userId);

                if (userPhotoList && !userPhotoList.error) {
                    setUserIdProps((prevData) => ({ ...prevData, photo_list: [...userPhotoList] }));
                }

                const userGroupList = await fetchUserIdGroupList(userId);

                if (userGroupList && !userGroupList.error) {
                    setUserIdProps((prevData) => ({ ...prevData, group_list: [...userGroupList] }));
                }

                const userFollowing = await fetchUserIdFollowing(userId);

                if (userFollowing && !userFollowing.error) {
                    setUserIdProps((prevData) => ({
                        ...prevData,
                        user: { ...prevData.user, following: [...userFollowing] }
                    }));
                }

                const userFollower = await fetchUserIdFollower(userId);

                if (userFollowing && !userFollowing.error) {
                    setUserIdProps((prevData) => ({
                        ...prevData,
                        user: { ...prevData.user, followers: [...userFollower] }
                    }));
                }
            } catch (error) {
                throw error;
            }
        }

        fetchData()
    }, [userId, router]);

    return userIdProps;
}

export default useUserIdData;