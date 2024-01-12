const userDataService = require("../../services/userDataService");
const suggestDataService = require("../../services/suggestDataService");

class SuggestController {
    getSuggestEventData = async (req, res) => {
        try {
            const decodedToken = req.decodedToken;
            const userId = decodedToken.userId;

            const user = await userDataService.getUserById(userId);

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            const suggestEvent = await suggestDataService.getSuggestedEvents();

            return res.status(200).json(suggestEvent);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    getSuggestGroupData = async (req, res) => {
        try {
            const decodedToken = req.decodedToken;
            const userId = decodedToken.userId;

            const user = await userDataService.getUserById(userId);

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            const suggestGroup = await suggestDataService.getSuggestedGroup();

            return res.status(200).json(suggestGroup);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    getSuggestPageData = async (req, res) => {
        try {
            const decodedToken = req.decodedToken;
            const userId = decodedToken.userId;

            const user = await userDataService.getUserById(userId);

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            const suggestPage = await suggestDataService.getSuggestedPages();

            return res.status(200).json(suggestPage);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

module.exports = new SuggestController();