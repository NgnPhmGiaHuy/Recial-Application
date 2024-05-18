const generalDataService = require("../../services/generalDataService");
const storyDataService = require("../../services/mediaService/storyDataService");

class StoryController {
    getStoryData = async (req, res)  =>{
        try {
            const { story_id } = req.query;

            const storyData = await storyDataService.getFormattedStoryDataById(story_id);

            return res.status(200).json(storyData);
        } catch (error) {
            console.error("Error getStoryData", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }

    getStoryComment = async (req, res) => {
        try {
            const { story_id } = req.query;

            const storyData = await generalDataService.getCommentData(story_id);

            return res.status(200).json(storyData);
        } catch (error) {
            console.error("Error in getStoryComment", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }

    getStoryReaction = async (req, res) => {
        try {
            const { story_id } = req.query;

            const storyData = await generalDataService.getReactionData(story_id);

            return res.status(200).json(storyData);
        } catch (error) {
            console.error("Error in getStoryReaction", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
}

module.exports = new StoryController();