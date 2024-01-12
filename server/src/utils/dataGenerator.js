const mongoose = require("mongoose");
const { faker } = require("@faker-js/faker");

const Comment = require("../app/models/Comment");
const Event = require("../app/models/Event");
const EventMember = require("../app/models/EventMember");
const Group = require("../app/models/Group");
const GroupMember = require("../app/models/GroupMember");
const Location = require("../app/models/Location");
const Message = require("../app/models/Message");
const Notification = require("../app/models/Notification");
const Page = require("../app/models/Page");
const PageMember = require("../app/models/PageMember");
const Photo = require("../app/models/Photo");
const PhotoView = require("../app/models/PhotoView");
const PhotoSaved = require("../app/models/PhotoSaved");
const PhotoShare = require("../app/models/PhotoShare");
const Post = require("../app/models/Post");
const PostView = require("../app/models/PostView");
const PostSaved = require("../app/models/PostSaved");
const PostShare = require("../app/models/PostShare");
const Reaction = require("../app/models/Reaction");
const Role = require("../app/models/Role");
const SearchHistory = require("../app/models/SearchHistory");
const Story = require("../app/models/Story");
const StoryView = require("../app/models/StoryView");
const StorySaved = require("../app/models/StorySaved");
const StoryShare = require("../app/models/StoryShare");
const Tag = require("../app/models/Tag");
const Type = require("../app/models/Type");
const FriendRequest = require("../app/models/FriendRequest");
const User = require("../app/models/User");
const Video = require("../app/models/Video");
const VideoView = require("../app/models/VideoView");
const VideoSaved = require("../app/models/VideoSaved");
const VideoShare = require("../app/models/VideoShare");
const Setting = require("../app/models/Setting");

const generateRoles = () => [
    { role_name: "User", role_permissions: "user_permissions_here" },
    { role_name: "Admin", role_permissions: "admin_permissions_here" },
    { role_name: "Viewer", role_permissions: "viewer_permissions_here" },
    { role_name: "Member", role_permissions: "member_permissions_here" },
    { role_name: "Moderator", role_permissions: "moderator_permissions_here" },
    { role_name: "Group_Owner", role_permissions: "group_owner_permissions_here" },
    { role_name: "Group_Moderator", role_permissions: "group_moderator_permissions_here" },
    { role_name: "Group_Contributor", role_permissions: "group_contributor_permissions_here" },
    { role_name: "Group_Administrator", role_permissions: "group_administrator_permissions_here" },
    { role_name: "Page_Owner", role_permissions: "page_owner_permissions_here" },
    { role_name: "Page_Moderator", role_permissions: "page_moderator_permissions_here" },
    { role_name: "Page_Contributor", role_permissions: "page_contributor_permissions_here" },
    { role_name: "Page_Administrator", role_permissions: "page_administrator_permissions_here" },
    { role_name: "Event_Owner", role_permissions: "event_owner_permissions_here" },
    { role_name: "Event_Moderator", role_permissions: "event_moderator_permissions_here" },
    { role_name: "Event_Contributor", role_permissions: "event_contributor_permissions_here" },
    { role_name: "Event_Administrator", role_permissions: "event_administrator_permissions_here" },
];

const generateTypes = () => [
    { _id: new mongoose.Types.ObjectId(), type_name: "Video", type_description: "description_here" },
    { _id: new mongoose.Types.ObjectId(), type_name: "Post", type_description: "description_here" },
    { _id: new mongoose.Types.ObjectId(), type_name: "Comment", type_description: "description_here" },
    { _id: new mongoose.Types.ObjectId(), type_name: "Photo", type_description: "description_here" },
    { _id: new mongoose.Types.ObjectId(), type_name: "Story", type_description: "description_here" },
    { _id: new mongoose.Types.ObjectId(), type_name: "Page", type_description: "description_here" },
    { _id: new mongoose.Types.ObjectId(), type_name: "Group", type_description: "description_here" },
    { _id: new mongoose.Types.ObjectId(), type_name: "Like", type_description: "description_here" },
    { _id: new mongoose.Types.ObjectId(), type_name: "Dislike", type_description: "description_here" },
    { _id: new mongoose.Types.ObjectId(), type_name: "Happiness", type_description: "description_here" },
    { _id: new mongoose.Types.ObjectId(), type_name: "Unhappiness", type_description: "description_here" },
    { _id: new mongoose.Types.ObjectId(), type_name: "Message", type_description: "description_here" },
    { _id: new mongoose.Types.ObjectId(), type_name: "Announcement", type_description: "description_here" },
    { _id: new mongoose.Types.ObjectId(), type_name: "Security", type_description: "description_here" },
    { _id: new mongoose.Types.ObjectId(), type_name: "Setting", type_description: "description_here" },
    { _id: new mongoose.Types.ObjectId(), type_name: "Share", type_description: "description_here" },
    { _id: new mongoose.Types.ObjectId(), type_name: "Friend-Request", type_description: "description_here" },
    { _id: new mongoose.Types.ObjectId(), type_name: "Mention", type_description: "description_here" },
    { _id: new mongoose.Types.ObjectId(), type_name: "Follower", type_description: "description_here" },
    { _id: new mongoose.Types.ObjectId(), type_name: "Event", type_description: "description_here" },
    { _id: new mongoose.Types.ObjectId(), type_name: "Trending", type_description: "description_here" },
    { _id: new mongoose.Types.ObjectId(), type_name: "Report", type_description: "description_here" },
];

