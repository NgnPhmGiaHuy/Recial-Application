"use client"

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const useSuggestGroupData = () => {
    const router = useRouter();
    const [suggestGroup, setSuggestGroup] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const accessToken = localStorage.getItem("accessToken");

                if (!accessToken) {
                    return router.push("/auth/login");
                }

                const url = process.env.NEXT_PUBLIC_API_URL + "/api/v1/secure/suggest/group"

                const response = await fetch(url, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${accessToken}`,
                    },
                });

                if (response.ok) {
                    return setSuggestGroup(await response.json());
                } else {
                    return { error: "Error fetching user data" }
                }
            } catch (error) {
                throw error;
            }
        }

        fetchData()
    }, [router]);

    return suggestGroup;
}

export default useSuggestGroupData;