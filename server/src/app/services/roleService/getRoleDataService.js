const Role = require("../../models/Role");

class GetRoleDataService {
    getRawRoleData = async (roleId) => {
        return Role.findById(roleId)
    }
}

module.exports = new GetRoleDataService();