"use client"

import useSWR from "swr";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import fetcherWithAccessToken from "@/app/api/fetcherWithAccessToken";

const useGetUserDataFetcher = (endpoint, setDataAction, refreshInterval = 0) => {
    const dispatch = useDispatch();
    const { data, error, isLoading, isValidating } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/secure/user/${endpoint}`, fetcherWithAccessToken, { refreshInterval });

    useEffect(() => {
        if (data) {
            dispatch(setDataAction(data));
        }
    }, [data, dispatch, setDataAction]);

    return { data, error, isLoading, isValidating };
};

export default useGetUserDataFetcher;
