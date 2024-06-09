const User = require("../../models/User");

const generalDataService = require("../../services/generalDataService");
const getUserDataService = require("../../services/userService/getUserDataService");
const getVideoDataService = require("../../services/videoService/getVideoDataService");

class VideoGetController {
    getVideoData = async (req, res) => {
        try {
            const videoId = req.params.videoId;
            const range = req.headers.range;

            const { statusCode, headers, stream } = await getVideoDataService.getVideoData(videoId, range);

            res.writeHead(statusCode, headers);
            stream.pipe(res);
        } catch (error) {
            console.error("Error in getVideoData", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }

    getVideoInfoData = async (req, res) => {
        try {
            const { video_id } = req.query;

            if (!video_id) {
                return res.status(400).send({ message: "Video ID not found" });
            }

            const formattedVideoData = await getVideoDataService.getFormattedVideoDataById(video_id);

            return res.status(200).json(formattedVideoData);
        } catch (error) {
            console.error("Error in getVideoInfo: ", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }

    getVideoAuthorData = async (req, res) => {
        try {
            const { video_id } = req.query;

            if (!video_id) {
                return res.status(400).send({ message: "Video ID not found" });
            }

            const videoAuthor = await User.find({ video_list: video_id });

            if (!videoAuthor) {
                return res.status(404).send({ error: "Video not found" });
            }

            const formattedVideoAuthorData = await getUserDataService.getFormattedUserDataByRawData(videoAuthor[0]);

            return res.status(200).json(formattedVideoAuthorData);
        } catch (error) {
            console.error("Error in getVideoAuthor: ", error);
            return res.status(500).send({ error: "Internal Server Error" });
        }
    }


    getVideoCommentData = async (req, res) => {
        try {
            const { video_id } = req.query;

            if (!video_id) {
                return res.status(400).send({ message: "Video ID not found" });
            }

            const videoCommentData = await generalDataService.getCommentData(video_id);

            if (!videoCommentData) {
                return res.status(404).send({ error: "Video not found" });
            }

            return res.status(200).json(videoCommentData);
        } catch (error) {
            console.error("Error in getVideoCommentData: ", error);
            return res.status(500).send({ error: "Internal Server Error" });
        }
    }

    getVideoReactionData = async (req, res) => {
        try {
            const { video_id } = req.query;

            if (!video_id) {
                return res.status(400).send({ message: "Video ID not found" });
            }

            const videoReactionData = await generalDataService.getReactionDataAndReturnUserId(video_id);

            if (!videoReactionData) {
                return res.status(404).send({ error: "Video not found" });
            }

            return res.status(200).json(videoReactionData);
        } catch (error) {
            console.error("Error in getVideoReactionData: ", error);
            return res.status(500).send({ error: "Internal Server Error" });
        }
    }

    getVideoSavedData = async (req, res) => {
        try {
            const { video_id } = req.query;

            if (!video_id) {
                return res.status(400).send({ message: "Video ID not found" });
            }

            const videoSavedData = await getVideoDataService.getSavedVideoData(video_id);

            if (!videoSavedData) {
                return res.status(404).send({ error: "Video not found" });
            }

            return res.status(200).json(videoSavedData);
        } catch (error) {
            console.error("Error in getVideoSavedData: ", error);
            return res.status(500).send({ error: "Internal Server Error" });
        }
    }
}

module.exports = new VideoGetController();
