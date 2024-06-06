const User = require('../../models/User');
const Video = require('../../models/Video');

class VideoCreateController {
    createVideoData = async (req, res) => {
        try {
            const userId = req.userId;
            const videoData = req.body;

            const userData = await User.findById(userId);
            const createdVideoData = new Video(videoData);

            await createdVideoData.save();

            userData.video_list.unshift(createdVideoData._id);
            userData.updatedAt = new Date();

            await userData.save();

            return res.status(200).json(createdVideoData);
        } catch (error) {
            console.error("Error in createVideoData: ", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
}

module.exports = new VideoCreateController();