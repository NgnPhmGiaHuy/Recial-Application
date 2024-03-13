const getPageDataService = require("../../services/pageService/getPageDataService");

class PageController {
    getPageData = async (req, res) => {
        try {
            const pageId = req.query.page;

            const pageProps = await getPageDataService.getFormattedPageData(pageId);

            if (!pageProps) {
                return res.status(404).json({ error: "Page not found" });
            }

            return res.status(200).json(pageProps);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    getPagePostData = async (req, res) => {
        try {
            const pageId = req.query.page;
            const postsPerPage = 5;
            const page = parseInt(req.query.scrollPage) || 1;

            const pagePostProps = await getPageDataService.getPagePostData(pageId, page, postsPerPage);

            if (!pagePostProps) {
                return res.status(404).json({ error: "Page post not found" });
            }

            return res.status(200).json(pagePostProps);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    getPageLikeData = async (req, res) => {
        try {
            const pageId = req.query.page;

            const pageLikeProps = await getPageDataService.getPageLikeData(pageId);

            if (!pageLikeProps) {
                return res.status(404).json({ error: "Page not found" });
            }

            return res.status(200).json(pageLikeProps);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    getPageFollowData = async (req, res) => {
        try {
            const pageId = req.query.page;

            const pageFollowProps = await getPageDataService.getPageFollowData(pageId);

            if (!pageFollowProps) {
                return res.status(404).json({ error: "Page not found" });
            }

            return res.status(200).json(pageFollowProps);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

module.exports = new PageController();