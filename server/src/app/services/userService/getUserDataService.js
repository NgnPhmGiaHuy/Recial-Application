const User = require("../../models/User");
const Role = require("../../models/Role");
const Type = require("../../models/Type");
const Post = require("../../models/Post");
const Page = require("../../models/Page");
const Group = require("../../models/Group");
const Photo = require("../../models/Photo");
const Video = require("../../models/Video");
const Event = require("../../models/Event");
const Message = require("../../models/Message");
const Setting = require("../../models/Setting");
const EventMember = require("../../models/EventMember");
const GroupMember = require("../../models/GroupMember");
const Notification = require("../../models/Notification");
const FriendRequest = require("../../models/FriendRequest");
const SearchHistory = require("../../models/SearchHistory");

class GetUserDataService {
    getRawUserData = async (userId) => {
        return User.findById(userId);
    }

    getFormattedUserData = async (userId) => {
        const user = await this.getRawUserData(userId);

        return {
            _id: user._id,
            profile: {
                username: user.username,
                firstname: user.firstname,
                lastname: user.lastname,
                profile_picture_url: user.profile_picture_url,
            }
        }
    }

    getFormattedUserContact = async (user) => {
        const formattedUserContact = {
            phone_number: user.phone_number,
            location: user.location,
            description: user.description,
            short_description: user.short_description,
        }

        return formattedUserContact;
    }

    getFormattedUserProfile = async (user) => {
        const formattedProfile = {
            user_id: user._id,
            profile: {
                email: user.email,
                username: user.username,
                firstname: user.firstname,
                lastname: user.lastname,
                gender: user.gender,
                date_of_birth: user.date_of_birth,
                profile_picture_url: user.profile_picture_url,
                profile_cover_photo_url: user.profile_cover_photo_url,
            }
        };

        return formattedProfile;
    }


    getUserMessages = async (userId) => {
        const messages = await Message.find({ destination_id: userId });

        return await Promise.all(messages.map(async message => {
            const { createdAt, updatedAt, source_id, destination_id, ...otherMessageProps } = message._doc;

            return {
                ...otherMessageProps,
                source: await this.getFormattedUserData(source_id),
                destination: await this.getFormattedUserData(message.destination_id),
                created_at: createdAt,
                updated_at: updatedAt,
            }
        }));
    }

    getUserSocial = async (user) => {
        return await Promise.all(user.map(async social => {
            return {
                user: await this.getFormattedUserData(social),
            }
        }));
    }

    getUserFriendRequest = async (userId) => {
        const userFriendRequestData = await FriendRequest.find({ destination_id: userId });

        return await Promise.all(userFriendRequestData.map(async request => {
            return {
                _id: request._id,
                user: await this.getFormattedUserData(request.source_id),
                created_at: request.createdAt,
                updated_at: request.updatedAt,
            };
        })).then(requests => {
            return requests.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
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
            }

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

    getUserGroupWithMember = async (userId) => {
        const groupMembers = await GroupMember.find({ "user.user_id": userId });

        return await Promise.all(groupMembers.map(async group => {
            const groupProps = await Group.findById(group.group_id);
            const groupMemberProps = await GroupMember.find({ group_id: groupProps._id });

            const { createdAt, updatedAt, ...otherGroupProps } = groupProps._doc;

            const groupMember = await Promise.all(groupMemberProps.map(async (member) => {
                return {
                    user: await this.getFormattedUserData(member.user.user_id),
                    role: (await Role.findById(member.user.user_role)).role_name,
                }
            }))

            return {
                ...otherGroupProps,
                group_member: groupMember,
                created_at: createdAt,
                updated_at: updatedAt,
            }
        }));
    };

    getUserGroupWithoutMemberDetail = async (userId) => {
        const groupMembers = await GroupMember.find({ "user.user_id": userId });

        return await Promise.all(groupMembers.map(async group => {
            const groupProps = await Group.findById(group.group_id);
            const groupMemberProps = await GroupMember.find({ group_id: groupProps._id }).populate("user");

            const { createdAt, updatedAt, ...otherGroupProps } = groupProps._doc;

            return {
                ...otherGroupProps,
                created_at: createdAt,
                updated_at: updatedAt,
                group_member: groupMemberProps.map(member => member.user.user_id),
            }
        }));
    };

    getUserSetting = async (userId) => {
        return Setting.findOne({source_id: userId});
    };
}

module.exports = new GetUserDataService();