"use client"

import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";

import {createPostData, fetchPostData} from "@/app/api/fetchPostData";

export const useGetPostData = () => {
    const router = useRouter();
    const postRef = useRef(null);
    const [postProps, setPostProps] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        try {
            const postProps = await fetchPostData();

            if (!postProps && postProps.error === "Access token not found") {
                return router.push("/auth/login");
            }

            if (Array.isArray(postProps)) {
                setPostProps((prevPosts) => [...prevPosts, ...postProps]);
            } else {
                throw new Error("Post data is not iterable");
            }
        } catch (error) {
            throw error;
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [router]);

    useEffect(() => {
        const handleScroll = () => {
            if (postRef.current && (window.innerHeight + document.documentElement.scrollTop) >= (document.documentElement.scrollHeight * 9) / 10 && !loading) {
                fetchData();
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [loading]);

    return { postProps, setPostProps, postRef };
};

export const useSetPostData = () => {
    const [postSubmitStatus, setPostSubmitStatus] = useState(false);

    const handleSetPostData = async (inputText, userProps) => {
        const postData = {
            post: {
                post_content: inputText,
                post_privacy: userProps?.setting?.privacy?.post_visibility,
            },
        };

        const createPost = await createPostData(postData);
        const { createdAt, updatedAt, ...createPostProps } = createPost;

        if (createPost && !createPost.error) {
            setPostSubmitStatus(true);
        }
    };

    return { postSubmitStatus, handleSetPostData };
};
