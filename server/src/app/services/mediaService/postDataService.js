const getUserDataService = require("../userService/getUserDataService");
const Post = require("../../models/Post");
const Photo = require("../../models/Photo");
const generalDataService = require("../generalDataService");

class PostDataService {
    getPostPhotoData = async (userId, photoId, postId) => {
        const userProps = await getUserDataService.getFormattedUserData(userId);
        const postProps = await Post.findById(postId);
        const photoProps = await Photo.findById(photoId);

        return {
            _id: photoProps._id,
            user: userProps,
            media_name: photoProps.photo_title,
            media_set: postId,
            media_type: "Photo",
            media_text: photoProps.photo_description,
            media_url: photoProps.photo_url,
            comment: await generalDataService.getComment(photoProps._id),
            reaction: await generalDataService.getReaction(photoProps._id),
            media_recent: postProps.post_photos,
            created_at: photoProps.createdAt,
            updated_at: photoProps.updatedAt,
        }
    }
}

module.exports = new PostDataService();