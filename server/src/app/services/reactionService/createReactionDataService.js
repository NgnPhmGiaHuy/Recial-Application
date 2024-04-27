const Reaction = require("../../models/Reaction");

class CreateReactionDataService {
    createReactionData = async (userId, destinationId, reactionType) => {
        const newReaction = new Reaction({
            source_id: userId,
            destination_id: destinationId,
            reaction_type: reactionType._id,
        });

        await newReaction.save();

        return newReaction;
    }
}

module.exports = new CreateReactionDataService();