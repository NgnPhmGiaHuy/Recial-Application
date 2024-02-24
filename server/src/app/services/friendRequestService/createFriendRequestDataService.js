const FriendRequest = require("../../models/FriendRequest");

class CreateFriendRequestDataService {
    createFriendRequestData = async (source, destination) => {
        const newFriendRequest = new FriendRequest({
            source_id: source,
            destination_id: destination,
        });

        await newFriendRequest.save();

        return newFriendRequest;
    }
}

module.exports = new CreateFriendRequestDataService()