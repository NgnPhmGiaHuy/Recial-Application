const fetchTokenRefresh = async () => {
    try {
        const refreshToken = localStorage.getItem("refreshToken");

        const url = process.env.NEXT_PUBLIC_API_URL + "/api/v1/auth/refresh";

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${refreshToken}`,
            },
        });

        if (response.ok) {
            const responseData = await response.json();

            return responseData.accessToken;
        } else {
            const errorData = await response.json();
            return { error: errorData.message || "Get Token refresh failed" };
        }
    } catch (error) {
        return console.error(error);
    }
};

export default fetchTokenRefresh;