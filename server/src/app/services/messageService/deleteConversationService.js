const Message = require("../../models/Message");
const Conversation = require("../../models/Conversation");

class DeleteConversationService {
    deleteConversationData = async (conversationId) => {
        try {
            const conversationData = await Conversation.findById(conversationId);

            if (!conversationData) {
                throw new Error('Conversation not found');
            }

            const deletedConversationMessages = conversationData.messages.map(async (message) => (
                await Message.findByIdAndDelete(message)
            ))

            await Promise.all(deletedConversationMessages);

            await conversationData.deleteOne();

            return conversationData;
        } catch (error) {
            console.log("Error in deleteConversationService", error);
            throw new Error("Failed to delete conversation data");
        }
    }
}

module.exports = new DeleteConversationService();