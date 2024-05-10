import { fetchDataWithAccessToken } from "@/utils";

const handleFriendRequest = async (e, status, userId) => {
    e.stopPropagation();

    try {
        const url = process.env.NEXT_PUBLIC_API_URL + `/api/v1/secure/user/friend-request/?status=${status}&&user_id=${userId}`;
        const friendRequest = await fetchDataWithAccessToken(url, "PUT");

        if (!friendRequest) {
            return { error: "Error fetch friend request data" };
        }

        return friendRequest;
    } catch (error) {
        return console.error('Error handling friend request:', error);
    }
}

export default handleFriendRequest;