const generateMediaData = () => {
    const photos = Array.from({ length: 10000 }, () => ({
        _id: new mongoose.Types.ObjectId(),
        photo_url: faker.image.url(),
        photo_title: faker.lorem.text(),
        photo_description: faker.lorem.paragraph(),
    }));

    const videos = Array.from({ length: 50 }, () => ({
        _id: new mongoose.Types.ObjectId(),
        video_url: faker.internet.url(),
        video_title: faker.lorem.text(),
        video_description: faker.lorem.paragraph(),
        video_thumbnail: faker.image.url(),
        video_resolution: faker.helpers.arrayElement(["360", "480", "720", "1080"]),
    }));

    const posts = Array.from({ length: 50 }, () => {
        const numPhotos = faker.number.int({ min: 1, max: 10 });
        const postPhotos = Array.from({ length: numPhotos }, () => {
            const uniquePhoto = photos.pop();
            return uniquePhoto ? uniquePhoto._id : null;
        }).filter(photo => photo !== null);

        return {
            _id: new mongoose.Types.ObjectId(),
            post_title: faker.lorem.text(),
            post_content: faker.lorem.paragraph(),
            post_privacy: faker.helpers.arrayElement(["Public", "Private", "Friends", "Specific_Friends"]),
            post_photos: postPhotos,
        };
    });


    const stories = Array.from({ length: 50 }, () => ({
        _id: new mongoose.Types.ObjectId,
        story_media_url: faker.image.url(),
        story_duration: faker.number.int({ max: 360 }),
    }))

    return { photos, videos, posts, stories };
};

const generateUserProps = (roles, insertedRoles) => Array.from({ length: 1000 }, () => {
    const { photos, videos, posts, stories } = generateMediaData();
    const userPhotos = photos.slice(0, 50);
    const userPhotoIds = userPhotos.map(photo => photo._id);
    const postList = posts.map(post => {
        const numPhotos = faker.number.int({ min: 1, max: 10 });
        const postPhotos = [];
        for (let i = 0; i < numPhotos; i++) {
            const randomPhoto = userPhotos[Math.floor(Math.random() * userPhotos.length)];
            if (randomPhoto) {
                postPhotos.push(randomPhoto._id);
            }
        }
        return { ...post, post_photos: postPhotos };
    });

    return {
        _id: new mongoose.Types.ObjectId(),
        email: faker.internet.email(),
        username: faker.internet.userName(),
        password: faker.internet.password(),
        refreshToken: faker.string.uuid(),
        firstname: faker.person.firstName(),
        lastname: faker.person.lastName(),
        phone_number: faker.phone.number(),
        description: faker.lorem.paragraph(),
        short_description: faker.lorem.text(),
        date_of_birth: faker.date.birthdate({ min: 10, max: 65, mode: "age" }),
        gender: faker.helpers.arrayElement(["Male", "Female", "Other"]),
        roles: [insertedRoles[0]._id],
        profile_picture_url: faker.internet.avatar(),
        profile_cover_photo_url: faker.image.urlLoremFlickr({ category: "abstract" }),
        photo_list: userPhotoIds,
        video_list: videos,
        post_list: postList,
        story_list: stories,
    };
});

