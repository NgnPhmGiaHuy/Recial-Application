const mongoose = require("mongoose");
const { faker} = require('@faker-js/faker');

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
const Post = require("../app/models/Post");
const Reactions = require("../app/models/Reactions");
const Role = require("../app/models/Role");
const Saved = require("../app/models/Saved");
const SearchHistory = require("../app/models/SearchHistory");
const Story = require("../app/models/Story");
const Tag = require("../app/models/Tag");
const Type = require("../app/models/Type");
const FriendRequest = require("../app/models/FriendRequest");
const User = require("../app/models/User");
const Video = require("../app/models/Video");
const Setting = require("../app/models/Setting");

const generateRoles = () => [
    { role_name: 'User', role_permissions: 'user_permissions_here' },
    { role_name: 'Admin', role_permissions: 'admin_permissions_here' },
    { role_name: 'Viewer', role_permissions: 'viewer_permissions_here' },
    { role_name: 'Member', role_permissions: 'member_permissions_here' },
    { role_name: 'Moderator', role_permissions: 'moderator_permissions_here' },
];

const generateTypes = () => [
    { _id: new mongoose.Types.ObjectId(), type_name: 'Video', type_description: 'description_here' },
    { _id: new mongoose.Types.ObjectId(), type_name: 'Post', type_description: 'description_here' },
    { _id: new mongoose.Types.ObjectId(), type_name: 'Comment', type_description: 'description_here' },
    { _id: new mongoose.Types.ObjectId(), type_name: 'Photo', type_description: 'description_here' },
    { _id: new mongoose.Types.ObjectId(), type_name: 'Story', type_description: 'description_here' },
    { _id: new mongoose.Types.ObjectId(), type_name: 'Page', type_description: 'description_here' },
    { _id: new mongoose.Types.ObjectId(), type_name: 'Group', type_description: 'description_here' },
    { _id: new mongoose.Types.ObjectId(), type_name: 'Like', type_description: 'description_here' },
    { _id: new mongoose.Types.ObjectId(), type_name: 'Dislike', type_description: 'description_here' },
    { _id: new mongoose.Types.ObjectId(), type_name: 'Happiness', type_description: 'description_here' },
    { _id: new mongoose.Types.ObjectId(), type_name: 'Unhappiness', type_description: 'description_here' },
    { _id: new mongoose.Types.ObjectId(), type_name: 'Message', type_description: 'description_here' },
    { _id: new mongoose.Types.ObjectId(), type_name: 'Announcement', type_description: 'description_here' },
    { _id: new mongoose.Types.ObjectId(), type_name: 'Security', type_description: 'description_here' },
    { _id: new mongoose.Types.ObjectId(), type_name: 'Setting', type_description: 'description_here' },
    { _id: new mongoose.Types.ObjectId(), type_name: 'Share', type_description: 'description_here' },
    { _id: new mongoose.Types.ObjectId(), type_name: 'Friend-Request', type_description: 'description_here' },
    { _id: new mongoose.Types.ObjectId(), type_name: 'Mention', type_description: 'description_here' },
    { _id: new mongoose.Types.ObjectId(), type_name: 'Follower', type_description: 'description_here' },
    { _id: new mongoose.Types.ObjectId(), type_name: 'Event', type_description: 'description_here' },
    { _id: new mongoose.Types.ObjectId(), type_name: 'Trending', type_description: 'description_here' },
    { _id: new mongoose.Types.ObjectId(), type_name: 'Report', type_description: 'description_here' },
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
        roles: [insertedRoles[0]._id],
        profile_picture_url: faker.internet.avatar(),
        profile_cover_photo_url: faker.image.urlLoremFlickr({ category: 'abstract' }),
        photo_list: userPhotoIds,
        video_list: videos,
        post_list: postList,
        story_list: stories,
    };
});

const generatePages = () => Array.from({ length: 100 }, () => ({
    _id: new mongoose.Types.ObjectId(),
    page_name: faker.lorem.text(),
    page_description: faker.lorem.paragraph(),
    page_privacy: faker.helpers.arrayElement(["Public", "Private"]),
    page_picture_url: faker.image.url(),
    page_cover_picture_url: faker.image.urlLoremFlickr({ category: 'abstract' }),
}));

const generatePageMembers = (allPages, allUsers, insertedRoles) => allPages.flatMap(page => {
    const usersForPage = Array.from({ length: 20 }, () => {
        const randomUser = faker.helpers.objectValue(allUsers);

        return {
            page_id: page._id,
            user_id: randomUser._id,
            user_role: [insertedRoles[3]._id],
        };
    });

    return {
        page_id: page._id,
        user: usersForPage,
    };
});

