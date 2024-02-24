"use client"

import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";

import { getPostDataByUserId } from "@/app/api/fetchPostDataById";

const usePostDataByUserId = (userId) => {
    const router = useRouter();
    const postByIdRef = useRef(null);

    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);
    const [postByUserIdProps, setPostByUserIdProps] = useState([]);

    const debounce = (func, delay) => {
        let timeoutId;
        return function (...args) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func.apply(this, args);
            }, delay);
        };
    };

    const fetchPostData = async () => {
        if (loading) return;

        setLoading(true);

        try {
            const postProps = await getPostDataByUserId({ userId, page });

            if (!postProps || postProps.error) {
                return router.push("/auth/login");
            }

            if (Array.isArray(postProps)) {
                if (page <= 1) {
                    setPostByUserIdProps(postProps);
                } else {
                    setPostByUserIdProps((prevPosts) => [...prevPosts, ...postProps]);
                }
                setPage((prevPage) => prevPage + 1);
            }
        } catch (error) {
            return console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        setPage(0);
        setPostByUserIdProps([]);

        return () => { };
    }, [userId]);

    useEffect(() => {
        fetchPostData();
    }, [userId, router]);

    useEffect(() => {
        const handleScroll = debounce(async () => {
            if (postByIdRef.current && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight * 0.9 && !loading) {
                await fetchPostData();
            }
        }, 200);

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [userId, loading, fetchPostData]);

    return { postByIdRef, postByUserIdProps, setPostByUserIdProps };
};


export default usePostDataByUserId;