const Page = require("../../models/Page");
const PagePost = require("../../models/PagePost");
const PageLike = require("../../models/PageLike");
const PostShare = require("../../models/PostShare");
const PageFollow = require("../../models/PageFollow");

const generalDataService = require("../generalDataService");
const getPostDataService = require("../postService/getPostDataService");

class GetPageDataService {
    getRawPageData = async (pageId) => {
        return Page.findById(pageId);
    }

    getFormattedPageData = async (pageId) => {
        const pageProps = await this.getRawPageData(pageId);

        const { createdAt, updatedAt, ...otherPageProps } = pageProps._doc;

        return {
            ...otherPageProps,
            created_at: createdAt,
            updated_at: updatedAt,
        }
    }

    getPagePostData = async (pageId, page, postsPerPage) => {
        const skipPosts = (page - 1) * postsPerPage;

        const pagePostProps = await PagePost.find({ page_id: pageId })
            .sort({ createdAt: -1 })
            .skip(skipPosts)
            .limit(postsPerPage)
            .populate("post_id")
            .populate("page_id");

        const formattedPagePosts = await Promise.all(pagePostProps.map(async (pagePost) => {
            const { page_id, post_id, createdAt, updatedAt, ...rest } = pagePost.toObject();

            const { post_photos, ...otherPostIdProps } = post_id;

            const photo = await getPostDataService.getPostPhoto(post_id);

            return {
                post: {
                    ...otherPostIdProps,
                    created_at: createdAt,
                    updated_at: updatedAt,
                },
                photo: photo,
                page: page_id,
                comment: await generalDataService.getComment(post_id._id),
                reaction: await generalDataService.getReaction(post_id._id),
                share: await generalDataService.getUsersByInteractionType(PostShare, "post_id", post_id._id),
            };
        }));

        return formattedPagePosts;
    }

    getPageLikeData = async (pageId) => {
        const pageLikeProps = await PageLike.find({ page_id: pageId }).populate("user_id", "username firstname lastname profile_picture_url profile_cover_url");

        return pageLikeProps;
    }

    getPageFollowData = async (pageId) => {
        const pageFollowProps = await PageFollow.find({ page_id: pageId }).populate("user_id", "username firstname lastname profile_picture_url profile_cover_url");

        return pageFollowProps;
    }
}

module.exports = new GetPageDataService();