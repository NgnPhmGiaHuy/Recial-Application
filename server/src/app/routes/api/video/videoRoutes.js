const express = require("express");
const router = express.Router();

const VideoGetController = require("../../../controllers/Video/VideoGetController");
const VideoCreateController = require("../../../controllers/Video/VideoCreateController");
const MiddlewareController = require("../../../controllers/Auth/MiddlewareController");

router.route("/info").get(VideoGetController.getVideoInfoData);
router.route("/author").get(VideoGetController.getVideoAuthorData);
router.route("/comment").get(VideoGetController.getVideoCommentData);
router.route("/reaction").get(VideoGetController.getVideoReactionData);
router.route("/:videoId").get(VideoGetController.getVideoData);

router.route("/").post(MiddlewareController.verifyToken, VideoCreateController.createVideoData);

module.exports = router;