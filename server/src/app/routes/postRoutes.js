const express = require("express");
const PostController = require("../controllers/PostController");

const router = express.Router();

router.route("/").get(PostController.getPostData);

module.exports = router;