import { fetchDataWithAccessToken } from "@/utils";

const handleDeleteMessage = async (conversationId, handleState) => {
    try {
        const url = process.env.NEXT_PUBLIC_API_URL + `/api/v1/secure/messages/conversation/?conversation_id=${conversationId}`;

        const deletedConversation = await fetchDataWithAccessToken(url, "DELETE");

        if (!deletedConversation) {
            return { error: "Error while deleting conversation" }
        }

        return handleState();
    } catch (error) {
        return console.error(error);
    }
}

export default handleDeleteMessage;