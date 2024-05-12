const getConversationService = require("../../services/messageService/getConversationService");
const createConversationService = require("../../services/messageService/createConversationService");

class ConversationController {
    async getConversationData(req, res) {
        try {
            const userId = req.userId;
            const { conversation, page } = req.query;

            const conversationData = await getConversationService.getFormattedConversationMessageData(userId, conversation, page);

            return res.status(200).json(conversationData);
        } catch (error) {
            console.error("Error in getConversationData: ", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }

    async createConversationData(req, res) {
        try {
            const userId = req.userId;
            const conversationIds = req.query.user_id.split(",");

            const createdConversationData = await createConversationService.createConversationDataByUserIds(userId, conversationIds);

            return res.status(200).json(createdConversationData);
        } catch (error) {
            console.error("Error in createConversationData: ", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
}

module.exports = new ConversationController();
