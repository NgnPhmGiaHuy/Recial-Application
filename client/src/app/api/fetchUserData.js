import { handleDecodeToken } from "@/utils";

export const getUserProfileData = async () => {
    try {
        const accessToken = localStorage.getItem("accessToken");

        if (!accessToken) {
            return console.error("Access token not found.");
        }

        const decodedToken = handleDecodeToken(accessToken);

        if (decodedToken) {
            return decodedToken;
        } else {
            return console.error("Cannot decode token");
        }
    } catch (error) {
        return console.error(error);
    }
}

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