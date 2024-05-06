const Comment = require("../models/Comment");
const Reaction = require("../models/Reaction");

const getUserDataService = require("./userService/getUserDataService");
const getTypeDataService = require("./typeService/getTypeDataService");

class GeneralDataService {
    getUsersByInteractionType = async (model, modelId, interactId) => {
        try {
            const props = await model.find({ [`${modelId.toString().toLowerCase()}`]: interactId }).populate("user_id", "username firstname lastname profile_picture_url");

            return await Promise.all(props.map(prop => ({
                user: prop.user_id,
            })));
        } catch (error) {
            console.error("Error in getUsersByInteractionType: ", error);
            throw new Error("Failed to get users by interaction type");
        }
    }

    getCommentData = async (entityId) => {
        try {
            const comment = await Comment.find({ destination_id: entityId }).populate("source_id").sort({ updatedAt: -1 });

            return await Promise.all(comment.map(async (comment) => {
                const userData = await getUserDataService.getFormattedUserDataById(comment.source_id);
                
                return {
                    _id: comment._id,
                    user: userData,
                    comment_text: comment.comment_text,
                    comment_tags: comment.comment_tags,
                    comment_reply: await this.getCommentData(comment),
                    comment_reactions: await this.getReactionData(comment),
                    created_at: comment.createdAt,
                    updated_at: comment.updatedAt,
                };
            }));
        } catch (error) {
            console.error("Error in getCommentData: ", error);
            throw new Error("Failed to get comments");
        }
    }

    getReactionData = async (entityId) => {
        try {
            const reaction = await Reaction.find({ destination_id: entityId }).populate("source_id").sort({ updatedAt: -1 });

            return await Promise.all(reaction.map(async (reaction) => {
                const userData = await getUserDataService.getFormattedUserDataById(reaction.source_id);
                const reactionType = await getTypeDataService.getRawTypeData(reaction.reaction_type);

                return {
                    _id: reaction._id,
                    user: userData,
                    reaction_type: reactionType.type_name,
                    created_at: reaction.createdAt,
                    updated_at: reaction.updatedAt,
                }
            }));
        } catch (error) {
            console.error("Error in getReactionData: ", error);
            throw new Error("Failed to get reactions");
        }
    }
}

module.exports = new GeneralDataService();
