"use client"

import { useState } from "react";
import { shallowEqual, useSelector } from "react-redux";

import { fetchDataWithAccessTokenAndData, handleUploadImage } from "@/utils";

const useCommentData = () => {
    const userProps = useSelector(state => state.user, shallowEqual);

    const [error, setError] = useState(null);
    const [status, setStatus] = useState(false);

    const handleSetCommentData = async ({ inputText, inputImage, postProps, isReply }) => {
        try {
            const uploadedURL = inputImage ? await handleUploadImage(inputImage, userProps.user._id) : null;

            const commentData = {
                source_id: userProps.user._id,
                comment_text: inputText,
                comment_content_url: uploadedURL,
                destination_id: isReply ? postProps._id : postProps.post._id,
            };

            const url = process.env.NEXT_PUBLIC_API_URL + "/api/v1/secure/comment/";

            const createdComment = await fetchDataWithAccessTokenAndData(url, "POST", commentData);

            if (!createdComment) {
                setStatus(false);
                return setError("Failed to create comment. No response from server.");
            }

            if (createdComment.error) {
                setStatus(false);
                return setError(`Error: ${createdComment.error.message || "Unknown error occurred"}`);
            }

            setStatus(true);
            return setError(null);
        } catch (err) {
            setStatus(false);
            return setError(`Network error: ${err.message || "An unknown error occurred"}`);
        }
    }

    return { error, status, setStatus, handleSetCommentData };
}

export default useCommentData;