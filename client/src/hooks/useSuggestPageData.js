import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const useSuggestPageData = () => {
    const router = useRouter();
    const [suggestPage, setSuggestPage] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const accessToken = localStorage.getItem("accessToken");

                if (!accessToken) {
                    return router.push("/auth/login");
                }

                const url = process.env.NEXT_PUBLIC_API_URL + "/api/suggest/page";

                const response = await fetch(url, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${accessToken}`,
                    },
                });

                if (response.ok) {
                    return setSuggestPage(await response.json());
                } else {
                    if (response.status === 401) {
                        localStorage.removeItem("accessToken");
                        localStorage.removeItem("refreshToken");
                        return router.push('/auth/login');
                    }
                    console.log("Error fetching user data");
                }
            } catch (error) {
                throw error;
            }
        }

        fetchData();
    }, [router]);

    return suggestPage;
}

export default useSuggestPageData;