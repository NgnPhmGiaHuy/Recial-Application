class SettingController {
    setPostVisibilitySetting = async (req, res) => {
        try {


        } catch (error) {
            console.error("Error in setPostVisibilitySetting: ", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
}

module.exports = new SettingController();