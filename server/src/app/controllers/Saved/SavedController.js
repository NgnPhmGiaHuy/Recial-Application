const VideoSaved = require("../../models/VideoSaved");

const WebSocketService = require("../../services/webSocketService/webSocketService");

class SavedController {
    createVideoSaved = async (req, res) => {
        try {
            const userId = req.userId;
            const { destination_id } = req.query;

            const existingVideoSaved = await VideoSaved.findOne({ video_id: destination_id, user_id: userId });

            if (existingVideoSaved) {
                existingVideoSaved.updatedAt = new Date();

                await existingVideoSaved.save();

                return res.status(400).json({ error: "Video already exist" });
            }

            const videoSaved = new VideoSaved({
                user_id: userId,
                video_id: destination_id,
            })

            await videoSaved.save();

            const wss = req.app.get("wss");
            const webSocketService = new WebSocketService(wss);

            await webSocketService.notifyClientsAboutCreateVideoSaved(userId, videoSaved);

            return res.status(200).json(videoSaved);
        } catch (error) {
            console.error("Error in createVideoSaved: ", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }

    deleteVideoSaved = async (req, res) => {
        try {
            const userId = req.userId;
            const { destination_id } = req.query;

            const deletedVideoSaved = await VideoSaved.findOneAndDelete({ video_id: destination_id, user_id: userId })

            const wss = req.app.get("wss");
            const webSocketService = new WebSocketService(wss);

            await webSocketService.notifyClientsAboutDeleteVideoSaved(userId, deletedVideoSaved);

            return res.status(200).json(deletedVideoSaved);
        } catch (error) {
            console.error("Error in deleteVideoSaved: ", error);
            return res.status(500).send({ error: "Internal Server Error" });
        }
    }
}

module.exports = new SavedController();