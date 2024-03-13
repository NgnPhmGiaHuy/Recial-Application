"use client"

import { useEffect, useState } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

import { storage } from "@/utils/firebaseConfig";
import { setUserProfile } from "@/app/api/fetchUserData";

const useUpdateUserProfile = (userProps) => {
    const [submitStatus, setSubmitStatus] = useState(false);

    const [formData, setFormData] = useState(null);

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

    const uploadImage = async (base64String) => {
        if (base64String.startsWith('data:image')) {
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
        } else {
            return base64String;
        }
    }

    const handleSetUserProfile = async () => {
        try {
            const uploadedProfilePictureURL = await uploadImage(formData?.session_profile_picture_url);
            const uploadedCoverPictureURL = await uploadImage(formData?.session_profile_cover_photo_url);

            const { session_profile_picture_url, session_profile_cover_photo_url, ...otherFormData } = formData;

            const dataToSend = {
                ...otherFormData,
                session_profile_picture_url: uploadedProfilePictureURL,
                session_profile_cover_photo_url: uploadedCoverPictureURL,
            }

            const updateUserProfile = await setUserProfile(dataToSend);

            if (updateUserProfile && !updateUserProfile.error) {
                return setSubmitStatus(true);
            }
        } catch (error) {
            console.error('Error handling friend request:', error);
        }
    }

    return { formData, setFormData, submitStatus, handleSetUserProfile };
}

export default useUpdateUserProfile;
