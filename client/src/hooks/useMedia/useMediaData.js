"use client"

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { getMediaData } from "@/app/api/fetchMediaData";

const useMediaData = (url) => {
    const router = useRouter();
    const [mediaProps, setMediaProps] = useState(null);

    useEffect(() => {
        let isCancelled = false;

        const fetchData = async () => {
            try {
                setMediaProps(null);

                const mediaData = await getMediaData(url);

                if (!mediaData && mediaData.error) {
                    return router.push("/auth/login");
                }

                if (!isCancelled) {
                    return setMediaProps(mediaData);
                }
            } catch (error) {
                return console.error(error);
            }
        }

        fetchData()

        return () => { isCancelled = true };
    }, [url, router]);

    return { mediaProps, setMediaProps };
}

export default useMediaData;

