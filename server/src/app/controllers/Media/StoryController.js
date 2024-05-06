const storyDataService = require("../../services/mediaService/storyDataService");

class StoryController {
    getStory = async (req, res) => {
        try {
            const userId = req.userId;

            const story = await storyDataService.getFormattedUserFeedStoryDataByUserId(userId);
            
            return res.status(200).json(story);
        } catch (error) {
            console.error("Error in getStory: ", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
}

module.exports = new StoryController();