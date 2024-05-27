"use client"

import { useRef } from "react";

import { useDataFetcher, useScrollHandler } from "@/hooks";

const useFetchAndScroll = (dependencies, fetchDataFunction) => {
    const dataRef = useRef(null);

    const { data, isLoading, fetchData } = useDataFetcher(fetchDataFunction, [dependencies]);

    useScrollHandler(async () => {
        if (dataRef.current && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight * 0.8 && !isLoading) {
            await fetchData();
        }
    }, [dependencies, isLoading, fetchData]);

    return { dataRef, data };
};

export default useFetchAndScroll;