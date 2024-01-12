export const fetchGroupData = async (groupId) => {
    try {
        const url = process.env.NEXT_PUBLIC_API_URL + `/api/v1/public/group/?group=${groupId}`;

        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.ok) {
            return await response.json()
        } else {
            return { error: "Error fetch group data" };
        }
    } catch (error) {
        throw error;
    }
};

export const fetchGroupMemberData = async (groupId) => {
    try {
        const url = process.env.NEXT_PUBLIC_API_URL + `/api/v1/public/group/member/?group=${groupId}`;

        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.ok) {
            return await response.json()
        } else {
            return { error: "Error fetch group data" };
        }
    } catch (error) {
        throw error;
    }
};

export const fetchGroupActivityData = async (groupId) => {
    try {
        const url = process.env.NEXT_PUBLIC_API_URL + `/api/v1/public/group/activity/?group=${groupId}`;

        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.ok) {
            return await response.json()
        } else {
            return { error: "Error fetch group activity data" };
        }
    } catch (error) {
        throw error;
    }
};

export const fetchGroupPostData = async ({ groupId, page }) => {
    try {
        const url = process.env.NEXT_PUBLIC_API_URL + `/api/v1/public/group/post/?group=${groupId}&page=${page}`;

        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.ok) {
            return await response.json()
        } else {
            return { error: "Error fetch group data" };
        }
    } catch (error) {
        throw error;
    }
};

