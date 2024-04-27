"use client"

import { useRef } from "react";

import { useDataFetcher, useScrollHandler } from "@/hooks";

const useFetchAndScroll = (dependencies, fetchDataFunction) => {
    const postRef = useRef(null);

    const { data: postProps, isLoading: postLoading, fetchData: fetchPostData } = useDataFetcher(fetchDataFunction, [dependencies]);

    useScrollHandler(async () => {
        if (postRef.current && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight * 0.8 && !postLoading) {
            await fetchPostData();
        }
    }, [dependencies, postLoading, fetchPostData]);

    return { postRef, postProps };
};

export default useFetchAndScroll;
