"use client"

import { useRef, useState, useEffect } from 'react';

const useFetchAndScroll = (dependencies, fetchDataFunction) => {
    const postRef = useRef(null);

    const [page, setPage] = useState(0);
    const [postProps, setPostProps] = useState([]);
    const [loading, setLoading] = useState(false);

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
            const postData = await fetchDataFunction(page);

            if (!postData || postData.error) {
                return { error: "Error fetching post data" };
            }

            if (Array.isArray(postData)) {
                if (page <= 1) {
                    setPostProps(postData);
                } else {
                    setPostProps((prevPosts) => [...prevPosts, ...postData]);
                }
                setPage((prevPage) => prevPage + 1);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        setPage(0);
        setPostProps([]);

        return () => {};
    }, [dependencies]);

    useEffect(() => {
        fetchPostData();
    }, [dependencies]);

    useEffect(() => {
        const handleScroll = debounce(async () => {
            if (postRef.current && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight * 0.8 && !loading) {
                await fetchPostData();
            }
        }, 200);

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [dependencies, loading, fetchPostData]);

    return { postRef, postProps, setPostProps };
};

export default useFetchAndScroll;