import {checkPasswordStrength, validateEmail} from "@/utils/index";

export const handleValidateForm = (registerFormData, setError) => {
    const { session_key, session_password } = registerFormData;
    const isValidEmail = validateEmail(session_key);
    const passwordStrength = checkPasswordStrength(session_password);

    if (!isValidEmail) {
        return setError({ isEmailError: true, isPasswordError: false, formErrorStatus: "Your email is not valid." });
    }

    if (passwordStrength === "weak") {
        return setError({ isEmailError: false, isPasswordError: true, formErrorStatus: "Password is too weak. Please use a stronger password." });
    }

    return setError({ isEmailError: false, isPasswordError: false, formErrorStatus: "" });
};

export const handleRemoveUserIdLocalStorage = () => {
    localStorage.removeItem("userIdProps")
    localStorage.removeItem("userIdFriendProps")
    localStorage.removeItem("userIdFollowingProps")
    localStorage.removeItem("userIdFollowerProps")
    localStorage.removeItem("userIdPhotoProps")
    localStorage.removeItem("userIdGroupProps")
}