export const getPagePostDataById = async ({ pageId, page }) => {
    try {
        const url = process.env.NEXT_PUBLIC_API_URL + `/api/v1/public/page/post/?page=${pageId}&scrollPage=${page}`;

        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.ok) {
            return await response.json();
        } else {
            const errorData = await response.json();
            return { error: errorData.message || "Error fetch page post data" };
        }
    } catch (error) {
        return console.error(error);
    }
}