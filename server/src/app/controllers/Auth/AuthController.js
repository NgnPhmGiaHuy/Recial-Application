const jwt= require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { OAuth2Client } = require('google-auth-library');

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

            if (!user.isOAuthUser) {
                const isPasswordValid = await bcrypt.compare(session_password, user.password);

                if (!isPasswordValid) {
                    return res.status(401).json({ message: "Invalid password. Please check and try again." });
                }
            }

            const accessToken = this.generateAccessToken(user);
            const refreshToken = this.generateRefreshToken(user);

            user.refreshToken = refreshToken;
            await user.save();

            const { password, ...userProps } = user._doc;

            return res.status(201).json({ accessToken: accessToken, refreshToken: refreshToken });
        } catch (error) {
            return res.status(500).json({ error: 'Server error' });
        }
    };

    handleGoogleSignIn = async (req, res) => {
        try {
            const googleToken = req.headers.authorization;

            if (!googleToken) {
                return res.status(401).json({ error: "Google token missing" });
            }

            const token = googleToken.split(' ')[1];

            const client = new OAuth2Client();

            const ticket = await client.verifyIdToken({
                idToken: token,
            })

            const { payload } = ticket;

            const user = payload;

            const existingUser = await User.findOne({ email: user.email });

            if (existingUser) {
                const accessToken = this.generateAccessToken(existingUser);
                const refreshToken = this.generateRefreshToken(existingUser);

                existingUser.refreshToken = refreshToken;
                await existingUser.save();

                return res.status(201).json({ accessToken, refreshToken });
            }

            const newUser = new User({
                email: user.email,
                isOAuthUser: true,
                username: user.name,
                firstname: user.family_name,
                lastname: user.given_name,
                profile_picture_url: user.picture,
            });

            await newUser.save();

            const accessToken = this.generateAccessToken(newUser);
            const refreshToken = this.generateRefreshToken(newUser);

            return res.status(201).json({ accessToken, refreshToken });
        } catch (error) {
            return res.status(500).json({ error: 'Server error' });
        }
    }

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
        return jwt.sign({ userId: user._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
    };

    generateRefreshToken = (user) => {
        return jwt.sign({ userId: user._id }, "Hello", { expiresIn: '365d' });
    };
}

module.exports = new AuthController();