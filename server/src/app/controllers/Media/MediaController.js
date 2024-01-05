const Post = require("../../models/Post");
const Photo = require("../../models/Photo");
const Story = require("../../models/Story");

const userDataService = require("../../services/userDataService");
const generalDataService = require("../../services/generalDataService");

class MediaController {
    getPhotoData = async (req, res) => {
        try {
            const userId = req.query.user;
            const photoId = req.query.photo;

            const photoProps = await Photo.findById(photoId);
            const userProps = await userDataService.getUserById(userId);

            const mediaProps = {
                user: {
                    ...userProps,
                    hasFollow: false,
                },
                media: {
                    _id: photoProps._id,
                    media_name: photoProps.photo_title,
                    media_type: "Photo",
                    media_text: photoProps.photo_description,
                    media_url: photoProps.photo_url,
                    comment: await generalDataService.getComment(photoProps._id),
                    reaction: await generalDataService.getReaction(photoProps._id),
                    created_at: photoProps.createdAt,
                    updated_at: photoProps.updatedAt,
                }
            }

            return res.status(200).json(mediaProps)
        } catch (error) {
            return res.status(500).json({ error: 'Server error' });
        }
    }

    getPostPhotoData = async (req, res) => {
        try {
            const userId = req.query.user;
            const postId = req.query.post;
            const photoId = req.query.photo;

            const userProps = await userDataService.getUserById(userId);
            const postProps = await Post.findById(postId);
            const photoProps = await Photo.findById(photoId);

            const mediaProps = {
                user: {
                    ...userProps,
                    hasFollow: false,
                },
                media: {
                    _id: photoProps._id,
                    media_name: photoProps.photo_title,
                    media_set: postId,
                    media_type: "Photo",
                    media_text: photoProps.photo_description,
                    media_url: photoProps.photo_url,
                    comment: await generalDataService.getComment(photoProps._id),
                    reaction: await generalDataService.getReaction(photoProps._id),
                    media_recent: postProps.post_photos,
                    created_at: photoProps.createdAt,
                    updated_at: photoProps.updatedAt,
                }
            }

            return res.status(200).json(mediaProps)
        } catch (error) {
            return res.status(500).json({ error: 'Server error' });
        }
    }

    getStoryData = async (req, res) => {
        try {
            const setId = req.query.set;
            const userId = req.query.user;

            const storyProps = await Story.findById(setId);
            const userProps = await userDataService.getFullUserById(userId);

            const userStories = await Promise.all(userProps.story_list.map(async (story) => {
                const storyProps = await Story.findById(story);

                const oneDayInMilliseconds = 24 * 60 * 60 * 1000;
                const isRecent = (new Date() - new Date(storyProps.updatedAt)) <= oneDayInMilliseconds;

                return isRecent ? storyProps._id : null;
            }));

            const recentUserStoryProps = userStories.filter(story => story !== null);

            const mediaProps = {
                user: {
                    _id: userProps._id,
                    email: userProps.email,
                    username: userProps.username,
                    firstname: userProps.firstname,
                    lastname: userProps.lastname,
                    profile_picture_url: userProps.profile_picture_url,
                    hasFollow: false,
                },
                media: {
                    _id: storyProps._id,
                    media_name: storyProps.story_title,
                    media_type: "Story",
                    media_text: storyProps.story_description,
                    media_url: storyProps.story_media_url,
                    comment:  await generalDataService.getComment(storyProps._id),
                    reaction: await generalDataService.getReaction(storyProps._id),
                    created_at: storyProps.createdAt,
                    updated_at: storyProps.updatedAt,
                    media_recent: recentUserStoryProps,
                }
            }

            return res.status(200).json(mediaProps)
        } catch (error) {
            return res.status(500).json({ error: 'Server error' });
        }
    }
}


module.exports = new MediaController();