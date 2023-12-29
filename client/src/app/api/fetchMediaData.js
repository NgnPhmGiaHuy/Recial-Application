const fetchMediaData = async (url) => {
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
            return { error: "Error fetching media data" };
        }
    } catch (error) {
        throw error;
    }
}

export default fetchMediaData;