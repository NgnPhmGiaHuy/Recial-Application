export const fetchReactionData = async (reactionId) => {
    try {
        const accessToken = localStorage.getItem("accessToken");

        if (!accessToken) {
            return { error: "Access token not found" };
        }

        const url = process.env.NEXT_PUBLIC_API_URL + `/api/v1/secure/reaction/?reaction=${reactionId}`;

        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`,
            },
        });

        if (response.ok) {
            return await response.json();
        } else {
            return { error: "Error fetching reaction data" };
        }
    } catch (error) {
        throw error;
    }
};

export const createReactionData = async (reactionType, destinationId, destinationType) => {
    try {
        const accessToken = localStorage.getItem("accessToken");

        if (!accessToken) {
            return { error: "Access token not found" };
        }

        const url = process.env.NEXT_PUBLIC_API_URL + "/api/v1/secure/reaction/";

        const dataToSend = {
            reaction_type: reactionType,
            destination: {
                type: destinationType,
                destination_id: destinationId,
            },
        }

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`,
            },
            body: JSON.stringify(dataToSend),
        });

        if (response.ok) {
            return await response.json();
        } else {
            return { error: "Error create reaction data" };
        }
    } catch (error) {
        throw error;
    }
};