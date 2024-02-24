const fetchAndCacheUserData = async (url, accessToken, localStorageKey) => {
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`,
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

export const getUserData = async () => {
    try {
        const accessToken = localStorage.getItem("accessToken");

        if (!accessToken) {
            return console.error("Access token not found.");
        }

        const url = process.env.NEXT_PUBLIC_API_URL + "/api/v1/secure/user/";
        const localStorageKey = "userProps";
        const cachedUserProps = localStorage.getItem(localStorageKey);

        if (cachedUserProps) {
            const userData = JSON.parse(cachedUserProps);

            setInterval(() => fetchAndCacheUserData(url, accessToken, localStorageKey), 60000);

            return userData;
        } else {
            const userData = await fetchAndCacheUserData(url, accessToken, localStorageKey);

            setInterval(() => fetchAndCacheUserData(url, accessToken, localStorageKey), 60000);

            return userData;
        }
    } catch (error) {
        return console.error(error);
    }
};

export const getUserFriend = async () => {
    try {
        const accessToken = localStorage.getItem("accessToken");

        if (!accessToken) {
            return console.error("Access token not found.");
        }

        const url = process.env.NEXT_PUBLIC_API_URL + "/api/v1/secure/user/friend/";
        const localStorageKey = "userFriendProps";
        const cachedUserFriendProps = localStorage.getItem(localStorageKey);

        if (cachedUserFriendProps) {
            const userFriendData =  JSON.parse(cachedUserFriendProps);

            setInterval(() => fetchAndCacheUserData(url, accessToken, localStorageKey), 60000);

            return userFriendData;
        } else  {
            const userFriendData = await fetchAndCacheUserData(url, accessToken, localStorageKey);

            setInterval(() => fetchAndCacheUserData(url, accessToken, localStorageKey), 60000);

            return userFriendData;
        }
    } catch (error) {
        return console.error(error);
    }
};

export const getUserFriendRequest = async () => {
    try {
        const accessToken = localStorage.getItem("accessToken");

        if (!accessToken) {
            return console.error("Access token not found.");
        }

        const url = process.env.NEXT_PUBLIC_API_URL + "/api/v1/secure/user/friend-request/";
        const localStorageKey = "userFriendRequestProps";
        const cachedUserFriendRequestProps = localStorage.getItem(localStorageKey);

        if (cachedUserFriendRequestProps) {
            const userFriendRequestData =  JSON.parse(cachedUserFriendRequestProps);

            setInterval(() => fetchAndCacheUserData(url, accessToken, localStorageKey), 60000);

            return userFriendRequestData;
        } else  {
            const userFriendRequestData = await fetchAndCacheUserData(url, accessToken, localStorageKey);

            setInterval(() => fetchAndCacheUserData(url, accessToken, localStorageKey), 60000);

            return userFriendRequestData;
        }
    } catch (error) {
        return console.error(error);
    }
};

export const getUserSearchQuery = async () => {
    try {
        const accessToken = localStorage.getItem("accessToken");

        if (!accessToken) {
            return console.error("Access token not found.");
        }

        const url = process.env.NEXT_PUBLIC_API_URL + "/api/v1/secure/user/search/";
        const localStorageKey = "userSearchProps";
        const cachedUserSearchProps = localStorage.getItem(localStorageKey);

        if (cachedUserSearchProps) {
            const userSearchData =  JSON.parse(cachedUserSearchProps);

            setInterval(() => fetchAndCacheUserData(url, accessToken, localStorageKey), 60000);

            return userSearchData;
        } else  {
            const userSearchData = await fetchAndCacheUserData(url, accessToken, localStorageKey);

            setInterval(() => fetchAndCacheUserData(url, accessToken, localStorageKey), 60000);

            return userSearchData;
        }
    } catch (error) {
        return console.error(error);
    }
}

export const getUserSetting = async () => {
    try {
        const accessToken = localStorage.getItem("accessToken");

        if (!accessToken) {
            return console.error("Access token not found.");
        }

        const url = process.env.NEXT_PUBLIC_API_URL + "/api/v1/secure/user/setting/";
        const localStorageKey = "userSettingProps";
        const cachedUserSettingProps = localStorage.getItem(localStorageKey);

        if (cachedUserSettingProps) {
            const userSettingData =  JSON.parse(cachedUserSettingProps);

            setInterval(() => fetchAndCacheUserData(url, accessToken, localStorageKey), 60000);

            return userSettingData;
        } else  {
            const userSettingData = await fetchAndCacheUserData(url, accessToken, localStorageKey);

            setInterval(() => fetchAndCacheUserData(url, accessToken, localStorageKey), 60000);

            return userSettingData;
        }
    } catch (error) {
        return console.error(error);
    }
};

export const getUserFollowing = async () => {
    try {
        const accessToken = localStorage.getItem("accessToken");

        if (!accessToken) {
            return console.error("Access token not found.");
        }

        const url = process.env.NEXT_PUBLIC_API_URL + "/api/v1/secure/user/following/";
        const localStorageKey = "userFollowingProps";
        const cachedUserFollowingProps = localStorage.getItem(localStorageKey);

        if (cachedUserFollowingProps) {
            const userFollowingData =  JSON.parse(cachedUserFollowingProps);

            setInterval(() => fetchAndCacheUserData(url, accessToken, localStorageKey), 60000);

            return userFollowingData;
        } else  {
            const userFollowingData = await fetchAndCacheUserData(url, accessToken, localStorageKey);

            setInterval(() => fetchAndCacheUserData(url, accessToken, localStorageKey), 60000);

            return userFollowingData;
        }
    } catch (error) {
        return console.error(error);
    }
};

export const getUserFollower = async () => {
    try {
        const accessToken = localStorage.getItem("accessToken");

        if (!accessToken) {
            return console.error("Access token not found.");
        }

        const url = process.env.NEXT_PUBLIC_API_URL + "/api/v1/secure/user/follower/";
        const localStorageKey = "userFollowerProps";
        const cachedUserFollowerProps = localStorage.getItem(localStorageKey);

        if (cachedUserFollowerProps) {
            const userFollowerData =  JSON.parse(cachedUserFollowerProps);

            setInterval(() => fetchAndCacheUserData(url, accessToken, localStorageKey), 60000);

            return userFollowerData;
        } else  {
            const userFollowerData = await fetchAndCacheUserData(url, accessToken, localStorageKey);

            setInterval(() => fetchAndCacheUserData(url, accessToken, localStorageKey), 60000);

            return userFollowerData;
        }
    } catch (error) {
        return console.error(error);
    }
};

export const getUserMessage = async () => {
    try {
        const accessToken = localStorage.getItem("accessToken");

        if (!accessToken) {
            return console.error("Access token not found.");
        }

        const url = process.env.NEXT_PUBLIC_API_URL + "/api/v1/secure/user/message/";
        const localStorageKey = "userMessageProps";
        const cachedUserMessageProps = localStorage.getItem(localStorageKey);

        if (cachedUserMessageProps) {
            const userMessageData =  JSON.parse(cachedUserMessageProps);

            setInterval(() => fetchAndCacheUserData(url, accessToken, localStorageKey), 60000);

            return userMessageData;
        } else  {
            const userMessageData = await fetchAndCacheUserData(url, accessToken, localStorageKey);

            setInterval(() => fetchAndCacheUserData(url, accessToken, localStorageKey), 60000);

            return userMessageData;
        }
    } catch (error) {
        return console.error(error);
    }
};

export const getUserPhotoList = async () => {
    try {
        const accessToken = localStorage.getItem("accessToken");

        if (!accessToken) {
            return console.error("Access token not found.");
        }

        const url = process.env.NEXT_PUBLIC_API_URL + "/api/v1/secure/user/photo-list/";
        const localStorageKey = "userPhotoListProps";
        const cachedUserPhotoListProps = localStorage.getItem(localStorageKey);

        if (cachedUserPhotoListProps) {
            const userPhotoListData =  JSON.parse(cachedUserPhotoListProps);

            setInterval(() => fetchAndCacheUserData(url, accessToken, localStorageKey), 60000);

            return userPhotoListData;
        } else  {
            const userPhotoListData = await fetchAndCacheUserData(url, accessToken, localStorageKey);

            setInterval(() => fetchAndCacheUserData(url, accessToken, localStorageKey), 60000);

            return userPhotoListData;
        }
    } catch (error) {
        return console.error(error);
    }
};

export const getUserGroupList = async () => {
    try {
        const accessToken = localStorage.getItem("accessToken");

        if (!accessToken) {
            return console.error("Access token not found.");
        }

        const url = process.env.NEXT_PUBLIC_API_URL + "/api/v1/secure/user/group-list/";
        const localStorageKey = "userGroupListProps";
        const cachedUserGroupListProps = localStorage.getItem(localStorageKey);

        if (cachedUserGroupListProps) {
            const userGroupListData =  JSON.parse(cachedUserGroupListProps);

            setInterval(() => fetchAndCacheUserData(url, accessToken, localStorageKey), 60000);

            return userGroupListData;
        } else  {
            const userGroupListData = await fetchAndCacheUserData(url, accessToken, localStorageKey);

            setInterval(() => fetchAndCacheUserData(url, accessToken, localStorageKey), 60000);

            return userGroupListData;
        }
    } catch (error) {
        return console.error(error);
    }
};

export const getUserNotification = async () => {
    try {
        const accessToken = localStorage.getItem("accessToken");

        if (!accessToken) {
            return console.error("Access token not found.");
        }

        const url = process.env.NEXT_PUBLIC_API_URL + "/api/v1/secure/user/notification/";
        const localStorageKey = "userNotificationProps";
        const cachedUserNotificationProps = localStorage.getItem(localStorageKey);

        if (cachedUserNotificationProps) {
            const userNotificationData =  JSON.parse(cachedUserNotificationProps);

            setInterval(() => fetchAndCacheUserData(url, accessToken, localStorageKey), 60000);

            return userNotificationData;
        } else  {
            const userNotificationData = await fetchAndCacheUserData(url, accessToken, localStorageKey);

            setInterval(() => fetchAndCacheUserData(url, accessToken, localStorageKey), 60000);

            return userNotificationData;
        }
    } catch (error) {
        return console.error(error);
    }
};

export const createUserFriendRequest = async (friendId) => {
    try {
        const accessToken = localStorage.getItem("accessToken");

        if (!accessToken) {
            return console.error("Access token not found.");
        }

        const url = process.env.NEXT_PUBLIC_API_URL + "/api/v1/secure/user/friend-request/";

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`,
            },
            body: JSON.stringify({friendId}),
        });

        if (response.ok) {
            return await response.json();
        } else {
            const errorData = await response.json();
            return console.error(errorData.message || "Error create user friend request data");
        }
    } catch (error) {
        return console.error(error);
    }
};

export const setUserFriendRequest = async (status, friendRequestUser) => {
    try {
        const accessToken = localStorage.getItem("accessToken");

        if (!accessToken) {
            return console.error("Access token not found.");
        }

        const url = process.env.NEXT_PUBLIC_API_URL + "/api/v1/secure/user/friend-request/";

        const dataToSend = { status, ...friendRequestUser };

        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`,
            },
            body: JSON.stringify(dataToSend),
        });

        if (response.ok) {
            return await response.json();
        } else {
            const errorData = await response.json();
            return console.error(errorData.message || "Error set user friend request data");
        }
    } catch (error) {
        return console.error(error);
    }
};

export const setUserProfile = async (formData) => {
    try {
        const accessToken = localStorage.getItem("accessToken");

        if (!accessToken) {
            return console.error("Access token not found.");
        }

        const url = process.env.NEXT_PUBLIC_API_URL + "/api/v1/secure/user/profile/";

        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`,
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            return await response.json();
        } else {
            const errorData = await response.json();
            return console.error(errorData.message || "Error set user profile data");
        }
    } catch (error) {
        return console.error(error);
    }
};