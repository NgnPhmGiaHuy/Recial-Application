const {faker} = require("@faker-js/faker");

const Type = require("../../app/models/Type");
const Photo = require("../../app/models/Photo");
const Video = require("../../app/models/Video");
const Story = require("../../app/models/Story");
const Post = require("../../app/models/Post");
const PhotoView = require("../../app/models/PhotoView");
const PhotoShare = require("../../app/models/PhotoShare");
const PhotoSaved = require("../../app/models/PhotoSaved");
const PostView = require("../../app/models/PostView");
const PostShare = require("../../app/models/PostShare");
const PostSaved = require("../../app/models/PostSaved");
const StoryView = require("../../app/models/StoryView");
const StoryShare = require("../../app/models/StoryShare");
const StorySaved = require("../../app/models/StorySaved");
const VideoView = require("../../app/models/VideoView");
const VideoShare = require("../../app/models/VideoShare");
const VideoSaved = require("../../app/models/VideoSaved");

const generateTypes = require("./constant/generateTypes");
const generateRoles = require("./constant/generateRoles");
const generateStatuses = require("./constant/generateStatuses");

const generatePages = require("./page/generatePages");
const generatePagesLikes = require("./page/generatePagesLikes");
const generatePagesMembers = require("./page/generatePagesMembers");
const generatePagesFollows = require("./page/generatePagesFollows");

const generateGroups = require("./group/generateGroups");
const generateGroupsMembers = require("./group/generateGroupsMembers");

const generateEvents = require("./event/generateEvents");
const generateEventsMembers = require("./event/generateEventsMembers");

const generateUserProps = require("./user/generateUserProps");

const generateComments = require("./comment/generateComments");
const generateReplyComments = require("./comment/generateReplyComments");

const generateNotifications = require("./notification/generateNotifications");
const generateReactions = require("./reaction/generateReactions");
const generateSettings = require("./setting/generateSettings");
const generateFollowers = require("./user/generateFollowers");
const generateFollowings = require("./user/generateFollowings");
const generateMessages = require("./user/generateMessages");
const generateFriendships = require("./user/generateFriendships");
const generateSearchQueries = require("./user/generateSearchQueries");
const generateFriendRequests = require("./user/generateFriendRequests");
const generateViewShareSaved = require("./media/generateViewShareSaved");
const generateGroupsPosts = require("./post/generateGroupsPosts");
const generatePagesPosts = require("./post/generatePagesPosts");

const generateDummyData = async () => {
    try {
        const insertedTypes = await generateTypes();
        const insertedRoles = await generateRoles();
        const insertedStatuses = await generateStatuses();

        const allUsers = await generateUserProps(insertedRoles);

        console.log(allUsers)

        await Photo.insertMany(allUsers.flatMap(user => user.photo_list.map(photoId => ({
            _id: photoId,
            photo_url: faker.image.url(),
            photo_title: faker.lorem.text(),
            photo_description: faker.lorem.paragraph(),
        }))));

        await Post.insertMany(allUsers.flatMap(user => user.post_list));
        await Story.insertMany(allUsers.flatMap(user => user.story_list));
        await Video.insertMany(allUsers.flatMap(user => user.video_list));

        const allPages = await generatePages();
        const allEvents = await generateEvents();
        const allGroups = await generateGroups();

        const allPhotos = await Photo.find({});
        const allStories = await Story.find({});
        const allPosts = await Post.find({});
        const allVideos = await Video.find({});

        await generatePagesLikes(allPages, allUsers);
        await generatePagesFollows(allPages, allUsers);
        await generatePagesMembers(allPages, allUsers, insertedRoles);

        await generateGroupsMembers(allGroups, allUsers, insertedRoles);
        await generateEventsMembers(allEvents, allUsers, insertedRoles);

        const reactionTypes = ["Like", "Dislike", "Happiness", "Unhappiness"];
        const interestedTypes = ["Post", "Story", "Video", "Photo", "Page", "Group"];
        const typesWithComment = ["Post", "Story", "Video", "Photo", "Page", "Group", "Comment"];

        const reactionsFilteredTypes = insertedTypes.filter(type => reactionTypes.includes(type.type_name));
        const interestedFilteredTypes = insertedTypes.filter(type => interestedTypes.includes(type.type_name));
        const typesWithCommentFiltered = insertedTypes.filter(type => typesWithComment.includes(type.type_name));

        const allComments = await generateComments(allUsers, interestedFilteredTypes, allPages, allGroups, allStories);
        const allNotifications = await generateNotifications(allUsers, typesWithCommentFiltered, allPages, allGroups, allComments, allStories);
        const allReactions = await generateReactions(allUsers, typesWithCommentFiltered, reactionsFilteredTypes, allPages, allGroups, allComments, allStories);


        const commentTypePhoto = await Type.find({ "type_name": "Photo" });
        await generateReplyComments(allUsers, allComments, commentTypePhoto[0]);

        const commentTypeComment = await Type.find({ "type_name": "Comment" });
        await generateReplyComments(allUsers, allComments, commentTypeComment[0]);

        await generateSettings(allUsers);
        await generateFollowers(allUsers);
        await generateMessages(allUsers);
        await generateFollowings(allUsers);
        await generateFriendships(allUsers)
        await generateSearchQueries(allUsers);
        await generateFriendRequests(allUsers);

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

        await generatePagesPosts(allPages, allPosts);
        await generateGroupsPosts(allGroups, allPosts);
        console.log("Dummy data generated successfully.");
    } catch (error) {
        console.error("Error generating dummy data:", error);
    }
}

module.exports = generateDummyData;