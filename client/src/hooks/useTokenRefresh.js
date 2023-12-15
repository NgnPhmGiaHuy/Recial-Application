import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";

const useTokenRefresh = () => {
    const router = useRouter();

    useEffect(() => {
        const refreshAccessToken = async () => {
            try {
                const refreshToken = localStorage.getItem("refreshToken");

                const url = process.env.NEXT_PUBLIC_API_URL + "/api/auth/refresh";

                const response = await fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${refreshToken}`,
                    },
                    body: JSON.stringify({refreshToken})
                });

                if (response.ok) {
                    const responseData = await response.json();
                    const newAccessToken = responseData.accessToken;

                    return localStorage.setItem('accessToken', newAccessToken);
                }
            } catch (error) {
                throw error;
            }
        };

        const checkTokenExpiration = async () => {
            try {
                const accessToken = localStorage.getItem("accessToken");
                const refreshToken = localStorage.getItem("refreshToken");

                if (!accessToken && !refreshToken) {
                    return router.push("/auth/login");
                }

                const token = accessToken ? accessToken : refreshToken;
                const decodedToken = jwtDecode(token);

                const currentTime = Date.now() / 1000;
                const tokenExpiration = decodedToken.exp;

                if (tokenExpiration - currentTime < 5) {
                    return await refreshAccessToken();
                }
            } catch (error) {
                throw error;
            }
        };

        const interval = setInterval(checkTokenExpiration, 10000);
        return () => clearInterval(interval);
    }, [router]);
};

export default useTokenRefresh;