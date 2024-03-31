"use client"

import { useEffect, useRef, useState } from "react";
import { handleMultipleImageFileUpload } from "@/utils";

const useMultipleImagesData = () => {
    const fileInputRef = useRef(null);

    const [selectedImages, setSelectedImages] = useState([]);

    const handleFileUpload = (event) => handleMultipleImageFileUpload(event, setSelectedImages)

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

export default useMultipleImagesData;