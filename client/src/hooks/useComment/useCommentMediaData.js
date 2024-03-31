"use client"

import { useState } from "react";

import { createCommentData } from "@/utils";

const useCommentMediaData = () => {
    const [commentSubmitStatus, setCommentSubmitStatus] = useState(false);

    const handleSetCommentData = async (inputText, userProps, mediaProps, isComment) => {
        const commentData = {
            source_id: userProps.user._id,
            comment_text: inputText,
            destination_id: isComment ? mediaProps._id : mediaProps.media._id,
        };

        const createComment = await createCommentData(commentData);

        if (createComment && !createComment.error) {
            return setCommentSubmitStatus(true);
        }
    }

    return { commentSubmitStatus, handleSetCommentData }
}

export default useCommentMediaData;