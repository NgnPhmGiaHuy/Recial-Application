const User = require("../../models/User");
const Conversation = require("../../models/Conversation");

class CreateConversationService {
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

    createConversationInfo = async (userId) => {
        try {
            if (userId) {
                const userData = await User.findById(userId);

                if (!userData) {
                    throw new Error("User data not found for conversation");
                }

                return { conversation_name: userData.username || userData.firstname + userData.lastname, conversation_picture_url: userData.profile_picture_url }
            }
        } catch (error) {
            console.error("Error in getConversationInfo: ", error);
            throw new Error("Failed to fetch user information for conversation");
        }
    }

    createConversationDataByUserIds = async (currentUserId, userIds) => {
        try {
            if (userIds.length === 1) {
                const isConversationExist = await this.checkConversationExist(currentUserId, userIds[0]);

                if (isConversationExist) {
                    isConversationExist.updatedAt = new Date();

                    isConversationExist.save();

                    return isConversationExist;
                }
            }

            const { conversation_name, conversation_picture_url } = userIds.length === 1 ? await this.createConversationInfo(userIds[0]) : {};

            const newConversationData = new Conversation({
                participants: [...userIds, currentUserId],
                conversation_name: conversation_name,
                conversation_picture_url: conversation_picture_url,
            })

            await newConversationData.save()

            return newConversationData;
        } catch (error) {
            console.error("Error in createConversationService: ", error);
            throw new Error("Failed creating conversation data");
        }
    }
}

module.exports = new CreateConversationService();