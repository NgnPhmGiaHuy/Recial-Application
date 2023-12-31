const FriendRequest = require("../models/FriendRequest");
const userDataService = require("../services/userDataService");

class FriendRequestController {
    getFriendRequestById = async (req, res) => {
        try {
            const {requestId} = req.params;

            const friendRequestData = await FriendRequest.findById(requestId);

            if (!friendRequestData) {
                return res.status(404).json({ error: 'Friend request not found' });
            }

            const friendRequestProps = {
                _id: friendRequestData._id,
                source: await userDataService.getUserById(friendRequestData.source_id),
                destination: await userDataService.getUserById(friendRequestData.destination_id),
                created_at: friendRequestData.createdAt,
                updated_at: friendRequestData.updatedAt,
            };

            return res.status(200).json(friendRequestProps);
        } catch (error) {
            if (error.name === 'TokenExpiredError') {
                return res.status(401).json({ error: 'Token expired' });
            }
            return res.status(500).json({ error: 'Server error' });
        }
    }
}

module.exports = new FriendRequestController();