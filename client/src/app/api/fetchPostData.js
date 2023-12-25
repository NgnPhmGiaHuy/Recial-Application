export const fetchPostData = async () => {
    try {
        const accessToken = localStorage.getItem("accessToken");

        if (!accessToken) {
            return { error: "Access token not found" };
        }

        const url = process.env.NEXT_PUBLIC_API_URL + "/api/v1/secure/post";

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
            return { error: "Error fetching user data" }
        }
    } catch (error) {
        throw error;
    }
};

export const createPostData = async (postData) => {
    try {
        const accessToken = localStorage.getItem("accessToken");

        if (!accessToken) {
            return {error: "Access token not found"};
        }

        const url = process.env.NEXT_PUBLIC_API_URL + "/api/v1/secure/post";

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`,
            },
            body: JSON.stringify(postData),
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
