const express = require("express");
const RoleController = require("../../../controllers/Role/RoleController");

const router = express.Router();

router.route("/").get(RoleController.getRoleData);

module.exports = router;