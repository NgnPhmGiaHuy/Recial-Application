const express = require("express");
const CommentController = require("../../../controllers/Comment/CommentController");

const router = express.Router();

router.route("/").get(CommentController.getCommentData);
router.route("/").post(CommentController.createCommentData);

router.route("/media").post(CommentController.createMediaCommentData);
router.route("/media").put(CommentController.updateMediaCommentData);
router.route("/media").delete(CommentController.deleteMediaCommentData);

module.exports = router;