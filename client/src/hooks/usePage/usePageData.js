"use client"

import useSWR from "swr";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useFetchAndScroll } from "@/hooks";
import { getPagePostDataById } from "@/app/api/fetchPageData";
import fetcherWithoutAccessToken from "@/app/api/fetcherWithoutAccessToken";
import { setPageData, setPageFollowData, setPageLikeData } from "@/store/actions/page/pageActions";

export const usePageData = (pageId) => {
    const { pageProps } = useGetPageData(pageId);
    const { pageLikeProps } = useGetPageLikeData(pageId);
    const { pageFollowProps } = useGetPageFollowData(pageId);
    const { postRef, pagePostProps, setPagePostProps } = useGetPagePostData(pageId);

    return { postRef, pagePostProps };
}

const useGetPageData = (pageId) => {
    const dispatch = useDispatch();
    const { data, error, isLoading, isValidating } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/public/page/?page=${pageId}`, fetcherWithoutAccessToken);

    useEffect(() => {
        if (data) {
            dispatch(setPageData(data))
        }
    }, [data, dispatch]);

    return { data, error, isLoading, isValidating };
}

const useGetPageLikeData = (pageId) => {
    const dispatch = useDispatch();
    const { data, error, isLoading, isValidating } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/public/page/like/?page=${pageId}`, fetcherWithoutAccessToken);

    useEffect(() => {
        if (data) {
            dispatch(setPageLikeData(data))
        }
    }, [data, dispatch]);

    return { data, error, isLoading, isValidating };
}

const useGetPageFollowData = (pageId) => {
    const dispatch = useDispatch();
    const { data, error, isLoading, isValidating } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/public/page/follow/?page=${pageId}`, fetcherWithoutAccessToken);

    useEffect(() => {
        if (data) {
            dispatch(setPageFollowData(data))
        }
    }, [data, dispatch]);

    return { data, error, isLoading, isValidating };
}

const useGetPagePostData = (pageId) => {
    const { postRef, postProps, setPostProps } = useFetchAndScroll(pageId, (page) => getPagePostDataById({ pageId, page }));

    return { postRef, pagePostProps: postProps, setPagePostProps: setPostProps };
}