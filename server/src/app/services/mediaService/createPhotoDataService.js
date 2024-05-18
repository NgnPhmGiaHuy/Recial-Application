const Photo = require("../../models/Photo");

class CreatePhotoDataService {
    createPhotoData = async ({ photo_url, photo_title = "", photo_privacy = "Public", photo_description = "", photo_tags = [], photo_location = null }) => {
        try {
            const photoData = new Photo({
                photo_url,
                photo_title,
                photo_privacy,
                photo_description,
                photo_tags,
                photo_location
            });

            await photoData.save();
            return photoData;
        } catch (error) {
            console.error("Error in createPhotoData: ", error);
            throw new Error("Failed to create new photo data");
        }
    }
}

module.exports = new CreatePhotoDataService();