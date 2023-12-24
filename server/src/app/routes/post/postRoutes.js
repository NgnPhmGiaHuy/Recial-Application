const express = require("express");
const PostController = require("../../controllers/Post/PostController");

const router = express.Router();

router.route("/").get(PostController.getPostData);
router.route("/").post(PostController.setPostData);

router.route("/comment").post(PostController.setPostComment);

module.exports = router;