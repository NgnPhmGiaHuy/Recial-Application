const getPostDataService = require("../../services/postService/getPostDataService");

class PostMediaController {
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
}

module.exports = new PostMediaController();