"use client"

import useSWR from "swr";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

import { getUserProfileData } from "@/app/api/fetchUserData";
import fetcherWithAccessToken from "@/app/api/fetcherWithAccessToken";
import { setUserContactData, setUserFollowerData, setUserFollowingData, setUserFriendData, setUserFriendRequestData, setUserGroupListData, setUserMessageData, setUserNotificationData, setUserPhotoListData, setUserProfileData, setUserSearchData, setUserSettingData } from "@/store/actions/user/userActions";

export const useUserData = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const userProps = useSelector(state  => state.user);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userProfileData = await getUserProfileData();

                if (userProfileData && !userProfileData.error) {
                    dispatch(setUserProfileData(userProfileData));
                }
            } catch (error) {
                return console.error(error);
            }
        };

        fetchData();
    }, [router, dispatch]);

    return { userProps };
};

export const useGetUserNotificationData = () => {
    const dispatch = useDispatch();
    const { data, error, isLoading, isValidating } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/secure/user/notification/`, fetcherWithAccessToken);

    useEffect(() => {
        if (data) {
            dispatch(setUserNotificationData(data))
        }
    }, [data, dispatch]);

    return { data, error, isLoading, isValidating };
}

export const useGetUserContactData = () => {
    const dispatch = useDispatch();
    const { data, error, isLoading, isValidating } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/secure/user/contact/`, fetcherWithAccessToken);

    useEffect(() => {
        if (data) {
            dispatch(setUserContactData(data))
        }
    }, [data, dispatch]);

    return { data, error, isLoading, isValidating };
}

export const useGetUserProfileData = () => {
    const dispatch = useDispatch();
    const { data, error, isLoading, isValidating } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/secure/user/profile/`, fetcherWithAccessToken);

    useEffect(() => {
        if (data) {
            dispatch(setUserProfileData(data))
        }
    }, [data, dispatch]);

    return { data, error, isLoading, isValidating };
}

export const useGetUserMessageData = () => {
    const dispatch = useDispatch();
    const { data, error, isLoading, isValidating } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/secure/user/message/`, fetcherWithAccessToken);

    useEffect(() => {
        if (data) {
            dispatch(setUserMessageData(data))
        }
    }, [data, dispatch]);

    return { data, error, isLoading, isValidating };
}

export const useGetUserSettingData = () => {
    const dispatch = useDispatch();
    const { data, error, isLoading, isValidating } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/secure/user/setting/`, fetcherWithAccessToken);

    useEffect(() => {
        if (data) {
            dispatch(setUserSettingData(data))
        }
    }, [data, dispatch]);

    return { data, error, isLoading, isValidating };
}

export const useGetUserFriendData = () => {
    const dispatch = useDispatch();
    const { data, error, isLoading, isValidating } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/secure/user/friend/`, fetcherWithAccessToken);

    useEffect(() => {
        if (data) {
            dispatch(setUserFriendData(data))
        }
    }, [data, dispatch]);

    return { data, error, isLoading, isValidating };
}

export const useGetUserSearchData = () => {
    const dispatch = useDispatch();
    const { data, error, isLoading, isValidating } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/secure/user/search/`, fetcherWithAccessToken);

    useEffect(() => {
        if (data) {
            dispatch(setUserSearchData(data));
        }
    }, [data, dispatch]);

    return { data, error, isLoading, isValidating };
}

export const useGetUserFollowingData = () => {
    const dispatch = useDispatch();
    const { data, error, isLoading, isValidating } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/secure/user/following/`, fetcherWithAccessToken);

    useEffect(() => {
        if (data) {
            dispatch(setUserFollowingData(data))
        }
    }, [data, dispatch]);

    return { data, error, isLoading, isValidating };
}

export const useGetUserFollowerData = () => {
    const dispatch = useDispatch();
    const { data, error, isLoading, isValidating } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/secure/user/follower/`, fetcherWithAccessToken);

    useEffect(() => {
        if (data) {
            dispatch(setUserFollowerData(data))
        }
    }, [data, dispatch]);

    return { data, error, isLoading, isValidating };
}

export const useGetUserPhotoListData = () => {
    const dispatch = useDispatch();
    const { data, error, isLoading, isValidating } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/secure/user/photo-list/`, fetcherWithAccessToken);

    useEffect(() => {
        if (data) {
            dispatch(setUserPhotoListData(data))
        }
    }, [data, dispatch]);

    return { data, error, isLoading, isValidating };
}

export const useGetUserGroupListData = () => {
    const dispatch = useDispatch();
    const { data, error, isLoading, isValidating } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/secure/user/group-list/`, fetcherWithAccessToken);

    useEffect(() => {
        if (data) {
            dispatch(setUserGroupListData(data))
        }
    }, [data, dispatch]);

    return { data, error, isLoading, isValidating };
}

export const useGetUserFriendRequestData = () => {
    const dispatch = useDispatch();
    const { data, error, isLoading, isValidating } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/secure/user/friend-request/`, fetcherWithAccessToken);

    useEffect(() => {
        if (data) {
            dispatch(setUserFriendRequestData(data))
        }
    }, [data, dispatch]);

    return { data, error, isLoading, isValidating };
}
