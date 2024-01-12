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
            
            return res.status(200).json(story);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

module.exports = new StoryController();