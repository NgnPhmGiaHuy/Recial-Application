import { getMessageData } from "@/utils";
import { createMessageData } from "@/store/actions/message/messageAction";

const handleNewMessageData = async (data, dispatch) => {
    const { type } = data;

    if (type === "create_message") {
        const { messageId } = data;
        return dispatch(createMessageData(await getMessageData(messageId)))
    }
}

export default handleNewMessageData;