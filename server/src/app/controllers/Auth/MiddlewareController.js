const jwt = require("jsonwebtoken");

class MiddlewareController {
    verifyToken(req, res, next) {
        try {
            const accessToken = req.headers.authorization;

            if (!accessToken) {
                return res.status(401).json({ error: 'Access token missing' });
            }

            const token = accessToken.split(' ')[1];

            req.decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
            
            return next();
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

module.exports = new MiddlewareController();