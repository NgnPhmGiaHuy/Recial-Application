const User = require("../models/User");

class AuthController {
    async registerUser(req, res) {
        try {
            const {session_key, hashedPassword, session_firstname, session_lastname} = req.body;

            const existingUser = await User.findOne({session_key});

            if (existingUser) {
                return res.status(400).json({ userExists: true, message: "User already exists" });
            }

            const newUser = new User({
                email: session_key,
                password: hashedPassword,
                firstname: session_firstname,
                lastname: session_lastname,
            })

            await newUser.save();

            res.status(201).json({message: 'User registered successfully'});
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Server error' });
        }
    }

    async loginUser(req, res) {
        try {
            const { session_key, hashedPassword } = req.body;

            const user = await User.findOne({ email: session_key });

            if (!user) {
                return res.status(401).json({ message: 'User not found' });
            }

            const isPasswordValid = await bcrypt.compare(hashedPassword, user.password);

            if (!isPasswordValid) {
                return res.status(401).json({ message: 'Invalid password' });
            }

            // Password is valid, authentication successful
            res.status(200).json({ message: 'Login successful', user });
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Server error' });
        }
    }
}

module.exports = new AuthController();