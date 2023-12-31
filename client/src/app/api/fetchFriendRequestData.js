export const fetchFriendRequestData = async (requestId) => {
    try {
        const url = process.env.NEXT_PUBLIC_API_URL + `/api/v1/public/friend-request/${requestId}`;

        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.ok) {
            return await response.json();
        } else {
            return { error: "Error fetching friend request data" };
        }
    } catch (error) {
        throw error;
    }
}