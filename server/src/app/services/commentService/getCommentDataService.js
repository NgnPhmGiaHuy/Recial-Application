const Comment = require("../../models/Comment");

const getUserDataService = require("../userService/getUserDataService");
const generalDataService = require("../generalDataService");

class GetCommentDataService {
    getRawCommentData = async (commentId) => {
         return Comment.findById(commentId);
    }

    getFormattedCommentData = async (commentId) => {
        const commentData = await this.getRawCommentData(commentId);

        const { createdAt, updatedAt, ...otherCommentProps } = commentData._doc;

        return {
            comment: {
                ...otherCommentProps,
                user: await getUserDataService.getFormattedUserData(commentData.source_id),
                comment_reactions: await generalDataService.getReaction(commentData._id),
                comment_reply: await generalDataService.getComment(commentData._id),
                created_at: createdAt,
                updated_at: updatedAt,
            },
            destination: {
                destination_id: commentData.destination_id,
            }
        }
    }
}

module.exports = new GetCommentDataService();