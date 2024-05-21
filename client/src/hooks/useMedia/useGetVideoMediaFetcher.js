"use client"

import useSWR from "swr";
import { useEffect } from "react";

import { fetcherWithAccessToken, fetcherWithoutAccessToken } from "@/utils";

const useGetVideoMediaFetcher = (endpoint, setDataAction, dispatch, refreshInterval = 0) => {
    const { data, error, isLoading, isValidating } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/secure/video/${endpoint}`, fetcherWithoutAccessToken, { refreshInterval });

    useEffect(() => {
        if (data) {
            dispatch(setDataAction(data));
        }
    }, [data, dispatch, setDataAction]);

    return { data, error, isLoading, isValidating };
}

export default useGetVideoMediaFetcher;