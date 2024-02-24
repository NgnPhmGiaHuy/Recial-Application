const Post = require("../../models/Post");
const User = require("../../models/User");
const Group = require("../../models/Group");
const Photo = require("../../models/Photo");
const PostShare = require("../../models/PostShare");

const generalDataService = require("../generalDataService");

class GetPostDataService {
    getRawPostData = async (postId) => {
        return Post.findById(postId);
    }

    getFormattedPostData = async (postId) => {
        const postProps = await Post.findById(postId);

        const { group, createdAt, updatedAt, ...otherPostProps } = postProps._doc;

        return {
            post: {
                ...otherPostProps,
                group: await Group.findById(group),
                created_at: createdAt,
                updated_at: updatedAt,
            },
            photo: await this.getPostPhoto(postProps),
            user: await this.getPostAuthor(postProps._id),
            comment: await generalDataService.getComment(postProps._id),
            reaction: await generalDataService.getReaction(postProps._id),
            share: await generalDataService.getUsersByInteractionType(PostShare, "post_id", postProps._id),
        }
    }

    getPostAuthor = async (postId) => {
        const postAuthor = await User.findOne({ post_list: postId});

        return {
            _id: postAuthor._id,
            email: postAuthor.email,
            username: postAuthor.username,
            firstname: postAuthor.firstname,
            lastname: postAuthor.lastname,
            profile_picture_url: postAuthor.profile_picture_url,
        }
    }

    getPostPhoto = async (post) => {
        return await Promise.all(post.post_photos.map(async (photo) => {
            const photos = await Photo.findById(photo);

            return {
                ...photos._doc,
            }
        }));
    }

    getPostFeedData = async () => {
        return Post.aggregate([
            { $match: { post_privacy: "Public" } },
            { $sample: { size: 5 } },
            { $sort: { createdAt: -1 } },
        ]);
    };
}

module.exports = new GetPostDataService();