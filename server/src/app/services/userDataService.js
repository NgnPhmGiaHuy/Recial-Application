const User = require("../models/User");
const Message = require("../models/Message");
const Event = require("../models/Event");
const EventMember = require("../models/EventMember");
const FriendRequest = require("../models/FriendRequest");
const Notification = require("../models/Notification");
const Type = require("../models/Type");
const Post = require("../models/Post");
const Group = require("../models/Group");
const Page = require("../models/Page");
const Video = require("../models/Video");
const SearchHistory = require("../models/SearchHistory");
const Photo = require("../models/Photo");
const Setting = require("../models/Setting");
const GroupMember = require("../models/GroupMember");

class UserDataService {
    getUserById = async (userId) => {
        const user = await User.findById(userId);

        return {
            _id: user._id,
            email: user.email,
            username: user.username,
            firstname: user.firstname,
            lastname: user.lastname,
            gender: user.gender,
            date_of_birth: user.date_of_birth,
            profile_picture_url: user.profile_picture_url,
        }
    }

    getFullUserById = async (userId) => {
        return User.findById(userId);
    }

    getUserMessages = async (userId) => {
        const messages = await Message.find({ destination_id: userId });

        return await Promise.all(messages.map(async message => {
            const { createdAt, updatedAt, source_id, destination_id, ...otherMessageProps } = message._doc;

            return {
                ...otherMessageProps,
                source: await this.getUserById(source_id),
                destination: await this.getUserById(message.destination_id),
                created_at: createdAt,
                updated_at: updatedAt,
            }
        }));
    }

    getUserSocial = async (user) => {
        return await Promise.all(user.map(async social => {
            return {
                user: await this.getUserById(social),
            }
        }));
    }

    getUserFriendRequest = async (userId) => {
        const userFriendRequestData = await FriendRequest.find({ destination_id: userId });

        const requests = await Promise.all(userFriendRequestData.map(async request => {
            return {
                _id: request._id,
                user: await this.getUserById(request.source_id),
                created_at: request.createdAt,
                updated_at: request.updatedAt,
            };
        }));

        return requests.sort((a, b) => {
            return new Date(b.updated_at) - new Date(a.updated_at);
        });
    }

    getUserSearchQuery = async (userId) => {
        return SearchHistory.find({ source_id: userId});
    }

    getUserNotifications = async (userId) => {
        const notifications = await Notification.find({ destination_id: userId });

        return await Promise.all(notifications.map(async notification => {
            const sourceType = await Type.findById(notification.source.type);
            const notificationType = await Type.findById(notification.notification_type);

            let relatedData = null;
            let sourceProps = null;
            switch (sourceType.type_name) {
                case 'Post':
                    relatedData = await Post.findById(notification.source.source_id);
                    const userProps = await User.findOne({ post_list: relatedData._id });
                    sourceProps = userProps.profile_picture_url;
                    break;
                case 'Group':
                    relatedData = await Group.findById(notification.source.source_id);
                    sourceProps = relatedData.group_picture_url;
                    break;
                case 'Page':
                    relatedData = await Page.findById(notification.source.source_id);
                    sourceProps = relatedData.page_picture_url;
                    break;
                case 'Video':
                    relatedData = await Video.findById(notification.source.source_id);
                    sourceProps = relatedData.video_thumbnail;
                    break;
                case 'Photo':
                    relatedData = await Photo.findById(notification.source.source_id);
                    sourceProps = relatedData.photo_url;
                    break;
                default:
                    console.log(`Type ${sourceType.type_name} not handled`);
                    break;
            };

            return {
                _id: notification._id,
                source: {
                    type: notification.source.type,
                    sourceProps: sourceProps,
                },
                destination_id: notification.destination_id,
                notification_content: notification.notification_content,
                notification_type: notificationType.type_name,
                is_read: notification.is_read,
                is_mute: notification.is_mute,
                created_at: notification.createdAt,
                updated_at: notification.updatedAt,
            }
        }));
    };

    getUserPhotoList = async (photo_list) => {
        return await Promise.all(photo_list.map(async photo => {
            const photoProps = await Photo.findById(photo);
            const { createdAt, updatedAt, ...otherPhotoProps } = photoProps._doc;

            return {
                ...otherPhotoProps,
                created_at: createdAt,
                updated_at: updatedAt,
            };
        }));
    };

    getUserGroup = async (userId) => {
        const groupMember = await GroupMember.find({ "user.user_id": userId });

        return await Promise.all(groupMember.map(async group => {
            const groupProps = await Group.findById(group.group_id);

            const usersProps = await Promise.all(group.user.map(async user => {
                return this.getUserById(user.user_id);
            }))

            const { createdAt, updatedAt, ...otherGroupProps } = groupProps._doc;

            return {
                ...otherGroupProps,
                group_member: usersProps,
                created_at: createdAt,
                updated_at: updatedAt,
            }
        }));
    };

    getUserSetting = async (userId) => {
        return Setting.findOne({source_id: userId});
    };

    getSuggestedEvents = async () => {
        return Event.aggregate([
            { $sample: { size: 3 } },
            { $sort: { createdAt: -1 } }
        ]);
    };

    getSuggestedPages = async () => {
        return Page.aggregate([
            { $sample: { size: 3 } },
            { $sort: { createdAt: -1 } }
        ]);
    };

    getSuggestedGroup = async () => {
        const suggestGroups = await Group.aggregate([
            { $sample: { size: 1 } },
        ]);

        const suggestGroupMembers = await GroupMember.find({ group_id: suggestGroups[0]._id })

        const suggestGroupMembersProps = await Promise.all(suggestGroupMembers[0].user.map(async user => {
            return this.getUserById(user.user_id);
        }))

        return {
            ...suggestGroups[0],
            members: suggestGroupMembersProps,
        }
    }
}

module.exports = new UserDataService();