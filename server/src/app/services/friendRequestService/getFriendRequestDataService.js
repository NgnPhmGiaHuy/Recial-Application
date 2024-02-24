const FriendRequest = require("../../models/FriendRequest");

class GetFriendRequestDataService {
    getRawFriendRequestDataById = async (requestId) => {
        return FriendRequest.findById(requestId);
    }

    getFriendRequestData = async (source, destination) => {
        return FriendRequest.findOne({ source_id: source, destination_id: destination });
    }
}

module.exports = new GetFriendRequestDataService();