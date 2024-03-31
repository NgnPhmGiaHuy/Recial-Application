const fetchUserData = async (endpoint) => {
    try {
        const accessToken = localStorage.getItem("accessToken");

        if (!accessToken) {
            return console.error("Access token not found.");
        }

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/secure/user/${endpoint}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`,
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

export default fetchUserData