const generatePages = async () => {
    const pageProps = Array.from({ length: 100 }, () => ({
        _id: new mongoose.Types.ObjectId(),
        page_name: faker.lorem.text(),
        page_description: faker.lorem.paragraph(),
        page_privacy: faker.helpers.arrayElement(["Public", "Private"]),
        page_picture_url: faker.image.url(),
        page_cover_picture_url: faker.image.urlLoremFlickr({ category: "abstract" }),
    }));

    console.log("Pages generated successfully.");

    return await Page.insertMany(pageProps);
};

const generatePageMembers = async (allPages, allUsers, insertedRoles) => {
    const pageMemberProps = allPages.flatMap(page => {
        return Array.from({ length: 50 }, () => {
            const randomUser = faker.helpers.objectValue(allUsers);

            return {
                page_id: page._id,
                user: {
                    user_id: randomUser._id,
                    user_role: insertedRoles[faker.helpers.arrayElement([3, 9, 10, 11, 12])]._id,
                },
            };
        });
    })

    console.log("Page Members generated successfully.");

    return await PageMember.insertMany(pageMemberProps);
};

const generateGroups = async () => {
    const groupProps = Array.from({ length: 100 }, () => ({
        _id: new mongoose.Types.ObjectId(),
        group_name: faker.lorem.text(),
        group_description: faker.lorem.paragraph(),
        group_privacy: faker.helpers.arrayElement(["Public", "Private"]),
        group_visible: faker.datatype.boolean(),
        group_picture_url: faker.image.url(),
        group_cover_picture_url: faker.image.urlLoremFlickr({ category: "abstract" }),
    }));

    console.log("Groups generated successfully.");

    return await Group.insertMany(groupProps);
};

const generateGroupMembers = async (allGroups, allUsers, insertedRoles) => {
    const groupMemberProps = allGroups.flatMap(group => {
        return Array.from({ length: 50 }, () => {
            const randomUser = faker.helpers.objectValue(allUsers);

            return {
                group_id: group._id,
                user: {
                    user_id: randomUser._id,
                    user_role: insertedRoles[faker.helpers.arrayElement([3, 5, 6, 7, 8])]._id,
                },
            };
        });
    });

    console.log("Group Members generated successfully.");

    return await GroupMember.insertMany(groupMemberProps);
};

const generateEvents = async () => {
    const eventProps = Array.from({ length: 100 }, () => ({
        event_name: faker.lorem.text(),
        event_color: faker.color.human(),
        event_privacy: faker.helpers.arrayElement(["Public", "Private"]),
        event_description: faker.lorem.paragraph(),
        event_start_datetime: faker.date.recent(),
        event_end_datetime: faker.date.future(),
        event_cover_picture_url: faker.image.urlLoremFlickr({ category: "abstract" }),
    }));

    console.log("Events generated successfully.");

    return await Event.insertMany(eventProps);
};

const generateEventMembers = async (allEvents, allUsers, insertedRoles) => {
    const eventMemberProps = allEvents.flatMap(event => {
        return Array.from({ length: 50 }, () => {
            const randomUser = faker.helpers.objectValue(allUsers);

            return {
                event_id: event._id,
                user: {
                    user_id: randomUser._id,
                    user_role: insertedRoles[faker.helpers.arrayElement([3, 13, 14, 15, 16])]._id,
                },
            };
        });
    });

    console.log("Event Members generated successfully.");

    return await EventMember.insertMany(eventMemberProps);
};

const generateFriendships = (allUsers) => {
    return Promise.all(allUsers.map(async (user) => {
        const friendsToAdd = 10 - user.friends.length;
        for (let i = 0; i < friendsToAdd; i++) {
            const randomFriend = faker.helpers.objectValue(allUsers.filter(u => u._id !== user._id && !user.friends.includes(u._id)));
            user.friends.push(randomFriend._id);
        }
        await user.save();
    }));
};

const generateFollowing = (allUsers) => {
    return Promise.all(allUsers.map(async (user) => {
        const followingsToAdd = 10 - user.following.length;
        for (let i = 0; i < followingsToAdd; i++) {
            const randomFollowing = faker.helpers.objectValue(allUsers.filter(u => u._id !== user._id && !user.following.includes(u._id)));
            user.following.push(randomFollowing._id);
        }
        await user.save();
    }));
}

