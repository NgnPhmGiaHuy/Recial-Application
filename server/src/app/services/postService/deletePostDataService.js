const User = require("../../models/User");
const Photo = require("../../models/Photo");
const PostView = require("../../models/PostView");
const PostShare = require("../../models/PostShare");
const PostSaved = require("../../models/PostSaved");
const Comment = require("../../models/Comment");
const Reaction = require("../../models/Reaction");
const Post = require("../../models/Post");

class DeletePostDataService {
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

    findAndDeleteUserPost = async (userId, deletedPost) => {
        const user = await User.findByIdAndUpdate(
            userId,
            { $pull: { post_list: deletedPost._id, photo_list: { $in: deletedPost.post_photos } } },
            { new: true }
        );

        return user;
    }
}

module.exports = new DeletePostDataService();