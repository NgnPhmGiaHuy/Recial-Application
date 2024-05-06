const Post = require("../../models/Post");
const Photo = require("../../models/Photo");
const generalDataService = require("../generalDataService");
const getUserDataService = require("../userService/getUserDataService");

class PostDataService {
    getFormattedPostPhotoDataById = async (userId, photoId, postId) => {
        try {
            const userData = await getUserDataService.getFormattedUserDataById(userId);
            const postData = await Post.findById(postId);
            const photoData = await Photo.findById(photoId);

            const commentData = await generalDataService.getCommentData(photoData._id);
            const reactionData = await generalDataService.getReactionData(photoData._id);

            const mediaProps = {
                _id: photoData._id,
                user: userData,
                media_name: photoData.photo_title,
                media_set: postId,
                media_type: "Photo",
                media_text: photoData.photo_description,
                media_url: photoData.photo_url,
                comment: commentData,
                reaction: reactionData,
                media_recent: postData.post_photos,
                created_at: photoData.createdAt,
                updated_at: photoData.updatedAt,
            };

            return mediaProps;
        } catch (error) {
            console.error("Error in getFormattedPostPhotoDataById: ", error);
            throw new Error("Failed to fetch post photo data");
        }
    }
}

module.exports = new PostDataService();