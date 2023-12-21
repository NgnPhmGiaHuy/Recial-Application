const userDataService = require("../../services/userDataService");
const storyDataService = require("../../services/storyDataService");

class StoryController {
    getStory = async (req, res) => {
        try {
            const decodedToken = req.decodedToken;
            const userId = decodedToken.userId;

            const user = await userDataService.getUserById(userId);

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            const story = await storyDataService.getStory(user);
            
            res.status(200).json(story);
        } catch (error) {
            if (error.name === 'TokenExpiredError') {
                return res.status(401).json({ error: 'Token expired' });
            }
            return res.status(500).json({ error: 'Server error' });
        }
    }
}

module.exports = new StoryController();