const express = require("express");
const CommentController = require("../../controllers/Comment/CommentController");

const router = express.Router();

router.route("/").get(CommentController.getCommentData);
router.route("/").post(CommentController.createCommentData);

module.exports = router;