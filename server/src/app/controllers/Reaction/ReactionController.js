const { WebSocket } = require("ws");

const Type = require("../../models/Type");
const Reaction = require("../../models/Reaction");

const userDataService = require("../../services/userDataService");

class ReactionController {
    getReactionData = async (req, res) => {
        try {
            const decodedToken = req.decodedToken;
            const userId = decodedToken.userId;

            const user = await userDataService.getUserById(userId);

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            const reactionId = req.query.reaction;

            const reactionData = await Reaction.findById(reactionId);

            if (!reactionData) {
                return res.status(404).json({ error: "Reaction not found" });
            }

            const reactionProps = {
                _id: reactionData._id,
                user: await userDataService.getUserById(reactionData.source_id),
                destination: {
                    type: (await Type.findById(reactionData.destination.type)).type_name,
                    destination_id: reactionData.destination.destination_id,
                },
                reaction_type: (await Type.findById(reactionData.reaction_type)).type_name,
                created_at: reactionData.createdAt,
                updated_at: reactionData.updatedAt,
            };

            return res.status(200).json(reactionProps);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
    
    createReaction = async (req, res) => {
        try {
            const decodedToken = req.decodedToken;
            const userId = decodedToken.userId;

            const user = await userDataService.getUserById(userId);

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            const data = req.body;

            const reactionType = await Type.findOne({ type_name: data.reaction_type });
            const destinationType = await Type.findOne({ type_name: data.destination.type });

            const existReaction = await Reaction.findOne({ "source_id": user._id, "destination.destination_id": data.destination.destination_id });

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

                return res.status(200).json({ message: 'Reaction update/create successfully' });
            } else {
                const newReaction = new Reaction({
                    source_id: user._id,
                    destination: {
                        type: destinationType._id,
                        destination_id: data.destination.destination_id,
                    },
                    reaction_type: reactionType._id,
                });

                await newReaction.save();

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

                return res.status(200).json({ message: 'Reaction create successfully' });
            }
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

module.exports = new ReactionController();