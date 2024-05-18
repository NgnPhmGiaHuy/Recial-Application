const generalDataService = require("../../services/generalDataService");
const photoDataService = require("../../services/mediaService/photoDataService");

class PhotoController {
    getPhotoData = async (req, res)  =>{
        try {
            const { photo_id } = req.query;

            const photoData = await photoDataService.getFormattedPhotoDataById(photo_id);

            return res.status(200).json(photoData);
        } catch (error) {
            console.error("Error getPhotoData", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }

    getPhotoComment = async (req, res) => {
        try {
            const { photo_id } = req.query;

            const photoData = await generalDataService.getCommentData(photo_id);

            return res.status(200).json(photoData);
        } catch (error) {
            console.error("Error in getPhotoComment", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }

    getPhotoReaction = async (req, res) => {
        try {
            const { photo_id } = req.query;

            const photoData = await generalDataService.getReactionData(photo_id);

            return res.status(200).json(photoData);
        } catch (error) {
            console.error("Error in getPhotoReaction", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
}

module.exports = new PhotoController();