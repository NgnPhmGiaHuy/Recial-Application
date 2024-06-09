"use client"

import { useEffect, useRef, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";

import { handleDeleteImage, handleSingleImageFileUpload, handleUploadImage } from "@/utils";

const useHandleUploadThumbnail = (videoProps, setVideoProps) => {
    const [coverImage, setCoverImage] = useState(videoProps?.meta?.thumbnail);
    const [uploading, setUploading] = useState(false);
    const userProps = useSelector((state) => state.user, shallowEqual);
    const imageRef = useRef(null);

    const handleFileUpload = async (event) => {
        setUploading(true);
        const imageData = await handleSingleImageFileUpload(event, setCoverImage);
        if (imageData) {
            setCoverImage(imageData);
        }
    };

    const handleImageCloudUpdate = async (imageData) => {
        if (videoProps.thumbnail) {
            await handleDeleteImage(videoProps.thumbnail);
        }
        const newImageUrl = await handleUploadImage(imageData, userProps?.user?._id);

        setVideoProps((prevState) => ({
            ...prevState,
            thumbnail: newImageUrl,
        }));

        setUploading(false);
    };

    useEffect(() => {
        if (coverImage) {
            handleImageCloudUpdate(coverImage);
        }
    }, [coverImage]);

    return { imageRef, uploading, coverImage, handleFileUpload };
};

export default useHandleUploadThumbnail;