const FriendRequest = require("../../models/FriendRequest");

class CreateFriendRequestDataService {
    createFriendRequestData = async (source, destination) => {
        try {
            const newFriendRequestData = new FriendRequest({
                source_id: source,
                destination_id: destination,
            });

            await newFriendRequestData.save();

            return newFriendRequestData;
        } catch (error) {
            console.error("Error in createFriendRequestData: ", error);
            throw new Error("Failed to create friend request");
        }
    }
}

module.exports = new CreateFriendRequestDataService()