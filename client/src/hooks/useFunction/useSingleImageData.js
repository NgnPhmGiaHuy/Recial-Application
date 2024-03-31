"use client"

import { useRef, useState } from "react";
import { handleSingleImageFileUpload } from "@/utils";

const useSingleImageData = () => {
    const fileInputRef = useRef(null);

    const [selectedImage, setSelectedImage] = useState(null);

    const handleFileUpload = (event) => handleSingleImageFileUpload(event, setSelectedImage);

    const handleTriggerClick = () => {
        fileInputRef.current.click();
    };

    return [fileInputRef, selectedImage, setSelectedImage, handleFileUpload, handleTriggerClick];
};

export default useSingleImageData;