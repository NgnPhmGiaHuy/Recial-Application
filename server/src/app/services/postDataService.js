const Reactions = require("../models/Reactions");
const User = require("../models/User");
const Type = require("../models/Type");
const Photo = require("../models/Photo");
const Comment = require("../models/Comment");
const userDataService = require("../services/userDataService");

async function getPostAuthor(post) {
    const postAuthor = await User.findOne({ post_list: post._id});

    return {
        _id: postAuthor._id,
        email: postAuthor.email,
        username: postAuthor.username,
        firstname: postAuthor.firstname,
        lastname: postAuthor.lastname,
        profile_picture_url: postAuthor.profile_picture_url,
    }
}

async function getPostPhoto(post) {
    const postPhoto = await Promise.all(post.post_photos.map(async (photo) => {
        const photos = await Photo.findById(photo);

        return {
            ...photos._doc,
        }
    }))

    return postPhoto;
}

async function getComment(entityId) {
    const comment = await Comment.find({ "destination.destination_id": entityId }).populate("source_id");

    const commentProps = await Promise.all(comment.map(async (comment) => {
        return {
            _id: comment._id,
            user: await userDataService.getUserById(comment.source_id),
            comment_text: comment.comment_text,
            comment_tags: comment.comment_tags,
            comment_reactions: await getReaction(comment),
            comment_reply: await getComment(comment),
            created_at: comment.createdAt,
            updated_at: comment.updatedAt,
        };
    }));

    return commentProps;
}

async function getReaction(entityId) {
    const reaction = await Reactions.find({ "destination.destination_id": entityId }).populate("source_id");

    const reactionProps = await Promise.all(reaction.map(async (reaction) => {
        const reactionType = await Type.findById(reaction.reaction_type);

        return {
            _id: reaction._id,
            user: await userDataService.getUserById(reaction.source_id),
            reaction_type: reactionType.type_name,
            created_at: reaction.createdAt,
            updated_at: reaction.updatedAt,
        }
    }));

    return reactionProps;
}

module.exports = {getPostAuthor, getComment, getReaction, getPostPhoto}