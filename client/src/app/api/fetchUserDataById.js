const fetchAndCacheUserData = async (url, localStorageKey) => {
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.ok) {
            const responseData = await response.json();
            localStorage.setItem(localStorageKey.toString(), JSON.stringify(responseData));
            return responseData;
        } else {
            const errorData = await response.json();
            return console.error(errorData.message || `Error fetching ${localStorageKey} data`);
        }
    } catch (error) {
        return console.error(error);
    }
};

export const getUserDataById = async (userId) => {
    try {
        const url = process.env.NEXT_PUBLIC_API_URL + `/api/v1/public/user/${userId}`;
        const localStorageKey = "userIdProps";
        const cachedUserIdProps = localStorage.getItem(localStorageKey);

        if (cachedUserIdProps) {
            const parsedCachedUserIdData = JSON.parse(cachedUserIdProps);

            if (parsedCachedUserIdData && parsedCachedUserIdData.user && parsedCachedUserIdData.user._id === userId) {
                setInterval(() => fetchAndCacheUserData(url, localStorageKey), 60000);

                return parsedCachedUserIdData;
            }
        }

        const userData = await fetchAndCacheUserData(url, localStorageKey);

        setInterval(() => fetchAndCacheUserData(url, localStorageKey), 60000);

        return userData;
    } catch (error) {
        return console.error(error);
    }
};

export const getUserIdFriend = async (userId) => {
    try {
        const url = process.env.NEXT_PUBLIC_API_URL + `/api/v1/public/user/${userId}/friend/`;
        const localStorageKey = "userIdFriendProps";
        const cachedUserIdFriendProps = localStorage.getItem(localStorageKey);

        if (cachedUserIdFriendProps) {
            const parsedCachedUserIdFriendData = JSON.parse(cachedUserIdFriendProps);

            if (parsedCachedUserIdFriendData && parsedCachedUserIdFriendData.user && parsedCachedUserIdFriendData.user._id === userId) {
                return parsedCachedUserIdFriendData.friendProps;
            }
        }

        const userFriendData = await fetchAndCacheUserData(url, localStorageKey);

        setInterval(() => fetchAndCacheUserData(url, localStorageKey), 60000);

        return userFriendData ? userFriendData.friendProps : null;
    } catch (error) {
        return console.error(error);
    }
};

export const getUserIdFollowing = async (userId) => {
    try {
        const url = process.env.NEXT_PUBLIC_API_URL + `/api/v1/public/user/${userId}/following/`;
        const localStorageKey = "userIdFollowingProps";
        const cachedUserIdFollowingProps = localStorage.getItem(localStorageKey);

        if (cachedUserIdFollowingProps) {
            const parsedCachedUserIdFollowingData = JSON.parse(cachedUserIdFollowingProps);

            if (parsedCachedUserIdFollowingData && parsedCachedUserIdFollowingData.user && parsedCachedUserIdFollowingData.user._id === userId) {
                setInterval(() => fetchAndCacheUserData(url, localStorageKey), 60000);

                return parsedCachedUserIdFollowingData.followingProps;
            }
        }

        const userFollowingData = await fetchAndCacheUserData(url, localStorageKey);

        setInterval(() => fetchAndCacheUserData(url, localStorageKey), 60000);

        return userFollowingData ? userFollowingData.followingProps : null;
    } catch (error) {
        return console.error(error);
    }
};

export const getUserIdFollower = async (userId) => {
    try {
        const url = process.env.NEXT_PUBLIC_API_URL + `/api/v1/public/user/${userId}/follower/`;
        const localStorageKey = "userIdFollowerProps";
        const cachedUserIdFollowerProps = localStorage.getItem(localStorageKey);

        if (cachedUserIdFollowerProps) {
            const parsedCachedUserIdFollowerData = JSON.parse(cachedUserIdFollowerProps);

            if (parsedCachedUserIdFollowerData && parsedCachedUserIdFollowerData.user && parsedCachedUserIdFollowerData.user._id === userId) {
                setInterval(() => fetchAndCacheUserData(url, localStorageKey), 60000);

                return parsedCachedUserIdFollowerData.followerProps;
            }
        }

        const userFollowerData = await fetchAndCacheUserData(url, localStorageKey);

        setInterval(() => fetchAndCacheUserData(url, localStorageKey), 60000);

        return userFollowerData ? userFollowerData.followerProps : null;
    } catch (error) {
        return console.error(error);
    }
};

export const getUserIdPhotoList = async (userId) => {
    try {
        const url = process.env.NEXT_PUBLIC_API_URL + `/api/v1/public/user/${userId}/photo-list/`;
        const localStorageKey = "userIdPhotoProps";
        const cachedUserIdPhotoProps = localStorage.getItem(localStorageKey);

        if (cachedUserIdPhotoProps) {
            const parsedCachedUserIdPhotoData = JSON.parse(cachedUserIdPhotoProps);

            if (parsedCachedUserIdPhotoData && parsedCachedUserIdPhotoData.user && parsedCachedUserIdPhotoData.user._id === userId) {
                setInterval(() => fetchAndCacheUserData(url, localStorageKey), 60000);

                return parsedCachedUserIdPhotoData.photoListProps;
            }
        }

        const userPhotoListData = await fetchAndCacheUserData(url, localStorageKey);

        setInterval(() => fetchAndCacheUserData(url, localStorageKey), 60000);

        return userPhotoListData ? userPhotoListData.photoListProps : null;
    } catch (error) {
        return console.error(error);
    }
};

export const getUserIdGroupList = async (userId) => {
    try {
        const url = process.env.NEXT_PUBLIC_API_URL + `/api/v1/public/user/${userId}/group-list/`;
        const localStorageKey = "userIdGroupProps";
        const cachedUserIdGroupProps = localStorage.getItem(localStorageKey);

        if (cachedUserIdGroupProps) {
            const parsedCachedUserIdGroupData = JSON.parse(cachedUserIdGroupProps);

            if (parsedCachedUserIdGroupData && parsedCachedUserIdGroupData.user && parsedCachedUserIdGroupData.user._id === userId) {
                setInterval(() => fetchAndCacheUserData(url, localStorageKey), 60000);

                return parsedCachedUserIdGroupData.groupListProps;
            }
        }

        const userGroupListData = await fetchAndCacheUserData(url, localStorageKey);

        setInterval(() => fetchAndCacheUserData(url, localStorageKey), 60000);

        return userGroupListData ? userGroupListData.groupListProps : null;
    } catch (error) {
        return console.error(error);
    }
};

