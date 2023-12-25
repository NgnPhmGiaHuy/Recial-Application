"use client"

import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";

import fetchStoryData from "@/app/api/fetchStoryData";

const useStoryData = () => {
    const router = useRouter();
    const [storyProps, setStoryProps] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const storyData = await fetchStoryData();

                if (!storyData && storyData.error ) {
                    return router.push("/auth/login");
                }

                setStoryProps(storyData);
            } catch (error) {
                throw error;
            }
        }

        fetchData();
    }, [router]);

    return storyProps;
};

export default useStoryData;