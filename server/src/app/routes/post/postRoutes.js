const express = require("express");
const PostController = require("../../controllers/Post/PostController");

const router = express.Router();

router.route("/").get(PostController.getPostData);

module.exports = router;