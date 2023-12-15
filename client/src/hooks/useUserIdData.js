import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const useUserIdData = ({userId}) => {
    const router = useRouter();
    const [userProps, setUserProps] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const accessToken = localStorage.getItem("accessToken");

                if (!accessToken) {
                    return router.push('/auth/login');
                }

                const url = process.env.NEXT_PUBLIC_API_URL + `/api/user/${userId}`;

                const response = await fetch(url,  {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${accessToken}`,
                    },
                });

                if (response.ok) {
                    const userData = await response.json();
                    return setUserProps(userData);
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

        fetchData()
    }, [router]);

    return userProps;
};

export default useUserIdData;