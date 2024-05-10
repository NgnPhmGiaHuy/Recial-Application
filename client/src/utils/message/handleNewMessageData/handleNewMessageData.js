import { fetchDataWithAccessToken } from "@/utils";
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
}

export default handleNewMessageData;