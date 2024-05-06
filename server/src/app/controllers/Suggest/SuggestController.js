const getSuggestDataService = require("../../services/suggestService/getSuggestDataService");

class SuggestController {
    getSuggestEventData = async (req, res) => {
        try {
            const suggestEvent = await getSuggestDataService.getSuggestedEventsData();

            return res.status(200).json(suggestEvent);
        } catch (error) {
            console.error("Error in getSuggestEventData: ", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }

    getSuggestGroupData = async (req, res) => {
        try {
            const suggestGroup = await getSuggestDataService.getSuggestedGroupData();

            return res.status(200).json(suggestGroup);
        } catch (error) {
            console.error("Error in getSuggestGroupData: ", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }

    getSuggestPageData = async (req, res) => {
        try {
            const suggestPage = await getSuggestDataService.getSuggestedPagesData();

            return res.status(200).json(suggestPage);
        } catch (error) {
            console.error("Error in getSuggestPageData: ", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
}

module.exports = new SuggestController();