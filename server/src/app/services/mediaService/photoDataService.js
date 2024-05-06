const Photo = require("../../models/Photo");

const generalDataService = require("../generalDataService");
const getUserDataService = require("../userService/getUserDataService");

class PhotoDataService {
    getRawPhotoData = async (photoId) => {
        try {
            const photoData = await Photo.findById(photoId);

            return photoData;
        } catch (error) {
            console.error("Error in getRawPhotoData: ", error);
            throw new Error("Failed to fetch raw photo data");
        }
    }

    getFormattedPhotoDataByIdAndUserId = async (photoId, userId) => {
        try {
            const photoData = await this.getRawPhotoData(photoId);

            const userData = await getUserDataService.getFormattedUserDataById(userId);
            const commentData = await generalDataService.getCommentData(photoData._id);
            const reactionData = await generalDataService.getReactionData(photoData._id);

            const mediaProps = {
                _id: photoData._id,
                user: userData,
                media_name: photoData.photo_title,
                media_type: "Photo",
                media_url: photoData.photo_url,
                media_text: photoData.photo_description,
                comment: commentData,
                reaction: reactionData,
                created_at: photoData.createdAt,
                updated_at: photoData.updatedAt,
            };

            return mediaProps;
        } catch (error) {
            console.error("Error in getFormattedPhotoDataByIdAndUserId: ", error);
            throw new Error("Failed to fetch photo data");
        }
    };
}

module.exports = new PhotoDataService();