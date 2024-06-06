"use client"

import { useState } from "react";
import { shallowEqual, useSelector } from "react-redux";

import { fetchDataWithAccessTokenAndData } from "@/utils";

const useSubmitMessageData = () => {
    const [error, setError] = useState(null)
    const [status, setStatus] = useState(false);

    const messageProps = useSelector((state) => state.message, shallowEqual);

    const handleSubmitMessageData = async ({ messageContent, conversationId }) => {
        setStatus(false);

        const messageData = {
            ...messageContent,
            conversation_id: conversationId ? conversationId : messageProps?.conversation?._id,
        }

        const url = process.env.NEXT_PUBLIC_API_URL + "/api/v1/secure/messages/";

        try {
            const createdMessage = await fetchDataWithAccessTokenAndData(url, "POST", messageData);

            if (!createdMessage) {
                setStatus(false);
                return setError("Failed to create a message. No response from server.");
            }

            if (createdMessage.error) {
                setStatus(false);
                return setError(`Error: ${createdMessage.error.message || "Unknown error occurred"}`);
            }

            setStatus(true);
            return setError(null);
        } catch (error) {
            setStatus(false);
            return setError(`Network error: ${error.message || "An unknown error occurred"}`);
        }
    }

    return { error, status, setStatus, handleSubmitMessageData };
}

export default useSubmitMessageData;