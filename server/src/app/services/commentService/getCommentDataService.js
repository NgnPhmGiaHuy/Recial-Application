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

            const { createdAt, updatedAt, source_id, destination_id, ...otherCommentProps } = commentData._doc;

            const userData = await getUserDataService.getFormattedUserDataById(source_id);
            const commentReplyData = await generalDataService.getCommentData(commentData._id);
            const commentReactionData = await generalDataService.getReactionData(commentData._id);

            const formattedCommentData = {
                comment: {
                    ...otherCommentProps,
                    user: userData,
                    comment_reply: commentReplyData,
                    comment_reactions: commentReactionData,
                    created_at: createdAt,
                    updated_at: updatedAt,
                },
                destination: {
                    destination_id: destination_id,
                }
            };

            return formattedCommentData;
        } catch (error) {
            console.error("Error in getFormattedCommentDataById: ", error);
            throw new Error("Failed to format comment data");
        }
    }
}

module.exports = new GetCommentDataService();