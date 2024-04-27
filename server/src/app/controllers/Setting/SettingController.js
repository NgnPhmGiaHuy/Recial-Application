class SettingController {
    setPostVisibilitySetting = async (req, res) => {
        try {


        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

module.exports = new SettingController();