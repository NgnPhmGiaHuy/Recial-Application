const User = require("../models/User");
const Photo = require("../models/Photo");
const Comment = require("../models/Comment");
const Reaction = require("../models/Reaction");

const getTypeDataService = require("./typeService/getTypeDataService");

class GeneralDataService {
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

    getFormattedPhotoDataById = async (photoId) => {
        try {
            const photoData = await Photo.findById(photoId);

            const { createdAt, updatedAt, ...otherPhotoData } = photoData._doc;

            return {
                ...otherPhotoData,
                created_at: createdAt,
                updated_at: updatedAt,
            }
        } catch (error) {
            console.error("Error in getFormattedPhotoDataById: ", error);
            throw new Error("Failed to fetch photo data");
        }
    }

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
                const { createdAt, updatedAt, source_id, destination_id, comment_content_url, ...rest } = comment.toObject();

                const userData = await this.formattedUserData(source_id);
                const commentReplyData = await this.getCommentData(comment);
                const commentReactionData = await this.getReactionDataAndReturnUserId(comment);

                const formattedCommentData ={
                    ...rest,
                    user: userData,
                    comment_reply: commentReplyData,
                    comment_reactions: commentReactionData,
                    created_at: createdAt,
                    updated_at: updatedAt,
                };

                if (comment_content_url) {
                    formattedCommentData["comment_content_url"] = await this.getFormattedPhotoDataById(comment_content_url);
                }

                return formattedCommentData;
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

    getReactionDataAndReturnUserId = async (entityId) => {
        try {
            const reactions = await Reaction.find({ destination_id: entityId }).sort({ updatedAt: -1 });

            const formattedReactionsData = reactions.map((reaction) => reaction.source_id.toString())

            return formattedReactionsData;
        } catch (error) {
            console.error("Error in getReactionData: ", error);
            throw new Error("Failed to get reactions");
        }
    }
}

module.exports = new GeneralDataService();
