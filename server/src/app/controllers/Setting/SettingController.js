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
            return res.status(500).json(error);
        }
    }
}

module.exports = new SettingController();