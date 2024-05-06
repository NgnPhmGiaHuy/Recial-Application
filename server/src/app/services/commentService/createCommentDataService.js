const Comment = require("../../models/Comment");

class CreateCommentDataService {
    createCommentData = async (comment) => {
        try {
            const newComment = new Comment({
                source_id: comment.source_id,
                comment_text: comment.comment_text,
                destination_id: comment.destination_id,
            });

            await newComment.save();

            return newComment;
        } catch (error) {
            console.error("Error in createCommentData: ", error);
            throw new Error("Failed to create comment");
        }
    }
}

module.exports = new CreateCommentDataService();