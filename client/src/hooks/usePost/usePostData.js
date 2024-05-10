"use client"

import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";

import { useScrollHandler } from "@/hooks";
import { fetchDataWithAccessToken } from "@/utils";
import { setPostData } from "@/store/actions/post/postActions";

const useGetPostData = () => {
    const dispatch = useDispatch();

    const router = useRouter();
    const postRef = useRef(null);

    const [isLoading, setIsLoading] = useState(false);
    const [postProps, setPostProps] = useState([]);

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const url = process.env.NEXT_PUBLIC_API_URL + "/api/v1/secure/post/";

            const postProps = await fetchDataWithAccessToken(url, "GET");

            if (!postProps && postProps.error) {
                return router.push("/auth/login");
            }

            if (Array.isArray(postProps)) {
                return setPostProps((prevPosts) => [...prevPosts, ...postProps]);
            } else {
                return console.error("Post data is not iterable");
            }
        } catch (error) {
            return console.error(error);
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

    return { postProps, setPostProps, postRef };
};

export default useGetPostData;