import { fetchDataWithAccessToken } from "@/utils";

const handleReactionData = async ({ method = "POST", reactionType = "Like", destinationId, destinationType = "", handleState = () => {} }) => {
    if (!destinationId) {
        console.error("destinationId is required");
        return { success: false, message: "DestinationId is required" };
    }

    try {
        const url = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/secure/reaction/${destinationType}?reaction_type=${reactionType.toString()}&destination_id=${destinationId.toString()}`;

        const reactionData = await fetchDataWithAccessToken(url, method);

        if (!reactionData) {
            console.error("Failed to fetch reaction data. No response from server.");
            return { success: false, message: "No response from server." };
        }

        if (reactionData.error) {
            console.error(`Error: ${reactionData.error.message || "Unknown error occurred"}`);
            return { success: false, message: reactionData.error.message || "Unknown error occurred" };
        }

        handleState();
        return { success: true, message: "Reaction successfully handled." };
    } catch (error) {
        console.error(`Network error: ${error.message || "An unknown error occurred"}`);
        return { success: false, message: `Network error: ${error.message || "An unknown error occurred"}` };
    }
}

export default handleReactionData;
