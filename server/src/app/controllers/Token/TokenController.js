const jwt = require("jsonwebtoken");
const User = require("../../models/User");
const generateToken = require("../../services/tokenService/generateToken");

class TokenController {
    requestRefreshToken = async (req, res) => {
        try {
            const refreshToken = req.headers.authorization;

            if (!refreshToken) {
                return res.status(401).json({ error: "You're not authenticated" });
            }

            const token = refreshToken.split(' ')[1];

            jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, async (error, decoded) => {
                if (error) {
                    return res.status(403).json({ error: "Refresh token is not valid" });
                }

                const user = await User.findById(decoded.userId);

                if (!user) {
                    return res.status(403).json({ error: "User not found" });
                }

                const newAccessToken = await generateToken.generateAccessTokenData(user);

                return res.status(200).json({ accessToken: newAccessToken });
            });
        } catch (error) {
            console.error("Error requesting refresh token: ", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    };
}

module.exports = new TokenController();