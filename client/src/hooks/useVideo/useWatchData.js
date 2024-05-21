"use client"

import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";

import { useScrollHandler } from "@/hooks";
import { fetchDataWithAccessToken } from "@/utils";
import { setWatchData, setWatchDataLoading } from "@/store/actions/watch/watchActions";

const API_URL = process.env.NEXT_PUBLIC_API_URL + "/api/v1/secure/watch/";

const useWatchData = () => {
    const dispatch = useDispatch();

    const router = useRouter();
    const watchRef = useRef(null);

    const [watchProps, setWatchProps] = useState([]);

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async () => {
        setError(null);
        setIsLoading(true);
        dispatch(setWatchDataLoading(true));

        try {
            const watchProps = await fetchDataWithAccessToken(API_URL, "GET");

            if (!watchProps && watchProps.error) {
                console.error(watchProps,error);
                return setError(watchProps.error);
            }

            if (!Array.isArray(watchProps)) {
                return console.error("Post data is not iterable");
            }

            return setWatchProps((prevWatchs) => [...prevWatchs, ...watchProps]);
        } catch (error) {
            console.error(error);
            return setError(error);
        } finally {
            setIsLoading(false);
            dispatch(setWatchDataLoading(false));
        }
    }

    useEffect(() => {
        fetchData();
    }, [router]);

    useScrollHandler(async () => {
        if (watchRef.current && (window.innerHeight + document.documentElement.scrollTop) >= (document.documentElement.scrollHeight * 9) / 10 && !isLoading) {
            await fetchData();
        }
    }, [isLoading])

    useEffect(() => {
        if (watchProps) {
            dispatch(setWatchData({ ref: watchRef, videos: watchProps }))
        }
    }, [watchRef, watchProps, dispatch]);

    return { watchProps, setWatchProps, watchRef, isLoading, error };
}

export default useWatchData;