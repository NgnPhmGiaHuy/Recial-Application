"use client"

import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";

import { useScrollHandler } from "@/hooks";
import { fetchDataWithAccessToken } from "@/utils";
import { setPostData } from "@/store/actions/post/postActions";

const API_URL = process.env.NEXT_PUBLIC_API_URL + "/api/v1/secure/post/";

const useGetPostData = () => {
    const dispatch = useDispatch();

    const router = useRouter();
    const postRef = useRef(null);

    const [postProps, setPostProps] = useState([]);

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async () => {
        setError(null);
        setIsLoading(true);

        try {
            const postProps = await fetchDataWithAccessToken(API_URL, "GET");

            if (!postProps && postProps.error) {
                return router.push("/auth/login");
            }

            if (Array.isArray(postProps)) {
                return setPostProps((prevPosts) => [...prevPosts, ...postProps]);
            } else {
                return console.error("Post data is not iterable");
            }
        } catch (error) {
            console.error(error);
            return setError(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [router]);

    useScrollHandler(async () => {
        if (postRef.current && (window.innerHeight + document.documentElement.scrollTop) >= (document.documentElement.scrollHeight * 9) / 10 && !isLoading) {
            await fetchData();
        }
    }, [isLoading])

    useEffect(() => {
        if (postProps) {
            dispatch(setPostData({ ref: postRef, posts: postProps }))
        }
    }, [postRef, postProps, dispatch]);

    return { postProps, setPostProps, postRef, isLoading, error };
};

export default useGetPostData;