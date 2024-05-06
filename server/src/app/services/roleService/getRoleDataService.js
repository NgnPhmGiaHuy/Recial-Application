const Role = require("../../models/Role");

class GetRoleDataService {
    getRawRoleData = async (roleId) => {
        try {
            const roleData = await Role.findById(roleId);

            return roleData;
        } catch (error) {
            console.error("Error in getRawRoleData: ", error);
            throw new Error("Failed to fetch raw role data");
        }
    }
}

module.exports = new GetRoleDataService();