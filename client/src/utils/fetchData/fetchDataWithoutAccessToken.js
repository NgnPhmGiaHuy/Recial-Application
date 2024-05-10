const fetchDataWithoutAccessToken = async (url, method) => {
    try {
        const response = await fetch(url, {
            method: `${method}`,
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.ok) {
            return await response.json();
        } else {
            const errorData = await response.json();
            return { error: errorData.message || "Error fetch data" };
        }
    } catch (error) {
        return console.error(error);
    }
}

export default fetchDataWithoutAccessToken;