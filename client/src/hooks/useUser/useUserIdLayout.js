"use client"

import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";

import {useUserData} from "@/hooks";
import {fetchUserDataById, fetchUserIdFollower, fetchUserIdFollowing, fetchUserIdFriend, fetchUserIdGroupList, fetchUserIdPhotoList} from "@/app/api/fetchUserDataById";

const useUserIdLayout = (userId) => {
    const router = useRouter();
    const { userProps: userData, setUserProps: setUserData } = useUserData();

    const [userProps, setUserProps] = useState(null);
    const [isFriend, setIsFriend] = useState(false);
    const [isCurrentUser, setIsCurrentUser] = useState(false);
    const [isFriendRequest, setIsFriendRequest] = useState(false);

    const checkFriendship = () => {
        const user = userData.user;
        const friendIds = user.friends.map(friend => friend.user._id);
        const isFriend = friendIds.includes(userProps.user._id);
        setIsFriend(isFriend);
    };

    const checkFriendRequest = () => {
        const friendRequestUserId = userData.friend_request.map(user => user.user._id);
        const isFriendRequest = friendRequestUserId.includes(userProps.user._id);
        setIsFriendRequest(isFriendRequest);
    }

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

    useEffect(() => {
        if (userData && userData.friend_request && userProps && userProps.user) {
            checkFriendRequest();
        }

        if (userData && userData.user && userData.user.friends && userProps && userProps.user) {
            checkFriendship();
        }
    }, [userData, userProps]);

    return {userData, setUserData, userProps, setUserProps, isFriend, isFriendRequest, isCurrentUser};
}

export default useUserIdLayout;