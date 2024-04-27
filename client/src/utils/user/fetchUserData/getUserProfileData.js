import { handleDecodeToken } from "@/utils";

const getUserProfileData = async () => {
    try {
        const accessToken = localStorage.getItem("accessToken");

        if (!accessToken) {
            return console.error("Access token not found.");
        }

        const decodedToken = handleDecodeToken(accessToken);

        if (decodedToken) {
            return decodedToken;
        } else {
            return console.error("Cannot decode token");
        }
    } catch (error) {
        return console.error(error);
    }
}

export default getUserProfileData;