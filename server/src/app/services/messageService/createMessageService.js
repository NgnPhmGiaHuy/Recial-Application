const Message = require("../../models/Message");
const Conversation = require("../../models/Conversation");

class CreateMessageService {
    async createMessageData(sourceId, message_content, conversationId) {
        try {
            const newMessage = new Message({
                source_id: sourceId,
                message_content: message_content,
            });

            await newMessage.save();

            const conversationData = await Conversation.findById(conversationId);

            if (!conversationData) {
                throw new Error("Conversation not found");
            }

            conversationData.messages.unshift(newMessage._id);
            await conversationData.save();

            return newMessage;
        } catch (error) {
            console.error("Error in createMessageData: ", error);
            throw new Error("Failed to create message data");
        }
    }
}

module.exports = new CreateMessageService();