const express = require("express");
const MediaController = require("../../controllers/Media/MediaController");

const router = express.Router();

router.route("/photo").get(MediaController.getPhotoData);
router.route("/post").get(MediaController.getPostPhotoData);
router.route("/story").get(MediaController.getStoryData);

module.exports = router;