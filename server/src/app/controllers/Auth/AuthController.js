const bcrypt = require("bcryptjs");
const jwt= require("jsonwebtoken");

const User = require("../../models/User");
const userDataService = require("../../services/userDataService");

class AuthController {
    registerUser = async (req, res) => {
        try {
            const {session_key, hashedPassword, session_firstname, session_lastname} = req.body;

            const existingUser = await User.findOne({email: session_key});

            if (existingUser) {
                return res.status(409).json({ message: "This email already exists, please try again!" });
            }

            const newUser = new User({
                email: session_key,
                password: hashedPassword,
                firstname: session_firstname,
                lastname: session_lastname,
            })

            await newUser.save();

            return res.status(201).json({ message: "User registered successfully" });
        } catch (error) {
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }

    loginUser = async (req, res) => {
        try {
            const { session_key, session_password } = req.body;

            const user = await User.findOne({ email: session_key });

            if (!user) {
                return res.status(404).json({ message: "Sorry, that email isn't registered with us. Please try another." });
            }

            const isPasswordValid = await bcrypt.compare(session_password, user.password);

            if (!isPasswordValid) {
                return res.status(401).json({ message: "Invalid password. Please check and try again." });
            }

            const accessToken = this.generateAccessToken(user);
            const refreshToken = this.generateRefreshToken(user);

            user.refreshToken = refreshToken;
            await user.save();

            const { password, ...userProps } = user._doc;

            res.status(201).json({ accessToken: accessToken, refreshToken: refreshToken });
        } catch (error) {
            res.status(500).json({ error: 'Server error' });
        }
    };

    requestRefreshToken = async (req, res) => {
        const refreshToken = req.headers.authorization;

        if (!refreshToken) {
            return res.status(401).json({ error: "You're not authenticated" });
        }

        const token = refreshToken.split(' ')[1];

        try {
            jwt.verify(token, "Hello", async (error, decoded) => {
                if (error) {
                    return res.status(403).json({ error: "Refresh token is not valid" });
                }

                const user = await User.findById(decoded.userId);

                if (!user) {
                    return res.status(403).json({ error: "User not found" });
                }

                const newAccessToken = this.generateAccessToken(user);

                res.status(200).json({ accessToken: newAccessToken });
            });
        } catch (error) {
            res.status(500).json({ error: 'Server error' });
        }
    };

    logoutUser = async (req, res) => {
        try {
            const decodedToken = req.decodedToken;
            const userId = decodedToken.userId;

            const user = await userDataService.getFullUserById(userId);

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            user.refreshToken = null;
            await user.save();

            res.status(200).json({ message: "Logout" });
        } catch (error) {
            res.status(500).json({ error: 'Server error' });
        }
    }

    generateAccessToken = (user) => {
        return jwt.sign({ userId: user._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1m' });
    };

    generateRefreshToken = (user) => {
        return jwt.sign({ userId: user._id }, "Hello", { expiresIn: '365d' });
    };
}

module.exports = new AuthController();