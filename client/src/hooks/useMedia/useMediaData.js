"use client"

import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";

import fetchMediaData from "@/app/api/fetchMediaData";

const useMediaData = (url) => {
    const router = useRouter();
    const [mediaProps, setMediaProps] = useState(null);

    useEffect(() => {
        let isCancelled = false;

        const fetchData = async () => {
            try {
                setMediaProps(null);

                const mediaData = await fetchMediaData(url);

                if (!mediaData && mediaData.error === "Access token not found") {
                    return router.push("/auth/login");
                }

                if (!isCancelled) {
                    setMediaProps(mediaData);
                }
            } catch (error) {
                throw error;
            }
        }

        fetchData()

        return () => { isCancelled = true };
    }, [url, router]);

    return mediaProps;
}

export default useMediaData;

