"use client"

import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { ref, uploadBytes, getDownloadURL, list, listAll } from "firebase/storage";

import { storage } from "@/utils/firebaseConfig";
import { createPostData, getPostData } from "@/app/api/fetchPostData";
import { toggleCreatePost } from "@/store/actions/toggle/toggleActions";

export const useGetPostData = () => {
    const router = useRouter();
    const postRef = useRef(null);
    const [postProps, setPostProps] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);
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
    const dispatch = useDispatch();
    const [postSubmitStatus, setPostSubmitStatus] = useState(false);

    const handleSetPostData = async ({ inputText, inputImage, userProps, groupProps }) => {
        try {
            const uploadTasks = inputImage.map(async (base64String) => {
                const block = base64String.split(";");
                const contentType = block[0].split(":")[1];
                const realData = block[1].split(",")[1];

                const blob = await fetch(`data:${contentType};base64,${realData}`).then((res) =>
                    res.blob()
                );

                const file = new File([blob], `image_${Date.now()}_${userProps.user._id}.jpeg`, {
                    type: contentType,
                });

                const imageRef = ref(
                    storage,
                    `${userProps.user._id}/images/${file.name}`
                );

                const snapshot = await uploadBytes(imageRef, file);
                return getDownloadURL(snapshot.ref);
            });

            const uploadedURLs = await Promise.all(uploadTasks);
            const postData = {
                post: {
                    post_content: inputText,
                    post_image: uploadedURLs,
                    post_group: groupProps?.groupProps?._id,
                    post_privacy: userProps?.settings?.privacy?.post_visibility,
                },
            };

            const createPost = await createPostData(postData);

            if (createPost && !createPost.error) {
                setPostSubmitStatus(true);
            }
        } catch (error) {
            console.error("Error uploading images or creating post:", error);
        }
    };

    useEffect(() => {
        dispatch(toggleCreatePost());
    }, [postSubmitStatus]);

    return { postSubmitStatus, handleSetPostData };
};

