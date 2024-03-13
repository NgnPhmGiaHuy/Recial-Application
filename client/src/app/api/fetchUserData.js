import decodeToken from "@/utils/handleToken";

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

export const getUserProfileData = async () => {
    try {
        const accessToken = localStorage.getItem("accessToken");

        if (!accessToken) {
            return console.error("Access token not found.");
        }

        const decodedToken = decodeToken(accessToken);

        if (decodedToken) {
            return decodedToken;
        } else {
            return console.error("Cannot decode token");
        }
    } catch (error) {
        return console.error(error);
    }
}


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