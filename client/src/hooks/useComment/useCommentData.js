"use client"

import { useState } from "react";
import { shallowEqual, useSelector } from "react-redux";

import { fetchDataWithAccessTokenAndData, handleUploadImage } from "@/utils";

const useCommentData = () => {
    const userProps = useSelector(state => state.user, shallowEqual);
    const [commentSubmitStatus, setCommentSubmitStatus] = useState(false);

    const handleSetCommentData = async ({ inputText, inputImage, postProps, isReply }) => {
        const uploadedURL = inputImage ? await handleUploadImage(inputImage, userProps.user._id) : null;

        const commentData = {
            source_id: userProps.user._id,
            comment_text: inputText,
            comment_content_url: uploadedURL,
            destination_id: isReply ? postProps._id : postProps.post._id,
        };

        const url = process.env.NEXT_PUBLIC_API_URL + "/api/v1/secure/comment/";

        const createdComment = await fetchDataWithAccessTokenAndData(url, "POST", commentData);

        if (createdComment && !createdComment.error) {
            return setCommentSubmitStatus(true);
        }
    }

    return { commentSubmitStatus, setCommentSubmitStatus, handleSetCommentData }
}

export default useCommentData;