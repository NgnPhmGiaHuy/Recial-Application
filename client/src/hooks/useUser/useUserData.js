"use client"

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import { storage } from "@/utils/firebaseConfig";
import { fetchUserData, fetchUserFollower, fetchUserFollowing, fetchUserFriend, fetchUserFriendRequest, fetchUserGroupList, fetchUserMessage, fetchUserNotification, fetchUserPhotoList, fetchUserSearchQuery, fetchUserSetting, setUserProfile } from "@/app/api/fetchUserData";

export const useUserData = () => {
    const router = useRouter();
    const [userProps, setUserProps] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userData = await fetchUserData();

                if (!userData || userData.error) {
                    return router.push("/auth/login");
                }

                setUserProps((prevData) => ({ ...prevData, ...userData }));

                const userNotification = await fetchUserNotification();

                if (userNotification && !userNotification.error) {
                    setUserProps((prevData) => ({ ...prevData, notifications: [...userNotification] }));
                }

                const userMessage = await fetchUserMessage();

                if (userMessage && !userMessage.error) {
                    setUserProps((prevData) => ({ ...prevData, messages: [...userMessage] }));
                }

                const userSearch = await fetchUserSearchQuery();
                if (userSearch && !userSearch.error) {
                    setUserProps((prevData) => ({ ...prevData, search: [...userSearch] }));
                }

                const userSetting = await fetchUserSetting();
                if (userSetting && !userSetting.error) {
                    setUserProps((prevData) => ({ ...prevData, setting: userSetting }));
                }

                const userFollowing = await fetchUserFollowing()
                if (userFollowing && !userFollowing.error) {
                    setUserProps((prevData) => ({
                        ...prevData,
                        user: { ...prevData.user, following: [...userFollowing] }
                    }));
                }

                const userFollower = await fetchUserFollower()
                if (userFollower && !userFollower.error) {
                    setUserProps((prevData) => ({
                        ...prevData,
                        user: { ...prevData.user, followers: [...userFollower] }
                    }));
                }

                const userFriend = await fetchUserFriend();

                if (userFriend && !userFriend.error) {
                    setUserProps((prevData) => ({
                        ...prevData,
                        user: { ...prevData.user, friends: [...userFriend] }
                    }));
                }

                const userFriendRequest = await fetchUserFriendRequest();
                if (userFriendRequest && !userFriendRequest.error) {
                    setUserProps((prevData) => ({ ...prevData, friend_request: [...userFriendRequest] }));
                }

                const userPhotoList = await fetchUserPhotoList();

                if (userPhotoList && !userPhotoList.error) {
                    setUserProps((prevData) => ({ ...prevData, photo_list: [...userPhotoList] }));
                }

                const userGroupList = await fetchUserGroupList();

                if (userGroupList && !userGroupList.error) {
                    setUserProps((prevData) => ({ ...prevData, group_list: [...userGroupList] }));
                }
            } catch (error) {
                throw error;
            }
        };

        fetchData();
    }, [router]);

    return {userProps, setUserProps};
};


export const useUpdateUserProfile = (userProps) => {
    const [submitStatus, setSubmitStatus] = useState(false);

    const [formData, setFormData] = useState({
        session_username: userProps?.user?.username,
        session_firstname: userProps?.user?.firstname || "",
        session_lastname: userProps?.user?.lastname || "",
        session_description: userProps?.user?.description || "",
        session_location: userProps?.user?.location || "",
        session_date_of_birth: userProps?.user?.date_of_birth || "",
        session_profile_picture_url: userProps?.user?.profile_picture_url || "",
        session_profile_cover_photo_url: userProps?.user?.profile_cover_photo_url || "",
    });

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
            const uploadedProfilePictureURL = await uploadImage(formData.session_profile_picture_url);
            const uploadedCoverPictureURL = await uploadImage(formData.session_profile_cover_photo_url);

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