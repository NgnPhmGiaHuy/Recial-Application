const Conversation = require("../../models/Conversation");

class CheckConversationService {
    checkConversationExist = async (currentUserId, destinationId) => {
        try {
            const existedConversation = await Conversation.findOne({
                participants: { $all: [currentUserId, destinationId] },
                $where: "this.participants.length === 2",
            });

            return existedConversation;
        } catch (error) {
            console.error("Error in checkConversationExist: ", error);
            throw new Error("Failed to check the exist of conversation");
        }
    }
}

module.exports = new CheckConversationService();