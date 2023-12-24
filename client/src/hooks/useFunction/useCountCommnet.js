"use client"

import {useEffect, useState} from "react";

const useCountComment = (entity) => {
    const [totalComments, setTotalComments] = useState(0);

    const countComments = (comments) => {
        let commentCount = 0;

        comments.forEach((comment) => {
            commentCount++;
            if (comment.comment_reply && comment.comment_reply.length > 0) {
                commentCount += countComments(comment.comment_reply);
            }
        });

        return commentCount;
    };

    useEffect(() => {
        if (entity && entity.comment && entity.comment.length > 0) {
            const commentCount = countComments(entity.comment);
            setTotalComments(commentCount);
        } else {
            setTotalComments(0);
        }
    }, [entity]);

    return totalComments;
}

export default useCountComment;