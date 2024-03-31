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

        const { group, post_photos, createdAt, updatedAt, ...otherPostProps } = postProps._doc;

        const [groupData, photo, user, comment, reaction, share] = await Promise.all([
            Group.findById(group),
            this.getPostPhoto(postProps),
            this.getPostAuthor(postProps._id),
            generalDataService.getComment(postProps._id),
            generalDataService.getReaction(postProps._id),
            generalDataService.getUsersByInteractionType(PostShare, "post_id", postProps._id)
        ]);

        return {
            post: {
                user,
                ...otherPostProps,
                group: groupData,
                created_at: createdAt,
                updated_at: updatedAt,
            },
            photo,
            comment,
            reaction,
            share,
        }
    }

    getPostAuthor = async (postId) => {
        const postAuthor = await User.findOne({ post_list: postId});

        return {
            _id: postAuthor._id,
            profile: {
                username: postAuthor.username,
                firstname: postAuthor.firstname,
                lastname: postAuthor.lastname,
                profile_picture_url: postAuthor.profile_picture_url,
            }
        }
    }

    getPostPhoto = async (post) => {
        return await Promise.all(post.post_photos.map(async (photo) => {
            const photos = await Photo.findById(photo);

            const { createdAt, updatedAt, ...otherPhotoProps } = photos._doc;

            return {
                photo_url: photos.photo_url,
                created_at: createdAt,
                updated_at: updatedAt,
            };
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