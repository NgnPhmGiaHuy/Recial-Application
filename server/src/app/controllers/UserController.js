const jwt = require("jsonwebtoken");

const User = require("../models/User");

const userDataService = require("../services/userDataService");

class UserController {
    getUserData = async (req, res) => {
        try {
            const accessToken = req.headers.authorization;

            if (!accessToken) {
                return res.status(401).json({ error: 'Access token missing' });
            }

            const token = accessToken.split(' ')[1];

            const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

            const userId = decodedToken.userId;

            const user = await userDataService.getUserById(userId);

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            const messageProps = await userDataService.getUserMessages(user._id);
            const photoListProps = await userDataService.getUserPhotoList(user.photo_list);
            const notificationProps = await userDataService.getUserNotifications(user._id);

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
                messages: messageProps,
                notifications: notificationProps,
                photo_list: photoListProps,
            };

            return res.status(200).json(userProps);
        } catch (error) {
            if (error.name === 'TokenExpiredError') {
                return res.status(401).json({ error: 'Token expired' });
            }
            return res.status(500).json({ error: 'Server error' });
        }
    };

    getUserDataById = async (req, res) => {
        try {
            const {userId} = req.params;

            const user = await User.findById(userId);

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            const photoListProps = await userDataService.getUserPhotoList(user.photo_list);

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
                photo_list: photoListProps,
            }

            res.status(200).json(userProps);
        } catch (error) {
            if (error.name === 'TokenExpiredError') {
                return res.status(401).json({ error: 'Token expired' });
            }
            return res.status(500).json({ error: 'Server error' });
        }
    }
}

module.exports = new UserController();
