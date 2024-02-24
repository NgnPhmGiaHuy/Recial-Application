export const getMediaData = async (url) => {
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.ok) {
            return await response.json();
        } else {
            const errorData = await response.json();
            return { error: errorData.message || "Error fetch media data" };
        }
    } catch (error) {
        return console.error(error);
    }
};