const generateFollower = (allUsers) => {
    return Promise.all(allUsers.map(async (user) => {
        const followersToAdd = 10 - user.followers.length;
        for (let i = 0; i < followersToAdd; i++) {
            const randomFollower = faker.helpers.objectValue(allUsers.filter(u => u._id !== user._id && !user.followers.includes(u._id)));
            user.followers.push(randomFollower._id);
        }
        await user.save();
    }));
}

const generateMessages = async (allUsers) => {
    const messageProp = Array.from({ length: 50000 }, () => ({
        source_id: faker.helpers.objectValue(allUsers),
        destination_id: faker.helpers.objectValue(allUsers),
        message_content: faker.lorem.paragraph(),
        is_read: faker.helpers.arrayElement([true, false]),
        is_mute: faker.helpers.arrayElement([true, false]),
    }));

    console.log("Messages generated successfully.");

    return await Message.insertMany(messageProp);
};

const generateComments = async (allUsers, interestedFilteredTypes, allPages, allGroups, allStories) => {
    const commentProps = Array.from({ length: 100000 }, () => {
        const randomUser = faker.helpers.objectValue(allUsers);
        const randomType = interestedFilteredTypes[Math.floor(Math.random() * interestedFilteredTypes.length)];

        let randomSourceId;
        switch (randomType.type_name) {
            case "Post":
                randomSourceId = faker.helpers.objectValue(randomUser.post_list)._id;
                break;
            case "Video":
                randomSourceId = faker.helpers.objectValue(randomUser.video_list)._id;
                break;
            case "Photo":
                randomSourceId = faker.helpers.objectValue(randomUser.photo_list)._id;
                break;
            case "Page":
                randomSourceId = faker.helpers.objectValue(allPages)._id;
                break;
            case "Group":
                randomSourceId = faker.helpers.objectValue(allGroups)._id;
                break;
            case "Story":
                randomSourceId = faker.helpers.objectValue(allStories)._id;
                break;
            default:
                break;
        }

        return {
            _id: new mongoose.Types.ObjectId(),
            source_id: randomUser._id,
            destination: {
                type: randomType._id,
                destination_id: randomSourceId,
            },
            comment_text: faker.lorem.paragraph(),
        }
    });

    console.log("Comment generated successfully.");

    return await Comment.insertMany(commentProps);
};

const generateReplyComment = async (allUsers, allComments, commentType) => {
    const replyComment = Array.from({ length: 100000 }, () => {
        const randomUser = faker.helpers.objectValue(allUsers);

        return {
            _id: new mongoose.Types.ObjectId(),
            source_id: randomUser._id,
            destination: {
                type: commentType._id,
                destination_id: faker.helpers.objectValue(allComments)._id,
            },
            comment_text: faker.lorem.paragraph(),
        }
    })

    console.log("Comment Replies generated successfully.");

    return await Comment.insertMany(replyComment);
};

const generateSearchQuery = async (allUsers) => {
    const searchQuery = Array.from({ length: 50000 }, () => {
        const randomUser = faker.helpers.objectValue(allUsers);

        return {
            _id: new mongoose.Types.ObjectId(),
            source_id: randomUser._id,
            search_query: faker.lorem.paragraph(),
        }
    });

    console.log("Search History generated successfully.");

    return await SearchHistory.insertMany(searchQuery);
};

const generateSetting = async (allUsers) => {
    const settingProps = await Promise.all(allUsers.map(async (user) => {
        return {
            source_id: user._id,
            account: {
                security: {
                    two_factor_auth: faker.datatype.boolean(),
                    login_alerts: faker.datatype.boolean(),
                }
            },
            content: {
                auto_play_video: faker.datatype.boolean(),
            },
            privacy: {
                friend_request: faker.helpers.arrayElement(["Everyone", "Friends_of_friends", "None"]),
                post_visibility: faker.helpers.arrayElement(["Public", "Private", "Friends", "Specific_Friends"]),
                profile_privacy: faker.helpers.arrayElement(["Public", "Private", "Friends", "Specific_Friends"]),
            }
        }
    }))

    console.log("Setting generated successfully.");

    return await Setting.insertMany(settingProps);
}

