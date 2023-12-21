"use client"

import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import fetchPostByUserId from "@/app/api/fetchPostByUserId";

const usePostDataById = (userId) => {
    const router = useRouter();
    const postByIdRef = useRef(null);

    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);
    const [postByUserIdProps, setPostByUserIdProps] = useState([]);

    const debounce = (func, delay) => {
        let timeoutId;
        return function (...args) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => { func.apply(this, args) }, delay);
        };
    };

    const fetchPostData = async () => {
        setLoading(true);
        try {
            const postProps = await fetchPostByUserId({ userId, page });

            if (!postProps || postProps.error === "Access token not found") {
                return router.push("/auth/login");
            }

            if (Array.isArray(postProps)) {
                setPostByUserIdProps((prevPosts) => [...prevPosts, ...postProps]);
            }
        } catch (error) {
            throw error;
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        setPostByUserIdProps([])
        return () => {};
    }, [userId])

    useEffect(() => {
        fetchPostData();
    }, [userId, page, router]);

    useEffect(() => {
        const handleScroll = debounce(() => {
            if (postByIdRef.current && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight * 0.9 && !loading) {
                setPage((prevPage) => prevPage + 1);
            }
        }, 200);

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [loading]);

    return { postByIdRef, postByUserIdProps };
};

export default usePostDataById;
