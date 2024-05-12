"use client"

import { useState } from "react";
import {shallowEqual, useSelector} from "react-redux";

import {fetchDataWithAccessTokenAndData, handleUploadImage} from "@/utils";

const useSetMessageData = () => {
    const userProps = useSelector((state) => state.user, shallowEqual);
    const messageProps = useSelector((state) => state.message, shallowEqual);

    const [messageSubmitStatus, setMessageSubmitStatus] = useState(false);

    const handleSubmitMessageData = async (messageContent) => {
        setMessageSubmitStatus(false);

        const messageData = {
            ...messageContent,
            conversation_id: messageProps?.conversation?._id,
        }

        const url = process.env.NEXT_PUBLIC_API_URL + "/api/v1/secure/messages/";

        const createdMessage = await fetchDataWithAccessTokenAndData(url, "POST", messageData);

        if (createdMessage && !createdMessage.error) {
            return setMessageSubmitStatus(true);
        }
    }

    const handleSetMessageData = async ({ inputText, inputImage }) => {
        try {
            const uploadTasks = inputImage.map(async (base64String) => {
                return handleUploadImage(base64String, userProps.user._id);
            });

            const uploadedURLs = await Promise.all(uploadTasks);

            const dataToSend = {
                message_content: inputText,
                message_content_url: uploadedURLs,
            }

            const createdMessage = await handleSubmitMessageData(dataToSend);

            if (!createdMessage) {
                return { error: "Invalid message format" };
            }

            return setMessageSubmitStatus(true);
        } catch (error) {
            return console.error("Error uploading images or creating post: ", error);
        }
    }

    return { messageSubmitStatus, handleSetMessageData };
}

export default useSetMessageData;