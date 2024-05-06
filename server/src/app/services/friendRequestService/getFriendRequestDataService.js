const FriendRequest = require("../../models/FriendRequest");

class GetFriendRequestDataService {
    getRawFriendRequestDataById = async (requestId) => {
        try {
            const friendRequestData = await FriendRequest.findById(requestId);

            return friendRequestData;
        } catch (error) {
            console.error("Error in getRawFriendRequestDataById: ", error);
            throw new Error("Failed to fetch raw friend request data by ID");
        }
    }

    getRawFriendRequestDataBySourceAndDestination = async (source, destination) => {
        try {
            const friendRequestData = await FriendRequest.findOne({ source_id: source, destination_id: destination });

            return friendRequestData;
        } catch (error) {
            console.error("Error in getRawFriendRequestDataBySourceAndDestination: ", error);
            throw new Error("Failed to fetch friend request data");
        }
    }
}

module.exports = new GetFriendRequestDataService();