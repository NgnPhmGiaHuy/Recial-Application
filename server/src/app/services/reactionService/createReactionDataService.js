const Reaction = require("../../models/Reaction");

class CreateReactionDataService {
    createReactionData = async (userData, destinationId, reactionType) => {
        const newReaction = new Reaction({
            source_id: userData._id,
            destination_id: destinationId,
            reaction_type: reactionType._id,
        });

        await newReaction.save();

        return newReaction;
    }
}

module.exports = new CreateReactionDataService();