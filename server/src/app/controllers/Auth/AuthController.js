const bcrypt = require("bcryptjs");

const User = require("../../models/User");
const Setting = require("../../models/Setting");
const generateToken = require("../../services/tokenService/generateToken");

class AuthController {
    registerUser = async (req, res) => {
        try {
            const { session_key, hashedPassword, session_firstname, session_lastname } = req.body;

            if (!session_key || !hashedPassword || !session_firstname || !session_lastname) {
                return res.status(400).json({ message: "All fields are required for registration." });
            }

            const existingUser = await User.findOne({ email: session_key });

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

            const newUserSetting = new Setting({
                source_id: newUser._id,
            });

            await newUserSetting.save();

            return res.status(201).json({ message: "User registered successfully" });
        } catch (error) {
            console.error("Error in registerUser: ", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    };

    loginUser = async (req, res) => {
        try {
            const { session_key, session_password } = req.body;

            // if (!session_key || !session_password) {
            //     return res.status(400).json({ message: "Email and password are required for login." });
            // }

            if (!session_key) {
                return res.status(400).json({ message: "Email and password are required for login." });
            }

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

            const accessToken = await generateToken.generateAccessTokenData(user);
            const refreshToken = await generateToken.generateRefreshTokenData(user);

            user.refreshToken = refreshToken;
            user.updatedAt = Date.now();

            await user.save();

            return res.status(201).json({ accessToken: accessToken, refreshToken: refreshToken });
        } catch (error) {
            console.error("Error in loginUser: ", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    };

    logoutUser = async (req, res) => {
        try {
            if (!req.user) {
                return res.status(401).json({ error: "User not authenticated" });
            }

            const user = req.user;

            user.refreshToken = null;

            await user.save();

            return res.status(200).json({ message: "Logout" });
        } catch (error) {
            console.error("Error in logoutUser: ", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    };
}

module.exports = new AuthController();