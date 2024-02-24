export const getGroupData = async (groupId) => {
    try {
        const url = process.env.NEXT_PUBLIC_API_URL + `/api/v1/public/group/?group=${groupId}`;

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
            return { error: errorData.message || "Error fetch group data" };
        }
    } catch (error) {
        return console.error(error);
    }
};

export const getGroupMemberData = async (groupId) => {
    try {
        const url = process.env.NEXT_PUBLIC_API_URL + `/api/v1/public/group/member/?group=${groupId}`;

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
            return { error: errorData.message || "Error fetch group member data" };
        }
    } catch (error) {
        return console.error(error);
    }
};

export const getGroupActivityData = async (groupId) => {
    try {
        const url = process.env.NEXT_PUBLIC_API_URL + `/api/v1/public/group/activity/?group=${groupId}`;

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
            return { error: errorData.message || "Error fetch group activity data" };
        }
    } catch (error) {
        return console.error(error);
    }
};

export const getGroupPostData = async ({ groupId, page }) => {
    try {
        const url = process.env.NEXT_PUBLIC_API_URL + `/api/v1/public/group/post/?group=${groupId}&page=${page}`;

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
            return { error: errorData.message || "Error fetch group post data" };
        }
    } catch (error) {
        return console.error(error);
    }
};

