import { handleReactionData } from "@/utils";

const handleReaction = ({ condition, destinationId, destinationType = "" }) => {
    if (condition) {
        return handleReactionData({ method: "DELETE", destinationId: destinationId, destinationType });
    }
    return handleReactionData({ destinationId: destinationId, destinationType });
}

export default handleReaction;