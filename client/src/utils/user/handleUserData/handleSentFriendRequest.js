import { fetchDataWithAccessToken } from "@/utils";

const handleSentFriendRequest = async (friendRequestId) => {
    try {
        const url = process.env.NEXT_PUBLIC_API_URL + `/api/v1/secure/user/friend-request/?friend_request_id=${friendRequestId}`;

        const friendRequested = await fetchDataWithAccessToken(url, "POST");

        if (!friendRequested) {
            return { error: "Error set friend request data" };
        }

        return friendRequested;
    } catch (error) {
        return console.error(error);
    }
}

export default handleSentFriendRequest;