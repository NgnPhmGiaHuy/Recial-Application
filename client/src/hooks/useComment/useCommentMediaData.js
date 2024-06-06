"use client"

import { useState } from "react";
import { shallowEqual, useSelector } from "react-redux";

import { fetchDataWithAccessTokenAndData } from "@/utils";

const useCommentMediaData = () => {
    const userProps = useSelector(state => state.user, shallowEqual);
    const mediaProps = useSelector(state => state.media, shallowEqual);

    const [error, setError] = useState(null)
    const [status, setStatus] = useState(false);

    const handleSetCommentData = async ({ inputText, commentProps }) => {
        const commentData = {
            source_id: userProps?.user?._id,
            comment_text: inputText,
            destination_id: commentProps ? commentProps._id : mediaProps._id,
        };

        const url = process.env.NEXT_PUBLIC_API_URL + "/api/v1/secure/comment/media";

        try {
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
        } catch (error) {
            setStatus(false);
            return setError(`Network error: ${error.message || "An unknown error occurred"}`);
        }
    }

    return { error, status, setStatus, handleSetCommentData };
}

export default useCommentMediaData;