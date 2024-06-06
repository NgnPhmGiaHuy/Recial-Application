const WebSocketService = require("../../services/webSocketService/webSocketService");
const getConversationService = require("../../services/conversationService/getConversationService");
const deleteConversationService = require("../../services/conversationService/deleteConversationService");
const createConversationService = require("../../services/conversationService/createConversationService");

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

            const wss = req.app.get("wss");
            const webSocketService = new WebSocketService(wss);

            await webSocketService.notifyClientsAboutNewConversation(conversationIds, createdConversationData);

            return res.status(200).json(createdConversationData);
        } catch (error) {
            console.error("Error in createConversationData: ", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }

    async deleteConversationData(req, res) {
        try {
            const userId = req.userId;
            const { conversation_id } = req.query;

            const deletedConversation = await deleteConversationService.deleteConversationData(conversation_id);

            const wss = req.app.get("wss");
            const webSocketService = new WebSocketService(wss);

            await webSocketService.notifyClientsAboutDeleteConversation(userId, deletedConversation);

            return res.status(200).json(deletedConversation);
        } catch (error) {
            console.error("Error in deleteConversationData: ", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
}

module.exports = new ConversationController();
