const FriendRequest = require("../../models/FriendRequest");

class DeleteFriendRequestDataService {
    deleteFriendRequestDataById = async (friendRequestId) => {
        return FriendRequest.deleteOne({ _id: friendRequestId });
    }
}

module.exports = new DeleteFriendRequestDataService();