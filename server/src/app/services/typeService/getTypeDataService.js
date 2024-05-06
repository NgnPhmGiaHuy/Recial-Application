const Type = require("../../models/Type");

class GetTypeDataService {
    getRawTypeData = async (typeId) => {
        try {
            const typeData = await Type.findById(typeId);

            return typeData;
        } catch (error) {
            console.error("Error in getRawTypeData: ", error);
            throw new Error("Failed to get type by ID");
        }
    }

    getTypeDataByName = async (typeName) => {
        try {
            const typeData = await Type.findOne({ type_name: typeName });

            return typeData;
        } catch (error) {
            console.error("Error in getTypeDataByName: ", error);
            throw new Error("Failed to get type by name");
        }
    }
}

module.exports = new GetTypeDataService();
