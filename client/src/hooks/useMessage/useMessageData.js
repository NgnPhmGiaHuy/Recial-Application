"use client"

import { useState } from "react";
import { useSelector, shallowEqual } from "react-redux";

import { createMessageData } from "@/utils";

const useMessageData = () => {
    const messageProps = useSelector((state) => state.message, shallowEqual);

    const [messageSubmitStatus, setMessageSubmitStatus] = useState(false);

    const handleSubmitMessageData = async (messageContent) => {
        setMessageSubmitStatus(false);

        const messageData = {
            message_content: messageContent,
            conversation_id: messageProps?.conversation?._id,
        }

        const createMessage = await createMessageData(messageData);

        if (createMessage && !createMessage.error) {
            return setMessageSubmitStatus(true);
        }
    }

    return { messageSubmitStatus, setMessageSubmitStatus, handleSubmitMessageData };
}

export default useMessageData;