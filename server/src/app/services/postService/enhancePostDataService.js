const Group = require("../../models/Group");
const PostShare = require("../../models/PostShare");

const generalDataService = require("../generalDataService");
const getPostDataService = require("../../services/postService/getPostDataService");

class EnhancePostDataService {
    enhancePostsWithUserData = async (posts) => {
        try {
            const enhancedPosts = await Promise.all(posts.map(async (post) => {
                const postProps = post._doc || post;
                const { group, post_photos, createdAt, updatedAt, ...otherPostProps } = postProps;

                const [groupData, photo, user, comment, reaction, share] = await Promise.all([
                    Group.findById(group),
                    getPostDataService.getFormattedPostPhotoDataById(post),
                    getPostDataService.getFormattedPostAuthorDataById(post._id),
                    generalDataService.getCommentData(post._id),
                    generalDataService.getReactionData(post._id),
                    generalDataService.getUsersByInteractionType(PostShare, "post_id", post._id)
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
            }));

            return enhancedPosts;
        } catch (error) {
            console.error("Error in enhancePostsWithUserData: ", error);
            throw new Error("Failed to enhance posts with user data");
        }
    }
}

module.exports = new EnhancePostDataService();