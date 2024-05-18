const mediaDataService = require("../../services/mediaService/mediaDataService");

class MediaController {
    getMediaAuthorData = async (req, res) => {
        try {
            const { user_id } = req.query;

            const mediaAuthorData = await mediaDataService.getFormattedMediaAuthorByUserId(user_id);

            return res.status(200).json(mediaAuthorData);
        } catch (error) {
            console.error("Error in getFormattedPhotoAuthorByUserId: ", error);
            throw new Error("Failed to format user data by ID");
        }
    }
}


module.exports = new MediaController();