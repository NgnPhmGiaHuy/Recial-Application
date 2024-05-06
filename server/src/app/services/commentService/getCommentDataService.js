const Comment = require("../../models/Comment");

const getUserDataService = require("../userService/getUserDataService");
const generalDataService = require("../generalDataService");

class GetCommentDataService {
    getRawCommentData = async (commentId) => {
        try {
            const commentData = await Comment.findById(commentId);

            return commentData;
        } catch (error) {
            console.error("Error in getRawCommentData: ", error);
            throw new Error("Failed to fetch raw comment data");
        }
    }

    getFormattedCommentDataById = async (commentId) => {
        try {
            const commentData = await this.getRawCommentData(commentId);

            const { createdAt, updatedAt, ...otherCommentProps } = commentData._doc;

            const userData = await getUserDataService.getFormattedUserDataById(commentData.source_id);
            const commentReplyData = await generalDataService.getCommentData(commentData._id);
            const commentReactionData = await generalDataService.getReactionData(commentData._id);

            return {
                comment: {
                    ...otherCommentProps,
                    user: userData,
                    comment_reply: commentReplyData,
                    comment_reactions: commentReactionData,
                    created_at: createdAt,
                    updated_at: updatedAt,
                },
                destination: {
                    destination_id: commentData.destination_id,
                }
            };
        } catch (error) {
            console.error("Error in getFormattedCommentDataById: ", error);
            throw new Error("Failed to format comment data");
        }
    }
}

module.exports = new GetCommentDataService();