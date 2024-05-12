const User = require("../models/User");
const Comment = require("../models/Comment");
const Reaction = require("../models/Reaction");

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
            const comments = await Comment.find({ destination_id: entityId }).sort({ updatedAt: -1 });

            const formattedCommentsData = await Promise.all(comments.map(async (comment) => {
                const userData = await this.formattedUserData(comment.source_id);

                const { createdAt, updatedAt, source_id, destination_id, ...rest } = comment.toObject();

                return {
                    ...rest,
                    user: userData,
                    comment_reply: await this.getCommentData(comment),
                    comment_reactions: await this.getReactionData(comment),
                    created_at: createdAt,
                    updated_at: updatedAt,
                };
            }));

            return formattedCommentsData;
        } catch (error) {
            console.error("Error in getCommentData: ", error);
            throw new Error("Failed to get comments");
        }
    }

    getReactionData = async (entityId) => {
        try {
            const reactions = await Reaction.find({ destination_id: entityId }).sort({ updatedAt: -1 });

            const formattedReactionsData = await Promise.all(reactions.map(async (reaction) => {
                const userData = await this.formattedUserData(reaction.source_id);
                const reactionType = await getTypeDataService.getRawTypeData(reaction.reaction_type);

                return {
                    _id: reaction._id,
                    user: userData,
                    reaction_type: reactionType.type_name,
                    created_at: reaction.createdAt,
                    updated_at: reaction.updatedAt,
                }
            }));

            return formattedReactionsData;
        } catch (error) {
            console.error("Error in getReactionData: ", error);
            throw new Error("Failed to get reactions");
        }
    }

    formattedUserData = async (userId) => {
        try {
            const user = await User.findById(userId);

            const formattedUserDate = {
                _id: user._id,
                profile: {
                    username: user.username,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    profile_picture_url: user.profile_picture_url,
                }
            }

            return formattedUserDate;
        } catch (error) {
            console.error("Error in formattedUserData: ", error);
            throw new Error("Failed to formatted user data");
        }
    }
}

module.exports = new GeneralDataService();
