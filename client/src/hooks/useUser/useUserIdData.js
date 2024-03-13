"use client"

import useSWR from "swr";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import fetcherWithoutAccessToken from "@/app/api/fetcherWithoutAccessToken";
import { setUserIdContactData, setUserIdFollowerData, setUserIdFollowingData, setUserIdFriendData, setUserIdGroupListData, setUserIdPhotoListData, setUserIdProfileData } from "@/store/actions/user/userIdActions";

export const useUserIdData = (userId) => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state  => state.user);

    useEffect(() => {

    }, [userId, dispatch, currentUser]);

    return userId === currentUser?.user?._id;
}

export const useGetUserProfileById = (userId) => {
    const dispatch = useDispatch();
    const { data, error, isLoading, isValidating } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/public/user/${userId}/profile`, fetcherWithoutAccessToken);

    useEffect(() => {
        if (data) {
            dispatch(setUserIdProfileData(data));
        }
    }, [userId, data, dispatch]);

    return { data, error, isLoading, isValidating };
}

export const useGetUserContactById = (userId) => {
    const dispatch = useDispatch();
    const { data, error, isLoading, isValidating } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/public/user/${userId}/contact`, fetcherWithoutAccessToken);

    useEffect(() => {
        if (data) {
            dispatch(setUserIdContactData(data));
        }
    }, [userId, data, dispatch]);

    return { data, error, isLoading, isValidating };
}

export const useGetUserFriendById = (userId) => {
    const dispatch = useDispatch();
    const { data, error, isLoading, isValidating } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/public/user/${userId}/friend`, fetcherWithoutAccessToken);

    useEffect(() => {
        if (data) {
            dispatch(setUserIdFriendData(data));
        }
    }, [userId, data, dispatch]);

    return { data, error, isLoading, isValidating };
}

export const useGetUserFollowerById = (userId) => {
    const dispatch = useDispatch();
    const { data, error, isLoading, isValidating } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/public/user/${userId}/follower`, fetcherWithoutAccessToken);

    useEffect(() => {
        if (data) {
            dispatch(setUserIdFollowerData(data));
        }
    }, [userId, data, dispatch]);

    return { data, error, isLoading, isValidating };
}

export const useGetUserFollowingById = (userId) => {
    const dispatch = useDispatch();
    const { data, error, isLoading, isValidating } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/public/user/${userId}/following`, fetcherWithoutAccessToken);

    useEffect(() => {
        if (data) {
            dispatch(setUserIdFollowingData(data));
        }
    }, [userId, data, dispatch]);

    return { data, error, isLoading, isValidating };
}

export const useGetUserPhotoListById = (userId) => {
    const dispatch = useDispatch();
    const { data, error, isLoading, isValidating } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/public/user/${userId}/photo-list`, fetcherWithoutAccessToken);

    useEffect(() => {
        if (data) {
            dispatch(setUserIdPhotoListData(data));
        }
    }, [userId, data, dispatch]);

    return { data, error, isLoading, isValidating };
}

export const useGetUserGroupListById = (userId) => {
    const dispatch = useDispatch();
    const { data, error, isLoading, isValidating } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/public/user/${userId}/group-list`, fetcherWithoutAccessToken);

    useEffect(() => {
        if (data) {
            dispatch(setUserIdGroupListData(data));
        }
    }, [userId, data, dispatch]);

    return { data, error, isLoading, isValidating };
}
