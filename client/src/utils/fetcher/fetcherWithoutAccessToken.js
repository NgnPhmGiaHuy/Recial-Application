const fetcherWithoutAccessToken = async (url) => {
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

            return console.error(errorData.message);
        }
    } catch (error) {
        return console.error(error);
    }
}

export default fetcherWithoutAccessToken;