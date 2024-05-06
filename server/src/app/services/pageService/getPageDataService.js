const Page = require("../../models/Page");
const PagePost = require("../../models/PagePost");
const PageLike = require("../../models/PageLike");
const PostShare = require("../../models/PostShare");
const PageFollow = require("../../models/PageFollow");

const generalDataService = require("../generalDataService");
const getPostDataService = require("../postService/getPostDataService");

class GetPageDataService {
    getRawPageData = async (pageId) => {
        try {
            const pageData = await Page.findById(pageId);

            return pageData;
        } catch (error) {
            console.error("Error in getRawPageData: ", error);
            throw new Error("Failed to fetch raw message data");
        }
    }

    getFormattedPageDataById = async (pageId) => {
        try {
            const pageProps = await this.getRawPageData(pageId);

            const { createdAt, updatedAt, ...otherPageProps } = pageProps._doc;

            return {
                ...otherPageProps,
                created_at: createdAt,
                updated_at: updatedAt,
            };
        } catch (error) {
            console.error("Error in getFormattedPageDataById: ", error);
            throw new Error("Failed to format page data by ID");
        }
    }

    getFormattedPagePostDataById = async (pageId, pageNumber, postsPerPage) => {
        try {
            const skipPosts = (parseInt(pageNumber) - 1) * postsPerPage;

            const pagePostProps = await PagePost.find({ page_id: pageId })
                .sort({ createdAt: -1 })
                .skip(skipPosts)
                .limit(postsPerPage)
                .populate("post_id")
                .populate("page_id");

            const formattedPagePosts = await Promise.all(pagePostProps.map(async (pagePost) => {
                const { page_id, post_id, createdAt, updatedAt, ...rest } = pagePost.toObject();
                const { post_photos, ...otherPostIdProps } = post_id;
                const [photo, user, comment, reaction, share] = await Promise.all([
                    getPostDataService.getFormattedPostPhotoDataById(post_id),
                    getPostDataService.getFormattedPostAuthorDataById(post_id),
                    generalDataService.getCommentData(post_id),
                    generalDataService.getReactionData(post_id),
                    generalDataService.getUsersByInteractionType(PostShare, "post_id", post_id)
                ]);
                return {
                    post: {
                        user,
                        page: page_id,
                        ...otherPostIdProps,
                        created_at: createdAt,
                        updated_at: updatedAt,
                    },
                    photo, comment, reaction, share,
                };
            }));

            return formattedPagePosts;
        } catch (error) {
            console.error("Error in getPagePostData: ", error);
            throw new Error("Failed to fetch page post data");
        }
    }

    getFormattedPageLikeDataById = async (pageId) => {
        try {
            const pageLikeProps = await PageLike.find({ page_id: pageId }).populate("user_id", "username firstname lastname profile_picture_url profile_cover_url");

            return pageLikeProps;
        } catch (error) {
            console.error("Error in getFormattedPageLikeDataById: ", error);
            throw new Error("Failed to fetch page like data");
        }
    }

    getFormattedPageFollowDataById = async (pageId) => {
        try {
            const pageFollowProps = await PageFollow.find({ page_id: pageId }).populate("user_id", "username firstname lastname profile_picture_url profile_cover_url");

            return pageFollowProps;
        } catch (error) {
            console.error("Error in getFormattedPageFollowDataById: ", error);
            throw new Error("Failed to fetch page follow data");
        }
    }
}

module.exports = new GetPageDataService();