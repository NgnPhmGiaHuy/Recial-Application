const handleCheckPasswordStrength = (password) => {
    const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
    const mediumRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;

    if (strongRegex.test(password)) {
        return "strong";
    } else if (mediumRegex.test(password)) {
        return "medium";
    } else {
        return "weak";
    }
}

export default handleCheckPasswordStrength;