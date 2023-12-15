import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";

const usePostData = () => {
    const router = useRouter();
    const postRef = useRef(null);
    const [postProps, setPostProps] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchPosts = async () => {
        setLoading(true);
        try {
            const accessToken = localStorage.getItem("accessToken");

            if (!accessToken) {
                return router.push("/auth/login");
            }

            const url = `${process.env.NEXT_PUBLIC_API_URL}/api/post`;

            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            if (response.ok) {
                const newData = await response.json();
                console.log(newData)
                setPostProps((prevPosts) => [...prevPosts, ...newData]);
            } else {
                if (response.status === 401) {
                    localStorage.removeItem("accessToken");
                    localStorage.removeItem("refreshToken");
                    return router.push("/auth/login");
                } else {
                    console.log("Error fetching user data");
                }
            }
        } catch (error) {
            throw error;
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, [router]);

    useEffect(() => {
        const handleScroll = () => {
            if (
                postRef.current &&
                (window.innerHeight + document.documentElement.scrollTop) >= (document.documentElement.scrollHeight * 9) / 10 &&
                !loading
            ) {
                fetchPosts();
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [loading]);

    return { postProps, postRef };
};

export default usePostData;