const generateFriendRequest = async (allUsers) => {
    const friendRequests = Array.from({ length: 10000 }, () => {
        const randomSourceUser = allUsers[Math.floor(Math.random() * allUsers.length)];

        const sourceUserFriendIDs = randomSourceUser.friends.map(friend => friend.toString());

        const potentialDestinationUsers = allUsers.filter(user => !sourceUserFriendIDs.includes(user._id.toString()));

        const filteredDestinationUser = potentialDestinationUsers[Math.floor(Math.random() * potentialDestinationUsers.length)];

        return {
            source_id: randomSourceUser._id,
            destination_id: filteredDestinationUser._id
        };
    });

    console.log("Friend Request generated successfully.");

    return await FriendRequest.insertMany(friendRequests);
}


const generateNotifications = async (allUsers, typesWithCommentFiltered, allPages, allGroups, allComments, allStories) => {
    const notificationProps = Array.from({ length: 100000 }, () => {
        const randomUser = faker.helpers.objectValue(allUsers);
        const randomType = typesWithCommentFiltered[Math.floor(Math.random() * typesWithCommentFiltered.length)];

        let randomSourceId;

        switch (randomType.type_name) {
            case "Post":
                randomSourceId = faker.helpers.objectValue(randomUser.post_list)._id;
                break;
            case "Video":
                randomSourceId = faker.helpers.objectValue(randomUser.video_list)._id;
                break;
            case "Photo":
                randomSourceId = faker.helpers.objectValue(randomUser.photo_list)._id;
                break;
            case "Page":
                randomSourceId = faker.helpers.objectValue(allPages)._id;
                break;
            case "Group":
                randomSourceId = faker.helpers.objectValue(allGroups)._id;
                break;
            case "Comment":
                randomSourceId = faker.helpers.objectValue(allComments)._id;
                break;
            case "Story":
                randomSourceId = faker.helpers.objectValue(allStories)._id;
                break;
            default:
                break;
        }

        return {
            _id: new mongoose.Types.ObjectId(),
            source: {
                type: randomType._id,
                source_id: randomSourceId,
            },
            destination_id: randomUser._id,
            notification_content: faker.lorem.paragraph(),
            notification_type: randomType._id,
            is_read: faker.helpers.arrayElement([true, false]),
            is_mute: faker.helpers.arrayElement([true, false]),
        };
    })

    console.log("Notification generated successfully.");

    return await Notification.insertMany(notificationProps);
};

const generateReactions = async (allUsers, typesWithCommentFiltered, reactionsFilteredTypes, allPages, allGroups, allComments, allStories) => {
    const reactionProps = Array.from({ length: 500000 }, () => {
        const randomUser = faker.helpers.objectValue(allUsers);
        const randomType = typesWithCommentFiltered[Math.floor(Math.random() * typesWithCommentFiltered.length)];
        const randomReactionType = reactionsFilteredTypes[Math.floor(Math.random() * reactionsFilteredTypes.length)];

        let randomSourceId;

        switch (randomType.type_name) {
            case "Post":
                randomSourceId = faker.helpers.objectValue(randomUser.post_list)._id;
                break;
            case "Video":
                randomSourceId = faker.helpers.objectValue(randomUser.video_list)._id;
                break;
            case "Photo":
                randomSourceId = faker.helpers.objectValue(randomUser.photo_list)._id;
                break;
            case "Page":
                randomSourceId = faker.helpers.objectValue(allPages)._id;
                break;
            case "Group":
                randomSourceId = faker.helpers.objectValue(allGroups)._id;
                break;
            case "Comment":
                randomSourceId = faker.helpers.objectValue(allComments)._id;
                break;
            case "Story":
                randomSourceId = faker.helpers.objectValue(allStories)._id;
                break;
            default:
                break;
        }

        return {
            _id: new mongoose.Types.ObjectId,
            source_id: randomUser._id,
            destination: {
                type: randomType._id,
                destination_id: randomSourceId,
            },
            reaction_type: randomReactionType._id,
        };
    })

    console.log("Reaction generated successfully.");

    return await Reaction.insertMany(reactionProps);
};

const generateViewShareSaved = async (name, model, allModels, allUsers) => {
    const viewShareSavedProps = Array.from({ length: 100000 }, () => {
        const randomUser = allUsers[Math.floor(Math.random() * allUsers.length)];

        const randomModel = allModels[Math.floor(Math.random() * allModels.length)];

        return {
            [`${name.toString().toLowerCase()}_id`]: randomModel._id,
            user_id: randomUser._id,
        };
    });

    return model.insertMany(viewShareSavedProps);
}

