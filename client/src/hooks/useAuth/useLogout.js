import { signOut } from "next-auth/react";

import { fetchLogoutData } from "@/utils";

const clearLocalStorage = () => {
    return localStorage.clear();
}

const useLogout = async (router) => {
    try {
        const logoutData = await fetchLogoutData();

        if (!logoutData.error) {
            await signOut();
            clearLocalStorage();

            return router.push("/auth/login");
        } else {
            return { error: logoutData.error };
        }
    } catch (error) {
        return console.error(error);
    }
};

export default useLogout;