const postDataService = require("../../services/mediaService/postDataService");
const photoDataService = require("../../services/mediaService/photoDataService");
const storyDataService = require("../../services/mediaService/storyDataService");

class MediaController {
    getPhotoData = async (req, res) => {
        try {
            const { user: userId, photo: photoId } = req.query;

            const mediaProps = await photoDataService.getFormattedPhotoDataByIdAndUserId(userId, photoId);

            return res.status(200).json(mediaProps);
        } catch (error) {
            console.error("Error in getPhotoData: ", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    };

    getPostPhotoData = async (req, res) => {
        try {
            const { user: userId, photo: photoId, post: postId } = req.query

            const mediaProps = await postDataService.getFormattedPostPhotoDataById(userId, photoId, postId);

            return res.status(200).json(mediaProps);
        } catch (error) {
            console.error("Error in getPostPhotoData: ", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    };

    getStoryData = async (req, res) => {
        try {
            const { user: userId, set: setId } = req.query;

            const mediaProps = await storyDataService.getFormattedStoryDataByIdAndUserId(userId, setId);

            return res.status(200).json(mediaProps)
        } catch (error) {
            console.error("Error in getStoryData: ", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    };
}


module.exports = new MediaController();