const fetchGoogleData = async (account) => {
    try {
        const url = process.env.NEXT_PUBLIC_API_URL + "/api/v1/auth/google";

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${account.token_type} ${account.id_token}`,
            },
        });

        if (response.ok) {
            return await response.json();
        } else {
            const errorData = await response.json();

            return { error: errorData.message || "Error fetching user data using Google OAuth" };
        }
    } catch (error) {
        return console.error(error);
    }
};

export default fetchGoogleData;