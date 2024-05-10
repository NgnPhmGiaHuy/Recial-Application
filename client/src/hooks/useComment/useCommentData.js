"use client"

import { useState } from "react";

import { fetchDataWithAccessTokenAndData } from "@/utils";

const useCommentData = () => {
    const [commentSubmitStatus, setCommentSubmitStatus] = useState(false);

    const handleSetCommentData = async (inputText, userProps, postProps, isReply) => {
        const commentData = {
            source_id: userProps.user._id,
            comment_text: inputText,
            destination_id: isReply ? postProps._id : postProps.post._id,
        };

        const url = process.env.NEXT_PUBLIC_API_URL + "/api/v1/secure/comment/";

        const createdComment = await fetchDataWithAccessTokenAndData(url, "POST", commentData);

        if (createdComment && !createdComment.error) {
            return setCommentSubmitStatus(true);
        }
    }

    return { commentSubmitStatus, handleSetCommentData }
}

export default useCommentData;