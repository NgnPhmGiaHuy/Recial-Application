const useLogout = (router) => {
    const logout = async () => {
        try {
            const accessToken = localStorage.getItem("accessToken");

            if (!accessToken) {
                return { error: "Access token not found" };
            }

            const url = process.env.NEXT_PUBLIC_API_URL + "/api/v1/auth/logout";

            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${accessToken}`,
                },
            });

            if (response.ok) {
                localStorage.clear();
                return router.push("/auth/login")
            } else {
                const errorData = await response.json();
                return { error: errorData.message || "Logout failed" };
            }
        } catch (error) {
            throw error;
        }
    }

    return logout()
}

export default useLogout;