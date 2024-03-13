const getRoleDataService = require("../../services/roleService/getRoleDataService");
const getUserDataService = require("../../services/userService/getUserDataService");

class RoleController {
    getRoleData = async (req, res) => {
        try {
            const decodedToken = req.decodedToken;
            const userId = decodedToken.user_id;

            const user = await getUserDataService.getRawUserData(userId);

            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }

            const roleId = req.query.role;

            const roleProps = await getRoleDataService.getRawRoleData(roleId);

            if (!roleProps) {
                return res.status(404).json({ error: "Role not found "});
            }

            return res.status(200).json(roleProps);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

module.exports = new RoleController();