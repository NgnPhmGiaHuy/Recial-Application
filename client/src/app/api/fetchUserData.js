export const fetchUserData = async () => {
    try {
        const cachedUserProps = localStorage.getItem("userProps");

        if (cachedUserProps) {
            return JSON.parse(cachedUserProps);
        } else {
            const accessToken = localStorage.getItem("accessToken");

            if (!accessToken) {
                return { error: "Access token not found" };
            }

            const url = process.env.NEXT_PUBLIC_API_URL + "/api/secure/user/";

            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${accessToken}`,
                },
            });

            if (response.ok) {
                const responseData = await response.json();
                localStorage.setItem("userProps", JSON.stringify(responseData));
                return responseData;
            } else {
                return { error: "Error fetching user data" };
            }
        }
    } catch (error) {
        throw error;
    }
};

export const fetchUserFriend = async () => {
    try {
        const cachedUserFriendProps = localStorage.getItem("userFriendProps")

        if (cachedUserFriendProps) {
            return JSON.parse(cachedUserFriendProps);
        } else  {
            const accessToken = localStorage.getItem("accessToken");

            if (!accessToken) {
                return { error: "Access token not found" };
            }

            const url = process.env.NEXT_PUBLIC_API_URL + "/api/secure/user/friend";

            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            if (response.ok) {
                const responseData = await response.json();
                localStorage.setItem("userFriendProps", JSON.stringify(responseData));
                return responseData;
            } else {
                return { error: "Error fetching user friend data" };
            }
        }
    } catch (error) {
        throw error;
    }
}

export const fetchUserSearchQuery = async () => {
    try {
        const cachedUserSearchProps = localStorage.getItem("userSearchProps")

        if (cachedUserSearchProps) {
            return JSON.parse(cachedUserSearchProps);
        } else  {
            const accessToken = localStorage.getItem("accessToken");

            if (!accessToken) {
                return { error: "Access token not found" };
            }

            const url = process.env.NEXT_PUBLIC_API_URL + "/api/secure/user/search";

            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            if (response.ok) {
                const responseData = await response.json();
                localStorage.setItem("userSearchProps", JSON.stringify(responseData));
                return responseData;
            } else {
                return { error: "Error fetching user search data" };
            }
        }
    } catch (error) {
        throw error;
    }
}

export const fetchUserSetting = async () => {
    try {
        const cachedUserSettingProps = localStorage.getItem("userSettingProps")

        if (cachedUserSettingProps) {
            return JSON.parse(cachedUserSettingProps);
        } else  {
            const accessToken = localStorage.getItem("accessToken");

            if (!accessToken) {
                return { error: "Access token not found" };
            }

            const url = process.env.NEXT_PUBLIC_API_URL + "/api/secure/user/setting";

            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            if (response.ok) {
                const responseData = await response.json();
                localStorage.setItem("userSettingProps", JSON.stringify(responseData));
                return responseData;
            } else {
                return { error: "Error fetching user setting data" };
            }
        }
    } catch (error) {
        throw error;
    }
}



export const fetchUserFollowing = async () => {
    try {
        const cachedUserFollowingProps = localStorage.getItem("userFollowingProps")

        if (cachedUserFollowingProps) {
            return JSON.parse(cachedUserFollowingProps);
        } else  {
            const accessToken = localStorage.getItem("accessToken");

            if (!accessToken) {
                return { error: "Access token not found" };
            }

            const url = process.env.NEXT_PUBLIC_API_URL + "/api/secure/user/following";

            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            if (response.ok) {
                const responseData = await response.json();
                localStorage.setItem("userFollowingProps", JSON.stringify(responseData));
                return responseData;
            } else {
                return { error: "Error fetching user friend data" };
            }
        }
    } catch (error) {
        throw error;
    }
}

export const fetchUserFollower = async () => {
    try {
        const cachedUserFollowerProps = localStorage.getItem("userFollowerProps")

        if (cachedUserFollowerProps) {
            return JSON.parse(cachedUserFollowerProps);
        } else  {
            const accessToken = localStorage.getItem("accessToken");

            if (!accessToken) {
                return { error: "Access token not found" };
            }

            const url = process.env.NEXT_PUBLIC_API_URL + "/api/secure/user/follower";

            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            if (response.ok) {
                const responseData = await response.json();
                localStorage.setItem("userFollowerProps", JSON.stringify(responseData));
                return responseData;
            } else {
                return { error: "Error fetching user friend data" };
            }
        }
    } catch (error) {
        throw error;
    }
}

export const fetchUserMessage = async () => {
    try {
        const cachedUserMessageProps = localStorage.getItem("userMessageProps")

        if (cachedUserMessageProps) {
            return JSON.parse(cachedUserMessageProps);
        } else  {
            const accessToken = localStorage.getItem("accessToken");

            if (!accessToken) {
                return { error: "Access token not found" };
            }

            const url = process.env.NEXT_PUBLIC_API_URL + "/api/secure/user/message";

            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            if (response.ok) {
                const responseData = await response.json();
                localStorage.setItem("userMessageProps", JSON.stringify(responseData));
                return responseData;
            } else {
                return { error: "Error fetching user message data" };
            }
        }
    } catch (error) {
        throw error;
    }
}

export const fetchUserPhotoList = async () => {
    try {
        const cachedUserPhotoListProps = localStorage.getItem("userPhotoListProps")

        if (cachedUserPhotoListProps) {
            return JSON.parse(cachedUserPhotoListProps);
        } else  {
            const accessToken = localStorage.getItem("accessToken");

            if (!accessToken) {
                return { error: "Access token not found" };
            }

            const url = process.env.NEXT_PUBLIC_API_URL + "/api/secure/user/photo-list";

            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            if (response.ok) {
                const responseData = await response.json();
                localStorage.setItem("userPhotoListProps", JSON.stringify(responseData));
                return responseData;
            } else {
                return { error: "Error fetching user photo data" };
            }
        }
    } catch (error) {
        throw error;
    }
}

export const fetchUserGroupList = async () => {
    try {
        const cachedUserGroupListProps = localStorage.getItem("userGroupListProps")

        if (cachedUserGroupListProps) {
            return JSON.parse(cachedUserGroupListProps);
        } else  {
            const accessToken = localStorage.getItem("accessToken");

            if (!accessToken) {
                return { error: "Access token not found" };
            }

            const url = process.env.NEXT_PUBLIC_API_URL + "/api/secure/user/group-list";

            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            if (response.ok) {
                const responseData = await response.json();
                localStorage.setItem("userGroupListProps", JSON.stringify(responseData));
                return responseData;
            } else {
                return { error: "Error fetching user photo data" };
            }
        }
    } catch (error) {
        throw error;
    }
}

export const fetchUserNotification = async () => {
    try {
        const cachedUserNotificationProps = localStorage.getItem("userNotificationProps")

        if (cachedUserNotificationProps) {
            return JSON.parse(cachedUserNotificationProps);
        } else  {
            const accessToken = localStorage.getItem("accessToken");

            if (!accessToken) {
                return { error: "Access token not found" };
            }

            const url = process.env.NEXT_PUBLIC_API_URL + "/api/secure/user/notification";

            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            if (response.ok) {
                const responseData = await response.json();
                localStorage.setItem("userNotificationProps", JSON.stringify(responseData));
                return responseData;
            } else {
                return { error: "Error fetching user notification data" };
            }
        }
    } catch (error) {
        throw error;
    }
}

