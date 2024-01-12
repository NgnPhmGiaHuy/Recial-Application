const express = require("express");
const ReactionController = require("../../controllers/Reaction/ReactionController");

const router = express.Router();

router.route("/").get(ReactionController.getReactionData);
router.route("/").post(ReactionController.createReaction);

module.exports = router;