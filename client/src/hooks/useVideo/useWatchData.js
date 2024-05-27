"use client";

import { useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";

import { useScrollHandler } from "@/hooks";
import { fetchDataWithAccessToken } from "@/utils";
import { setWatchData, setWatchDataLoading } from "@/store/actions/watch/watchActions";

const useWatchData = (API_URL) => {
    const dispatch = useDispatch();

    const watchRef = useRef(null);
    const pageRef = useRef(0);
    const initialFetchRef = useRef(true);

    const [watchProps, setWatchProps] = useState([]);

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async () => {
        setError(null);
        setIsLoading(true);
        dispatch(setWatchDataLoading(true));

        try {
            const currentPage = pageRef.current;
            const watchProps = await fetchDataWithAccessToken(`${API_URL}/?page=${currentPage}`, "GET");

            if (watchProps.error) {
                console.error(watchProps.error);
                return setError(watchProps.error);
            }

            if (!Array.isArray(watchProps)) {
                return console.error("Data is not iterable");
            }

            setWatchProps((prevWatchs) => currentPage === 0 ? watchProps : [...prevWatchs, ...watchProps]);
            pageRef.current = currentPage + 1;
        } catch (error) {
            console.error(error);
            setError(error);
        } finally {
            setIsLoading(false);
            dispatch(setWatchDataLoading(false));
        }
    }

    useEffect(() => {
        if (initialFetchRef.current) {
            initialFetchRef.current = false;
            fetchData();
        }
    }, []);

    useScrollHandler(async () => {
        if (watchRef.current && (window.innerHeight + document.documentElement.scrollTop) >= (document.documentElement.scrollHeight * 9) / 10 && !isLoading) {
            await fetchData();
        }
    }, [isLoading]);

    useEffect(() => {
        if (watchProps) {
            dispatch(setWatchData({ ref: watchRef, videos: watchProps }));
        }
    }, [watchProps, dispatch]);

    return { watchProps, setWatchProps, watchRef, isLoading, error };
}

export default useWatchData;
