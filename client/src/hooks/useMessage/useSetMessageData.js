"use client"

import { useState } from "react";
import { shallowEqual, useSelector } from "react-redux";

import { fetchDataWithAccessTokenAndData, handleUploadImage } from "@/utils";

const useSetMessageData = () => {
    const userProps = useSelector((state) => state.user, shallowEqual);
    const messageProps = useSelector((state) => state.message, shallowEqual);

    const [messageSubmitStatus, setMessageSubmitStatus] = useState(false);

    const handleSubmitMessageData = async ({ messageContent, conversationId }) => {
        setMessageSubmitStatus(false);

        const messageData = {
            ...messageContent,
            conversation_id: conversationId ? conversationId : messageProps?.conversation?._id,
        }

        const url = process.env.NEXT_PUBLIC_API_URL + "/api/v1/secure/messages/";

        try {
            const createdMessage = await fetchDataWithAccessTokenAndData(url, "POST", messageData);

            if (createdMessage && !createdMessage.error) {
                setMessageSubmitStatus(true);
            }
        } catch (error) {
            return console.error("Error submitting message data: ", error);
        }
    }

    const handleSetMessageData = async ({ inputText, inputImage, conversationId }) => {
        try {
            if (!inputText && inputImage.length === 0) {
                const dataToSend = {
                    message_content: "👍",
                };

                const createdMessage = await handleSubmitMessageData({ messageContent: dataToSend, conversationId: conversationId });

                if (!createdMessage) {
                    return { error: "Invalid message format" };
                }

                return setMessageSubmitStatus(true);
            }

            const uploadTasks = inputImage.map(async (base64String) => {
                return handleUploadImage(base64String, userProps.user._id);
            });

            const uploadedURLs = await Promise.all(uploadTasks);

            const dataToSend = {
                message_content: inputText,
                message_content_url: uploadedURLs,
            }

            const createdMessage = await handleSubmitMessageData({ messageContent: dataToSend, conversationId: conversationId });

            if (!createdMessage) {
                return { error: "Invalid message format" };
            }

            return setMessageSubmitStatus(true);
        } catch (error) {
            return console.error("Error uploading images or creating post: ", error);
        }
    }

    return { messageSubmitStatus, setMessageSubmitStatus, handleSetMessageData };
}

export default useSetMessageData;