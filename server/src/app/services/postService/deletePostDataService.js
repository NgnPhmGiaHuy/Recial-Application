const Post = require("../../models/Post");
const User = require("../../models/User");
const Photo = require("../../models/Photo");
const Comment = require("../../models/Comment");
const Reaction = require("../../models/Reaction");
const PostView = require("../../models/PostView");
const PostShare = require("../../models/PostShare");
const PostSaved = require("../../models/PostSaved");

class DeletePostDataService {
    deletePost = async (req, post) => {
        try {
            return await Promise.all([
                Photo.deleteMany({ _id: { $in: post.post_photos } }),
                PostView.deleteMany({ post_id: req.body.postId }),
                PostShare.deleteMany({ post_id: req.body.postId }),
                PostSaved.deleteMany({ post_id: req.body.postId }),
                Comment.deleteMany({ destination_id: req.body.postId }),
                Reaction.deleteMany({ destination_id: req.body.postId }),
                Post.deleteOne({ _id: req.body.postId }),
            ]);
        } catch (error) {
            console.error("Error in deletePost: ", error);
            throw new Error("Failed to delete post related data");
        }
    }

    findAndDeleteUserPost = async (userId, deletedPost) => {
        try {
            const user = await User.findByIdAndUpdate(
                userId,
                { $pull: { post_list: deletedPost._id, photo_list: { $in: deletedPost.post_photos } } },
                { new: true }
            );

            return user;
        } catch (error) {
            console.error("Error in findAndDeleteUserPost: ", error);
            throw new Error("Failed to find and delete user post");
        }
    }
}

module.exports = new DeletePostDataService();