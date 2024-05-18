import { fetchDataWithAccessToken } from "@/utils";

const handleCreateConversationData = async (userId) => {
    try {
        const userIds = Array.isArray(userId) ? userId : [userId];
        const userIdsString = userIds.join(',');

        const url = process.env.NEXT_PUBLIC_API_URL + `/api/v1/secure/messages/conversation/?user_id=${userIdsString}`;

        const createdConversationData = await fetchDataWithAccessToken(url, "POST");

        if (!createdConversationData) {
            return { error: "No message found with this API" };
        }

        return createdConversationData;
    } catch (error) {
        return console.error(error);
    }
}

export default handleCreateConversationData;