const generateGroups = () => Array.from({ length: 100 }, () => ({
    _id: new mongoose.Types.ObjectId(),
    group_name: faker.lorem.text(),
    group_description: faker.lorem.paragraph(),
    group_privacy: faker.helpers.arrayElement(["Public", "Private"]),
    group_picture_url: faker.image.url(),
    group_cover_picture_url: faker.image.urlLoremFlickr({ category: 'abstract' }),
}));

const generateGroupMembers = (allGroups, allUsers, insertedRoles) => allGroups.flatMap(group => {
    const usersForGroup = Array.from({ length: 20 }, () => {
        const randomUser = faker.helpers.objectValue(allUsers);

        return {
            group_id: group._id,
            user_id: randomUser._id,
            user_role: [insertedRoles[3]._id],
        };
    });

    return {
        group_id: group._id,
        user: usersForGroup,
    };
});

const generateEvents = () => Array.from({ length: 100 }, () => ({
    event_name: faker.lorem.text(),
    event_color: faker.color.human(),
    event_privacy: faker.helpers.arrayElement(["Public", "Private"]),
    event_description: faker.lorem.paragraph(),
    event_start_datetime: faker.date.recent(),
    event_end_datetime: faker.date.future(),
    event_cover_picture_url: faker.image.urlLoremFlickr({ category: 'abstract' }),
}));

const generateEventMembers = (allEvents, allUsers, insertedRoles) => allEvents.flatMap(event => {
    const usersForEvent = Array.from({ length: 20 }, () => {
        const randomUser = faker.helpers.objectValue(allUsers);

        return {
            event_id: event._id,
            user_id: randomUser._id,
            user_role: [insertedRoles[3]._id],
        };
    });

    return {
        event_id: event._id,
        user: usersForEvent,
    };
});

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

const generateMessages = (allUsers) => Array.from({ length: 5000 }, () => ({
    source: faker.helpers.objectValue(allUsers),
    destination_id: faker.helpers.objectValue(allUsers),
    message_content: faker.lorem.paragraph(),
    is_read: faker.helpers.arrayElement([true, false]),
    is_mute: faker.helpers.arrayElement([true, false]),
}));

