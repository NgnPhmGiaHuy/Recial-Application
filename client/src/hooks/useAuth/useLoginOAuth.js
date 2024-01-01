import fetchGoogleData from "@/app/api/fetchGoogleData";

export const useLoginOAuth = async (account) => {
    try {
        const response = await fetchGoogleData(account);

        if (response) {
            return await response.json();
        } else {
            throw new Error("Access token or refresh token missing in response");
        }
    } catch (error) {
        throw error;
    }
};

export default useLoginOAuth;