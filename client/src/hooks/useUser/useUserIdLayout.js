"use client"

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { useUserData } from "@/hooks";
import { getUserDataById, getUserIdFollower, getUserIdFollowing, getUserIdFriend, getUserIdGroupList, getUserIdPhotoList } from "@/app/api/fetchUserDataById";

const useUserIdLayout = (userId) => {
    const { userProps: userData, setUserProps: setUserData } = useUserData();

    const { isCurrentUser } = useCheckCurrentUser(userId, userData);
    const { userProps, setUserProps } = useFetchUserData(userId, userData, isCurrentUser);
    const { isFriend, isFriendRequest } = useCheckUserFriend(userData, userProps);

    const userCheck = {
        isFriend: isFriend,
        isCurrentUser: isCurrentUser,
        isFriendRequest: isFriendRequest,
    }

    return { userData, setUserData, userProps, setUserProps, userCheck };
}

const useFetchUserData = (userId, userData, isCurrentUser) => {
    const router = useRouter();
    const [userProps, setUserProps] = useState(null);

    const fetchData = async (isCancelled) => {
        try {
            if (!userData) return;

            if (isCurrentUser) {
                setUserProps(userData);
            } else {
                setUserProps(null);

                const userIdData = await getUserDataById(userId);

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

                await fetchAndSetData(getUserIdPhotoList, (data) =>
                    updateProps((prevData) => ({ ...prevData, photo_list: [...data] }))
                );
                await fetchAndSetData(getUserIdGroupList, (data) =>
                    updateProps((prevData) => ({ ...prevData, group_list: [...data] }))
                );
                await fetchAndSetData(getUserIdFollowing, (data) =>
                    updateUserProps(() => ({following: [...data] }))
                );
                await fetchAndSetData(getUserIdFollower, (data) =>
                    updateUserProps(() => ({followers: [...data] }))
                );
                await fetchAndSetData(getUserIdFriend, (data) =>
                    updateUserProps(() => ({friends: [...data] }))
                );
            }
        } catch (error) {
            return console.error(error);
        }
    };

    useEffect(() => {
        let isCancelled = false;

        fetchData(isCancelled);

        return () => { isCancelled = true };
    }, [router, userId, userData, isCurrentUser]);

    return { userProps, setUserProps };
}

const useCheckCurrentUser = (userId, userData) => {
    const [isCurrentUser, setIsCurrentUser] = useState(false);

    const checkCurrentUser = () => {
        if (userData?.user?._id === userId) {
            return setIsCurrentUser(true);
        }
    }

    useEffect(() => {
        checkCurrentUser();
    }, [userId, userData]);

    return { isCurrentUser };
}

const useCheckUserFriend = (userData, userProps) => {
    const [isFriend, setIsFriend] = useState(false);
    const [isFriendRequest, setIsFriendRequest] = useState(false);

    const checkFriendship = () => {
        const friendIds = userData.user.friends.map(friend => friend.user._id);

        return setIsFriend(friendIds.includes(userProps.user._id));
    };

    const checkFriendRequest = () => {
        const friendRequestUserId = userData.friend_request.map(user => user.user._id);

        setIsFriendRequest(friendRequestUserId.includes(userProps.user._id));
    }

    useEffect(() => {
        if (userData && userData.friend_request && userProps && userProps.user) {
            checkFriendRequest();
        }

        if (userData && userData.user && userData.user.friends && userProps && userProps.user) {
            checkFriendship();
        }
    }, [userData, userProps]);

    return { isFriend, isFriendRequest };
}

export default useUserIdLayout;