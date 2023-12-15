const mongoose = require("mongoose");
const { faker} = require('@faker-js/faker');

const Attachment = require("../app/models/Attachment");
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
const User = require("../app/models/User");
const Video = require("../app/models/Video");

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
    const attachments = Array.from({ length: 500 }, () => ({
        _id: new mongoose.Types.ObjectId,
        attachment_name: faker.lorem.text(),
        attachment_url: faker.image.url(),
    }));

    const photos = Array.from({ length: 50 }, () => ({
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

    const posts = Array.from({ length: 50 }, () => ({
        _id: new mongoose.Types.ObjectId(),
        post_title: faker.lorem.text(),
        post_content: faker.lorem.paragraph(),
        post_privacy: faker.helpers.arrayElement(["Public", "Private", "Friends", "OnlyMe"]),
    }));

    return { attachments, photos, videos, posts };
};

const generateUserProps = (roles, insertedRoles) => Array.from({ length: 100 }, () => {
    const { photos, videos, posts } = generateMediaData();
    return {
        _id: new mongoose.Types.ObjectId(),
        email: faker.internet.email(),
        username: faker.person.firstName(),
        password: faker.string.uuid(),
        refreshToken: faker.string.uuid(),
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        phone_number: faker.phone.number(),
        description: faker.lorem.paragraph(),
        short_description: faker.lorem.text(),
        roles: [insertedRoles[0]._id],
        profile_picture_url: faker.image.avatar(),
        profile_cover_photo_url: faker.image.urlLoremFlickr({ category: 'abstract' }),
        photo_list: photos,
        video_list: videos,
        post_list: posts,
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

const generateMessages = (allUsers) => Array.from({ length: 5000 }, () => ({
    source: faker.helpers.objectValue(allUsers),
    destination_id: faker.helpers.objectValue(allUsers),
    message_content: faker.lorem.paragraph(),
    is_read: faker.helpers.arrayElement([true, false]),
    is_mute: faker.helpers.arrayElement([true, false]),
}));

const generateComments = (allUsers, interestedFilteredTypes, allPages, allGroups) => Array.from({ length: 50000 }, () => {
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

const generateNotifications = (allUsers, typesWithCommentFiltered, allPages, allGroups, allComments) => Array.from({ length: 5000 }, () => {
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

const generateReactions = (allUsers, typesWithCommentFiltered, reactionsFilteredTypes, allPages, allGroups, allComments) => Array.from({ length: 100000 }, () => {
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

        const { attachments} = generateMediaData();
        const pageProps = generatePages();
        const groupProps = generateGroups();
        const eventProps = generateEvents();

        await User.insertMany(userProps);
        await Page.insertMany(pageProps);
        await Group.insertMany(groupProps);
        await Event.insertMany(eventProps);
        await Photo.insertMany(userProps.flatMap(user => user.photo_list));
        await Video.insertMany(userProps.flatMap(user => user.video_list));
        await Post.insertMany(userProps.flatMap(user => user.post_list));
        await Attachment.insertMany(attachments);

        const allPosts = await Post.find({});
        for (const post of allPosts) {
            const numOfAttachments = Math.floor(Math.random() * 10) + 1;
            const randomAttachments = faker.helpers.shuffle(attachments).slice(0, numOfAttachments);

            post.post_attachments = randomAttachments.map(attachment => attachment._id);
            await post.save();
        }

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

        const interestedTypes = ['Post', 'Video', 'Photo', "Page", "Group"];
        const typesWithComment = ['Post', 'Video', 'Photo', "Page", "Group", "Comment"];
        const reactionTypes = ["Like", "Dislike", "Happiness", "Unhappiness"];

        const interestedFilteredTypes = insertedTypes.filter(type => interestedTypes.includes(type.type_name));
        const reactionsFilteredTypes = insertedTypes.filter(type => reactionTypes.includes(type.type_name));
        const typesWithCommentFiltered = insertedTypes.filter(type => typesWithComment.includes(type.type_name))

        const messageProps = generateMessages(allUsers);
        await Message.insertMany(messageProps);

        const commentProps = generateComments(allUsers, interestedFilteredTypes, allPages, allGroups);
        await Comment.insertMany(commentProps);

        const allComments = await Comment.find({});

        const commentType = await Type.find({ "type_name": "Comment" });
        const replyCommentProps = generateReplyComment(allUsers, allComments, commentType[0]);
        await Comment.insertMany(replyCommentProps);

        const notificationProps = generateNotifications(allUsers, typesWithCommentFiltered, allPages, allGroups, allComments);
        await Notification.insertMany(notificationProps);

        const reactionsProps = generateReactions(allUsers, typesWithCommentFiltered, reactionsFilteredTypes, allPages, allGroups, allComments);
        await Reactions.insertMany(reactionsProps);

        console.log('Dummy data generated successfully.');
    } catch (error) {
        console.error('Error generating dummy data:', error);
    }
}

module.exports = generateDummyData;




