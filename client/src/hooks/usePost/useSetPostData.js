"use client"

import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";

import { toggleCreatePost } from "@/store/actions/toggle/toggleActions";
import { fetchDataWithAccessTokenAndData, handleUploadImage } from "@/utils";

const useSetPostData = () => {
    const dispatch = useDispatch();
    const [postSubmitStatus, setPostSubmitStatus] = useState(false);

    const handleSetPostData = async ({ inputText, inputImage, userProps, groupProps }) => {
        try {
            const uploadTasks = inputImage.map(async (base64String) => {
                return handleUploadImage(base64String, userProps.user._id);
            });

            const uploadedURLs = await Promise.all(uploadTasks);

            const postData = {
                post: {
                    post_content: inputText,
                    post_image: uploadedURLs,
                    post_group: groupProps?.profile?._id,
                    post_privacy: userProps?.settings?.privacy?.post_visibility,
                },
            };

            const url = process.env.NEXT_PUBLIC_API_URL + "/api/v1/secure/post/";

            const createdPost = await fetchDataWithAccessTokenAndData(url, "POST", postData);

            if (createdPost && !createdPost.error) {
                return setPostSubmitStatus(true);
            }
        } catch (error) {
            return console.error("Error uploading images or creating post: ", error);
        }
    };

    useEffect(() => {
        dispatch(toggleCreatePost());
    }, [postSubmitStatus]);

    return { postSubmitStatus, handleSetPostData };
};

export default useSetPostData;