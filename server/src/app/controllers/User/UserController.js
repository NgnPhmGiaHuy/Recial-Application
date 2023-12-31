const { WebSocket } = require("ws");

const FriendRequest = require("../../models/FriendRequest");
const userDataService = require("../../services/userDataService");

class UserController {
    getUserData = async (req, res) => {
        try {
            const decodedToken = req.decodedToken;
            const userId = decodedToken.userId;

            const user = await userDataService.getFullUserById(userId);

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            const userProps = {
                user: {
                    _id: user._id,
                    email: user.email,
                    username: user.username,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    phone_number: user.phone_number,
                    description: user.description,
                    short_description: user.short_description,
                    profile_picture_url: user.profile_picture_url,
                    profile_cover_photo_url: user.profile_cover_photo_url,
                    location: user.location,
                },
            };

            return res.status(200).json(userProps);
        } catch (error) {
            if (error.name === 'TokenExpiredError') {
                return res.status(401).json({ error: 'Token expired' });
            }
            return res.status(500).json({ error: 'Server error' });
        }
    };

    getUserFriend = async (req, res) => {
        try {
            const decodedToken = req.decodedToken;
            const userId = decodedToken.userId;

            const user = await userDataService.getFullUserById(userId);

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            const friendProps = await userDataService.getUserSocial(user.friends);

            return res.status(200).json(friendProps);
        } catch (error) {
            if (error.name === 'TokenExpiredError') {
                return res.status(401).json({ error: 'Token expired' });
            }
            return res.status(500).json({ error: 'Server error' });
        }
    }

    getUserFriendRequest = async (req, res) => {
        try {
            const decodedToken = req.decodedToken;
            const userId = decodedToken.userId;

            const user = await userDataService.getUserById(userId);

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            const friendRequestProps = await userDataService.getUserFriendRequest(user);

            return res.status(200).json(friendRequestProps);
        } catch (error) {
            if (error.name === 'TokenExpiredError') {
                return res.status(401).json({ error: 'Token expired' });
            }
            return res.status(500).json({ error: 'Server error' });
        }
    }

    createUserFriendRequest = async (req, res) => {
        try {
            const decodedToken = req.decodedToken;
            const userId = decodedToken.userId;

            const user = await userDataService.getFullUserById(userId);

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            const { friendId } = req.body;

            if (!friendId) {
                return res.status(400).json({ error: 'Friend ID is missing' });
            }

            const existFriendRequest = await FriendRequest.findOne({ source_id: user._id, destination_id: friendId });

            if (existFriendRequest) {
                existFriendRequest.updatedAt = new Date();
                await existFriendRequest.save();

                return res.status(200).json(existFriendRequest);
            }

            const newFriendRequest = new FriendRequest({
                source_id: user._id,
                destination_id: friendId,
            });

            await newFriendRequest.save();

            const wss = req.app.get("wss");

            if (wss) {
                const friendRequestMessage = {
                    type: "friend_request_create",
                    friendRequestId: newFriendRequest._id.toString() || existFriendRequest._id.toString(),
                }

                const friendRequestStatus = {

                }

                wss.clients.forEach((client) => {
                    if (client.readyState === WebSocket.OPEN && client.userId.toString() === friendId.toString()) {
                        client.send(JSON.stringify(friendRequestMessage));
                    }

                    if (client.readyState === WebSocket.OPEN && client.userId.toString() === user._id.toString()) {

                    }
                });
            }

            return res.status(200).json(newFriendRequest);
        } catch (error) {
            if (error.name === 'TokenExpiredError') {
                return res.status(401).json({ error: 'Token expired' });
            }
            return res.status(500).json({ error: 'Server error' });
        }
    }

    setUserFriendRequest = async (req, res) => {
        try {
            const decodedToken = req.decodedToken;
            const userId = decodedToken.userId;

            const user = await userDataService.getFullUserById(userId);

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            const requestData = req.body;
            const userFriendRequestData = await FriendRequest.findOne({ source_id: requestData.user._id, destination_id: user._id });

            if (requestData.status === "Confirm") {
                user.friends.unshift(userFriendRequestData.source_id);
                await user.save();
            }

            if (requestData.status === "Confirm" || requestData.status === "Delete") {
                await FriendRequest.deleteOne({ _id: userFriendRequestData._id });
            }

            const wss = req.app.get("wss");

            if (wss) {
                const friendRequestUpdateMessage = {
                    type: "friend_request_update",
                    status: requestData.status,
                    friendId: userFriendRequestData.source_id,
                    friendRequestId: userFriendRequestData._id,
                }

                wss.clients.forEach((client) => {
                    if (client.readyState === WebSocket.OPEN && client.userId.toString() === user._id.toString()) {
                        client.send(JSON.stringify(friendRequestUpdateMessage));
                    }
                })
            }

            return res.status(200).json({ message: 'Request processed successfully' });
        } catch (error) {
            if (error.name === 'TokenExpiredError') {
                return res.status(401).json({ error: 'Token expired' });
            }
            return res.status(500).json({ error: 'Server error' });
        }
    }

