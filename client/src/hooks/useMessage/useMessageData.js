"use client"

import { useState } from "react";
import { useSelector, shallowEqual } from "react-redux";

import { fetchDataWithAccessTokenAndData } from "@/utils";

const useMessageData = () => {
    const messageProps = useSelector((state) => state.message, shallowEqual);

    const [messageSubmitStatus, setMessageSubmitStatus] = useState(false);

    const handleSubmitMessageData = async (messageContent) => {
        setMessageSubmitStatus(false);

        const messageData = {
            message_content: messageContent,
            conversation_id: messageProps?.conversation?._id,
        }

        const url = process.env.NEXT_PUBLIC_API_URL + "/api/v1/secure/messages/";

        const createdMessage = await fetchDataWithAccessTokenAndData(url, "POST", messageData);

        if (createdMessage && !createdMessage.error) {
            return setMessageSubmitStatus(true);
        }
    }

    return { messageSubmitStatus, setMessageSubmitStatus, handleSubmitMessageData };
}

export default useMessageData;