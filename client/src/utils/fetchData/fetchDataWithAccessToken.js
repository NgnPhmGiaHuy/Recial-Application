const fetchDataWithAccessToken = async (url, method) => {
    try {
        const accessToken = localStorage.getItem("accessToken");

        if (!accessToken) {
            return console.error("Access token not found.");
        }

        const response = await fetch(url, {
            method: `${method}`,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`,
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

export default fetchDataWithAccessToken;