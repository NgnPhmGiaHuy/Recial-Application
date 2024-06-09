"use client"

import { useRef, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";

import { deleteVideoDataOnCloud, discardVideoDataUpload, extractVideoMetadata, uploadVideoDataOnCloud } from "@/utils";

const DEFAULT_VIDEO_PROPS = {
    meta: {
        name: null,
        size: null,
        format: null,
        privacy: null,
        duration: null,
        resolution: null,
        aspectRatio: null,
        description: null,
        interaction: null,
    },
    data: null,
    thumbnail: null,
    downloadURL: null,
    uploadProgress: 0,
};

const useHandleUploadVideo = () => {
    const userProps = useSelector((state) => state.user, shallowEqual);

    const startTimeRef = useRef(null);
    const cacheTimeoutRef = useRef(null);

    const [videoProps, setVideoProps] = useState(DEFAULT_VIDEO_PROPS);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            startTimeRef.current = new Date().getTime();
            extractVideoMetadata(userProps?.user?._id, file, (meta, file, thumbnail) => {
                setVideoProps({
                    meta,
                    data: file,
                    thumbnail,
                    uploadProgress: 0,
                    downloadURL: null,
                });
                uploadVideoDataOnCloud(file, userProps?.user?._id, handleProgress, handleSuccess, handleError);
            });
        }
    };

    const handleProgress = (progress) => {
        setVideoProps((prevProps) => ({ ...prevProps, uploadProgress: progress }));
    };

    const handleSuccess = (downloadURL) => {
        setVideoProps((prevProps) => ({ ...prevProps, downloadURL }));
        cacheTimeoutRef.current = setTimeout(() => {
            deleteVideoDataOnCloud(downloadURL, handleDeleteSuccess, handleDeleteError);
        }, 15 * 60 * 1000);
    };

    const handleError = (error) => {
        console.error("Upload failed:", error);
    };

    const handleDeleteSuccess = () => {
        console.log("File deleted successfully");
        setVideoProps((prevProps) => ({ ...prevProps, data: null, downloadURL: null, uploadProgress: 0 }));
    };

    const handleDeleteError = (error) => {
        console.error("Error deleting file:", error);
    };

    const handleConfirmUpload = () => {
        if (cacheTimeoutRef.current) {
            clearTimeout(cacheTimeoutRef.current);
            cacheTimeoutRef.current = null;
        }

        setVideoProps(DEFAULT_VIDEO_PROPS);
    };

    const handleDiscardVideoUpload = () => {
        return discardVideoDataUpload(videoProps.downloadURL, setVideoProps, handleDeleteSuccess, handleDeleteError);
    }

    return { startTimeRef, videoProps, setVideoProps, handleFileChange, handleConfirmUpload, handleDiscardVideoUpload };
}

export default useHandleUploadVideo;
