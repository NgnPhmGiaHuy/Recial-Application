"use client"

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const useWithAuth = (WrappedComponent) => {
    const AuthComponent = (props) => {
        const router = useRouter();
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            const checkAuth = async () => {
                try {
                    const accessToken = localStorage.getItem("accessToken");

                    if (!accessToken) {
                        return router.push("/auth/login")
                    } else {
                        return setLoading(false);
                    }
                } catch (error) {
                    console.error("Error checking auth token:", error);

                    return router.push("auth/login")
                }
            }

            checkAuth();
        }, [router]);

        return loading ? null : <WrappedComponent {...props} />;
    };

    return AuthComponent;
};

export default useWithAuth;
