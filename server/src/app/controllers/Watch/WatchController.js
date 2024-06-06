const getWatchDataService = require("../../services/watchService/getWatchDataService");

class WatchController {
    getUserWatchData = async (req, res) => {
        try {
            const page = parseInt(req.query.page) || 1;
            const watchProps = await getWatchDataService.getWatchData();

            if (!watchProps) {
                return res.status(404).json({ error: "No watch props found" });
            }

            return res.status(200).json(watchProps);
        } catch (error) {
            console.error("Error in getUserWatchData: ", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }

    getUserWatchSavedData = async (req, res) => {
        try {
            const userId = req.userId;
            const watchPerPage = 5;
            const page = parseInt(req.query.page) || 1;

            const watchSavedData = await getWatchDataService.getUserWatchSavedData(userId, page, watchPerPage);

            return res.status(200).json(watchSavedData);
        } catch (error) {
            console.error("Error in getUserWatchSavedData: ", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
}

module.exports = new WatchController();