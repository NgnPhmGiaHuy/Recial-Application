const updateNestedComments = (comments, destinationId, newComment) => {
    return comments.map(comment => {
        const updatedComment = { ...comment };
        if (comment._id === destinationId) {
            updatedComment.comment_reply = [
                ...comment.comment_reply,
                newComment
            ].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        } else if (comment.comment_reply.length > 0) {
            updatedComment.comment_reply = updateNestedComments(
                comment.comment_reply,
                destinationId,
                newComment
            );
        }

        return updatedComment;
    });
};

export default updateNestedComments;