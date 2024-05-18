import { fetchDataWithAccessToken } from "@/utils";
import { deleteUserConversationData, updateUserMessageData } from "@/store/actions/user/userActions";
import { createMessageData, updateMessageDataAfterDeleted } from "@/store/actions/message/messageAction";

const handleNewMessageData = async (data, dispatch) => {
    const { type } = data;

    if (type === "create_message") {
        const { messageId } = data;
        const url = process.env.NEXT_PUBLIC_API_URL + `/api/v1/secure/messages/?message=${messageId}`;

        return dispatch(createMessageData(await fetchDataWithAccessToken(url, "GET")))
    }

    if (type === "delete_message") {
        const { messageId } = data;
        const url = process.env.NEXT_PUBLIC_API_URL + `/api/v1/secure/messages/?message=${messageId}`;

        return dispatch(updateMessageDataAfterDeleted(await fetchDataWithAccessToken(url, "GET")));
    }

    if (type === "create_conversation") {
        const { conversationId } = data;
        const url = process.env.NEXT_PUBLIC_API_URL + `/api/v1/secure/messages/conversation/?conversation=${conversationId}&page=${0}`;

        return dispatch(updateUserMessageData(await fetchDataWithAccessToken(url, "GET")));
    }

    if (type === "delete_conversation") {
        const { conversationId } = data;

        return dispatch(deleteUserConversationData(conversationId.toString()))
    }
}

export default handleNewMessageData;