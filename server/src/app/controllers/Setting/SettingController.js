const userDataService = require("../../services/userDataService");

class SettingController {
    setPostVisibilitySetting = async (req, res) => {
        try {
            const decodedToken = req.decodedToken;
            const userId = decodedToken.userId;

            const user = await userDataService.getFullUserById(userId);

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }


        } catch (error) {
            if (error.name === 'TokenExpiredError') {
                return res.status(401).json({ error: 'Token expired' });
            }
            return res.status(500).json({ error: 'Server error' });
        }
    }
}

module.exports = new SettingController();