    getUserSetting = async (req, res) => {
        try {
            const decodedToken = req.decodedToken;
            const userId = decodedToken.userId;

            const user = await userDataService.getFullUserById(userId);

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            const settingProps = await userDataService.getUserSetting(user._id);

            return res.status(200).json(settingProps);
        } catch (error) {
            if (error.name === 'TokenExpiredError') {
                return res.status(401).json({ error: 'Token expired' });
            }
            return res.status(500).json({ error: 'Server error' });
        }
    }

    getUserFollowing = async (req, res) => {
        try {
            const decodedToken = req.decodedToken;
            const userId = decodedToken.userId;

            const user = await userDataService.getFullUserById(userId);

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            const followingProps = await userDataService.getUserSocial(user.following);

            return res.status(200).json(followingProps);
        } catch (error) {
            if (error.name === 'TokenExpiredError') {
                return res.status(401).json({ error: 'Token expired' });
            }
            return res.status(500).json({ error: 'Server error' });
        }
    }

    getUserFollower = async (req, res) => {
        try {
            const decodedToken = req.decodedToken;
            const userId = decodedToken.userId;

            const user = await userDataService.getFullUserById(userId);

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            const followerProps = await userDataService.getUserSocial(user.followers);

            return res.status(200).json(followerProps);
        } catch (error) {
            if (error.name === 'TokenExpiredError') {
                return res.status(401).json({ error: 'Token expired' });
            }
            return res.status(500).json({ error: 'Server error' });
        }
    }

    getUserSearchQuery = async (req, res) => {
        try {
            const decodedToken = req.decodedToken;
            const userId = decodedToken.userId;

            const user = await userDataService.getUserById(userId);

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            const searchProps = await userDataService.getUserSearchQuery(user._id);

            return res.status(200).json(searchProps);
        } catch (error) {
            if (error.name === 'TokenExpiredError') {
                return res.status(401).json({ error: 'Token expired' });
            }
            return res.status(500).json({ error: 'Server error' });
        }
    }

    getUserMessage = async (req, res) => {
        try {
            const decodedToken = req.decodedToken;
            const userId = decodedToken.userId;

            const user = await userDataService.getFullUserById(userId);

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            const messageProps = await userDataService.getUserMessages(user._id);

            return res.status(200).json(messageProps);
        } catch (error) {
            if (error.name === 'TokenExpiredError') {
                return res.status(401).json({ error: 'Token expired' });
            }
            return res.status(500).json({ error: 'Server error' });
        }
    }

    getUserPhotoList = async (req, res) => {
        try {
            const decodedToken = req.decodedToken;
            const userId = decodedToken.userId;

            const user = await userDataService.getFullUserById(userId);

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            const photoListProps = await userDataService.getUserPhotoList(user.photo_list);

            return res.status(200).json(photoListProps);
        } catch (error) {
            throw error;
        }
    }

    getUserGroupList = async (req, res) => {
        try {
            const decodedToken = req.decodedToken;
            const userId = decodedToken.userId;

            const user = await userDataService.getFullUserById(userId);

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            const groupListProps = await userDataService.getUserGroup(user._id);

            return res.status(200).json(groupListProps);
        } catch (error) {
            throw error;
        }
    }

    getUserNotification = async (req, res) => {
        try {
            const decodedToken = req.decodedToken;
            const userId = decodedToken.userId;

            const user = await userDataService.getFullUserById(userId);

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            const notificationProps = await userDataService.getUserNotifications(user._id);

            return res.status(200).json(notificationProps);
        } catch (error) {
            if (error.name === 'TokenExpiredError') {
                return res.status(401).json({ error: 'Token expired' });
            }
            return res.status(500).json({ error: 'Server error' });
        }
    }

}

module.exports = new UserController();
