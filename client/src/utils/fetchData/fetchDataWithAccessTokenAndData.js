const fetchDataWithAccessTokenAndData = async (url, method, data) => {
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
            body: JSON.stringify(data),
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

export default fetchDataWithAccessTokenAndData;