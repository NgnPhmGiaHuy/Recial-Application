const express = require("express");
const router = express.Router();

const SavedController = require("../../../controllers/Saved/SavedController");

router.route("/video").post(SavedController.createVideoSaved);
router.route("/video").delete(SavedController.deleteVideoSaved);

module.exports = router;