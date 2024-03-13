"use client"

import { useEffect, useState } from "react";

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

export default useCheckUserFriend;