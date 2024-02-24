const postDataService = require("../../services/mediaService/postDataService");
const photoDataService = require("../../services/mediaService/photoDataService");
const storyDataService = require("../../services/mediaService/storyDataService");

class MediaController {
    getPhotoData = async (req, res) => {
        try {
            const { user: userId, photo: photoId } = req.query;

            const mediaProps = await photoDataService.getPhotoData(userId, photoId);

            return res.status(200).json(mediaProps);
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    getPostPhotoData = async (req, res) => {
        try {
            const { user: userId, photo: photoId, post: postId } = req.query

            const mediaProps = await postDataService.getPostPhotoData(userId, photoId, postId);

            return res.status(200).json(mediaProps);
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    getStoryData = async (req, res) => {
        try {
            const { user: userId, set: setId } = req.query;

            const mediaProps = await storyDataService.getStoryData(userId, setId);

            return res.status(200).json(mediaProps)
        } catch (error) {
            return res.status(500).json(error);
        }
    };
}


module.exports = new MediaController();