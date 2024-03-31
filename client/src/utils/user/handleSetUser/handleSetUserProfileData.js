import { handleUploadImage } from "@/utils";
import { setUserProfile } from "@/app/api/fetchUserData";

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

        const updateUserProfile = await setUserProfile(dataToSend);

        if (updateUserProfile && !updateUserProfile.error) {
            return setSubmitStatus(true);
        }
    } catch (error) {
        return console.error("Error handling friend request:", error);
    }
}

export default handleSetUserProfileData;