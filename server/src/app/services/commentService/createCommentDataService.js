const Comment = require("../../models/Comment");

class CreateCommentDataService {
    createCommentData = async (comment) => {
        const newComment = new Comment({
            source_id: comment.source_id,
            comment_text: comment.comment_text,
            destination_id: comment.destination_id,
        });

        await newComment.save();

        return newComment;
    }
}

module.exports = new CreateCommentDataService();