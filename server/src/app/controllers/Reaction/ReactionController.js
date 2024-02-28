const { WebSocket } = require("ws");

const getUserDataService = require("../../services/userService/getUserDataService");
const getTypeDataService = require("../../services/typeService/getTypeDataService");
const getReactionDataService = require("../../services/reactionService/getReactionDataService");
const createReactionDataService = require("../../services/reactionService/createReactionDataService");

class ReactionController {
    getReactionData = async (req, res) => {
        try {
            const decodedToken = req.decodedToken;
            const userId = decodedToken.userId;

            const user = await getUserDataService.getFormattedUserData(userId);

            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }

            const reactionId = req.query.reaction;

            const reactionData = await getReactionDataService.getRawReactionData(reactionId);

            if (!reactionData) {
                return res.status(404).json({ error: "Reaction not found" });
            }

            const reactionProps = await getReactionDataService.getFormattedReactionData(reactionData);

            return res.status(200).json(reactionProps);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
    
    createReaction = async (req, res) => {
        try {
            const decodedToken = req.decodedToken;
            const userId = decodedToken.userId;

            const user = await getUserDataService.getFormattedUserData(userId);

            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }

            const data = req.body;

            const reactionType = await getTypeDataService.getTypeByTypeName(data.reaction_type);

            const destinationId = data.destination.destination_id;
            const destinationType = await getTypeDataService.getTypeByTypeName(data.destination.type);

            const existReaction = await getReactionDataService.getReactionBySourceAndDestination(user._id, data.destination.destination_id);

            const wss = req.app.get("wss");

            if (existReaction) {
                existReaction.reaction_type = reactionType._id;
                existReaction.updatedAt = new Date();

                await existReaction.save();

                if (wss) {
                    const reactionMessage = {
                        type: `update_${destinationType.type_name.toString().toLowerCase()}_reaction`,
                        reactionId: existReaction._id,
                    }

                    wss.clients.forEach((client) => {
                        if (client.readyState === WebSocket.OPEN && client.userId.toString() === user._id.toString()) {
                            client.send(JSON.stringify(reactionMessage));
                        }
                    })
                }

                return res.status(200).json({ message: "Reaction update/create successfully" });
            } else {
                const newReaction = await createReactionDataService.createReactionData(user, destinationType, destinationId, reactionType);

                if (wss) {
                    const reactionMessage = {
                        type: `create_${destinationType.type_name.toString().toLowerCase()}_reaction`,
                        reactionId: newReaction._id,
                    }

                    wss.clients.forEach((client) => {
                        if (client.readyState === WebSocket.OPEN && client.userId.toString() === user._id.toString()) {
                            client.send(JSON.stringify(reactionMessage));
                        }
                    })
                }

                return res.status(200).json({ message: "Reaction create successfully" });
            }
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

module.exports = new ReactionController();