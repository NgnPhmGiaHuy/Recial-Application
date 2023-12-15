const Reactions = require("../models/Reactions");
const User = require("../models/User");
const Type = require("../models/Type");
const Attachment = require("../models/Attachment");
const Comment = require("../models/Comment");

async function getPostAuthor(post) {
    const postAuthor = await User.findOne({ post_list: post._id});

    const postAuthorProps = {
        _id: postAuthor._id,
        email: postAuthor.email,
        username: postAuthor.username,
        firstname: postAuthor.firstname,
        lastname: postAuthor.lastname,
        profile_picture_url: postAuthor.profile_picture_url,
    }

    return postAuthorProps;
};

async function getPostCommentAuthor(comment) {
    const postCommentAuthor = await User.findById(comment.source_id);

    const postCommentAuthorProps = {
        _id: postCommentAuthor._id,
        email: postCommentAuthor.email,
        username: postCommentAuthor.username,
        firstname: postCommentAuthor.firstname,
        lastname: postCommentAuthor.lastname,
        profile_picture_url: postCommentAuthor.profile_picture_url,
    }

    return postCommentAuthorProps;
};

async function getPostComment(post) {
    const postComment = await Comment.find({"destination.destination_id": post._id}).populate("source_id");

    const postCommentProps = await Promise.all(postComment.map(async (comment) => {
        return {
                _id: comment._id,
                user: await getPostCommentAuthor(comment),
                comment_text: comment.comment_text,
                comment_tags: comment.comment_tags,
                comment_reactions: await getPostReaction(comment),
                comment_replies: await this.getPostComment(comment),
                created_at: comment.createdAt,
                updated_at: comment.updatedAt,
            };
    }));

    return postCommentProps;
};

async function getPostReaction(post) {
    const postReaction = await Reactions.find({ "destination.destination_id": post._id }).populate("source_id");

    const postReactionProps = await Promise.all(postReaction.map(async (reaction) => {
        const reactionAuthor = await User.findById(reaction.source_id);
        const reactionType = await Type.findById(reaction.reaction_type);

        return {
            _id: reaction._id,
            user: {
                _id: reactionAuthor._id,
                email: reactionAuthor.email,
                username: reactionAuthor.username,
                firstname: reactionAuthor.firstname,
                lastname: reactionAuthor.lastname,
                profile_picture_url: reactionAuthor.profile_picture_url,
            },
            reaction_type: reactionType.type_name,
            created_at: reaction.createdAt,
            updated_at: reaction.updatedAt,
        }
    }));

    return postReactionProps;
};

async function getPostAttachment(post) {
    const postAttachment = await Promise.all(post.post_attachments.map(async (attachment) => {
        const attachments = await Attachment.findById(attachment);

        return {
            ...attachments._doc,
        }
    }))

    return postAttachment;
}

module.exports = {getPostAuthor, getPostReaction, getPostComment, getPostAttachment}