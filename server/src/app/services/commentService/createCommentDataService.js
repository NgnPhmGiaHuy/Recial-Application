const Comment = require("../../models/Comment");

const getTypeDataService = require("../typeService/getTypeDataService");

class CreateCommentDataService {
    createCommentData = async (comment) => {
        const commentType = await getTypeDataService.getTypeByTypeName(comment.destination.type);

        const newComment = new Comment({
            source_id: comment.source_id,
            destination: {
                type: commentType._id,
                destination_id: comment.destination.destination_id,
            },
            comment_text: comment.comment_text,
        });

        await newComment.save();

        return newComment;
    }
}

module.exports = new CreateCommentDataService();