const generateGroupPost = async (allGroups, allPosts) => {
    const promises = Array.from({ length: 15000 }, () => {
        const randomPost = allPosts[Math.floor(Math.random() * allPosts.length)];
        const randomGroup = allGroups[Math.floor(Math.random() * allGroups.length)];

        randomPost.group = randomGroup._id;

        return randomPost.save().then(savedPost => savedPost);
    });

    return Promise.all(promises);
};


const generateDummyData = async () => {
    try {
        const types = generateTypes();
        const insertedTypes = await Type.insertMany(types);

        const roles = generateRoles();
        const insertedRoles = await Role.insertMany(roles);

        const userProps = generateUserProps(roles, insertedRoles);

        await generatePages();
        await generateGroups();
        await generateEvents();

        await User.insertMany(userProps);
        await Photo.insertMany(userProps.flatMap(user => user.photo_list.map(photoId => ({
            _id: photoId,
            photo_url: faker.image.url(),
            photo_title: faker.lorem.text(),
            photo_description: faker.lorem.paragraph(),
        }))));

        await Video.insertMany(userProps.flatMap(user => user.video_list));
        await Story.insertMany(userProps.flatMap(user => user.story_list));
        await Post.insertMany(userProps.flatMap(user => user.post_list));

        const allUsers = await User.find({});
        const allPages = await Page.find({});
        const allGroups = await Group.find({});
        const allPhotos = await Photo.find({});
        const allEvents = await Event.find({});
        const allStories = await Story.find({});
        const allPosts = await Post.find({});
        const allVideos = await Video.find({});

        await generatePageMembers(allPages, allUsers, insertedRoles);
        await generateGroupMembers(allGroups, allUsers, insertedRoles);
        await generateEventMembers(allEvents, allUsers, insertedRoles);

        const interestedTypes = ["Post", "Story", "Video", "Photo", "Page", "Group"];
        const typesWithComment = ["Post", "Story", "Video", "Photo", "Page", "Group", "Comment"];
        const reactionTypes = ["Like", "Dislike", "Happiness", "Unhappiness"];

        const interestedFilteredTypes = insertedTypes.filter(type => interestedTypes.includes(type.type_name));
        const reactionsFilteredTypes = insertedTypes.filter(type => reactionTypes.includes(type.type_name));
        const typesWithCommentFiltered = insertedTypes.filter(type => typesWithComment.includes(type.type_name))

        await generateComments(allUsers, interestedFilteredTypes, allPages, allGroups, allStories);

        const allComments = await Comment.find({});

        await generateNotifications(allUsers, typesWithCommentFiltered, allPages, allGroups, allComments, allStories);
        await generateReactions(allUsers, typesWithCommentFiltered, reactionsFilteredTypes, allPages, allGroups, allComments, allStories);

        const commentTypePhoto = await Type.find({ "type_name": "Photo" });
        await generateReplyComment(allUsers, allComments, commentTypePhoto[0]);

        const commentTypeComment = await Type.find({ "type_name": "Comment" });
        await generateReplyComment(allUsers, allComments, commentTypeComment[0]);

        await generateSetting(allUsers);
        await generateFollower(allUsers);
        await generateMessages(allUsers);
        await generateFollowing(allUsers);
        await generateFriendships(allUsers)
        await generateSearchQuery(allUsers);
        await generateFriendRequest(allUsers);

        await generateViewShareSaved("Photo", PhotoView, allPhotos, allUsers);
        await generateViewShareSaved("Photo", PhotoShare, allPhotos, allUsers);
        await generateViewShareSaved("Photo", PhotoSaved, allPhotos, allUsers);
        await generateViewShareSaved("Post", PostView, allPosts, allUsers);
        await generateViewShareSaved("Post", PostShare, allPosts, allUsers);
        await generateViewShareSaved("Post", PostSaved, allPosts, allUsers);
        await generateViewShareSaved("Story", StoryView, allStories, allUsers);
        await generateViewShareSaved("Story", StoryShare, allStories, allUsers);
        await generateViewShareSaved("Story", StorySaved, allStories, allUsers);
        await generateViewShareSaved("Video", VideoView, allVideos, allUsers);
        await generateViewShareSaved("Video", VideoShare, allVideos, allUsers);
        await generateViewShareSaved("Video", VideoSaved, allVideos, allUsers);

        await generateGroupPost(allGroups, allPosts)
        console.log("Dummy data generated successfully.");
    } catch (error) {
        console.error("Error generating dummy data:", error);
    }
}

module.exports = generateDummyData;




