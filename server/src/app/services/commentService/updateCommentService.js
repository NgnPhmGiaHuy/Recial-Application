const Comment = require("../../models/Comment");

class UpdateCommentService {
    updateCommentDataById = async (commentId, commentData) => {
        try {
            const comment = await Comment.findById(commentId);

            if (!comment) {
                throw new Error("Comment not found");
            }

            comment.comment_text = commentData.comment_text;
            comment.updatedAt = new Date();

            await comment.save();

            return comment;
        } catch (error) {
            console.error("Error in updateCommentDataById: ", error);
            throw new Error("Failed to update comment");
        }
    }
}

module.exports = new UpdateCommentService();