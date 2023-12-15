import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const useUserData = () => {
    const router = useRouter();
    const [userProps, setUserProps] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const cachedUserProps = sessionStorage.getItem("userProps");

                if (cachedUserProps) {
                    setUserProps(JSON.parse(cachedUserProps));
                } else {
                    const accessToken = localStorage.getItem("accessToken");

                    if (!accessToken) {
                        return router.push("/auth/login");
                    }

                    const url = process.env.NEXT_PUBLIC_API_URL + "/api/user";

                    const response = await fetch(url,  {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${accessToken}`,
                        }
                    });

                    if (response.ok) {
                        const userData = await response.json();
                        setUserProps(userData);
                        return sessionStorage.setItem("userProps", JSON.stringify(userData));
                    } else {
                        if (response.status === 401) {
                            localStorage.removeItem("accessToken");
                            localStorage.removeItem("refreshToken");
                            return router.push('/auth/login');
                        }
                        console.log("Error fetching user data");
                    }
                }
            } catch (error) {
                throw error;
            }
        };

        fetchData();
    }, [router]);

    return userProps;
};

export default useUserData;