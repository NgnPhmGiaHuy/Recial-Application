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

            const { isOAuthUser, password, refreshToken, friends, followers, following, photo_list, video_list, story_list, post_list, roles, ...otherUserProps} = user._doc;

            const userProps = {
                user: {
                   ...otherUserProps,
                },
            };

            return res.status(200).json(userProps);
        } catch (error) {
            return res.status(500).json(error);
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
            return res.status(500).json(error);
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

            const friendRequestProps = await userDataService.getUserFriendRequest(user._id);

            return res.status(200).json(friendRequestProps);
        } catch (error) {
            return res.status(500).json(error);
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
            return res.status(500).json(error);
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
            return res.status(500).json(error);
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
            return res.status(500).json(error);
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
            return res.status(500).json(error);
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
            return res.status(500).json(error);
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
            return res.status(500).json(error);
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
            return res.status(500).json(error);
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
            return res.status(500).json(error);
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
            return res.status(500).json(error);
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
            return res.status(500).json(error);
        }
    }

    setUserProfile = async (req, res) => {
        try {
            const decodedToken = req.decodedToken;
            const userId = decodedToken.userId;

            const user = await userDataService.getFullUserById(userId);

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            const { session_username, session_firstname, session_lastname, session_description, session_location, session_date_of_birth, session_profile_picture_url, session_profile_cover_photo_url } = req.body;

            if (session_username) {
                user.username = session_username;
            }
            if (session_firstname) {
                user.firstname = session_firstname;
            }
            if (session_lastname || session_lastname === "") {
                user.lastname = session_lastname;
            }
            if (session_description || session_description === "") {
                user.description = session_description;
            }

            if (session_date_of_birth) {
                user.date_of_birth = session_date_of_birth;
            }
            if (session_profile_picture_url) {
                user.profile_picture_url = session_profile_picture_url;
            }

            if (session_profile_cover_photo_url) {
                user.profile_cover_photo_url = session_profile_cover_photo_url;
            }
            // if (session_location) {
            //     user.location = session_location;
            // }

            await user.save();

            const wss = req.app.get("wss");

            if (wss) {
                const userProfileUpdateMessage = {
                    type: "user_profile_update",
                }

                wss.clients.forEach((client) => {
                    if (client.readyState === WebSocket.OPEN && client.userId.toString() === user._id.toString()) {
                        client.send(JSON.stringify(userProfileUpdateMessage));
                    }
                })
            }
            return res.status(200).json({ message: 'User profile updated successfully' });
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

module.exports = new UserController();
