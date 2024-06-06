const Post = require("../../models/Post");
const User = require("../../models/User");
const Group = require("../../models/Group");
const PostShare = require("../../models/PostShare");

const generalDataService = require("../generalDataService");
const getUserDataService = require("../userService/getUserDataService");
const getPhotoDataService = require("../mediaService/getPhotoDataService");

class GetPostDataService {
    getRawPostData = async (postId) => {
        try {
            const postData = await Post.findById(postId);

            return postData;
        } catch (error) {
            console.error("Error in getRawPostData: ", error);
            throw new Error("Failed to fetch raw post data");
        }
    }

    getFormattedPostDataById = async (postId) => {
        try {
            const postProps = await this.getRawPostData(postId);

            const { group, post_photos, createdAt, updatedAt, ...otherPostProps } = postProps._doc;

            const [groupData, photo, user, comment, reaction, share] = await Promise.all([
                Group.findById(group),
                this.getFormattedPostPhotoDataById(postProps),
                this.getFormattedPostAuthorDataById(postProps._id),
                generalDataService.getCommentData(postProps._id),
                generalDataService.getReactionData(postProps._id),
                generalDataService.getUsersByInteractionType(PostShare, "post_id", postProps._id)
            ]);

            return {
                post: {
                    user,
                    ...otherPostProps,
                    group: groupData,
                    created_at: createdAt,
                    updated_at: updatedAt,
                },
                photo,
                comment,
                reaction,
                share,
            };
        } catch (error) {
            console.error("Error in getFormattedPostDataById: ", error);
            throw new Error("Failed to format post data");
        }
    }

    getFormattedPostAuthorDataById = async (postId) => {
        try {
            const postAuthor = await User.findOne({ post_list: postId });
            
            const formattedPostAuthorData = await getUserDataService.getFormattedUserDataByRawData(postAuthor);

            return formattedPostAuthorData;
        } catch (error) {
            console.error("Error in getFormattedPostAuthorDataById: ", error);
            throw new Error("Failed to fetch post author data");
        }
    }

    getFormattedPostPhotoDataById = async (post) => {
        try {
            return await Promise.all(post.post_photos.map(async (photo) => {
                const photos = await getPhotoDataService.getRawPhotoData(photo);

                const { createdAt, updatedAt, ...otherPhotoProps } = photos._doc;

                return {
                    _id: photos._id,
                    photo_url: photos.photo_url,
                    created_at: createdAt,
                    updated_at: updatedAt,
                };
            }));
        } catch (error) {
            console.error("Error in getFormattedPostPhotoDataById: ", error);
            throw new Error("Failed to fetch post photos data");
        }
    }

    getFormattedPostFeedDataById = async () => {
        try {
            return Post.aggregate([
                { $match: { post_privacy: "Public" } },
                { $sample: { size: 5 } },
                { $sort: { createdAt: -1 } },
            ]);
        } catch (error) {
            console.error("Error in getFormattedPostFeedDataById: ", error);
            throw new Error("Failed to fetch post feed data");
        }
    };
}

module.exports = new GetPostDataService();