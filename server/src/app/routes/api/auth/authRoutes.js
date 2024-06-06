const express = require("express");
const AuthController = require("../../../controllers/Auth/AuthController");
const TokenController = require("../../../controllers/Token/TokenController");
const GoogleAuthController = require("../../../controllers/Auth/GoogleAuthController");
const MiddlewareController = require("../../../controllers/Auth/MiddlewareController");

const router = express.Router();

router.route("/login").post(AuthController.loginUser);

router.route("/register").post(AuthController.registerUser);

router.route("/google").post(GoogleAuthController.handleGoogleSignIn);

router.route("/refresh").post(TokenController.requestRefreshToken);

router.route("/logout").get(MiddlewareController.verifyToken, AuthController.logoutUser);

module.exports = router;