import { shallowEqual, useSelector } from "react-redux";

import { handleUploadImage } from "@/utils";
import { useSubmitMessageData } from "@/hooks";

const useSetMessageData = () => {
    const userProps = useSelector((state) => state.user, shallowEqual);

    const { error, status, setStatus, handleSubmitMessageData } = useSubmitMessageData();

    const handleSetMessageData = async ({ inputText, inputImage, conversationId }) => {
        try {
            if (!inputText && inputImage.length === 0) {
                const dataToSend = {
                    message_content: "👍",
                };

                return await handleSubmitMessageData({ messageContent: dataToSend, conversationId: conversationId });
            }

            const uploadTasks = inputImage.map(async (base64String) => {
                return handleUploadImage(base64String, userProps.user._id);
            });

            const uploadedURLs = await Promise.all(uploadTasks);

            const dataToSend = {
                message_content: inputText,
                message_content_url: uploadedURLs,
            }

            return await handleSubmitMessageData({ messageContent: dataToSend, conversationId: conversationId });
        } catch (error) {
            return console.error("Error uploading images or creating post: ", error);
        }
    }

    return { error, status, setStatus, handleSetMessageData };
}

export default useSetMessageData;