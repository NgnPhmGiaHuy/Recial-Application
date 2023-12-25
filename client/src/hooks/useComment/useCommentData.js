"use client"

import { useState, useEffect, useRef } from "react";
import {createCommentData} from "@/app/api/fetchCommentData";

export const useCommentData = () => {
    const [commentSubmitStatus, setCommentSubmitStatus] = useState(false);

    const handleSetCommentData = async (inputText, userProps, postProps, isReply) => {
        const commentData = {
            source_id: userProps.user._id,
            destination: {
                type: isReply ? "Comment" : "Post",
                destination_id: isReply ? postProps._id : postProps.post._id,
            },
            comment_text: inputText,
        };

        const createComment = await createCommentData(commentData);

        if (createComment && !createComment.error) {
            setCommentSubmitStatus(true);
        }
    }

    return { commentSubmitStatus, handleSetCommentData }
}

export const useCommentMediaData = () => {
    const [commentSubmitStatus, setCommentSubmitStatus] = useState(false);

    const handleSetCommentData = async (inputText, userProps, mediaProps, mediaType, isComment) => {
        const commentData = {
            source_id: userProps.user._id,
            destination: {
                type: mediaType,
                destination_id: isComment ? mediaProps._id : mediaProps.media._id,
            },
            comment_text: inputText,
        };

        const createComment = await createCommentData(commentData);

        if (createComment && !createComment.error) {
            setCommentSubmitStatus(true);
        }
    }

    return { commentSubmitStatus, handleSetCommentData }
}

