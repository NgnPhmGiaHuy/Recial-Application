const express = require("express");
const MediaController = require("../../controllers/Media/MediaController");
const PhotoController = require("../../controllers/Photo/PhotoController");
const StoryController = require("../../controllers/Story/StoryController");
const MediaRecentController = require("../../controllers/Media/MediaRecentController");

const router = express.Router();

router.route("/photo").get(PhotoController.getPhotoData);
router.route("/photo/author").get(MediaController.getMediaAuthorData);
router.route("/photo/comment").get(PhotoController.getPhotoComment);
router.route("/photo/reaction").get(PhotoController.getPhotoReaction);
router.route("/photo/recent").get(MediaRecentController.getPhotoRecentMediaData);

router.route("/story").get(StoryController.getStoryData);
router.route("/story/author").get(MediaController.getMediaAuthorData);
router.route("/story/comment").get(StoryController.getStoryComment);
router.route("/story/reaction").get(StoryController.getStoryReaction);
router.route("/story/recent").get(MediaRecentController.getStoryRecentMediaData);

router.route("/post/author").get(MediaController.getMediaAuthorData);
router.route("/post/comment").get(PhotoController.getPhotoComment);
router.route("/post/reaction").get(PhotoController.getPhotoReaction);
router.route("/post/recent").get(MediaRecentController.getPostRecentMediaData);

module.exports = router;