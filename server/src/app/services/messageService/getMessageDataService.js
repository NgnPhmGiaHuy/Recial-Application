const User = require("../../models/User");
const Status = require("../../models/Status");
const Message = require("../../models/Message");

const getPhotoDataService = require("../mediaService/getPhotoDataService");

class GetMessageDataService {
    getRawMessageData = async (messageId) => {
        try {
            const messageData = await Message.findById(messageId);

            return messageData;
        } catch (error) {
            console.error("Error in getRawMessageData: ", error);
            throw new Error("Failed to fetch raw message data");
        }
    }

    getFormattedMessageDataById = async (userId, messageId) => {
        try {
            const deleteStatus = await Status.findOne({ status_name: "Deleted" });
            const messageData = await this.getRawMessageData(messageId);

            if (!messageData) {
                throw new Error("Message not found");
            }

            const { createdAt, updatedAt, source_id, message_content, message_status, message_content_url, ...otherMessageData } = messageData._doc;

            const userProps = await User.findById(source_id);

            if (!userProps) {
                throw new Error("User not found");
            }

            const hiddenByCurrentUser = messageData.message_hidden_by.some(value =>
                value.user_id.toString() === userId.toString()
            );

            const messagePhoto = await Promise.all(message_content_url.map(async (photo) => {
                const photos = await getPhotoDataService.getRawPhotoData(photo);
                const { createdAt, updatedAt, ...otherPhotoProps } = photos._doc;

                return {
                    ...otherPhotoProps,
                    created_at: createdAt,
                    updated_at: updatedAt,
                };
            }))

            const userData = {
                _id: userProps._id,
                profile: {
                    username: userProps.username,
                    firstname: userProps.firstname,
                    lastname: userProps.lastname,
                    profile_picture_url: userProps.profile_picture_url,
                }
            };

            if (message_status.toString() === deleteStatus._id.toString() || hiddenByCurrentUser) {
                return {
                    user: userData,
                    message_content: "",
                    message_status: "Delete",
                    message_content_url: null,
                    ...otherMessageData,
                    created_at: createdAt,
                    updated_at: updatedAt,
                }
            }

            return {
                user: userData,
                ...otherMessageData,
                message_content: message_content,
                message_content_url: messagePhoto,
                created_at: createdAt,
                updated_at: updatedAt,
            };
        } catch (error) {
            console.error("Error in getFormattedMessageDataById: ", error);
            throw new Error("Failed to fetch message data");
        }
    };

    getRawMessageDataBySourceAndDestination = async (source, destination) => {
        try {
            return await Message.find({ source_id: source, destination_id: destination });
        } catch (error) {
            console.error("Error in getRawMessageDataBySourceAndDestination: ", error.message);
            throw new Error("Failed to get message data by source and destination");
        }
    };
}

module.exports = new GetMessageDataService();