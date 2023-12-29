const fetchPostDataById = async ({ userId, page }) => {
    try {
        const accessToken = localStorage.getItem("accessToken");

        if (!accessToken) {
            return { error: "Access token not found" };
        }

        const url = process.env.NEXT_PUBLIC_API_URL + `/api/v1/public/post/?user=${userId}&page=${page}`;

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
            return { error: "Error fetching post data" };
        }
    } catch (error) {
        throw error;
    }
};

export const fetchPostByPostId = async ({ postId }) => {
    try {
        const url = process.env.NEXT_PUBLIC_API_URL + `/api/v1/public/post/post/?post=${postId}`;

        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.ok) {
            return await response.json();
        } else {
            return { error: "Error fetching post data" };
        }
    } catch (error) {
        throw error;
    }
}

export default fetchPostDataById;
