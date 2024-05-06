const FriendRequest = require("../../models/FriendRequest");

class DeleteFriendRequestDataService {
    deleteFriendRequestDataById = async (friendRequestId) => {
        try {
            const deletedFriendRequest = await FriendRequest.deleteOne({ _id: friendRequestId })

            return deletedFriendRequest;
        } catch (error) {
            console.error("Error in deleteFriendRequestDataById: ", error);
            throw new Error("Failed to delete friend request");
        }
    }
}

module.exports = new DeleteFriendRequestDataService();