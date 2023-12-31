"use client"

import { useState, useEffect, useCallback } from "react";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";

const useTokenRefresh = () => {
    const router = useRouter();
    const [accessToken, setAccessToken] = useState(null);

    const refreshAccessToken = useCallback(async () => {
        try {
            const refreshToken = localStorage.getItem("refreshToken");
            const url = process.env.NEXT_PUBLIC_API_URL + "/api/v1/auth/refresh";
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${refreshToken}`,
                },
            });

            if (response.ok) {
                const responseData = await response.json();
                const newAccessToken = responseData.accessToken;

                localStorage.setItem("accessToken", newAccessToken);
                setAccessToken(newAccessToken);
                return newAccessToken;
            } else {
                router.push("/auth/login");
            }
        } catch (error) {
            console.error("Error refreshing access token:", error);
        }
    }, [router]);

    const checkTokenExpiration = useCallback(async () => {
        try {
            const accessToken = localStorage.getItem("accessToken");
            const refreshToken = localStorage.getItem("refreshToken");

            if (!accessToken && !refreshToken) {
                return router.push("/auth/login");
            }

            const token = accessToken || refreshToken;
            const decodedToken = jwtDecode(token);

            const currentTime = Date.now() / 1000;
            const tokenExpiration = decodedToken.exp;

            if (tokenExpiration - currentTime < 5) {
                return await refreshAccessToken();
            }
        } catch (error) {
            console.error("Error checking token expiration:", error);
        }
    }, [router, refreshAccessToken]);

    useEffect(() => {
        const interval = setInterval(checkTokenExpiration, 10000);
        return () => clearInterval(interval);
    }, [checkTokenExpiration]);

    useEffect(() => {
        const storedAccessToken = localStorage.getItem("accessToken");
        if (storedAccessToken) {
            setAccessToken(storedAccessToken.toString());
        }
    }, []);

    return { accessToken, setAccessToken };
};

export default useTokenRefresh;
