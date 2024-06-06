const Comment = require("../../models/Comment");

class DeleteCommentService {
    deleteCommentDataById = async (commentId) => {
        try {
            const deletedComment = await Comment.findByIdAndDelete(commentId);

            return deletedComment;
        } catch (error) {
            console.error("Error in deleteCommentDataById: ", error);
            throw new Error("Failed to delete comment");
        }
    }
}

module.exports = new DeleteCommentService();