const User = require("../../models/User");
const Conversation = require("../../models/Conversation");

const checkConversationService = require("./checkConversationService");

class CreateConversationService {
    createConversationInfoWithSingleUser = async (userId) => {
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

    createConversationInfoWithMultipleUser = async (userIds) => {
        try {
            if (userIds) {
                const userData = userIds.map(async userId => {
                    const userProps = await User.findById(userId);

                    return userProps.username;
                })

                const userDataPromise = await Promise.all(userData);

                const conversation_name = "New message to " + userDataPromise.join(" and ");

                return { conversation_name, conversation_picture_url: null }
            }
        } catch (error) {
            console.error("Error in createConversationInfoWithMultipleUser: ", error);
            throw new Error("Failed to createConversationInfoWithMultipleUser");
        }
    }

    createConversationDataByUserIds = async (currentUserId, userIds) => {
        try {
            if (userIds.length === 1) {
                const isConversationExist = await checkConversationService.checkConversationExist(currentUserId, userIds[0]);

                if (isConversationExist) {
                    isConversationExist.updatedAt = new Date();

                    isConversationExist.save();

                    return isConversationExist;
                }
            }

            const { conversation_name, conversation_picture_url } = userIds.length === 1 ? await this.createConversationInfoWithSingleUser(userIds[0]) : await this.createConversationInfoWithMultipleUser(userIds);

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