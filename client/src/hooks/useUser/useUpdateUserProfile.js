"use client"

import { useEffect, useState } from "react";

import { handleSetUserProfileData } from "@/utils";

const useUpdateUserProfile = (userProps) => {
    const [formData, setFormData] = useState(null);
    const [submitStatus, setSubmitStatus] = useState(false);

    useEffect(() => {
        setFormData({
            session_username: userProps?.user?.profile?.username,
            session_firstname: userProps?.user?.profile?.firstname || "",
            session_lastname: userProps?.user?.profile?.lastname || "",
            session_description: userProps?.user?.contact?.description || "",
            session_location: userProps?.user?.contact?.location || "",
            session_date_of_birth: userProps?.user?.profile?.date_of_birth || "",
            session_profile_picture_url: userProps?.user?.profile?.profile_picture_url || "",
            session_profile_cover_photo_url: userProps?.user?.profile?.profile_cover_photo_url || "",
        });
    }, [userProps]);

    const handleSetUserProfile = async () => {
        await handleSetUserProfileData({ formData, userProps, setSubmitStatus });
    };

    return { formData, setFormData, submitStatus, handleSetUserProfile };
}

export default useUpdateUserProfile;
