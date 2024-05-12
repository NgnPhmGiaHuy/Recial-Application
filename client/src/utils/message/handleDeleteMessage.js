import { fetchDataWithAccessToken } from "@/utils";

const handleDeleteMessage = async (messageId, conversationId, handleState) => {
    try {
        const url = process.env.NEXT_PUBLIC_API_URL + `/api/v1/secure/messages/?message_id=${messageId}&conversation_id=${conversationId}`;

        const deletedMessage = await fetchDataWithAccessToken(url, "DELETE");

        if (deletedMessage && !deletedMessage.error) {
            return handleState();
        }
    } catch (error) {
        return console.error(error);
    }
}

export default handleDeleteMessage;