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
            console.error("Error in verifyToken: ", error);
            return res.status(500).json({ error: "Internal server error" });
        }
    };

    setCORPHeader = (policy) => {
        return (req, res, next) => {
            const requestOrigin = req.get("origin");

            if (requestOrigin && (requestOrigin === "http://localhost:3000" || requestOrigin === "http://35.247.175.118/" || requestOrigin === "https://recial-application.as.r.appspot.com/")) {
                res.set("Cross-Origin-Resource-Policy", "same-site");
            } else {
                res.set("Cross-Origin-Resource-Policy", policy);
            }
            next();
        };
    };
}

module.exports = new MiddlewareController();