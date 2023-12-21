const jwt = require("jsonwebtoken");

class MiddlewareController {
    verifyToken(req, res, next) {
        const accessToken = req.headers.authorization;

        if (!accessToken) {
            return res.status(401).json({ error: 'Access token missing' });
        }

        const token = accessToken.split(' ')[1];

        try {
            const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
            req.decodedToken = decodedToken;
            next();
        } catch (error) {
            if (error.name === 'TokenExpiredError') {
                return res.status(401).json({ error: 'Token expired' });
            }
            return res.status(500).json({ error: 'Server error' });
        }
    }
}

module.exports = new MiddlewareController();