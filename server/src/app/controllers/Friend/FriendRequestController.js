const getUserDataService = require("../../services/userService/getUserDataService");
const getFriendRequestDataService = require("../../services/friendRequestService/getFriendRequestDataService");

class FriendRequestController {
    getFriendRequestById = async (req, res) => {
        try {
            const requestId = req.query.request;

            const friendRequestData = await getFriendRequestDataService.getRawFriendRequestDataById(requestId);

            if (!friendRequestData) {
                return res.status(404).json({ error: "Friend request not found" });
            }

            const friendRequestProps = {
                _id: friendRequestData._id,
                source: await getUserDataService.getFormattedUserDataById(friendRequestData.source_id),
                destination: await getUserDataService.getFormattedUserDataById(friendRequestData.destination_id),
                created_at: friendRequestData.createdAt,
                updated_at: friendRequestData.updatedAt,
            };

            return res.status(200).json(friendRequestProps);
        } catch (error) {
            console.error("Error in getFriendRequestById: ", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
}

module.exports = new FriendRequestController();