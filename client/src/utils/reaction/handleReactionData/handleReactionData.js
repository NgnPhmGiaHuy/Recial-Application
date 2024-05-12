import { fetchDataWithAccessToken } from "@/utils";

const handleReactionData = async (reactionType, destinationId, handleState) => {
    try {
        const url = process.env.NEXT_PUBLIC_API_URL + `/api/v1/secure/reaction/?reaction_type=${reactionType.toString()}&destination_id=${destinationId.toString()}`;

        const reactionData = await fetchDataWithAccessToken(url, "POST");

        if (reactionData && !reactionData.error) {
            return handleState();
        }
    } catch (error) {
        return console.error(error);
    }
}

export default handleReactionData;