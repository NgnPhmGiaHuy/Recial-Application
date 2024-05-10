import { fetchDataWithAccessTokenAndData, handleUploadImage } from "@/utils";

const handleSetUserProfileData = async ({ formData, userProps, setSubmitStatus }) => {
    try {
        const uploadedProfilePictureURL = await handleUploadImage(formData?.session_profile_picture_url, userProps.user._id);
        const uploadedCoverPictureURL = await handleUploadImage(formData?.session_profile_cover_photo_url, userProps.user._id);

        const { session_profile_picture_url, session_profile_cover_photo_url, ...otherFormData } = formData;

        const dataToSend = {
            ...otherFormData,
            session_profile_picture_url: uploadedProfilePictureURL,
            session_profile_cover_photo_url: uploadedCoverPictureURL,
        }

        const url = process.env.NEXT_PUBLIC_API_URL + "/api/v1/secure/user/profile/";

        const updatedUserProfile = await fetchDataWithAccessTokenAndData(url, "PUT", dataToSend);

        if (!updatedUserProfile) {
            return { error: "Error updating profile." };
        }

        return setSubmitStatus(true);
    } catch (error) {
        return console.error("Error handling friend request: ", error);
    }
}

export default handleSetUserProfileData;