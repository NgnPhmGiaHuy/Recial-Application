const Reaction = require("../../models/Reaction");

const getUserDataService = require("../userService/getUserDataService");
const getTypeDataService = require("../typeService/getTypeDataService");

class GetReactionDataService {
    getRawReactionData = async (reactionId) => {
        return Reaction.findById(reactionId);
    }

    getFormattedReactionData = async (reactionData) => {
        const reactionType = await getTypeDataService.getTypeByTypeId(reactionData.reaction_type);
        const destinationType = await getTypeDataService.getTypeByTypeId(reactionData.destination.type);

        return {
            _id: reactionData._id,
            user: await getUserDataService.getFormattedUserData(reactionData.source_id),
            destination: {
                type: destinationType.type_name,
                destination_id: reactionData.destination.destination_id,
            },
            reaction_type: reactionType.type_name,
            created_at: reactionData.createdAt,
            updated_at: reactionData.updatedAt,
        };
    }

    getReactionBySourceAndDestination = async (source, destination) => {
        return Reaction.findOne({ "source_id": source, "destination.destination_id": destination });
    }
}

module.exports = new GetReactionDataService();