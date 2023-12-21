export const fetchUserIdData = async (userId) => {
    try {
        const cachedUserIdProps = localStorage.getItem("userIdProps");
        const parsedCachedUserIdData = JSON.parse(cachedUserIdProps);

        if (parsedCachedUserIdData && parsedCachedUserIdData.user && parsedCachedUserIdData.user._id === userId) {
            return parsedCachedUserIdData;
        } else {
            const url = process.env.NEXT_PUBLIC_API_URL + `/api/public/user/${userId}`;

            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                const responseData = await response.json();
                localStorage.setItem("userIdProps", JSON.stringify(responseData));
                return responseData;
            } else {
                throw new Error("Error fetching user data");
            }
        }
    } catch (error) {
        throw error;
    }
}

export const fetchUserIdFriend = async (userId) => {
    try {
        const cachedUserIdFriendProps = localStorage.getItem("userIdFriendProps");
        const parsedCachedUserIdFriendData = JSON.parse(cachedUserIdFriendProps);

        if (parsedCachedUserIdFriendData && parsedCachedUserIdFriendData.user && parsedCachedUserIdFriendData.user._id === userId) {
            return parsedCachedUserIdFriendData.friendProps;
        } else {
            const url = process.env.NEXT_PUBLIC_API_URL + `/api/public/user/${userId}/friend`;

            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                const responseData = await response.json();
                localStorage.setItem("userIdFriendProps", JSON.stringify(responseData));
                return responseData.friendProps;
            } else {
                throw new Error("Error fetching user data");
            }
        }
    } catch (error) {
        throw error;
    }
}

export const fetchUserIdFollowing = async (userId) => {
    try {
        const cachedUserIdFollowingProps = localStorage.getItem("userIdFollowingProps");
        const parsedCachedUserIdFollowingData = JSON.parse(cachedUserIdFollowingProps);

        if (parsedCachedUserIdFollowingData && parsedCachedUserIdFollowingData.user && parsedCachedUserIdFollowingData.user._id === userId) {
            return parsedCachedUserIdFollowingData.followingProps;
        } else {
            const url = process.env.NEXT_PUBLIC_API_URL + `/api/public/user/${userId}/following`;

            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                const responseData = await response.json();
                localStorage.setItem("userIdFollowingProps", JSON.stringify(responseData));
                return responseData.followingProps;
            } else {
                throw new Error("Error fetching user data");
            }
        }
    } catch (error) {
        throw error;
    }
}

export const fetchUserIdFollower = async (userId) => {
    try {
        const cachedUserIdFollowerProps = localStorage.getItem("userIdFollowerProps");
        const parsedCachedUserIdFollowerData = JSON.parse(cachedUserIdFollowerProps);

        if (parsedCachedUserIdFollowerData && parsedCachedUserIdFollowerData.user && parsedCachedUserIdFollowerData.user._id === userId) {
            return parsedCachedUserIdFollowerData.followerProps;
        } else {
            const url = process.env.NEXT_PUBLIC_API_URL + `/api/public/user/${userId}/follower`;

            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                const responseData = await response.json();
                localStorage.setItem("userIdFollowerProps", JSON.stringify(responseData));
                return responseData.followerProps;
            } else {
                throw new Error("Error fetching user data");
            }
        }
    } catch (error) {
        throw error;
    }
}

export const fetchUserIdPhotoList = async (userId) => {
    try {
        const cachedUserIdPhotoProps = localStorage.getItem("userIdPhotoProps");
        const parsedCachedUserIdPhotoData = JSON.parse(cachedUserIdPhotoProps);

        if (parsedCachedUserIdPhotoData && parsedCachedUserIdPhotoData.user && parsedCachedUserIdPhotoData.user._id === userId) {
            return parsedCachedUserIdPhotoData.photoListProps;
        } else {
            const url = process.env.NEXT_PUBLIC_API_URL + `/api/public/user/${userId}/photo-list`;

            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                const responseData = await response.json();
                localStorage.setItem("userIdPhotoProps", JSON.stringify(responseData));
                return responseData.photoListProps;
            } else {
                throw new Error("Error fetching user data");
            }
        }
    } catch (error) {
        throw error;
    }
}

export const fetchUserIdGroupList = async (userId) => {
    try {
        const cachedUserIdGroupProps = localStorage.getItem("userIdGroupProps");
        const parsedCachedUserIdGroupData = JSON.parse(cachedUserIdGroupProps);

        if (parsedCachedUserIdGroupData && parsedCachedUserIdGroupData.user && parsedCachedUserIdGroupData.user._id === userId) {
            return parsedCachedUserIdGroupData.groupListProps;
        } else {
            const url = process.env.NEXT_PUBLIC_API_URL + `/api/public/user/${userId}/group-list`;

            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                const responseData = await response.json();
                localStorage.setItem("userIdGroupProps", JSON.stringify(responseData));
                return responseData.groupListProps;
            } else {
                throw new Error("Error fetching user data");
            }
        }
    } catch (error) {
        throw error;
    }
}
