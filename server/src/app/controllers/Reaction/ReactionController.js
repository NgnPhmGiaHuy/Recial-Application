const WebSocketService = require("../../services/webSocketService/webSocketService");
const getTypeDataService = require("../../services/typeService/getTypeDataService");
const getReactionDataService = require("../../services/reactionService/getReactionDataService");
const createReactionDataService = require("../../services/reactionService/createReactionDataService");
const deleteReactionDataService = require("../../services/reactionService/deleteReactionDataService");

class ReactionController {
    getReactionData = async (req, res) => {
        try {
            const reactionId = req.query.reaction;

            const reactionData = await getReactionDataService.getRawReactionData(reactionId);

            if (!reactionData) {
                return res.status(404).json({ error: "Reaction not found" });
            }

            const reactionProps = await getReactionDataService.getFormattedReactionDataByRaw(reactionData);

            return res.status(200).json(reactionProps);
        } catch (error) {
            console.error("Error in getReactionData: ", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
    
    createReaction = async (req, res) => {
        try {
            const userId = req.userId;
            const { reaction_type, destination_id } = req.query;

            const reactionType = await getTypeDataService.getTypeDataByName(reaction_type);

            const destinationId = destination_id;

            const existReaction = await getReactionDataService.getRawReactionDataBySourceAndDestination(userId, destination_id);

            const wss = req.app.get("wss");
            const webSocketService = new WebSocketService(wss);

            if (existReaction) {
                existReaction.reaction_type = reactionType._id;
                existReaction.updatedAt = new Date();

                await existReaction.save();

                await webSocketService.notifyClientsAboutUpdateReaction(userId, existReaction);

                return res.status(200).json({ message: "Reaction update/create successfully" });
            } else {
                const newReaction = await createReactionDataService.createReactionData(userId, destinationId, reactionType);

                await webSocketService.notifyClientsAboutCreateReaction(userId, newReaction);

                return res.status(200).json({ message: "Reaction create successfully" });
            }
        } catch (error) {
            console.error("Error in createReaction: ", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }

    deleteReaction = async (req, res) => {
        try {
            const userId = req.userId;
            const { destination_id } = req.query;

            const deletedReactionData = await deleteReactionDataService.deleteReactionData(userId, destination_id);

            const wss = req.app.get("wss");
            const webSocketService = new WebSocketService(wss);

            await webSocketService.notifyClientsAboutDeleteReaction(userId, deletedReactionData);

            return res.status(200).json(deletedReactionData);
        } catch (error) {
            console.error("Error in deleteReaction: ", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
}

module.exports = new ReactionController();