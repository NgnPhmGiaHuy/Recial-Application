const express = require("express");
const PostIdController = require("../../controllers/Post/PostIdController");

const router = express.Router();

router.route("/").get(PostIdController.getPostByUserId);

module.exports = router;