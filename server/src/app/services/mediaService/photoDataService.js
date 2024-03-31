const Photo = require("../../models/Photo");

const generalDataService = require("../generalDataService");
const getUserDataService = require("../userService/getUserDataService");

class PhotoDataService {
    getPhotoData = async (userId, photoId) => {
        const photoProps = await Photo.findById(photoId);
        const userProps = await getUserDataService.getFormattedUserData(userId);

        const mediaProps = {
            _id: photoProps._id,
            user: userProps,
            media_name: photoProps.photo_title,
            media_type: "Photo",
            media_text: photoProps.photo_description,
            media_url: photoProps.photo_url,
            comment: await generalDataService.getComment(photoProps._id),
            reaction: await generalDataService.getReaction(photoProps._id),
            created_at: photoProps.createdAt,
            updated_at: photoProps.updatedAt,
        }

        return mediaProps;
    };
}

module.exports = new PhotoDataService();