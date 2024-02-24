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
    const keysToRemove = ["userIdProps", "userIdFriendProps", "userIdFollowingProps", "userIdFollowerProps", "userIdPhotoProps", "userIdGroupProps"];

    return keysToRemove.forEach(key => localStorage.removeItem(key));
};