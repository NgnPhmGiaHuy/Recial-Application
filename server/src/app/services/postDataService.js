const User = require("../models/User");
const Photo = require("../models/Photo");
const Group = require("../models/Group");
const PostView = require("../models/PostView");
const PostShare = require("../models/PostShare");
const PostSaved = require("../models/PostSaved");
const Comment = require("../models/Comment");
const Reaction = require("../models/Reaction");
const Post = require("../models/Post");
const generalDataService = require("./generalDataService");

class PostDataService {
    getPostData = async (postId) => {
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

    enhancePostsWithUserData = async (posts) => {
        try {
            const enhancedPosts = [];

            for (const post of posts) {
                let postProps = post._doc || post;

                const { group, createdAt, updatedAt, ...otherPostProps } = postProps;

                const postWithUserData = {
                    post: {
                        ...otherPostProps,
                        group: await Group.findById(group),
                        created_at: createdAt,
                        updated_at: updatedAt,
                    },
                    photo: await this.getPostPhoto(post),
                    user: await this.getPostAuthor(post._id),
                    comment: await generalDataService.getComment(post._id),
                    reaction: await generalDataService.getReaction(post._id),
                    share: await generalDataService.getUsersByInteractionType(PostShare, "post_id", post._id),
                };

                enhancedPosts.push(postWithUserData);
            }

            return enhancedPosts;
        } catch (error) {
            throw error;
        }
    }

    deletePost = async (req, post) => {
        return await Promise.all([
            Photo.deleteMany({ _id: { $in: post.post_photos } }),
            PostView.deleteMany({ post_id: req.body.postId }),
            PostShare.deleteMany({ post_id: req.body.postId }),
            PostSaved.deleteMany({ post_id: req.body.postId }),
            Comment.deleteMany({ "destination.destination_id": req.body.postId }),
            Reaction.deleteMany({ "destination.destination_id": req.body.postId }),
            Post.deleteOne({ _id: req.body.postId }),
        ]);
    }
}

module.exports = new PostDataService();