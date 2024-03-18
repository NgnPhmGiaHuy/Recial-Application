"use client"

import useSWR from "swr";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import {useDecodeToken, useFetchAndScroll} from "@/hooks";
import { getPagePostDataById } from "@/app/api/fetchPageData";
import fetcherWithoutAccessToken from "@/app/api/fetcherWithoutAccessToken";
import { clearPageCurrentUserRole, setPageCurrentUserRole, setPageData, setPageFollowData, setPageLikeData } from "@/store/actions/page/pageActions";

export const usePageData = (pageId) => {
    const { userRole } = useCheckUserPageRole(pageId);

    const { pageProps } = useGetPageData(pageId);
    const { pageLikeProps } = useGetPageLikeData(pageId);
    const { pageFollowProps } = useGetPageFollowData(pageId);

    const { postRef, pagePostProps, setPagePostProps } = useGetPagePostData(pageId);

    return { postRef, pagePostProps, userRole };
}

const useCheckUserPageRole = (pageIds) => {
    const decodedToken = useDecodeToken();
    const dispatch = useDispatch();

    const [userRole, setUserRole] = useState(null);

    const checkUserRole = () => {
        if (decodedToken?.roles?.page) {
            Object.entries(decodedToken.roles.page).forEach(([pageId, userRole]) => {
                if (pageId === pageIds) {
                    setUserRole(userRole);

                    return dispatch(setPageCurrentUserRole(userRole));
                }
            });
        }
    };

    useEffect(() => {
        dispatch(clearPageCurrentUserRole());

        return checkUserRole();
    }, [pageIds, decodedToken]);

    return { userRole };
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