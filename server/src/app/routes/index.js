const authRoutes = require("../routes/auth/authRoutes");
const postRoutes = require("../routes/post/postRoutes");
const pageRoutes = require("../routes/page/pageRoutes");
const userRoutes = require("../routes/user/userRoutes");
const roleRoutes = require("../routes/role/roleRoutes");
const suggestRoutes = require("../routes/suggestRoutes");
const storyRouter = require("../routes/media/storyRoutes");
const mediaRoutes = require("../routes/media/mediaRoutes");
const groupRoutes = require("../routes/group/groupRoutes");
const postIdRoutes = require("../routes/post/postIdRoutes");
const userIdRouter = require("../routes/user/userIdRoutes");
const settingRoutes = require("../routes/setting/settingRoutes");
const commentRoutes = require("../routes/comment/commentRoutes");
const reactionRoutes = require("../routes/reaction/reactionRoutes");
const friendRequestRoutes = require("../routes/friendRequestRoutes");

const MiddlewareController = require("../controllers/Auth/MiddlewareController");

const routes = (app) => {
    app.use("/api/v1/auth/", authRoutes);
    app.use("/api/v1/public/page/", pageRoutes);
    app.use("/api/v1/public/media/", mediaRoutes);
    app.use("/api/v1/public/group/", groupRoutes);

    app.use("/api/v1/secure/role/", MiddlewareController.verifyToken, roleRoutes);
    app.use("/api/v1/secure/story/", MiddlewareController.verifyToken, storyRouter);
    app.use("/api/v1/secure/comment/", MiddlewareController.verifyToken, commentRoutes);
    app.use("/api/v1/secure/setting/", MiddlewareController.verifyToken, settingRoutes);
    app.use("/api/v1/secure/suggest/", MiddlewareController.verifyToken, suggestRoutes);
    app.use("/api/v1/secure/reaction/", MiddlewareController.verifyToken, reactionRoutes);
    app.use("/api/v1/secure/friend-request/", MiddlewareController.verifyToken, friendRequestRoutes);

    app.use("/api/v1/public/post/", postIdRoutes);
    app.use("/api/v1/secure/post/", MiddlewareController.verifyToken, postRoutes);
    
    app.use("/api/v1/public/user/", userIdRouter);
    app.use("/api/v1/secure/user/", MiddlewareController.verifyToken, userRoutes);

    app.get("/", async (req, res) => {
        res.status(200).json({
            message: "Test Register Back-end",
        });
    });
};

module.exports = routes;