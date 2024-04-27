const jwt = require("jsonwebtoken");
const getUserDataService = require("../../services/userService/getUserDataService");

class MiddlewareController {
    verifyToken = async (req, res, next) => {
        try {
            const accessToken = req.headers.authorization;

            if (!accessToken) {
                return res.status(401).json({ error: "Access token missing" });
            }

            const token = accessToken.split(" ")[1];

            const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
            const userId = decodedToken.user_id;

            const user = await getUserDataService.getRawUserData(userId);

            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }

            req.user = user;
            req.userId = user._id;

            return next();
        } catch (error) {
            console.error("Error in verifyToken middleware:", error);

            return res.status(500).json({ error: "Internal server error" });
        }
    };
}

module.exports = new MiddlewareController();