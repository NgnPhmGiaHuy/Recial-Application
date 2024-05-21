const express = require("express");
const router = express.Router();

const VideoController = require("../../controllers/Video/VideoController");

router.route("/info").get(VideoController.getVideoInfoData);
router.route("/author").get(VideoController.getVideoAuthorData);
router.route("/comment").get(VideoController.getVideoCommentData);
router.route("/reaction").get(VideoController.getVideoReactionData);
router.route("/:videoId").get(VideoController.getVideoData);

router.route("/").post(VideoController.createVideoData);

module.exports = router;