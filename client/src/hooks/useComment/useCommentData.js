"use client"

import { useState } from "react";
import { createCommentData } from "@/utils";

const useCommentData = () => {
    const [commentSubmitStatus, setCommentSubmitStatus] = useState(false);

    const handleSetCommentData = async (inputText, userProps, postProps, isReply) => {
        const commentData = {
            source_id: userProps.user._id,
            comment_text: inputText,
            destination_id: isReply ? postProps._id : postProps.post._id,
        };

        const createComment = await createCommentData(commentData);

        if (createComment && !createComment.error) {
            return setCommentSubmitStatus(true);
        }
    }

    return { commentSubmitStatus, handleSetCommentData }
}

export default useCommentData;