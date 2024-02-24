"use client"

import { useEffect, useRef, useState } from "react";

export const useSingleImageData = () => {
    const fileInputRef = useRef(null);

    const [selectedImage, setSelectedImage] = useState(null);

    const readFileAsDataURL = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (event) => {
                resolve(event.target.result);
            };
            reader.onerror = (error) => {
                reject(error);
            };
            reader.readAsDataURL(file);
        });
    };

    const handleFileUpload = async (event) => {
        const uploadedFiles = event.target.files;

        const validFiles = Array.from(uploadedFiles).filter(
            (file) => file.type.includes("image/") || file.type.includes("video/")
        );

        const imageFiles = validFiles.filter((file) => file.type.includes("image/"));

        if (imageFiles.length > 0) {
            const imageData = await readFileAsDataURL(imageFiles[0]);
            return setSelectedImage(imageData);
        } else {
            return setSelectedImage(null);
        }
    };

    const handleTriggerClick = () => {
        fileInputRef.current.click();
    };

    return [fileInputRef, selectedImage, setSelectedImage, handleFileUpload, handleTriggerClick];
};

export const useMultipleImagesData = () => {
    const fileInputRef = useRef(null);

    const [selectedImages, setSelectedImages] = useState([]);

    const readFileAsDataURL = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (event) => {
                resolve(event.target.result);
            };
            reader.onerror = (error) => {
                reject(error);
            };
            reader.readAsDataURL(file);
        });
    };

    const handleFileUpload = async (event) => {
        const uploadedFiles = event.target.files;
        const validFiles = Array.from(uploadedFiles).filter(
            (file) => file.type.includes("image/") || file.type.includes("video/")
        );

        const imageFiles = validFiles
            .filter((file, index) => index < 5 && file.type.includes("image/"));

        const imageDataPromises = imageFiles.map(async (file) => {
            return await readFileAsDataURL(file);
        });

        const imageDatas = await Promise.all(imageDataPromises);

        setSelectedImages((prevImages) => [...prevImages, ...imageDatas]);
    };

    const handleTriggerClick = () => {
        fileInputRef.current.click();
    };

    useEffect(() => {
        return () => {
            selectedImages.forEach((url) => URL.revokeObjectURL(url));
        };
    }, [selectedImages]);

    const selectedImagesFunction = {
        fileInputRef: fileInputRef,
        selectedImages: selectedImages,
        setSelectedImages: setSelectedImages,
        handleFileUpload: handleFileUpload,
        handleTriggerClick: handleTriggerClick,
    };

    return { selectedImagesFunction };
}