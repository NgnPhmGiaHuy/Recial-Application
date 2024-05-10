"use client"

import { useState } from "react";

import { fetchDataWithAccessTokenAndData } from "@/utils";

const useCommentMediaData = () => {
    const [commentSubmitStatus, setCommentSubmitStatus] = useState(false);

    const handleSetCommentData = async (inputText, userProps, mediaProps, isComment) => {
        const commentData = {
            source_id: userProps.user._id,
            comment_text: inputText,
            destination_id: isComment ? mediaProps._id : mediaProps.media._id,
        };

        const url = process.env.NEXT_PUBLIC_API_URL + "/api/v1/secure/comment/";

        const createdComment = await fetchDataWithAccessTokenAndData(url, "POST", commentData);

        if (createdComment && !createdComment.error) {
            return setCommentSubmitStatus(true);
        }
    }

    return { commentSubmitStatus, handleSetCommentData }
}

export default useCommentMediaData;