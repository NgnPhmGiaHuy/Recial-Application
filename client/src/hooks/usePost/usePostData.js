"use client"

import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";

import { getPostData } from "@/utils";
import { useScrollHandler } from "@/hooks";
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
            const postProps = await getPostData();

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