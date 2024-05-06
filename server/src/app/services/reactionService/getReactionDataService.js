const Reaction = require("../../models/Reaction");

const getUserDataService = require("../userService/getUserDataService");
const getTypeDataService = require("../typeService/getTypeDataService");

class GetReactionDataService {
    getRawReactionData = async (reactionId) => {
        try {
            const reactionData = await Reaction.findById(reactionId);

            return reactionData;
        } catch (error) {
            console.error("Error in getRawReactionData: ", error);
            throw new Error("Failed to fetch raw reaction data");
        }
    }

    getFormattedReactionDataByRaw = async (reactionData) => {
        try {
            const userData = await getUserDataService.getFormattedUserDataById(reactionData.source_id);
            const reactionType = await getTypeDataService.getRawTypeData(reactionData.reaction_type);

            return {
                _id: reactionData._id,
                user: userData,
                reaction_type: reactionType.type_name,
                destination_id: reactionData.destination_id,
                created_at: reactionData.createdAt,
                updated_at: reactionData.updatedAt,
            };
        } catch (error) {
            console.error("Error in getFormattedReactionDataByRaw: ", error);
            throw new Error("Failed to format reaction data");
        }
    }

    getRawReactionDataBySourceAndDestination = async (source, destination) => {
        try {
            const reactionData = await Reaction.findOne({ source_id: source, destination_id: destination });

            return reactionData;
        } catch (error) {
            console.error("Error in getRawReactionDataBySourceAndDestination: ", error);
            throw new Error("Failed to fetch reaction by source and destination");
        }
    }
}

module.exports = new GetReactionDataService();