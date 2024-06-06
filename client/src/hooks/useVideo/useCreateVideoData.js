"use client"

import { useState } from "react";

import { fetchDataWithAccessTokenAndData } from "@/utils";

const url = process.env.NEXT_PUBLIC_API_URL + "/api/v1/secure/video/";

const useCreateVideoData = () => {
    const [error, setError] = useState(null);
    const [status, setStatus] = useState(false);

    const handleCreateVideo = async ({ videoProps, handleConfirmUpload = () => {} }) => {
        try {
            const formattedVideoData = {
                video_url: videoProps?.downloadURL,
                video_size: videoProps?.meta?.size,
                video_title: videoProps?.meta?.name,
                video_format: videoProps?.meta?.format,
                video_privacy: videoProps?.meta?.privacy,
                video_description: videoProps?.meta?.description,
                video_duration: videoProps?.meta?.duration,
                video_resolution: videoProps?.meta?.resolution,
                video_interaction: videoProps?.meta?.interaction,
            }

            const createdVideo = await fetchDataWithAccessTokenAndData(url, "POST", formattedVideoData);

            if (!createdVideo) {
                setStatus(false);
                return setError("Failed to create video. No response from server.");
            }

            if (createdVideo.error) {
                setStatus(false);
                return setError(`Error: ${createdVideo.error.message || "Unknown error occurred"}`);
            }

            handleConfirmUpload();
            setStatus(true);
            return setError(null);
        } catch (error) {
            setStatus(false);
            return setError(`Network error: ${error.message || "Unknown error occurred"}`);
        }
    }

    return { error, status, setStatus, handleCreateVideo };
}

export default useCreateVideoData;