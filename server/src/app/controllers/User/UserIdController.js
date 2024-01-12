const userDataService = require("../../services/userDataService");

class UserIdController {
    getUserIdData = async (req, res) => {
        try {
            const {userId} = req.params;

            const user = await userDataService.getFullUserById(userId);

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            const { isOAuthUser, password, refreshToken, friends, followers, following, photo_list, video_list, story_list, post_list, roles, ...otherUserProps} = user._doc;

            const userProps = {
                user: {
                    ...otherUserProps,
                },
            }

            return res.status(200).json(userProps);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    getUserIdFollower = async (req, res) => {
        try {
            const {userId} = req.params;

            const user = await userDataService.getFullUserById(userId);

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            const followerProps = await userDataService.getUserSocial(user.followers);

            return res.status(200).json({ user: { _id: user._id }, followerProps })
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    getUserIdFollowing = async (req, res) => {
        try {
            const {userId} = req.params;

            const user = await userDataService.getFullUserById(userId);

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            const followingProps = await userDataService.getUserSocial(user.following);

            return res.status(200).json({ user: { _id: user._id }, followingProps })
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    getUserIdDataFriend = async (req, res) => {
        try {
            const {userId} = req.params;

            const user = await userDataService.getFullUserById(userId);

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            const friendProps = await userDataService.getUserSocial(user.friends);

            return res.status(200).json({user: {_id: user._id}, friendProps});
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    getUserIdPhotoList = async (req, res) => {
        try {
            const {userId} = req.params;

            const user = await userDataService.getFullUserById(userId);

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            const photoListProps = await userDataService.getUserPhotoList(user.photo_list);

            return res.status(200).json({user: {_id: user._id}, photoListProps});
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    getUserIdGroupList = async (req, res) => {
        try {
            const {userId} = req.params;

            const user = await userDataService.getFullUserById(userId);

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            const groupListProps = await userDataService.getUserGroup(user._id);

            return res.status(200).json({user: {_id: user._id}, groupListProps});
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

module.exports = new UserIdController();