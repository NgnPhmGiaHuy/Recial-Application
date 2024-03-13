"use client"

import useSWR from "swr";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import {clearMediaData, setMediaData} from "@/store/actions/media/mediaActions";
import fetcherWithoutAccessToken from "@/app/api/fetcherWithoutAccessToken";

const useMediaData = (url) => {
    const dispatch = useDispatch();
    const { data, error, isLoading, isValidating } = useSWR(url, fetcherWithoutAccessToken);

    useEffect(() => {
        dispatch(clearMediaData());

        if (data) {
            dispatch(setMediaData(data));
        }
    }, [data, dispatch]);

    return { mediaProps: data };
}

export default useMediaData;

