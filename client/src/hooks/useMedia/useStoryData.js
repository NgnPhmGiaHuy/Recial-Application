"use client"

import useSWR from "swr";

import { fetcherWithAccessToken } from "@/utils";

const useStoryData = () => {
    const { data, error, isLoading, isValidating } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/secure/story/`, fetcherWithAccessToken);

    return { storyProps: data, error, isLoading, isValidating }
};

export default useStoryData;