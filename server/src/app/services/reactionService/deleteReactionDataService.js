const Reaction = require("../../models/Reaction");

class DeleteReactionDataService {
    deleteReactionData = async (sourceId, destinationId) => {
        try {
            const deletedReactionData = await Reaction.findOneAndDelete({ source_id: sourceId, destination_id: destinationId });

            return deletedReactionData;
        } catch (error) {
            console.error("Error in deleteReactionDataService: ", error);
            throw new Error("Failed to delete reaction data");
        }
    }
}

module.exports = new DeleteReactionDataService();