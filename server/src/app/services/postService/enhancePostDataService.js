const Group = require("../../models/Group");
const PostShare = require("../../models/PostShare");

const generalDataService = require("../generalDataService");
const getPostDataService = require("../../services/postService/getPostDataService");

class EnhancePostDataService {
    enhancePostsWithUserData = async (posts) => {
        try {
            const enhancedPosts = [];

            for (const post of posts) {
                let postProps = post._doc || post;

                const { group, createdAt, updatedAt, ...otherPostProps } = postProps;

                const postWithUserData = {
                    post: {
                        ...otherPostProps,
                        group: await Group.findById(group),
                        created_at: createdAt,
                        updated_at: updatedAt,
                    },
                    photo: await getPostDataService.getPostPhoto(post),
                    user: await getPostDataService.getPostAuthor(post._id),
                    comment: await generalDataService.getComment(post._id),
                    reaction: await generalDataService.getReaction(post._id),
                    share: await generalDataService.getUsersByInteractionType(PostShare, "post_id", post._id),
                };

                enhancedPosts.push(postWithUserData);
            }

            return enhancedPosts;
        } catch (error) {
            return console.error(error);
        }
    }
}

module.exports = new EnhancePostDataService();