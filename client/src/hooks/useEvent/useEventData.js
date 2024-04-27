"use client"

import useSWR from "swr";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetcherWithAccessToken } from "@/utils";
import { setEventPageData } from "@/store/actions/event/eventPageActions";

export const useEventData = () => {
    const { data: eventProps } = useGetEventPageData();

    return { eventProps }
}

export const useGetEventPageData = () => {
    const dispatch = useDispatch();
    const { data, error, isLoading, isValidating } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/secure/event/page/`, fetcherWithAccessToken);

    useEffect(() => {
        if (data) {
            dispatch(setEventPageData(data));
        }
    }, [data, dispatch]);

    return { data, error, isLoading, isValidating };
}