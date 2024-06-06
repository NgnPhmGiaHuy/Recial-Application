const User = require("../../models/User");
const Role = require("../../models/Role");
const Post = require("../../models/Post");
const Page = require("../../models/Page");
const Group = require("../../models/Group");
const Photo = require("../../models/Photo");
const Video = require("../../models/Video");
const Setting = require("../../models/Setting");
const GroupMember = require("../../models/GroupMember");
const Notification = require("../../models/Notification");
const Conversation = require("../../models/Conversation");
const FriendRequest = require("../../models/FriendRequest");
const SearchHistory = require("../../models/SearchHistory");

const getTypeDataService = require("../typeService/getTypeDataService");
const getMessageDataService = require("../messageService/getMessageDataService");
const getConversationService = require("../conversationService/getConversationService");

class GetUserDataService {
    getRawUserData = async (userId) => {
        try {
            const userData = await User.findById(userId);

            return userData;
        } catch (error) {
            console.error("Error in getRawUserData: ", error);
            throw new Error("Failed to fetch raw user data");
        }
    }

    getFormattedUserDataByRawData = async (user) => {
        try {
            return {
                _id: user._id,
                profile: {
                    username: user.username,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    profile_picture_url: user.profile_picture_url,
                }
            };
        } catch (error) {
            console.error("Error in getFormattedUserDataByRawData: ", error);
            throw new Error("Failed to format user data by raw data");
        }
    }

    getFormattedUserDataById = async (userId) => {
        try {
            const user = await this.getRawUserData(userId);

            return this.getFormattedUserDataByRawData(user);
        } catch (error) {
            console.error("Error in getFormattedUserDataById: ", error);
            throw new Error("Failed to format user data by ID");
        }
    }

    getFormattedUserContact = async (user) => {
        try {
            const formattedUserContact = {
                location: user.location,
                description: user.description,
                phone_number: user.phone_number,
                short_description: user.short_description,
            };

            return formattedUserContact;
        } catch (error) {
            console.error("Error in getFormattedUserContact: ", error);
            throw new Error("Failed to format user contact data");
        }
    }

    getFormattedUserProfile = async (user) => {
        try {
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
        } catch (error) {
            console.error("Error in getFormattedUserProfile: ", error);
            throw new Error("Failed to format user profile data");
        }
    }

    getUserConversation = async (userId, pageNumber) => {
        try {
            const limit = 10;
            const skip = (parseInt(pageNumber) - 1) * limit;

            const conversations = await Conversation.find({ participants: userId })
                .sort({ createdAt: -1 })
                .skip(skip)
                .limit(limit);

            const userMessageData = await Promise.all(conversations.map(async (message) => {
                try {
                    const formattedConversation = await getConversationService.formatConversationData(userId, message);

                    const messageParticipants = await Promise.all(message.participants.map(async (participant) => {
                        return await this.getFormattedUserDataById(participant);
                    }));

                    const nearestMessageContent = message.messages.length > 0
                        ? await getMessageDataService.getFormattedMessageDataById(userId, message.messages[0])
                        : null;

                    const messageData = {
                        _id: message._id,
                        participants: messageParticipants,
                        conversation_name: formattedConversation.conversation_name,
                        conversation_picture_url: formattedConversation.conversation_picture_url,
                        nearest_message: nearestMessageContent,
                        created_at: message.createdAt,
                        updated_at: message.updatedAt,
                    };

                    return messageData;
                } catch (error) {
                    console.error("Error processing user message: ", error);
                    throw new Error("Failed to process user message");
                }
            }));

            return userMessageData;
        } catch (error) {
            console.error("Error in getUserConversation: ", error);
            throw new Error("Failed to fetch user messages");
        }
    }

    getUserSocial = async (user) => {
        try {
            const userSocialData = await Promise.all(user.map(async social => {
                return {
                    user: await this.getFormattedUserDataById(social),
                };
            }));

            return userSocialData;
        } catch (error) {
            console.error("Error in getUserSocial: ", error);
            throw new Error("Failed to fetch user social data");
        }
    }

    getUserFriendRequest = async (userId) => {
        try {
            const userFriendRequestData = await FriendRequest.find({ destination_id: userId });

            return await Promise.all(userFriendRequestData.map(async request => {
                return {
                    _id: request._id,
                    user: await this.getFormattedUserDataById(request.source_id),
                    created_at: request.createdAt,
                    updated_at: request.updatedAt,
                };
            })).then(requests => {
                return requests.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
            });
        } catch (error) {
            console.error("Error in getUserFriendRequest: ", error);
            throw new Error("Failed to fetch user friend requests");
        }
    }

