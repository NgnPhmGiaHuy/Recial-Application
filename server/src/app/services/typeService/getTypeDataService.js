const Type = require("../../models/Type");

class GetTypeDataService {
    getTypeByTypeId = async (typeId) => {
        return Type.findById(typeId);
    }

    getTypeByTypeName = async (typeName) => {
        return Type.findOne({ type_name: typeName });
    }
}

module.exports = new GetTypeDataService();