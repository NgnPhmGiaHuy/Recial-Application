const WebSocketService = require("../../services/webSocketService/webSocketService");
const createMessageService = require("../../services/messageService/createMessageService");
const deleteMessageService = require("../../services/messageService/deleteMessageService");
const getMessageDataService = require("../../services/messageService/getMessageDataService");

class MessageController {
    getMessageData = async (req, res) => {
        try {
            const userId = req.userId;
            const { message } = req.query;

            const messageProps = await getMessageDataService.getFormattedMessageDataById(userId, message);

            return res.status(200).json(messageProps);
        } catch (error) {
            console.error("Error in getMessageData: ", error);
            return res.status(500).json({ error: "Internal server error" });
        }
    }

    createMessageData = async (req, res) => {
        try {
            const userId = req.userId;
            const { message_content, message_content_url, conversation_id } = req.body;

            if (!conversation_id) {
                return res.status(400).json({ error: "Message content and conversation ID are required." });
            }

            if (!message_content && !message_content_url) {
                return res.status(400).json({ error: "Message content URL are required." });
            }

            const newMessage = await createMessageService.createMessageData(userId, message_content, message_content_url, conversation_id);

            const wss = req.app.get("wss");
            const webSocketService = new WebSocketService(wss);

            await webSocketService.notifyClientsAboutNewMessage(conversation_id, newMessage);

            return res.status(200).json(newMessage);
        } catch (error) {
            console.error("Error in createMessageData: ", error);
            return res.status(500).json({ error: "Internal server error" });
        }
    }

    deleteMessageData = async (req, res) => {
        try {
            const userId = req.userId;
            const { message_id, conversation_id } = req.query;

            if (!message_id || !conversation_id) {
                return res.status(400).json({ error: "Message id or conversation id is missing" });
            }

            const deletedMessage = await deleteMessageService.deleteMessageData(userId, message_id);

            const wss = req.app.get("wss");
            const webSocketService = new WebSocketService(wss);

            await webSocketService.notifyClientsAboutDeleteMessage(conversation_id, deletedMessage);

            return res.status(200).json(deletedMessage);
        } catch (error) {
            console.error("Error in deleteMessageData: ", error);
            return res.status(500).json({ error: "Internal server error" });
        }
    }
}

module.exports = new MessageController();