    getUserSearchQuery = async (userId) => {
        try {
            const userSearchQuery = await SearchHistory.find({ source_id: userId });

            return userSearchQuery;
        } catch (error) {
            console.error("Error in getUserSearchQuery: ", error);
            throw new Error("Failed to fetch user search queries");
        }
    }

    getUserNotifications = async (userId) => {
        try {
            const notifications = await Notification.find({ destination_id: userId });

            const userNotificationData = await Promise.all(notifications.map(async notification => {
                try {
                    const sourceType = await getTypeDataService.getRawTypeData(notification.source.type);
                    const notificationType = await getTypeDataService.getRawTypeData(notification.notification_type);

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
                    };
                } catch (error) {
                    console.error("Error processing user notification:", error);
                    throw new Error("Failed to process user notification");
                }
            }));

            return userNotificationData;
        } catch (error) {
            console.error("Error in getUserNotifications: ", error);
            throw new Error("Failed to fetch user notifications");
        }
    };

    getUserPhotoList = async (photo_list) => {
        try {
            return await Promise.all(photo_list.map(async photo => {
                try {
                    const photoProps = await Photo.findById(photo);
                    const { createdAt, updatedAt, ...otherPhotoProps } = photoProps._doc;

                    return {
                        ...otherPhotoProps,
                        created_at: createdAt,
                        updated_at: updatedAt,
                    };
                } catch (error) {
                    console.error("Error fetching user photo:", error);
                    throw new Error("Failed to fetch user photo");
                }
            }));
        } catch (error) {
            console.error("Error in getUserPhotoList: ", error);
            throw new Error("Failed to fetch user photo list");
        }
    };

    getUserVideoList = async (video_list) => {
        try {
            return await Promise.all(video_list.map(async video => {
                try {
                    const videoProps = await Video.findById(video);
                    const { createdAt, updatedAt, ...otherVideoProps } = videoProps._doc;

                    return {
                        ...otherVideoProps,
                        created_at: createdAt,
                        updated_at: updatedAt,
                    };
                } catch (error) {
                    console.error("Error fetching user video:", error);
                    throw new Error("Failed to fetch user video");
                }
            }));
        } catch (error) {
            console.error("Error in getUserVideoList: ", error);
            throw new Error("Failed to fetch user video list");
        }
    };

    getUserGroupWithMember = async (userId) => {
        try {
            const groupMembers = await GroupMember.find({ "user.user_id": userId });

            return await Promise.all(groupMembers.map(async group => {
                try {
                    const groupProps = await Group.findById(group.group_id);
                    const groupMemberProps = await GroupMember.find({ group_id: groupProps._id });

                    const { createdAt, updatedAt, ...otherGroupProps } = groupProps._doc;

                    const groupMember = await Promise.all(groupMemberProps.map(async (member) => {
                        return {
                            user: await this.getFormattedUserDataById(member.user.user_id),
                            role: (await Role.findById(member.user.user_role)).role_name,
                        };
                    }));

                    return {
                        ...otherGroupProps,
                        group_member: groupMember,
                        created_at: createdAt,
                        updated_at: updatedAt,
                    };
                } catch (error) {
                    console.error("Error fetching group member:", error);
                    throw new Error("Failed to fetch group member");
                }
            }));
        } catch (error) {
            console.error("Error in getUserGroupWithMember: ", error);
            throw new Error("Failed to fetch user groups with members");
        }
    };

    getUserGroupWithoutMemberDetail = async (userId) => {
        try {
            const groupMembers = await GroupMember.find({ "user.user_id": userId });

            return await Promise.all(groupMembers.map(async group => {
                try {
                    const groupProps = await Group.findById(group.group_id);
                    const groupMemberProps = await GroupMember.find({ group_id: groupProps._id }).populate("user");

                    const { createdAt, updatedAt, ...otherGroupProps } = groupProps._doc;

                    return {
                        ...otherGroupProps,
                        created_at: createdAt,
                        updated_at: updatedAt,
                        group_member: groupMemberProps.map(member => member.user.user_id),
                    };
                } catch (error) {
                    console.error("Error fetching group member detail:", error);
                    throw new Error("Failed to fetch group member detail");
                }
            }));
        } catch (error) {
            console.error("Error in getUserGroupWithoutMemberDetail: ", error);
            throw new Error("Failed to fetch user groups without member detail");
        }
    };

    getUserSetting = async (userId) => {
        try {
            const userSettingData = await Setting.findOne({ source_id: userId })

            return userSettingData;
        } catch (error) {
            console.error("Error in getUserSetting: ", error);
            throw new Error("Failed to fetch user setting");
        }
    };
}

module.exports = new GetUserDataService();