export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

export const checkPasswordStrength = (password) => {
    const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
    const mediumRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;

    if (strongRegex.test(password)) {
        return "strong";
    } else if (mediumRegex.test(password)) {
        return "medium";
    } else {
        return "weak";
    }
};

export const handleValidateForm = (registerFormData, setError) => {
    const { session_key, session_password } = registerFormData;
    const isValidEmail = this.validateEmail(session_key);
    const passwordStrength = this.checkPasswordStrength(session_password);

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