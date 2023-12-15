const jwt = require("jsonwebtoken");

class MiddlewareController {
    verifyToken(req, res, next) {
        const token = req.headers.token;

        if (token) {
            const accessToken = token.split(" ")[1];

            jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (error, decoded) => {
                if (error) {
                    // res.status(403).json("Token is not valid");
                    return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
                }

                req.userId = decoded.id;
                next();
            });
        } else {
            // res.status(401).json("You're not authentication");
            return res.status(403).send({ auth: false, message: 'No token provided.' });
        }
    }
}

module.exports = new MiddlewareController();