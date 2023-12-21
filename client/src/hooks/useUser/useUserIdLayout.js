"use client"

import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";

import {useTokenRefresh, useUserData} from "@/hooks";
import {fetchUserIdData, fetchUserIdFollower, fetchUserIdFollowing, fetchUserIdFriend, fetchUserIdGroupList, fetchUserIdPhotoList} from "@/app/api/fetchUserIdData";

const useUserIdLayout = (userId) => {
    useTokenRefresh();

    const userData = useUserData();
    const router = useRouter();

    const [userProps, setUserProps] = useState(null);
    const [isCurrentUser, setIsCurrentUser] = useState(false);

    useEffect(() => {
        let isCancelled = false;

        const fetchData = async () => {
            try {
                if (!userData) return;

                if (userData.user._id === userId) {
                    setUserProps(userData);
                    setIsCurrentUser(true);
                } else {
                    setUserProps(null);

                    const userIdData = await fetchUserIdData(userId);

                    if (!userIdData || userIdData.error === "Access token not found") {
                        return router.push("/auth/login");
                    }

                    if (!isCancelled) {
                        setUserProps((prevData) => ({ ...prevData, ...userIdData }));
                    }

                    const updateProps = (updateFunc) => {
                        if (!isCancelled) {
                            setUserProps((prevData) => ({
                                ...updateFunc(prevData)
                            }))
                        }
                    }

                    const updateUserProps = (updateFunc) => {
                        if (!isCancelled) {
                            setUserProps((prevData) => ({
                                ...prevData,
                                user: { ...prevData.user, ...updateFunc(prevData) },
                            }));
                        }
                    };

                    const fetchAndSetData = async (fetchFunction, updateFunction) => {
                        const data = await fetchFunction(userId);
                        if (!isCancelled && data && !data.error) {
                            updateFunction(data);
                        }
                    };

                    const userIdPhotoList = await fetchAndSetData(fetchUserIdPhotoList, (data) =>
                        updateProps((prevData) => ({ ...prevData, photo_list: [...data] }))
                    );
                    const userIdGroupList = await fetchAndSetData(fetchUserIdGroupList, (data) =>
                        updateProps((prevData) => ({ ...prevData, group_list: [...data] }))
                    );
                    const userIdFollowing = await fetchAndSetData(fetchUserIdFollowing, (data) =>
                        updateUserProps(() => ({following: [...data] }))
                    );
                    const userIdFollower = await fetchAndSetData(fetchUserIdFollower, (data) =>
                        updateUserProps(() => ({followers: [...data] }))
                    );
                    const userIdFriend = await fetchAndSetData(fetchUserIdFriend, (data) =>
                        updateUserProps(() => ({friends: [...data] }))
                    );
                }
            } catch (error) {
                throw error;
            }
        };

        fetchData();

        return () => { isCancelled = true };
    }, [userData, router, userId]);

    return {userData, userProps, isCurrentUser};
}

export default useUserIdLayout;