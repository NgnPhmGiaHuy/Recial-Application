const WebSocketService = require("../../services/webSocketService/webSocketService");
const getFriendRequestDataService = require("../../services/friendRequestService/getFriendRequestDataService");
const createFriendRequestDataService = require("../../services/friendRequestService/createFriendRequestDataService");

class UserCreateDataController {
    createUserFriendRequest = async (req, res) => {
        try {
            const userId = req.userId;

            const { friend_request_id } = req.query;

            if (!friend_request_id) {
                return res.status(400).json({ error: "Friend ID is missing" });
            }

            const existFriendRequest = await getFriendRequestDataService.getRawFriendRequestDataBySourceAndDestination(userId, friend_request_id);

            const wss = req.app.get("wss");
            const webSocketService = new WebSocketService(wss);

            if (existFriendRequest) {
                existFriendRequest.updatedAt = new Date();
                await existFriendRequest.save();

                await webSocketService.notifyClientsAboutCreateFriendRequest(userId, friend_request_id, existFriendRequest);

                return res.status(200).json(existFriendRequest);
            }

            const newFriendRequest = await createFriendRequestDataService.createFriendRequestData(userId, friend_request_id);

            await webSocketService.notifyClientsAboutCreateFriendRequest(userId, friend_request_id, newFriendRequest);

            return res.status(200).json(newFriendRequest);
        } catch (error) {
            console.error("Error in createUserFriendRequest: ", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
}

module.exports = new UserCreateDataController();
