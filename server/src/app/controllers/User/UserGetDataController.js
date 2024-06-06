const getUserDataService = require("../../services/userService/getUserDataService");

class UserGetDataController {
    getUserData = async (req, res) => {
        try {
            const user = req.user;

            const { isOAuthUser, password, refreshToken, friends, followers, following, photo_list, video_list, story_list, post_list, roles, ...otherUserProps} = user._doc;

            const userProps = {
                user: {
                    ...otherUserProps,
                },
            };

            return res.status(200).json(userProps);
        } catch (error) {
            console.error("Error in getUserData: ", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    };

    getUserContact = async (req, res) => {
        try {
            const user = req.user;

            const userContactProps = await getUserDataService.getFormattedUserContact(user);

            return res.status(200).json(userContactProps);
        } catch (error) {
            console.error("Error in getUserContact: ", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }

    getUserProfile = async (req, res) => {
        try {
            const user = req.user;

            const userProfileProps = await getUserDataService.getFormattedUserProfile(user);

            return res.status(200).json(userProfileProps);
        } catch (error) {
            console.error("Error in getUserProfile: ", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }

    getUserFriend = async (req, res) => {
        try {
            const user = req.user;

            const friendProps = await getUserDataService.getUserSocial(user.friends);

            return res.status(200).json(friendProps);
        } catch (error) {
            console.error("Error in getUserFriend: ", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }

    getUserFriendRequest = async (req, res) => {
        try {
            const userId = req.userId;

            const friendRequestProps = await getUserDataService.getUserFriendRequest(userId);

            return res.status(200).json(friendRequestProps);
        } catch (error) {
            console.error("Error in getUserFriendRequest: ", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }

    getUserSetting = async (req, res) => {
        try {
            const userId = req.userId;

            const settingProps = await getUserDataService.getUserSetting(userId);

            return res.status(200).json(settingProps);
        } catch (error) {
            console.error("Error in getUserSetting: ", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }

    getUserFollowing = async (req, res) => {
        try {
            const user = req.user;

            const followingProps = await getUserDataService.getUserSocial(user.following);

            return res.status(200).json(followingProps);
        } catch (error) {
            console.error("Error in getUserFollowing: ", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }

    getUserFollower = async (req, res) => {
        try {
            const user = req.user;

            const followerProps = await getUserDataService.getUserSocial(user.followers);

            return res.status(200).json(followerProps);
        } catch (error) {
            console.error("Error in getUserFollower: ", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }

    getUserSearchQuery = async (req, res) => {
        try {
            const userId = req.userId;

            const searchProps = await getUserDataService.getUserSearchQuery(userId);

            return res.status(200).json(searchProps);
        } catch (error) {
            console.error("Error in getUserSearchQuery: ", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }

    getUserMessage = async (req, res) => {
        try {
            const userId = req.userId;

            const page = parseInt(req.query.page) || 1;

            const messageProps = await getUserDataService.getUserConversation(userId, page);

            return res.status(200).json(messageProps);
        } catch (error) {
            console.error("Error in getUserMessage: ", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }

    getUserPhotoList = async (req, res) => {
        try {
            const user = req.user;

            const photoListProps = await getUserDataService.getUserPhotoList(user.photo_list);

            return res.status(200).json(photoListProps);
        } catch (error) {
            console.error("Error in getUserPhotoList: ", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }

    getUserVideoList = async (req, res) => {
        try {
            const user = req.user;

            const videoListProps = await getUserDataService.getUserVideoList(user.video_list);

            return res.status(200).json(videoListProps);
        } catch (error) {
            console.error("Error in getUserVideoList: ", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }

    getUserGroupList = async (req, res) => {
        try {
            const userId = req.userId;

            const groupListProps = await getUserDataService.getUserGroupWithMember(userId);

            return res.status(200).json(groupListProps);
        } catch (error) {
            console.error("Error in getUserGroupList: ", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }

    getUserNotification = async (req, res) => {
        try {
            const userId = req.userId;

            const notificationProps = await getUserDataService.getUserNotifications(userId);

            return res.status(200).json(notificationProps);
        } catch (error) {
            console.error("Error in getUserNotification: ", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
}

module.exports = new UserGetDataController();