const generateComments = (allUsers, interestedFilteredTypes, allPages, allGroups, allStory) => Array.from({ length: 100000 }, () => {
    const randomUser = faker.helpers.objectValue(allUsers);
    const randomType = interestedFilteredTypes[Math.floor(Math.random() * interestedFilteredTypes.length)];

    let randomSourceId;
    switch (randomType.type_name) {
        case 'Post':
            randomSourceId = faker.helpers.objectValue(randomUser.post_list)._id;
            break;
        case 'Video':
            randomSourceId = faker.helpers.objectValue(randomUser.video_list)._id;
            break;
        case 'Photo':
            randomSourceId = faker.helpers.objectValue(randomUser.photo_list)._id;
            break;
        case 'Page':
            randomSourceId = faker.helpers.objectValue(allPages)._id;
            break;
        case 'Group':
            randomSourceId = faker.helpers.objectValue(allGroups)._id;
            break;
        case 'Story':
            randomSourceId = faker.helpers.objectValue(allStory)._id;
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

const generateReplyComment = (allUsers, allComments, commentType) => Array.from({ length: 50000 }, () => {
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
});

const generateSearchQuery = (allUsers) => Array.from({ length: 50000 }, () => {
    const randomUser = faker.helpers.objectValue(allUsers);

    return {
        _id: new mongoose.Types.ObjectId(),
        source_id: randomUser._id,
        search_query: faker.lorem.paragraph(),
    }
})

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

    return await FriendRequest.insertMany(friendRequests);
}


const generateNotifications = (allUsers, typesWithCommentFiltered, allPages, allGroups, allComments, allStory) => Array.from({ length: 5000 }, () => {
    const randomUser = faker.helpers.objectValue(allUsers);
    const randomType = typesWithCommentFiltered[Math.floor(Math.random() * typesWithCommentFiltered.length)];

    let randomSourceId;

    switch (randomType.type_name) {
        case 'Post':
            randomSourceId = faker.helpers.objectValue(randomUser.post_list)._id;
            break;
        case 'Video':
            randomSourceId = faker.helpers.objectValue(randomUser.video_list)._id;
            break;
        case 'Photo':
            randomSourceId = faker.helpers.objectValue(randomUser.photo_list)._id;
            break;
        case 'Page':
            randomSourceId = faker.helpers.objectValue(allPages)._id;
            break;
        case 'Group':
            randomSourceId = faker.helpers.objectValue(allGroups)._id;
            break;
        case 'Comment':
            randomSourceId = faker.helpers.objectValue(allComments)._id;
            break;
        case 'Story':
            randomSourceId = faker.helpers.objectValue(allStory)._id;
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
});

const generateReactions = (allUsers, typesWithCommentFiltered, reactionsFilteredTypes, allPages, allGroups, allComments, allStory) => Array.from({ length: 100000 }, () => {
    const randomUser = faker.helpers.objectValue(allUsers);
    const randomType = typesWithCommentFiltered[Math.floor(Math.random() * typesWithCommentFiltered.length)];
    const randomReactionType = reactionsFilteredTypes[Math.floor(Math.random() * reactionsFilteredTypes.length)];

    let randomSourceId;

    switch (randomType.type_name) {
        case 'Post':
            randomSourceId = faker.helpers.objectValue(randomUser.post_list)._id;
            break;
        case 'Video':
            randomSourceId = faker.helpers.objectValue(randomUser.video_list)._id;
            break;
        case 'Photo':
            randomSourceId = faker.helpers.objectValue(randomUser.photo_list)._id;
            break;
        case 'Page':
            randomSourceId = faker.helpers.objectValue(allPages)._id;
            break;
        case 'Group':
            randomSourceId = faker.helpers.objectValue(allGroups)._id;
            break;
        case 'Comment':
            randomSourceId = faker.helpers.objectValue(allComments)._id;
            break;
        case 'Story':
            randomSourceId = faker.helpers.objectValue(allStory)._id;
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

const generateDummyData = async () => {
    try {
        const roles = generateRoles();
        const insertedRoles = await Role.insertMany(roles);

        const types = generateTypes();
        const insertedTypes = await Type.insertMany(types);

        const userProps = generateUserProps(roles, insertedRoles);

        const pageProps = generatePages();
        const groupProps = generateGroups();
        const eventProps = generateEvents();

        await User.insertMany(userProps);
        await Page.insertMany(pageProps);
        await Group.insertMany(groupProps);
        await Event.insertMany(eventProps);
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
        const allEvents = await Event.find({});

        const pageMembersProps = generatePageMembers(allPages, allUsers, insertedRoles);
        const groupMembersProps = generateGroupMembers(allGroups, allUsers, insertedRoles);
        const eventMemberProps = generateEventMembers(allEvents, allUsers, insertedRoles);

        await PageMember.insertMany(pageMembersProps);
        await GroupMember.insertMany(groupMembersProps);
        await EventMember.insertMany(eventMemberProps);

        const interestedTypes = ['Post', "Story", 'Video', 'Photo', "Page", "Group"];
        const typesWithComment = ['Post', "Story", 'Video', 'Photo', "Page", "Group", "Comment"];
        const reactionTypes = ["Like", "Dislike", "Happiness", "Unhappiness"];

        const interestedFilteredTypes = insertedTypes.filter(type => interestedTypes.includes(type.type_name));
        const reactionsFilteredTypes = insertedTypes.filter(type => reactionTypes.includes(type.type_name));
        const typesWithCommentFiltered = insertedTypes.filter(type => typesWithComment.includes(type.type_name))

        const allStory = await Story.find({})

        const messageProps = generateMessages(allUsers);
        await Message.insertMany(messageProps);

        const commentProps = generateComments(allUsers, interestedFilteredTypes, allPages, allGroups, allStory);
        await Comment.insertMany(commentProps);

        const allComments = await Comment.find({});

        const commentTypePhoto = await Type.find({ "type_name": "Photo" });
        const replyCommentProps = generateReplyComment(allUsers, allComments, commentTypePhoto[0]);
        await Comment.insertMany(replyCommentProps);

        const commentTypeComment = await Type.find({ "type_name": "Comment" });
        const replyCommentAProps = generateReplyComment(allUsers, allComments, commentTypeComment[0]);
        await Comment.insertMany(replyCommentAProps);

        const searchProps = generateSearchQuery(allUsers);
        await SearchHistory.insertMany(searchProps);

        const notificationProps = generateNotifications(allUsers, typesWithCommentFiltered, allPages, allGroups, allComments, allStory);
        await Notification.insertMany(notificationProps);

        const reactionsProps = generateReactions(allUsers, typesWithCommentFiltered, reactionsFilteredTypes, allPages, allGroups, allComments, allStory);
        await Reactions.insertMany(reactionsProps);

        await generateFriendships(allUsers)
        await generateFollower(allUsers);
        await generateFollowing(allUsers);
        await generateSetting(allUsers);
        await generateFriendRequest(allUsers);

        console.log('Dummy data generated successfully.');
    } catch (error) {
        console.error('Error generating dummy data:', error);
    }
}

module.exports = generateDummyData;




