const User = require("../models/User");
const Photo = require("../models/Photo");
const PostView = require("../models/PostView");
const PostShare = require("../models/PostShare");
const PostSaved = require("../models/PostSaved");
const Comment = require("../models/Comment");
const Reaction = require("../models/Reaction");
const Post = require("../models/Post");

class PostDataService {
    getPostData = async (postId) => {
        return Post.findById(postId);
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