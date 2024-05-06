const getPageDataService = require("../../services/pageService/getPageDataService");

class PageController {
    getPageData = async (req, res) => {
        try {
            const pageId = req.query.page;

            const pageProps = await getPageDataService.getFormattedPageDataById(pageId);

            if (!pageProps) {
                return res.status(404).json({ error: "Page not found" });
            }

            return res.status(200).json(pageProps);
        } catch (error) {
            console.error("Error in getPageData: ", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }

    getPagePostData = async (req, res) => {
        try {
            const pageId = req.query.page;
            const postsPerPage = 5;
            const page = parseInt(req.query.scrollPage) || 1;

            const pagePostProps = await getPageDataService.getFormattedPagePostDataById(pageId, page, postsPerPage);

            if (!pagePostProps) {
                return res.status(404).json({ error: "Page post not found" });
            }

            return res.status(200).json(pagePostProps);
        } catch (error) {
            console.error("Error in getPagePostData: ", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }

    getPageLikeData = async (req, res) => {
        try {
            const pageId = req.query.page;

            const pageLikeProps = await getPageDataService.getFormattedPageLikeDataById(pageId);

            if (!pageLikeProps) {
                return res.status(404).json({ error: "Page not found" });
            }

            return res.status(200).json(pageLikeProps);
        } catch (error) {
            console.error("Error in getPageLikeData: ", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }

    getPageFollowData = async (req, res) => {
        try {
            const pageId = req.query.page;

            const pageFollowProps = await getPageDataService.getFormattedPageFollowDataById(pageId);

            if (!pageFollowProps) {
                return res.status(404).json({ error: "Page not found" });
            }

            return res.status(200).json(pageFollowProps);
        } catch (error) {
            console.error("Error in getPageFollowData: ", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
}

module.exports = new PageController();