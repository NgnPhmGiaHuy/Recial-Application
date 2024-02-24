"use client"

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { getStoryData } from "@/app/api/fetchStoryData";

const useStoryData = () => {
    const router = useRouter();
    const [storyProps, setStoryProps] = useState(null);

    useEffect(() => {
        let isCancelled = false;

        const fetchData = async () => {
            try {
                setStoryProps(null);

                const storyData = await getStoryData();

                if (!storyData && storyData.error) {
                    return router.push("/auth/login");
                }

                if (!isCancelled) {
                    return setStoryProps(storyData);
                }
            } catch (error) {
                return console.error(error);
            }
        }

        fetchData();
    }, [router]);

    return storyProps;
};

export default useStoryData;