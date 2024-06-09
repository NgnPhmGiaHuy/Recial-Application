const updateCommentReaction = (comments, sourceId, destinationId, isDelete = false) => {
    return comments.map(comment => {
        if (comment._id.toString() === destinationId.toString()) {
            const updatedReactions = isDelete
                ? comment.comment_reactions.filter(reaction => reaction.toString() !== sourceId.toString())
                : [sourceId, ...comment.comment_reactions];

            return {
                ...comment,
                comment_reactions: updatedReactions,
            };
        }

        if (comment.comment_reply && comment.comment_reply.length > 0) {
            return {
                ...comment,
                comment_reply: updateCommentReaction(comment.comment_reply, sourceId, destinationId, isDelete),
            };
        }

        return comment;
    });
};

export default updateCommentReaction;