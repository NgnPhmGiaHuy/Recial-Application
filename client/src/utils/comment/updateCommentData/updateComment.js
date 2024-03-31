import { updateNestedComments } from "@/utils";

const updateComment = (comment, action) => {
    if (comment._id === action.payload.destination.destination_id) {
        const updatedReplies = [
            ...comment.comment_reply,
            action.payload.comment
        ].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        return { ...comment, comment_reply: updatedReplies };
    } else {
        return {
            ...comment,
            comment_reply: updateNestedComments(
                comment.comment_reply,
                action.payload.destination.destination_id,
                action.payload.comment
            )
        };
    }
};

export default updateComment;