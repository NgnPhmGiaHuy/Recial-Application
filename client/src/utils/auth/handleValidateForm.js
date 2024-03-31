import { handleCheckPasswordStrength, handleValidEmail } from "@/utils";

const handleValidateForm = (registerFormData, setError) => {
    const { session_key, session_password } = registerFormData;
    const isValidEmail = handleValidEmail(session_key);
    const passwordStrength = handleCheckPasswordStrength(session_password);

    if (!isValidEmail) {
        return setError({ isEmailError: true, isPasswordError: false, formErrorStatus: "Your email is not valid." });
    }

    if (passwordStrength === "weak") {
        return setError({ isEmailError: false, isPasswordError: true, formErrorStatus: "Password is too weak. Please use a stronger password." });
    }

    return setError({ isEmailError: false, isPasswordError: false, formErrorStatus: "" });
};

export default handleValidateForm;