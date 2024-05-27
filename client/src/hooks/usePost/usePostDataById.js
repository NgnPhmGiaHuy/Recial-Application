"use client"

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useFetchAndScroll } from "@/hooks";
import { fetchDataWithAccessToken } from "@/utils";
import { useUserIdData } from "@/hooks/useUser/useUserIdData";
import { setUserPostData } from "@/store/actions/user/userActions";
import { clearUserIdPostData, setUserIdPostData } from "@/store/actions/user/userIdActions";

const usePostDataByUserId = (userId) => {
    const dispatch = useDispatch();
    const isCurrentUser = useUserIdData(userId);

    const { dataRef, data } = useFetchAndScroll(userId, (page) => fetchDataWithAccessToken(process.env.NEXT_PUBLIC_API_URL + `/api/v1/public/post/?user=${userId}&page=${page}`, "GET"));

    useEffect(() => {
        dispatch(clearUserIdPostData());

        if (data && isCurrentUser) {
            dispatch(setUserPostData({ ref: dataRef, posts: data }));
        }
        if (data && !isCurrentUser) {
            dispatch(setUserIdPostData({ ref: dataRef, posts: data }));
        }
    }, [userId, dataRef, data])


    return { dataRef, data };
};


export default usePostDataByUserId;