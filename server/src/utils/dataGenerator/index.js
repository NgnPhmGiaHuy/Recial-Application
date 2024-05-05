const Type = require("../../app/models/Type");
const User = require("../../app/models/User");
const Role = require("../../app/models/Role");
const Post = require("../../app/models/Post");
const Video = require("../../app/models/Video");
const Story = require("../../app/models/Story");
const Status = require("../../app/models/Status");
const Photo = require("../../app/models/Photo");
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

const generateVideoData = require("./media/generateVideoData");
const generateStoryData = require("./media/generateStoryData");
const generateViewShareSaved = require("./media/generateViewShareSaved");

const generateMessages = require("./user/generateMessages");
const generateFollowers = require("./user/generateFollowers");
const generateFollowings = require("./user/generateFollowings");
const generateFriendships = require("./user/generateFriendships");
const generateSearchQueries = require("./user/generateSearchQueries");
const generateFriendRequests = require("./user/generateFriendRequests");

const generateSettings = require("./setting/generateSettings");
const generateReactions = require("./reaction/generateReactions");
const generateNotifications = require("./notification/generateNotifications");
const generatePosts = require("./post/generatePosts");
const generatePagesPosts = require("./post/generatePagesPosts");
const generateGroupsPosts = require("./post/generateGroupsPosts");

const generateDummyData = async () => {
    try {
        console.log("Start: " + new Date().toLocaleString());

        const insertedTypes = await generateTypes();
        // const insertedTypes = await Type.find({});

        const insertedRoles = await generateRoles();
        // const insertedRoles = await Role.find({});

        const insertedStatuses = await generateStatuses();
        // const insertedStatuses = await Status.find({});

        const allUsers = await generateUserProps(insertedRoles, 1000);
        // const allUsers = await User.find({});

        const allPosts = await generatePosts(allUsers, 20);
        // const allPosts = await Post.find({});

        const allPhotos = await Photo.find({});

        const allVideos = await generateVideoData(allUsers, 10);
        // const allVideos = await Video.find({});

        const allStories = await generateStoryData(allUsers, 100);
        // const allStories = await Story.find({});

        const allPages = await generatePages(1000);
        const allEvents = await generateEvents(1000);
        const allGroups = await generateGroups(1000);

        await generatePagesPosts(allPages, allPosts, 10000);
        await generatePagesLikes(allPages, allUsers, 1000);
        await generatePagesFollows(allPages, allUsers, 1000);
        await generatePagesMembers(allPages, allUsers, insertedRoles, 100);

        await generateGroupsPosts(allGroups, allPosts, 10000);
        await generateGroupsMembers(allGroups, allUsers, insertedRoles, 100);

        await generateEventsMembers(allEvents, allUsers, insertedRoles, 100);

        const reactionTypes = ["Like", "Dislike", "Happiness", "Unhappiness"];
        const interestedTypes = ["Post", "Story", "Video", "Photo"];
        const typesWithComment = ["Post", "Story", "Video", "Photo", "Comment"];

        const reactionsFilteredTypes = insertedTypes.filter(type => reactionTypes.includes(type.type_name));
        const interestedFilteredTypes = insertedTypes.filter(type => interestedTypes.includes(type.type_name));
        const typesWithCommentFiltered = insertedTypes.filter(type => typesWithComment.includes(type.type_name));

        const allComments = await generateComments(interestedFilteredTypes, allUsers.flat(), allPosts, allPhotos, allVideos, allStories, 100000);
        await generateReplyComments(allUsers, allComments, 100000);

        await generateReactions(typesWithCommentFiltered, reactionsFilteredTypes, allUsers, allPosts, allPhotos, allVideos, allStories, allComments, 10000);
        await generateNotifications(typesWithCommentFiltered, allUsers, allPosts, allPhotos, allVideos, allStories, allComments, 10000);

        await generateSettings(allUsers);
        await generateMessages(allUsers, insertedStatuses, 50000);
        await generateSearchQueries(allUsers, 10000);

        await generateFollowers(allUsers, 20);
        await generateFollowings(allUsers, 20);
        await generateFriendships(allUsers, 20);
        await generateFriendRequests(allUsers, 20);

        await generateViewShareSaved("PostView", "Post", PostView, allPosts, allUsers, 10000);
        await generateViewShareSaved("PostShare", "Post", PostShare, allPosts, allUsers, 10000);
        await generateViewShareSaved("PostSaved", "Post", PostSaved, allPosts, allUsers, 10000);
        await generateViewShareSaved("VideoView", "Video", VideoView, allVideos, allUsers, 10000);
        await generateViewShareSaved("VideoShare", "Video", VideoShare, allVideos, allUsers, 10000);
        await generateViewShareSaved("VideoSaved", "Video", VideoSaved, allVideos, allUsers, 10000);
        await generateViewShareSaved("PhotoView", "Photo", PhotoView, allPhotos, allUsers, 10000);
        await generateViewShareSaved("PhotoShare", "Photo", PhotoShare, allPhotos, allUsers, 10000);
        await generateViewShareSaved("PhotoSaved", "Photo", PhotoSaved, allPhotos, allUsers, 10000);
        await generateViewShareSaved("StoryView", "Story", StoryView, allStories, allUsers, 10000);
        await generateViewShareSaved("StoryShare", "Story", StoryShare, allStories, allUsers, 10000);
        await generateViewShareSaved("StorySaved", "Story", StorySaved, allStories, allUsers, 10000);

        console.log("Dummy data generated successfully.");
        console.log("End: " + new Date().toLocaleString());
    } catch (error) {
        console.error("Error generating dummy data:", error);
    }
}

module.exports = generateDummyData;