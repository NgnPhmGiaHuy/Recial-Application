const getUserDataService = require("../../services/userService/getUserDataService");

class UserIdController {
    getUserIdData = async (req, res) => {
        try {
            const { userId } = req.params;

            const user = await getUserDataService.getRawUserData(userId);

            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }

            const { isOAuthUser, password, refreshToken, friends, followers, following, photo_list, video_list, story_list, post_list, roles, ...otherUserProps} = user._doc;

            const userProps = {
                user: {
                    ...otherUserProps,
                },
            }

            return res.status(200).json(userProps);
        } catch (error) {
            console.error("Error in getUserIdData: ", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }

    getUserIdContact = async (req, res) => {
        try {
            const { userId } = req.params;

            const user = await getUserDataService.getRawUserData(userId);

            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }

            const userContactProps = await getUserDataService.getFormattedUserContact(user);

            return res.status(200).json(userContactProps);
        } catch (error) {
            console.error("Error in getUserIdContact: ", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }

    getUserIdProfile = async (req, res) => {
        try {
            const { userId } = req.params;

            const user = await getUserDataService.getRawUserData(userId);

            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }

            const userProfileProps = await getUserDataService.getFormattedUserProfile(user);

            return res.status(200).json(userProfileProps);
        } catch (error) {
            console.error("Error in getUserIdProfile: ", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }

    getUserIdFollower = async (req, res) => {
        try {
            const { userId } = req.params;

            const user = await getUserDataService.getRawUserData(userId);

            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }

            const followerProps = await getUserDataService.getUserSocial(user.followers);

            return res.status(200).json(followerProps)
        } catch (error) {
            console.error("Error in getUserIdFollower: ", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }

    getUserIdFollowing = async (req, res) => {
        try {
            const { userId } = req.params;

            const user = await getUserDataService.getRawUserData(userId);

            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }

            const followingProps = await getUserDataService.getUserSocial(user.following);

            return res.status(200).json(followingProps);
        } catch (error) {
            console.error("Error in getUserIdFollowing: ", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }

    getUserIdFriend = async (req, res) => {
        try {
            const { userId } = req.params;

            const user = await getUserDataService.getRawUserData(userId);

            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }

            const friendProps = await getUserDataService.getUserSocial(user.friends);

            return res.status(200).json(friendProps);
        } catch (error) {
            console.error("Error in getUserIdFriend: ", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }

    getUserIdPhotoList = async (req, res) => {
        try {
            const { userId } = req.params;

            const user = await getUserDataService.getRawUserData(userId);

            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }

            const photoListProps = await getUserDataService.getUserPhotoList(user.photo_list);

            return res.status(200).json(photoListProps);
        } catch (error) {
            console.error("Error in getUserIdPhotoList: ", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }

    getUserIdVideoList = async (req, res) => {
        try {
            const { userId } = req.params;

            const user = await getUserDataService.getRawUserData(userId);

            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }

            const videoListProps = await getUserDataService.getUserVideoList(user.video_list);

            return res.status(200).json(videoListProps);
        } catch (error) {
            console.error("Error in getUserIdVideoList: ", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }

    getUserIdGroupList = async (req, res) => {
        try {
            const { userId } = req.params;

            const user = await getUserDataService.getRawUserData(userId);

            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }

            const groupListProps = await getUserDataService.getUserGroupWithoutMemberDetail(user._id);

            return res.status(200).json(groupListProps);
        } catch (error) {
            console.error("Error in getUserIdGroupList: ", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
}

module.exports = new UserIdController();