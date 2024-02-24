export const createCommentData = async (commentData) => {
    try {
        const accessToken = localStorage.getItem("accessToken");

        if (!accessToken) {
            return console.error("Access token not found.");
        }

        const url = process.env.NEXT_PUBLIC_API_URL + "/api/v1/secure/comment/";

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`,
            },
            body: JSON.stringify(commentData),
        });

        if (response.ok) {
            return await response.json();
        } else {
            const errorData = await response.json();
            return { error: errorData.message || "Error creating post" };
        }
    } catch (error) {
        return console.error(error);
    }
};

export const getCommentData = async (commentId) => {
    try {
        const accessToken = localStorage.getItem("accessToken");

        if (!accessToken) {
            return console.error("Access token not found.");
        }

        const url = process.env.NEXT_PUBLIC_API_URL + `/api/v1/secure/comment/?comment=${commentId}`;

        const response = await fetch(url, {
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
            return { error: errorData.message || "Error fetch post" };
        }
    } catch (error) {
        return console.error(error);
    }
}