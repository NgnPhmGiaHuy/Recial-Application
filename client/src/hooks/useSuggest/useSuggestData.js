"use client"

import useSWR from "swr";

import fetcherWithAccessToken from "@/app/api/fetcherWithAccessToken";

export const useSuggestEventData = () => {
    const { data, error, isLoading, isValidating } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/secure/suggest/event`, fetcherWithAccessToken)

    return { suggestEventProps: data, suggestEventError: error, suggestEventIsLoading: isLoading, suggestEventIsValidating: isValidating };
}

export const useSuggestGroupData = () => {
    const { data, error, isLoading, isValidating } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/secure/suggest/group`, fetcherWithAccessToken)

    return { suggestGroupProps: data, suggestGroupError: error, suggestGroupIsLoading: isLoading, suggestGroupIsValidating: isValidating };
}

export const useSuggestPageData = () => {
    const { data, error, isLoading, isValidating } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/secure/suggest/page`, fetcherWithAccessToken)

    return { suggestPageProps: data, suggestPageError: error, suggestPageIsLoading: isLoading, suggestPageIsValidating: isValidating };
};