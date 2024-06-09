import { fetchDataWithAccessToken } from "@/utils";

const handleSavedData = async (destinationType, destinationId, method = "POST", handleState = () => {}) => {
    try {
        const url = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/secure/saved/${destinationType.toLowerCase()}/?destination_id=${destinationId.toString()}`;

        const savedData = await fetchDataWithAccessToken(url, method);

        if (!savedData) {
            console.error("Failed to fetch saved data. No response from server.");
            return { success: false, message: "No response from server." };
        }

        if (savedData.error) {
            console.error(`Error: ${savedData.error.message || "Unknown error occurred"}`);
            return { success: false, message: savedData.error.message || "Unknown error occurred" };
        }

        handleState();
        return { success: true, message: "Reaction successfully handled." };
    } catch (error) {
        console.error(`Network error: ${error.message || "An unknown error occurred"}`);
        return { success: false, message: `Network error: ${error.message || "An unknown error occurred"}` };
    }
}

export default handleSavedData;