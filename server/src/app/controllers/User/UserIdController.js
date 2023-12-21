const userDataService = require("../../services/userDataService");

class UserIdController {
    getUserIdData = async (req, res) => {
        try {
            const {userId} = req.params;

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
                },
            }

            res.status(200).json(userProps);
        } catch (error) {
            if (error.name === 'TokenExpiredError') {
                return res.status(401).json({ error: 'Token expired' });
            }
            return res.status(500).json({ error: 'Server error' });
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

            res.status(200).json({ user: { _id: user._id }, followerProps })
        } catch (error) {
            if (error.name === 'TokenExpiredError') {
                return res.status(401).json({ error: 'Token expired' });
            }
            return res.status(500).json({ error: 'Server error' });
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

            res.status(200).json({ user: { _id: user._id }, followingProps })
        } catch (error) {
            if (error.name === 'TokenExpiredError') {
                return res.status(401).json({ error: 'Token expired' });
            }
            return res.status(500).json({ error: 'Server error' });
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
            if (error.name === 'TokenExpiredError') {
                return res.status(401).json({ error: 'Token expired' });
            }
            return res.status(500).json({ error: 'Server error' });
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
            throw error;
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
            throw error;
        }
    }
}

module.exports = new UserIdController();