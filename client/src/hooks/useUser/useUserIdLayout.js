"use client"

import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";

import {useUserData} from "@/hooks";
import {fetchUserDataById, fetchUserIdFollower, fetchUserIdFollowing, fetchUserIdFriend, fetchUserIdGroupList, fetchUserIdPhotoList} from "@/app/api/fetchUserDataById";

const useUserIdLayout = (userId) => {
    const router = useRouter();
    const { userProps: userData, setUserProps: setUserData } = useUserData();

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

                    const userIdData = await fetchUserDataById(userId);

                    if (!userIdData || userIdData.error) {
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

    return {userData, setUserData, userProps, setUserProps, isCurrentUser};
}

export default useUserIdLayout;