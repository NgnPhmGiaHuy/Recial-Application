const getPostDataService = require("../../services/postService/getPostDataService");

class MediaRecentController {
    getPostRecentMediaData = async (req, res) => {
        try {
            const { post_id } = req.query;

            const postData = await getPostDataService.getRawPostData(post_id);

            const recentPostPhoto = postData.post_photos;

            return res.status(200).json(recentPostPhoto);
        } catch (error) {
            console.error("Error in getPostRecentMediaData", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }

    getPhotoRecentMediaData = async (req, res) => {
        try {
            const { photo_id } = req.query;

            return res.status(200).json("");
        } catch (error) {
            console.error("Error in getPhotoRecentMediaData", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }

    getStoryRecentMediaData = async (req, res) => {
        try {
            const { story_id } = req.query;

            return res.status(200).json("");
        } catch (error) {
            console.error("Error in getStoryRecentMediaData", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
}

module.exports = new MediaRecentController();