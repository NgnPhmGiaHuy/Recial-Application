"use client"

import {useRouter} from "next/navigation";
import {useState, useEffect} from "react";

const useCheckAccessToken = (WrappedComponent) => {
    const CheckAccess = (props) => {
        const router = useRouter();
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            const checkAccess = async () => {
                try {
                    const accessToken = localStorage.getItem("accessToken");

                    if (accessToken) {
                        router.push("/");
                    } else {
                        setLoading(false);
                    }
                } catch (error) {
                    router.push("/");
                }
            }

            checkAccess();
        }, [router]);

        return loading ? null : <WrappedComponent {...props} />;
    };

    return CheckAccess;
};

export default useCheckAccessToken;