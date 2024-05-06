const Reaction = require("../../models/Reaction");

class CreateReactionDataService {
    createReactionData = async (userId, destinationId, reactionType) => {
        try {
            const newReaction = new Reaction({
                source_id: userId,
                destination_id: destinationId,
                reaction_type: reactionType._id,
            });

            await newReaction.save();

            return newReaction;
        } catch (error) {
            console.error("Error in createReactionData: ", error);
            throw new Error("Failed to create reaction data");
        }
    }
}

module.exports = new CreateReactionDataService();