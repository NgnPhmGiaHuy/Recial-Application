const watchDataService = require("../../services/videoService/watchDataService");

class WatchController {
    getUserWatchData = async (req, res) => {
        try {
            const watchProps = await watchDataService.getWatchData();

            if (!watchProps) {
                return res.status(404).json({ error: "No watch props found" });
            }

            return res.status(200).json(watchProps);
        } catch (error) {
            console.error("Error in getUserWatchData: ", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
}

module.exports = new WatchController();