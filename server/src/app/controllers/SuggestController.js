const jwt = require("jsonwebtoken");
const userDataService = require("../services/userDataService");

class SuggestController {
    getSuggestEventData = async (req, res) => {
        try {
            const accessToken = req.headers.authorization;

            if (!accessToken) {
                return res.status(401).json({ error: 'Access token missing' });
            }

            const token = accessToken.split(' ')[1];

            const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

            const userId = decodedToken.userId;

            const user = await userDataService.getUserById(userId);

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            const suggestEvent = await userDataService.getSuggestedEvents();

            return res.status(200).json(suggestEvent);
        } catch (error) {
            if (error.name === 'TokenExpiredError') {
                return res.status(401).json({ error: 'Token expired' });
            }
            return res.status(500).json({ error: 'Server error' });
        }
    }

    getSuggestGroupData = async (req, res) => {
        try {
            const accessToken = req.headers.authorization;

            if (!accessToken) {
                return res.status(401).json({ error: 'Access token missing' });
            }

            const token = accessToken.split(' ')[1];

            const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

            const userId = decodedToken.userId;

            const user = await userDataService.getUserById(userId);

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            const suggestGroup = await userDataService.getSuggestedGroup();

            return res.status(200).json(suggestGroup);
        } catch (error) {
            if (error.name === 'TokenExpiredError') {
                return res.status(401).json({ error: 'Token expired' });
            }
            return res.status(500).json({ error: 'Server error' });
        }
    }

    getSuggestPageData = async (req, res) => {
        try {
            const accessToken = req.headers.authorization;

            if (!accessToken) {
                return res.status(401).json({ error: 'Access token missing' });
            }

            const token = accessToken.split(' ')[1];

            const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

            const userId = decodedToken.userId;

            const user = await userDataService.getUserById(userId);

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            const suggestPage = await userDataService.getSuggestedPages();

            return res.status(200).json(suggestPage);
        } catch (error) {
            if (error.name === 'TokenExpiredError') {
                return res.status(401).json({ error: 'Token expired' });
            }
            return res.status(500).json({ error: 'Server error' });
        }
    }
}

module.exports = new SuggestController();