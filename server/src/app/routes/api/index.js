const authRoutes = require("./auth/authRoutes");
const postRoutes = require("./post/postRoutes");
const pageRoutes = require("./page/pageRoutes");
const userRoutes = require("./user/userRoutes");
const roleRoutes = require("./role/roleRoutes");
const storyRoutes = require("./media/storyRoutes");
const eventRoutes = require("./event/eventRoutes");
const mediaRoutes = require("./media/mediaRoutes");
const watchRoutes = require("./video/watchRoutes");
const videoRoutes = require("./video/videoRoutes");
const groupRoutes = require("./group/groupRoutes");
const savedRoutes = require("./saved/savedRoutes");
const postIdRoutes = require("./post/postIdRoutes");
const userIdRouter = require("./user/userIdRoutes");
const messageRoutes = require("./message/messageRoutes");
const settingRoutes = require("./setting/settingRoutes");
const commentRoutes = require("./comment/commentRoutes");
const reactionRoutes = require("./reaction/reactionRoutes");
const suggestRoutes = require("../../routes/suggestRoutes");
const friendRequestRoutes = require("../../routes/friendRequestRoutes");

const MiddlewareController = require("../../controllers/Auth/MiddlewareController");

module.exports = [
    { path: "/auth", route: authRoutes },

    { path: "/public/page", route: pageRoutes },
    { path: "/public/media", route: mediaRoutes },
    { path: "/public/group", route: groupRoutes },

    { path: "/secure/video", route: videoRoutes, middleware: MiddlewareController.setCORPHeader("cross-origin") },
    { path: "/secure/role", route: roleRoutes, middleware: MiddlewareController.verifyToken },
    { path: "/secure/watch", route: watchRoutes, middleware: MiddlewareController.verifyToken },
    { path: "/secure/event", route: eventRoutes, middleware: MiddlewareController.verifyToken },
    { path: "/secure/story", route: storyRoutes, middleware: MiddlewareController.verifyToken },
    { path: "/secure/saved", route: savedRoutes, middleware: MiddlewareController.verifyToken },
    { path: "/secure/comment", route: commentRoutes, middleware: MiddlewareController.verifyToken },
    { path: "/secure/setting", route: settingRoutes, middleware: MiddlewareController.verifyToken },
    { path: "/secure/suggest", route: suggestRoutes, middleware: MiddlewareController.verifyToken },
    { path: "/secure/messages", route: messageRoutes, middleware: MiddlewareController.verifyToken },
    { path: "/secure/reaction", route: reactionRoutes, middleware: MiddlewareController.verifyToken },
    { path: "/secure/friend-request", route: friendRequestRoutes, middleware: MiddlewareController.verifyToken },

    { path: "/public/post", route: postIdRoutes },
    { path: "/secure/post", route: postRoutes, middleware: MiddlewareController.verifyToken },

    { path: "/public/user", route: userIdRouter },
    { path: "/secure/user", route: userRoutes, middleware: MiddlewareController.verifyToken },
];