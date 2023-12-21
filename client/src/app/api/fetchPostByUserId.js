const fetchPostByUserId = async ({userId, page}) => {
    try {
        const url = process.env.NEXT_PUBLIC_API_URL + `/api/public/post/?user=${userId}&page=${page}`;

        console.log(url)

        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.ok) {
            return await response.json();
        } else {
            throw new Error("Error fetching user data");
        }
    } catch (error) {
        throw error;
    }
};

export default fetchPostByUserId;
