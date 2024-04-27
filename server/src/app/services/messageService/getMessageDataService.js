const Message = require("../../models/Message");

class GetMessageDataService {
    getRawMessageDataBySourceAndDestination = async (source, destination) => {
        return Message.find({ source_id: source, destination_id: destination });
    }

    getFormattedMessageData = async (source, destination, page) => {
        const limit = 10;
        const skip = parseInt(page) * 10;

        const messages = await Message.find({
            $or: [
                { source_id: source, destination_id: destination },
                { source_id: destination, destination_id: source }
            ]
        })
            .sort({ createdAt: -1 })
            .skip(skip)
            .populate("source_id", "username firstname lastname profile_picture_url")
            .populate("destination_id", "username firstname lastname profile_picture_url")
            .limit(limit);

        return messages;
    }
}

module.exports = new GetMessageDataService();