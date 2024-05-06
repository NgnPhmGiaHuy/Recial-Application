const getRoleDataService = require("../../services/roleService/getRoleDataService");

class RoleController {
    getRoleData = async (req, res) => {
        try {
            const roleId = req.query.role;

            const roleProps = await getRoleDataService.getRawRoleData(roleId);

            if (!roleProps) {
                return res.status(404).json({ error: "Role not found " });
            }

            return res.status(200).json(roleProps);
        } catch (error) {
            console.error("Error in getRoleData: ", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
}

module.exports = new RoleController();