export const createCommentData = async (commentData) => {
    try {
        const accessToken = localStorage.getItem("accessToken");

        if (!accessToken) {
            return {error: "Access token not found"};
        }

        const url = process.env.NEXT_PUBLIC_API_URL + "/api/secure/post/comment";

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`,
            },
            body: JSON.stringify(commentData),
        });

        if (response.ok) {
            return await response.json()
        } else {
            return { error: "Error creating post" }
        }
    } catch (error) {
        throw error;
    }
}