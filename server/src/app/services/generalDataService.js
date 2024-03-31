const Type = require("../models/Type");
const Comment = require("../models/Comment");
const Reaction = require("../models/Reaction");

const getUserDataService = require("./userService/getUserDataService");

class GeneralDataService {
    getUsersByInteractionType = async (model, modelId, interactId) => {
        const props = await model.find({ [`${modelId.toString().toLowerCase()}`]: interactId }).populate("user_id", "username firstname lastname profile_picture_url");

        return await Promise.all(props.map(prop => ({
            user: prop.user_id,
        })));
    }

    getComment = async (entityId) => {
        const comment = await Comment.find({ destination_id: entityId }).populate("source_id").sort({ updatedAt: -1 });

        return await Promise.all(comment.map(async (comment) => {
            return {
                _id: comment._id,
                user: await getUserDataService.getFormattedUserData(comment.source_id),
                comment_text: comment.comment_text,
                comment_tags: comment.comment_tags,
                comment_reply: await this.getComment(comment),
                comment_reactions: await this.getReaction(comment),
                created_at: comment.createdAt,
                updated_at: comment.updatedAt,
            };
        }));
    }

    getReaction = async (entityId) => {
        const reaction = await Reaction.find({ destination_id: entityId }).populate("source_id").sort({ updatedAt: -1 });

        return await Promise.all(reaction.map(async (reaction) => {
            const reactionType = await Type.findById(reaction.reaction_type);

            return {
                _id: reaction._id,
                user: await getUserDataService.getFormattedUserData(reaction.source_id),
                reaction_type: reactionType.type_name,
                created_at: reaction.createdAt,
                updated_at: reaction.updatedAt,
            }
        }));
    }
}

module.exports = new GeneralDataService();