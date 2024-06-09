const generalDataService = require("../../services/generalDataService");
const getPhotoDataService = require("../../services/mediaService/getPhotoDataService");

class PhotoController {
    getPhotoData = async (req, res)  =>{
        try {
            const { photo_id } = req.query;

            if (!photo_id) {
                return res.status(400).send({ message: "Photo ID not found" });
            }

            const photoData = await getPhotoDataService.getFormattedPhotoDataById(photo_id);

            return res.status(200).json(photoData);
        } catch (error) {
            console.error("Error getPhotoData", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }

    getPhotoComment = async (req, res) => {
        try {
            const { photo_id } = req.query;

            if (!photo_id) {
                return res.status(400).send({ message: "Photo ID not found" });
            }

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

            if (!photo_id) {
                return res.status(400).send({ message: "Photo ID not found" });
            }

            const photoData = await generalDataService.getReactionDataAndReturnUserId(photo_id);

            return res.status(200).json(photoData);
        } catch (error) {
            console.error("Error in getPhotoReaction", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }

    getPhotoSaved = async (req, res) => {
        try {
            const { photo_id } = req.query;

            if (!photo_id) {
                return res.status(400).send({ message: "Photo ID not found" });
            }

            const photoData = await getPhotoDataService.getFormattedPhotoSavedDataAndReturnUserId(photo_id);

            return res.status(200).json(photoData);
        } catch (error) {
            console.error("Error in getPhotoSaved", error);
            return res.status(500).send({ error: "Internal Server Error" });
        }
    }
}

module.exports = new PhotoController();